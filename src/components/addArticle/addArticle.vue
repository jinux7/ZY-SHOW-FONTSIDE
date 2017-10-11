<template>
  <div id="addArticle">
    <form id="picform" class="form">
      <div>
        <el-input type="text" placeholder="请输入文章标题" name="title" v-model="title"></el-input>
      </div>
      <div>
        <el-input type="text" placeholder="请输入文章描述信息" name="description" v-model="description"></el-input>
      </div>
      <div>
        <input type="file" name="picture" id="picture" />
      </div>
      <div>
        <el-select v-model="selectValue" placeholder="请选择">
          <el-option
            v-for="item in selectOption"
            :key="item.code"
            :label="item.title"
            :value="item.code">
          </el-option>
        </el-select>
      </div>
      <div>
        <editor :content="content" @change="updateData"></editor>
      </div>
      <span class="btn" v-on:click.stop="goback">返回</span>
      <span class="btn" v-on:click.stop="tijiao">提交</span>
    </form>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
var baseUrl = require('../global/global.js').baseUrl;
import VueHtml5Editor from 'vue-html5-editor';
var editor = new VueHtml5Editor({
    // 全局组件名称，使用new VueHtml5Editor(options)时该选项无效 
    // global component name
    name: "vue-html5-editor",
    // 是否显示模块名称，开启的话会在工具栏的图标后台直接显示名称
    // if set true,will append module name to toolbar after icon
    showModuleName: false,
    // 自定义各个图标的class，默认使用的是font-awesome提供的图标
    // custom icon class of built-in modules,default using font-awesome
    icons: {
        text: "fa fa-pencil",
        color: "fa fa-paint-brush",
        font: "fa fa-font",
        align: "fa fa-align-justify",
        list: "fa fa-list",
        link: "fa fa-chain",
        unlink: "fa fa-chain-broken",
        tabulation: "fa fa-table",
        image: "fa fa-file-image-o",
        hr: "fa fa-minus",
        eraser: "fa fa-eraser",
        undo: "fa-undo fa",
        "full-screen": "fa fa-arrows-alt",
        info: "fa fa-info",
    },
    // 配置图片模块
    // config image module
    image: {
        // 文件最大体积，单位字节  max file size
        sizeLimit: 512 * 1024,
        // 上传参数,默认把图片转为base64而不上传
        // upload config,default null and convert image to base64
        upload: {
            url: 'http:127.0.0.1:3030/jjj',
            headers: {},
            params: {},
            fieldName: {}
        },
        // 压缩参数,默认使用localResizeIMG进行压缩,设置为null禁止压缩
        // compression config,default resize image by localResizeIMG (https://github.com/think2011/localResizeIMG)
        // set null to disable compression
        compress: {
            width: 1600,
            height: 1600,
            quality: 80
        },
        // 响应数据处理,最终返回图片链接
        // handle response data，return image url
        uploadHandler(responseText){
            //default accept json data like  {ok:false,msg:"unexpected"} or {ok:true,data:"image url"}
            var json = JSON.parse(responseText)
            if (!json.ok) {
                alert(json.msg)
            } else {
                return json.data
            }
        }
    },
    // 语言，内建的有英文（en-us）和中文（zh-cn）
    //default en-us, en-us and zh-cn are built-in
    language: "zh-cn",
    // 自定义语言
    i18n: {
        //specify your language here
        "zh-cn": {
            "align": "对齐方式",
            "image": "图片",
            "list": "列表",
            "link": "链接",
            "unlink": "去除链接",
            "table": "表格",
            "font": "文字",
            "full screen": "全屏",
            "text": "排版",
            "eraser": "格式清除",
            "info": "关于",
            "color": "颜色",
            "please enter a url": "请输入地址",
            "create link": "创建链接",
            "bold": "加粗",
            "italic": "倾斜",
            "underline": "下划线",
            "strike through": "删除线",
            "subscript": "上标",
            "superscript": "下标",
            "heading": "标题",
            "font name": "字体",
            "font size": "文字大小",
            "left justify": "左对齐",
            "center justify": "居中",
            "right justify": "右对齐",
            "ordered list": "有序列表",
            "unordered list": "无序列表",
            "fore color": "前景色",
            "background color": "背景色",
            "row count": "行数",
            "column count": "列数",
            "save": "确定",
            "upload": "上传",
            "progress": "进度",
            "unknown": "未知",
            "please wait": "请稍等",
            "error": "错误",
            "abort": "中断",
            "reset": "重置"
        }
    },
    // 隐藏不想要显示出来的模块
    // the modules you don't want
    hiddenModules: ["list","link","unlink","hr","full-screen","info"],
    // 自定义要显示的模块，并控制顺序
    // keep only the modules you want and customize the order.
    // can be used with hiddenModules together
    visibleModules: [
        "text",
        "color",
        "font",
        "align",
        "list",
        "link",
        "unlink",
        "tabulation",
        "image",
        "hr",
        "eraser",
        "undo",
        "full-screen",
        "info",
    ],
    // 扩展模块，具体可以参考examples或查看源码
    // extended modules
    modules: {
        //omit,reference to source code of build-in modules
    }
});

export default {
  name: 'addArticle',
  data () {
    return {
      selectValue:'',
      selectOption:[],
     	title:'',
     	description:'',
      articleBody:'',
      content:'请输入文章的内容...'
    }
  },
  mounted(){
    $('#app').css('background-image','none');//banner图片更改
        //请求下拉菜单data
        this.$http.get(baseUrl+'/articleClasses').then(function(res){
          this.selectOption = res.body.slice(1);
        });
  },
  methods : {
    updateData(data){
      this.articleBody = data;
    },
  	goback(){
  		this.$router.push({ path: '/' });
  	},
  	tijiao(){   
      var picture = document.getElementById('picture');
      var fd = new FormData();
      if(picture.files==null || this.title=='' || this.description=='' || this.selectValue=='' || this.articleBody=='' ){
        alert("选择图，填写好内容！！！");
        return ;
      }
      //判断文件后缀名和大小
      if(picture.files[0]){
         var houz = /\.[^\.]+$/.exec(picture.files[0].name);
         var size = picture.files[0].size; 
      }
      if(houz!='.jpg' && houz!='.png' && houz!='.gif' ){
        alert('请上传图片格式的文件');
        return ;
      }
      if(size > 4194304){
        alert("嘿，您上传的图片太他吗大了，小于4M的哦！！！");
        return ;
      }


      fd.append('title',this.title);
      fd.append('description',this.description);
      fd.append('selectValue',this.selectValue);  
      fd.append('picture',picture.files[0]); 
      fd.append('creatTime',new Date().getTime());  
      fd.append('articleBody',this.articleBody);
      this.$http.post(baseUrl+"/articles",fd)
      .then(function(res){
        if(res.body === 'ok'){
          this.$router.push({ path: '/' })
        }
      },function(err){
        console.log(err);
      });
  	}
  },
  components:{
      editor
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #addArticle {
    margin-top: 60px;
  }
	.form {
		overflow: hidden;
		padding: 10px 20px;
    font-family: "microsoft yahei";
	}
	.form > div {
		padding: 5px 10px;
		text-align: left;
	}
	.form > div > input {
		line-height: 30px;
		color: gray;
	    width: 100%;
	    border-radius: 3px;
	    border: 1px solid gray;
	    padding-left: 5px;
	    box-sizing:border-box;
      font-family: "Microsoft Yahei";
	}
	.form span.btn {
		margin-top: 10px;
		padding: 10px 20px;
		background-color: gray;
		border:none;
		border-radius: 3px;
		color: #ffffff;
		cursor: pointer;
		float: right;
		margin-right: 10px;
	}
  textarea {
    width: 99.5%;
    resize: none;
    color: gray;
      width: 100%;
      border-radius: 3px;
      border: 1px solid gray;
      padding-left: 5px;
      box-sizing:border-box;
      height: 150px;
  }
  .el-select {
    width: 100%;
  }
  .el-input__inner {
    font-family: "Microsoft Yahei";
  }
  input[type="button"] {
    font-family: "Microsoft Yahei" !important;
  }
  
</style>
