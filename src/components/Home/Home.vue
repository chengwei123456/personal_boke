<template>
  <div>
      <Menu></Menu>
      <Navgation></Navgation>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Contact></Contact>
      
  </div>
</template>

<script>
  import Menu from "./Menu.vue"
  import Navgation from "./Navgation.vue"
  import Section1 from "./Section1.vue"
  import Section2 from "./Section2.vue"
  import Section3 from "./Section3.vue"
  import Section4 from "./Section4.vue"
  import Contact from "./Contact.vue"

  export default {
    name: 'Home',
    components:{
        Menu,
        Navgation,
        Section1,
        Section2,
        Section3,
        Section4,
        Contact
    },
    methods: {
        // 引入全局js
        importJs(jspath){
            var script = document.createElement("script");
            var head = document.getElementsByTagName("head")[0];
            script.src = jspath;
            head.appendChild(script)
        }
    },
    mounted() {
        this.importJs("static/layui/layui.js");
        this.importJs("static/js/wow.min.js");
        this.importJs("static/js/index.js");
    },

  }

</script>


<style>
  @import "../../css/index_style";
  
</style>
