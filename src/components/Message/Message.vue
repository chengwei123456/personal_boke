<template>
    <div>
        <Nav></Nav>
        <TextareaWrap></TextareaWrap>
        <Footer></Footer>
    </div>
</template>
<script>
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
    methods: {
        // 引入全局js
        importJs(Jspath){
            var script = document.createElement("script");
            var head = document.getElementsByTagName("head")[0];
            script.src = Jspath;
            head.appendChild(script)
        },
    },
  
    mounted() {
        this.importJs("static/layui/layui.js");
        this.importJs("static/js/yss/gloable.js");
        this.importJs("static/js/plugins/nprogress.js")
        this.importJs("static/js/pagemessage.js")
        
    },
}
</script>
<style>
    
</style>