<template lang="">
    <div>
        <remote-script src="static/layui/layui.js"></remote-script>
        <remote-script src="static/js/yss/gloable.js"></remote-script>
        <remote-script src="static/js/plugins/nprogress.js"></remote-script>
        <Nav></Nav>
        <Container></Container>
        <Footer></Footer>
        <remote-script src="static/js/jquery.min.js"></remote-script>
        <remote-script src="static/js/plugins/blogbenoitboucart.min.js"></remote-script>

    </div>
</template>
<script>
    import $ from 'jquery'
    import Nav from "../../component/Nav/Nav.vue"
    import "../../common/importJs"
    import Footer from "../../component/Footer/Footer"
    import Container from "./Container"
export default {
    name: 'Link',
    components:{
        Nav,
        Container,
        Footer

    }
}
</script>
<style lang="">
    
</style>