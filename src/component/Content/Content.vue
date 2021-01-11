<template>
  <div>
      <!-- 导航 -->
        <Nav></Nav>

       <!-- 局部js加载 -->
        <remote-script src="../../../static/layui/layui.js"></remote-script>
        <remote-script src="../../../static/js/yss/gloable.js"></remote-script>
        <remote-script src="../../../static/js/plugins/nprogress.js"></remote-script>
        <remote-script src="../../../static/js/yss/article.js"></remote-script>
          <!-- 博客正文 -->
        <div class="doc-container" id="doc-container" v-if="id">
          <div class="container-fixed">
              <Container  v-bind:id = "id"></Container>
              <Categoryandsearch></Categoryandsearch>
          </div>
        </div>

      <router-view  @child-event = "getId" @child-event2 = "getId2"></router-view>

      <Footer></Footer>
     
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
        id:'1'
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
            this.id = 0;
          }
        },
        getId2(show){
          this.id = show;
        },
    },
    created() {
      this.id = this.$route.params.id;
    },
    
  
    
  }

</script>
<style >
  
</style>


