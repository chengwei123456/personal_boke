<!-- 此组件为博客页面中的正文 -->

<template>
  <div class="col-content">
    <div class="inner">
      <article class="article-list bloglist" id="LAY_bloglist">
        <section v-for="(blog, index) in blogs" class="article-item zoomIn article">
          <div class="fc-flag">置顶</div>
          <h5 class="title">
            <span class="fc-blue">【原创】</span>
            <a href="read.html"> {{blog['title']}} </a>
          </h5>
          <div class="time">
            <span class="day">{{blog["time"]|Day}}</span>
            <span class="month fs-18">{{blog["time"]|Month}}<span class="fs-14">月</span></span>
            <span class="year fs-18 ml10">{{blog["time"]|Year}}</span>
          </div>
          <div class="content">
            <div>
              <router-link :to="{name:'read',params:{id:blog['id']}}" class="cover img-light">
                <img src="http://www.lzqcode.com/images/java.jpg">
              </router-link>
            </div>

            {{blog["content"]|Interception}}
          </div>
          <div class="read-more">
            <router-link :to="{name:'read',params:{id:blog['id']}}" class="fc-black f-fwb">
              继续阅读
            </router-link>
          </div>
          <aside class="f-oh footer">
            <div class="f-fl tags">
              <span class="fa fa-tags fs-16"></span>
              <a class="tag">{{blog["tag"]}}路线</a>
              <a @click="Deleblog(blog['id'])" class="tag" id="dele">删除此博客</a>
            </div>
            <div class="f-fr">
              <span class="read">
                <i class="fa fa-eye fs-16"></i>
                <i class="num">{{blog["read"]}}</i>
              </span>
              <span class="ml20">
                <i class="fa fa-comments fs-16"></i>
                <a href="javascript:void(0)" class="num fc-grey">{{blog["message"]}}</a>
              </span>
            </div>
          </aside>
        </section>
      </article>
    </div>

  </div>

</template>
<script>
  import {
    allBlogs
  } from "../../API_axios/user"

  import {dele_Data} from "../../API_axios/user"
  export default {


    name: 'Container',
    data() {
      return {
        blogs: "",
      }
    },
    props: [
      "id",
    ],
    methods: {
      Deleblog(id){
        dele_Data({"id":id}).then(result =>{
          location.reload();
        })
      },
      goBack(){
          console.log("点击了浏览器的返回按钮");
          sessionStorage.clear();
          window.history.back();
          history.pushState(null, null, document.URL);
        },
    },
    mounted() {
      if (window.history && window.history.pushState) {
        // 向历史记录中插入了当前页
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', this.goBack, false);
      }
    },
    destroyed() {
      window.removeEventListener('popstate', this.goBack, false);
    },
    created() {
      
      if (this.id == 2) {
        allBlogs().then(result => {
          this.blogs = result.data;
        })
      }
    },
    //过滤器
    filters: {
      Interception: function (str) {
        return str.substring(0, 257)
      },

    }
  }

</script>
<style scoped>
  #dele {
    display: inline-block;
    margin-left: 10px;
    background-color: red;
    color: white;
    cursor: pointer;
  } 
</style>
