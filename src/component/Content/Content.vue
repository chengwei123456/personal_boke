<template>
  <div>
      <!-- 导航 -->
        <Nav></Nav>

       <!-- 局部js加载 -->
        <remote-script src="../../../static/layui/layui.js"></remote-script>
        <remote-script src="../../../static/js/sweetalert-dev.js"></remote-script>
        <!-- <remote-script src="../../../static/js/yss/article.js"></remote-script> -->
          <!-- 博客正文 -->
        <div class="doc-container" id="doc-container" v-if="params_data.id">
          <div class="container-fixed">
            
              <Container  v-bind:id = "params_data" ></Container>
              
              
              <Categoryandsearch  v-bind:luyou="routing"></Categoryandsearch>
              
              
          </div>
        </div>

      
        <router-view  @child-event = "getId" @child-event2 = "getId2"></router-view>
     
      <Footer></Footer>
      <remote-script src="../../../static/js/yss/gloable.js"></remote-script>
      <remote-script src="../../../static/js/plugins/nprogress.js"></remote-script>
  </div>
</template>



<script>
  import '../../common/importJs'
  import Nav from "../Nav/Nav"
  import Container from "@/components/Article/Container"
  import Categoryandsearch from "@/components/Article/Categoryandsearch"
  import Footer from "../Footer/Footer"

  export default {
    name: 'Content',
    data() {
      return {
        routing: "",
        params_data: {
          id:'1',
         
        }
      }
    },
    components: {
      Nav,
      Container,
      Categoryandsearch,
      Footer,
    },
    methods: {
        getId(id){
          if (id){
            this.params_data.id = 0;
          }
        },
        getId2(show){
          // 路由article后的地址
          this.params_data.id = show;
        },
     
        
    },
    //接收首页传过来的路由参数默认 all
    created() {
      this.params_data.id = this.$route.params.classify;
      var local_pathname = window.location.pathname
      this.routing = local_pathname.split('/')[2]
    },
    watch: {
      $route(to, from) {
        var local_pathname = to.path;
        this.routing = local_pathname.split('/')[2]
      }
    }
  }

</script>
<style >
  
</style>


