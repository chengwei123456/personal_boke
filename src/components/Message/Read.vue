<template>
  <div>
    <div v-if="loading"></div>
    <div v-else class="doc-container" id="doc-container">
      <div class="container-fixed">
        <div class="col-content" style="width:100%">
          <div class="inner">
            <article class="article-list">
              <input type="hidden" value="@Model.BlogTypeID" id="blogtypeid" />
              <section class="article-item">
                <aside class="title" style="line-height:1.5;">
                  <h4>{{blog["title"]}}</h4>
                  <p class="fc-grey fs-14">
                    <small>
                      作者：<a href="javascript:void(0)" target="_blank" class="fc-link">xxxx</a>
                    </small>
                    <small class="ml10">围观群众：<i class="readcount">{{blog["read"]}}</i></small>
                    <small class="ml10">更新于 <label>{{blog["time"]}}</label> </small>
                  </p>
                </aside>
                <div class="time mt10" style="padding-bottom:0;">
                  <span class="day">{{blog["time"]|Day}}</span>
                  <span class="month fs-18">{{blog["time"]|Month}}<small class="fs-14">月</small></span>
                  <span class="year fs-18">{{blog["time"]|Year}}</span>
                </div>
                <div class="content artiledetail" style="border-bottom: 1px solid #e1e2e0; padding-bottom: 20px;">
                  {{blog["content"]}}
                  <div class="copyright mt20">
                    <p class="f-toe fc-black">
                      非特殊说明，本文版权归 CW个人博客 所有，转载请注明出处.
                    </p>
                    <p class="f-toe">
                      本文标题：
                      <a href="javascript:void(0)" class="r-title">{{blog["title"]}}</a>
                    </p>
                    <p class="f-toe">
                      本文网址：
                      <a href="#">http://www.lzqcode.com</a>
                    </p>
                  </div>
                  <div id="aplayer" style="margin:5px 0"></div>
                  <h6>延伸阅读</h6>
                  <ol class="b-relation"></ol>
                </div>

                <div class="f-cb"></div>

                <fieldset class="layui-elem-field layui-field-title">
                  <legend>发表评论</legend>
                  <div class="layui-field-box">
                    <div class="leavemessage" style="text-align:initial">
                      <form class="layui-form blog-editor" action="">

                        <div class="layui-form-item">
                          <textarea style="resize: none;" class="layui-textarea" placeholder="请输入内容"></textarea>

                        </div>
                        <div class="layui-form-item">
                          <button class="layui-btn" lay-submit="formLeaveMessage"
                            lay-filter="formLeaveMessage">提交留言</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </fieldset>
                <ul class="blog-comment" id="blog-comment">
                  <li class="entry">
                    <div class="adiv">
                      <div>
                          <img class="headerimage"
                          src="http://qzapp.qlogo.cn/qzapp/101871412/F6CC3139FDB93B8FDEBC71C58894FD73/100"></div>
                    </div>
                    <div>
                      <div class="info rmp"><strong class="p_floor">2楼</strong>
                        <div class="nmp"><span class="nick">上瘾</span><span class="posandtime">&nbsp;2021-01-05
                            14:45:56</span></div>
                      </div>
                      <div class="comm">
                        <p>你好呀，博主</p>
                        <ul id="dedemao-upload-imglists"></ul>
                        <div class="dedemao-video-viewer" id="dedemao-video-viewer-607" style="display: none;">load the
                          player...</div>
                        <div class="dedemao-photo-viewer" style="display: none;"><img src=""></div>
                      </div>
                      <div class="zhiChi"><span class="comm_reply"><a class="s commentVote" data-type="goodfb"
                            data-id="607" href="javascript:;">支持(1)</a><a href="javascript:;" aid="5" pid="607"
                            username="上瘾">回复</a></span></div>
                    </div>
                  </li>
                </ul>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import {
    allBlogs
  } from "../../API_axios/user"
  import {
    Update_read
  } from "../../API_axios/user"
  export default {
    name: "Read",

    data() {
      return {
        id: '',
        destroy: 2,
        blog: '',
        // 等待数据获取成功
        loading: true,
        sendUrl: true,

      }
    },
    created() {
      var _this = this
      this.id = this.$route.params.id;
      // 隐藏article路由
      this.$emit("child-event", this.id)
      if (this.sendUrl) {
        allBlogs().then(result => {
          this.blog = result.data;
          this.blog.forEach(function (item) {
            if (item["id"] == _this.id) {
              _this.blog = item
            }
          })
          this.loading = false;
        })
      }

    },
    watch: {
      'blog': function (newVal, oldVal) {
        this.sendUrl = false
        if (this.blog && this.id) {

          Update_read({
            "id": this.id,
            "read": this.blog["read"]
          }).then(result => {
            this.sendUrl = true
          })
        }
      }
    },
    destroyed() {
      // 显示article路由
      this.$emit("child-event2", this.destroy)


    },



  }

</script>
<style scoped>
  @import url("../../css/blog.css");
  #blog-comment li {
      text-indent: 0;
  }
  #blog-comment li.entry {
      width: 100%;
      padding-bottom: 5px;
      font-family: 'Microsoft Yahei';
      font-weight: 400;
      border-top: 1px #fff solid;
      border-bottom: 1px #6bc30d dotted;
      overflow: hidden;
      font-size: 14px;
      line-height: 24px;
  }
  #blog-comment li.entry .adiv {
      float: left;
  }
  #blog-comment .headerimage{
      display: inline-block;
      background: #F8F8F8;
      border-radius: 50%;
      float: left;
      overflow: hidden;
      opacity: 1;
      margin: 5px 10px 0 13px;
  }
  #blog-comment .nick {
    color: #01aaed;
    padding-right: 6px;
    font-size: 14px;
  }

  @media screen and (max-width: 901px) {
    #blog-comment .headerimage {
        width: 30px !important;
        height: 30px !important;
    }
  }
  #blog-comment .info {
    padding: 10px 0 0 0;
    font-size: 12px;
    color: #888;
    border: none;
  }
  #blog-comment li strong.p_floor {
    color: #888;
    float: right;
  }
  #blog-comment .entry .comm {
      margin-left: 54px;
  }
  #blog-comment .entry .comm p {
    text-indent: 0;
    margin: 0;
    padding: 15px 0 0 0;
  }
  #blog-comment .zhiChi {
    position: relative;
    float: right;
    padding-bottom: 10px;
    width: 100%;
  }
  #blog-comment li.entry span.comm_reply {
    float: right;
    padding-top: 5px;
    font-size: 12px;
    color: #aaa;
  }
  #blog-comment .comm_reply .s{
    color: #28bd98;
    margin-right: 30px;
  }
  #blog-comment .comm_reply a {
      color: #777;
  }
</style>
