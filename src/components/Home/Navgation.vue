<template lang="">
        <div id="navgation" class="navgation navgation_close">
            <ul class="point">
              <li> <router-link to="/index">首页</router-link> </li>
              <li> <router-link :to="{name:'Content',params:{classify:'all'}}">博客</router-link> </li>
              <li> <router-link to="/message">写博客</router-link> </li>
            </ul>
            <div class="logo"><a>Mr.cheng</a></div>
          </div>
</template>
<script>
export default {
    name: 'Navgation'
}
</script>
<style lang="">
    
</style>