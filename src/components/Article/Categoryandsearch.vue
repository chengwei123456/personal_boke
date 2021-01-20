<template >
    <div class="col-other">
        <remote-script src="../../../static/js/yss/article.js"></remote-script>
        <div class="inner">
            <div class="other-item" id="categoryandsearch">
                <div class="search">
                    <label class="search-wrap">
                        <input type="text" id="searchtxt" placeholder="输入关键字搜索" />
                        <span class="search-icon">
                            <i class="fa fa-search"></i>
                        </span>
                    </label>
                    <ul class="search-result"></ul>
                </div>
                <ul class="category mt20" id="category">
                    <li data-index="0" class="slider"></li>
                    <li data-index="1">
                        <router-link :to="{name:'Content',params:{classify:'all'} }">全部文章&nbsp&nbsp&nbsp({{ Count['null']?Count['null']:0}})</router-link>
                    </li>
                    <li data-index="2"><router-link :to="{name:'Content',params:{classify:'java'} }">JAVA&nbsp&nbsp&nbsp({{Count['java']?Count['java']:0}})</router-link></li>

                    <li data-index="3"><router-link :to="{name:'Content',params:{classify:'web'} }">前端&nbsp&nbsp&nbsp({{Count['前端']?Count['前端']:0}})</router-link></li>
                    <li data-index="4"><router-link :to="{name:'Content',params:{classify:'python'} }">Python&nbsp&nbsp&nbsp({{Count['Python']?Count['Python']:0}})</router-link></li>
                    <li data-index="5"><router-link :to="{name:'Content',params:{classify:'php'} }">PHP&nbsp&nbsp&nbsp({{Count['PHP']?Count['PHP']:0}})</router-link></li>
                    <li data-index="6"><router-link :to="{name:'Content',params:{classify:'other'} }">其他&nbsp&nbsp&nbsp({{Count['其他']?Count['其他']:0}})</router-link></li>
                </ul>
            </div>
            <!--右边悬浮 平板或手机设备显示-->
            <div class="category-toggle"><i class="layui-icon">&#xe603;</i></div>
            <div class="article-category">
                <div class="article-category-title">分类导航</div>
                        <a href="/Blog/Article/1/">Java</a>
                        <a href="/Blog/Article/2/">前端</a>
                        <a href="/Blog/Article/3/">Python</a>
                        <a href="/Blog/Article/4/">PHP</a>
                        <a href="/Blog/Article/5/">其它</a>
                <div class="f-cb"></div>
            </div>
            <!--遮罩-->
            <div class="blog-mask animated layui-hide"></div>
            <div class="other-item">
                <h5 class="other-item-title">热门文章</h5>
                <div class="inner">
                    <ul class="hot-list-article">
                            <li v-for="blog in Blogs">
                                <router-link :to="{name:'read',params:{id:blog['id']}}">
                                    {{blog['title']}}
                                  </router-link>
                            </li>
                    </ul>
                </div>
            </div>
            <!-- <div class="other-item">
                <h5 class="other-item-title">置顶推荐</h5>
                <div class="inner">
                    <ul class="hot-list-article">
                            <li> <a href="/Blog/Read/16">java学习路线</a></li>
                            <li> <a href="/Blog/Read/14">基于SpringBoot+JWT+Redis跨域单点登录的实现</a></li>
                            <li> <a href="/Blog/Read/9">小白轻松入门Redis</a></li>
                    </ul>
                </div>
            </div> -->
            <div class="other-item">
                <h5 class="other-item-title">最近访客</h5>
                <div class="inner">
                    <dl class="vistor">
                            <dd><a href="javasript:;"><img src="https://thirdqq.qlogo.cn/qqapp/101465933/72388EA977643E8F97111222675720B1/100"><cite>Anonymous</cite></a></dd>
                            <dd><a href="javasript:;"><img src="https://thirdqq.qlogo.cn/qqapp/101465933/342F777E313DDF5CCD6E3E707BB0770B/100"><cite>Dekstra</cite></a></dd>
                            <dd><a href="javasript:;"><img src="https://thirdqq.qlogo.cn/qqapp/101465933/EA5D00A72C0C43ECD8FC481BD274DEEC/100"><cite>惜i</cite></a></dd>
                            <dd><a href="javasript:;"><img src="https://thirdqq.qlogo.cn/qqapp/101465933/EF18CEC98150D2442183AA30F05AAD7B/100"><cite>↙Aㄨ计划 ◆莪↘</cite></a></dd>
                            <dd><a href="javasript:;"><img src="https://thirdqq.qlogo.cn/qqapp/101465933/3D8D91AD2BAFD36F5AC494DA51E270E6/100"><cite>.</cite></a></dd>
                            <dd><a href="javasript:;"><img src="https://thirdqq.qlogo.cn/qqapp/101465933/B745A110DAB712A0E6C5D0B633E905D3/100"><cite>Lambert.</cite></a></dd>
                            <dd><a href="javasript:;"><img src="https://thirdqq.qlogo.cn/qqapp/101465933/E9BA3A2499EC068B7917B9EF45C4D13C/100"><cite>64ღ</cite></a></dd>
                            <dd><a href="javasript:;"><img src="https://thirdqq.qlogo.cn/qqapp/101465933/09F92966169272DD7DD9999E709A0204/100"><cite>doBoor</cite></a></dd>
                            <dd><a href="javasript:;"><img src="https://thirdqq.qlogo.cn/qqapp/101465933/59991D53192643A1A651383847332EB6/100"><cite>毛毛小妖</cite></a></dd>
                            <dd><a href="javasript:;"><img src="https://thirdqq.qlogo.cn/qqapp/101465933/FF34F311DDC43E2AF63BE897BCA24F05/100"><cite>NULL</cite></a></dd>
                            <dd><a href="javasript:;"><img src="https://thirdqq.qlogo.cn/qqapp/101465933/59AA25A7627284AE62C8E6EBDC6FE417/100"><cite>吓一跳</cite></a></dd>
                            <dd><a href="javasript:;"><img src="https://thirdqq.qlogo.cn/qqapp/101465933/28B021E0F5AF0A4B9B781A24329FE897/100"><cite>如初</cite></a></dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import "../../common/importJs"
    import {get_blogs_count,
            read_sort
        }
    from "../../API_axios/user"

    import bus from "../../assets/js/eventBus"
export default {
    name:'Categoryandsearch',
    props:['luyou'],
    data() {
        return {
            Count:'',
            Blogs:'',
        }
    },
    created() {
        
        this.get_routing();
        var _this = this
        setTimeout(function(){
            _this.getBlogsCount();
           
        },100);

        setTimeout(function(){
            _this.readSort();
           
        },200);
        
    },
    watch: {
        'luyou': function(){
            localStorage.setItem('routing',this.luyou)
            this.luyou = localStorage.getItem('routing');
            window.num = this.luyou
            this.get_num()
        },
    },
    methods: {
        // 发送各个博客总数的请求
        getBlogsCount(){
            get_blogs_count().then(result => {
                this.Count = result.data
                // 给兄弟组件传值（博客总数）
                bus.$emit("child-count",this.Count["null"])
            })
        },
        readSort(){
            read_sort().then(result => {
                this.Blogs = result.data;
            })
        },
        //当此组件创建时获取当前路由
        get_routing(){
            localStorage.setItem('routing',this.luyou)
            this.luyou = localStorage.getItem('routing');
            window.num = this.luyou
            this.get_num()
           
        },
        // 恢复点击项的css
        get_num(){
            switch (window.num) {
                case "all":
                    window.num = 1
                    break;
            
                case "java":
                    window.num = 2
                    break;
                case "web":
                    window.num = 3
                    break;
                case "python":
                    window.num = 4
                    break;
                case "php":
                    window.num = 5
                    break;
                case "other":
                    window.num = 6
                    break;
            }
        }
    },
}
</script>
<style scoped>
    #category li {
        cursor: pointer;
    }
</style>