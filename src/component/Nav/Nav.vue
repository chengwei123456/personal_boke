<template lang="">
    <div>
        <div class="header">
        </div>
        <header class="gird-header">
            <div class="header-fixed">
                <div class="header-inner">
                    <a href="javascript:void(0)" class="header-logo" id="logo">Mr.cheng</a>
                    <nav class="nav" id="nav">
                        <ul>
                            <li>
                                <router-link to="/index" >首页</router-link>  
                            </li>
                            <li>
                                <router-link :to="{name:'Content',params:{id:2}}" >博客</router-link>
                            </li>
                            <li>
                                <router-link to="/message">写博客</router-link>
                            </li>
                            <li>
                                <router-link to="/diary">日记</router-link>
                            </li>
                            <li>
                                <router-link to="/link">友链</router-link>
                            </li>
                        </ul>
                    </nav>
                    <a href="/User/QQLogin" class="blog-user">
                        <i class="fa fa-qq"></i>
                    </a>
                    <a class="phone-menu">
                        <i></i>
                        <i></i>
                        <i></i>
                    </a>
                </div>
            </div>
        </header>
    
    </div>
</template>
<script>
export default {
    name: 'Nav',
    methods: {
        refresh(){
        
            this.$router.go(0)
        }
    },
}
</script>
<style >
  
</style>