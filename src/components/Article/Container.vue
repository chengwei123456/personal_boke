<!-- 此组件为博客页面中的正文 -->

<template>
  <div class="col-content">
    <div class="inner">
      <article class="article-list bloglist" id="LAY_bloglist">
        <section v-for="(blog, index) in blogs" class="article-item zoomIn article">
          <!-- <div class="fc-flag">置顶</div> -->
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
                <img :src="blog['image']">
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
    allBlogs,
    dele_Data,
    get_java_blogs,
    get_web_blogs,
    get_python_blogs,
    get_php_blogs,
    get_other_blogs
  } from "../../API_axios/user"
  import bus from "../../assets/js/eventBus"
  export default {


    name: 'Container',
    data() {
      return {
        scroll: 0,
        blogs: "",
        path_blog: '',
        // 默认显示2个mysql数据
        endID: 2,
        // 博客的总数量
        count: 0,
        // 当组件创建时获取的url
        vu_create_path: '',
      }
    },
    props: [
      "id",
    ],
    methods: {

      // 保存滚动条的距离
      windowScroll() {
        // 滚动条距离页面顶部的距离
        this.scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        localStorage.setItem('scrollTop', this.scroll)
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight; //变量windowHeight是可视区的高度
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight; //变量scrollHeight是滚动条的总高度
        if (this.endID < this.count && this.vu_create_path == "/article/all") {
          if (this.scroll + windowHeight == scrollHeight) {
            this.endID = Number(this.endID) + 2
            localStorage.setItem('all', this.endID)
            this.getAllBlog()
          }
        }
      },

      // 删除博客
      Deleblog(id) {
        swal({
            title: "确定删除吗？",
            text: "你将无法恢复该虚拟文件！",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定删除！",
            cancelButtonText: "取消删除！",
            closeOnConfirm: false,
            closeOnCancel: false
          },
          function (isConfirm) {
            if (isConfirm) {
              dele_Data({
                "id": id
              }).then(result => {
                swal("删除！", "删除成功。",
                "success");
                location.reload();
              })
             
            } else {
              swal("取消！", "取消博客删除。",
                "error");
            }
          });

      },
      // 获取全部的博客
      getAllBlog() {
        this.endID = Number(localStorage.getItem('all'))
        allBlogs({
          "endID": this.endID,
        }).then(result => {
          this.blogs = result.data;
        })
      },
      //获取java博客
      getJavaBlog() {
        get_java_blogs({
          "tag": "java"
        }).then(result => {
          this.blogs = result.data
        })
      },
      getWebBlogs() {
        get_web_blogs({
          "tag": "前端"
        }).then(result => {
          this.blogs = result.data
        })
      },
      getPythonBlogs() {
        get_python_blogs({
          "tag": "Python"
        }).then(result => {
          this.blogs = result.data
        })
      },
      getPhpBlogs() {
        get_php_blogs({
          "tag": "PHP"
        }).then(result => {
          this.blogs = result.data
        })
      },
      getOtherBlogs() {
        get_other_blogs({
          "tag": '其他'
        }).then(result => {
          this.blogs = result.data
        })
      },
      goBack() {
        sessionStorage.clear();
        window.history.back();
        history.pushState(null, null, document.URL);
      },
    },
    mounted() {
      //在mounted生命周期函数注册滚动条事件
      window.addEventListener('scroll', this.windowScroll)
      if (window.history && window.history.pushState) {
        // 向历史记录中插入了当前页
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', this.goBack, false);
      };
      // 接收兄弟组件传过来的博客总数
      bus.$on('child-count', data => {
        this.count = data
      })
    },
    //实例销毁之前，解绑事件
    beforeDestroy() {
      window.removeEventListener('scroll', this.windowScroll)
    },
    destroyed() {
      window.removeEventListener('popstate', this.goBack, false);
    },

    created() {
      this.vu_create_path = window.location.pathname;
      switch (this.id.id) {
        case 'all':
          this.getAllBlog()
          break;
        case 'java':
          this.getJavaBlog()
          break;
        case "web":
          this.getWebBlogs()
          break;
        case "python":
          this.getPythonBlogs()
          break;
        case "php":
          this.getPhpBlogs()
          break;
        case "other":
          this.getOtherBlogs()
          break;
      }
    },
    //过滤器
    filters: {
      Interception: function (str) {
        return str.substring(0, 257)
      },

    },
    watch: {
      $route(to, from) {
        this.path_blog = to.path
        this.vu_create_path = to.path
        switch (this.path_blog) {
          case "/article/java":
            this.getJavaBlog()
            break;
          case "/article/all":
            this.getAllBlog()
            break;
          case "/article/web":
            this.getWebBlogs()
            break;
          case "/article/python":
            this.getPythonBlogs()
            break;
          case "/article/php":
            this.getPhpBlogs()
            break;
          case "/article/other":
            this.getOtherBlogs()
            break;
        }
      }
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
