<template lang="">
    <div class="section" id="section2">
        <div class="fp-tablecell">
            <div class="page2">
                <div class="warp-box">
                    <div class="new-article">
                        <div class="inner wow fadeInDown" data-wow-delay=".2s">
                            <h1>博客分类</h1>
                            <p>
                                只要朝着一个方向努力
                                <br>一切都会变得得心应手
                            </p>
                        </div>
                    </div>
                    <div class="layui-row">
                        <div class="layui-col-xs12 layui-col-sm4 layui-col-md4  wow fadeInUp" style="padding: 0 10px">
                            <div class="single-news">
                                <div class="news-head">

                                    <img src="http://www.lzqcode.com/images/java.jpg">
                                    <router-link class="link" :to="{name:'Content',params:{classify:'java'} }"><i class="fa fa-link"></i></router-link>
                                </div>
                                <div class="news-content">
                                    <h4>
                                        <a href="javascript:void(0)">
                                            Java专栏
                                        </a>
                                    </h4>
                                    <div class="date">
                                        2020年6月16日
                                    </div>
                                    <p>
                                       本专栏主要分享Java的各种常见问题，包括java学习路线，java基础，框架，微服务，项目，面试题，希望通过这些知识的分享能够提升自己的java水平
                                    </p>
                                    <a href="#" class="btn">
                                        阅读更多 
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="layui-col-xs12 layui-col-sm4 layui-col-md4  wow fadeInUp" data-wow-delay=".2s" style="padding: 0 10px">
                            <div class="single-news">
                                <div class="news-head">
                                    <img src="http://www.lzqcode.com/images/web.jpg">
                                    <router-link class="link" :to="{name:'Content',params:{classify:'web'} }">
                                        <i class="fa fa-link"></i>
                                    </router-link>
                                
                                </div>
                                <div class="news-content">
                                    <h4>
                                        <a href="#">
                                           web前端专栏
                                        </a>
                                    </h4>
                                    <div class="date">
                                         2020年6月16日
                                    </div>
                                    <p>
                                        本栏目主要分享关于web前端的学习路线，基础知识，常用框架，面试题，项目等等
                                    </p>
                                    <a href="#" class="btn">
                                        阅读更多 
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="layui-col-xs12 layui-col-sm4 layui-col-md4  wow fadeInUp" data-wow-delay=".4s" style="padding: 0 10px">
                            <div class="single-news">
                                <div class="news-head">
                                    <img src="https://bkimg.cdn.bcebos.com/pic/42166d224f4a20a44623921916188f22720e0df37a90?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxNTA=,g_7,xp_5,yp_5">
                                    <router-link class="link" :to="{name:'Content',params:{classify:'python'} }">
                                        <i class="fa fa-link"></i>
                                    </router-link>
                                </div>
                                <div class="news-content">
                                    <h4>
                                        <a href="#">
                                            Python专栏
                                        </a>
                                    </h4>
                                    <div class="date">
                                        2020年6月16日
                                    </div>
                                    <p>
                                       本栏目主要介绍Python 基础知识，常用框架，面试题，项目等等
                                    </p>
                                    <a href="#" class="btn">
                                        阅读更多 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Section2'
}
</script>
<style lang="">
    
</style>