<template>
  <div>
      <remote-script src="static/layui/layui.js"></remote-script>
      <remote-script src="static/js/wow.min.js"></remote-script>
      <remote-script src="static/js/index.js"></remote-script>
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
  import "../../common/importJs"  
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
    
  }

</script>


<style>
  @import "../../assets/css/index_style";
  
</style>
