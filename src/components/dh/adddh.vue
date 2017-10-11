<template>
  <div id="addArticle">
    <form id="picform" class="form">
      <div>
        <el-input type="text" placeholder="请输入资源名称" name="title" v-model="title"></el-input>
      </div>
      <div>
        <el-input type="text" placeholder="请输入资源描述信息" name="description" v-model="description"></el-input>
      </div>
      <div>
        <el-input type="text" placeholder="请输入资源的链接" name="url" v-model="url"></el-input>
      </div>
      <div>
        <el-select v-model="selectValue" placeholder="请选择">
          <el-option
            v-for="item in selectOption"
            :key="item.idCode"
            :label="item.name"
            :value="item.idCode">
          </el-option>
        </el-select>
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


export default {
  name: 'addArticle',
  data () {
    return {
      selectValue:'',
      selectOption:[],
     	title:'',
     	description:'',
      url:'',
      articleBody:'',
      content:'请输入文章的内容...'
    }
  },
  mounted(){
    $('#app').css('background-image','none');//banner图片更改
        //请求下拉菜单data
        this.$http.get(baseUrl+'/dhnav').then(function(res){
          console.log(res);
          this.selectOption = res.body[0].data;
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
      var fd = new FormData();
      if(this.title=='' || this.description=='' || this.selectValue=='' || this.url==''){
        alert("请填写好完整信息");
        return ;
      }

      fd.append('title',this.title);
      fd.append('description',this.description);
      fd.append('selectValue',this.selectValue);
      fd.append('url',this.url);  
      //fd.append('creatTime',new Date().getTime());  
      this.$http.post(baseUrl+"/adddhcontent",fd)
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
