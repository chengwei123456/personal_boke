<template lang="">
    <div class="section" id="section1">
        <div class="fp-tablecell">
          <div class="page1">
            <div class="nav1 wow zoomIn" data-wow-duration="2s">
              <h1>CW-Blog</h1>
              <p>只要朝着一个方向努力，一切都会变得得心应手</p>

                  <router-link :to="{name:'Content',params:{classify:'all'}}" style="margin-top: 20px" class="layui-btn layui-btn-normal">
                    Enter Blog
                  </router-link>
                  
            </div>
            <a class="next wow fadeInUp" data-wow-duration="2s" id="next"></a>
          </div>
        </div>
      </div>
</template>
<script>
export default {
    name:'Section1'
}
</script>
<style scoped>
    
</style>