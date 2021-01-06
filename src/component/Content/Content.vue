<template>
  <div>
      <!-- 导航 -->
        <Nav></Nav>
       
        <!-- 博客正文 -->
        <div class="doc-container" id="doc-container" v-if="id">
          <div class="container-fixed">
              <Container v-bind:id = "id"></Container>
              <Categoryandsearch></Categoryandsearch>
          </div>
      </div>

      <router-view  @child-event = "getId" @child-event2 = "getId2"></router-view>

     
      <Footer></Footer>
     
  </div>
</template>
<script>
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
        // 引入全局js
        importJs(Jspath){
            var script = document.createElement("script");
            var head = document.getElementsByTagName("head")[0];
            script.src = Jspath;
            head.appendChild(script)
        },
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
    
  
    mounted() {
        this.importJs("static/layui/layui.js");
        this.importJs("static/js/yss/gloable.js");
        this.importJs("static/js/plugins/nprogress.js")
        this.importJs("static/js/yss/article.js")
        
    },
  }

</script>
<style >
  
</style>


