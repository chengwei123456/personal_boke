<template>
  <div>
    <div class="doc-container" id="doc-container">
      <div class="container-fixed">
        <div class="container-inner">
          <section class="msg-remark">
            <h1>编辑版</h1>
            <p>
              随便写点啥吧！
            </p>
          </section>
          <div class="textarea-wrap message" >
            <div class="layui-form-item">
                
                <input  v-model="title" ref="getValue" id="title" type="text" class="input_title" autocomplete="off" placeholder="请输入编写文章的标题"/>
               
                <textarea ref="getTextValue" class="layui-textarea" placeholder="请输入内容"></textarea>
                <div class="layui-form-item">
                    <button @click="Sendblog()" class="layui-btn" lay-submit="formLeaveMessage" lay-filter="formLeaveMessage">发布博客</button>
                   
                    <select class="tags right" ref="getSelect">
                        <option>java</option>
                        <option>前端</option>
                        <option>Python</option>
                        <option>PHP</option>
                        <option>其他</option>
                    </select>
                    <a class="layui-btn right"> 文章标签</a>
                   
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
    name: "TextareaWrap",
    data() {
        return {
            title: '',
            content: '',
            tag: '',
        }
    },
  
    methods: {
         // 引入全局js
         importJs(Jspath){
            var script = document.createElement("script");
            var head = document.getElementsByTagName("head")[0];
            script.src = Jspath;
            head.appendChild(script)
        },
        Sendblog(){

            this.title = this.$refs.getValue.value;
            this.content = this.$refs.getTextValue.value;
            this.tag = this.$refs.getSelect.value;
            if (this.title.trim().length > 0 && this.content.trim().length > 0) {
                this.$axios({
                method: 'post',
                url: 'http://127.0.0.1:80/insert',
                data: {'title':this.title, 'content':this.content, 'tag':this.tag}
            }).then((response) => {
                swal('发布成功',"" ,"success")
            })
            }else {
                swal('请在标题或者内容中书写内容')
            }

      
        }
    },
    
  }

</script>
<style scoped>
  @import "../../assets/css/message.css";
  
 

  .input_title {
    border: 1px solid #E6E6E6;
    border-radius: 2px;
    background-color: #fff;
    margin-bottom: 20px;
    width: 100%;
    min-height: 40px;
    color: red;
    text-align: center;
  }
  .layui-textarea {
      min-height: 500px;
      resize: none;
      margin-bottom: 10px;
  }
 .tags {
    display: inline-block;
    height: 38px;
    padding: 0 18px;
    background-color: #009688;
    color: #fff;
    white-space: nowrap;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    vertical-align: bottom;
   
 }
 .right {
     float: right;
     margin-right: 20px;
 }
</style>
