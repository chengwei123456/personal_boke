<template>
    <div>
        <remote-script src="../../../static/layui/layui.js"></remote-script>
        <remote-script src="../../../static/js/yss/gloable.js"></remote-script>
        <remote-script src="../../../static/js/sweetalert-dev.js"></remote-script>
        <Nav></Nav>
        <TextareaWrap></TextareaWrap>
        <Footer></Footer>
    </div>
</template>
<script>
import "../../common/importJs"
import Nav from "../../component/Nav/Nav"
import TextareaWrap from "./TextareaWrap"
import Footer from "../../component/Footer/Footer"
export default {
    name:"Message",
    components:{
        Nav,
        TextareaWrap,
        Footer
    },
   
}
</script>
<style>
    
</style>