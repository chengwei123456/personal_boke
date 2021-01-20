<template>
    <div>
        <remote-script src="../../../static/layui/layui.js"></remote-script>
        <remote-script src="../../../static/js/yss/gloable.js"></remote-script>
        <remote-script src="../../../static/js/plugins/nprogress.js"></remote-script>
        <Nav></Nav>
        <Container></Container>
        <Footer></Footer>
    </div>
</template>
<script>

import Nav from "../../component/Nav/Nav.vue"
import "../../common/importJs"
import Container from "./Container"
import Footer from "../../component/Footer/Footer"
export default {
    name:'Diary',
    components:{
        Nav,
        Container,
        Footer
    }
}
</script>
<style scoped>
    
</style>