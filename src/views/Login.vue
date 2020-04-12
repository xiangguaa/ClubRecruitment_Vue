<template>
    <div>
    <div class="outer_label">
      <img class="inner_label login_logo" src="../assets/logo.png">
    </div>
    <div class="login_form">
      <input type="text" @keyup.enter="login()"  class="qxs-ic_password qxs-icon"  :placeholder="placeholder" v-model="chartID">
      <button class="login_btn" @click="login()" type="primary" round :loading="isBtnLoading">登录</button>
      <div style="margin-top: 10px">
        <span style="color: #000099;" >请谨记您的表单ID，该ID用于查询管理入团信息</span>
      </div>
    </div>
  </div>
</template>



<script>
//  import { userLogin } from '../../api/api';
 
  export default {
    props:{
        action:String
    },
    data() {
      return {
        passwd: '',
        chartID: '',
        isBtnLoading: false,
        token:'',
        role:null,
        placeholder:'',
      }
    },
    computed: {
      btnText() {
        if (this.isBtnLoading) return '登录中...';
        return '登录';
      }
    },
    methods: {
        getCookie:function (name) {
            var arr;
            var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        },
        // 当action位join时，查询填写的md5的chartID是否在数据库中有对应原始chartID
        // 有则正常登陆，无则提示错误
        checkMD5Exist:function(md5){
            // 数据库请求，返回true | false
            // 
            // 
            return true
        },
        // 若action为recruit，且填写chartID在数据库中无重复
        // 则在数据库和cookie中新添加 原始ID-md5(原始ID) 关系表
        addIdMd5Relat:function(chartID){
            document.cookie = "chartID="+this.chartID+";expires=2;"
            // 计算MD5
            // 插入数据库信息
        },

        login() {
            console.log(this.action)
            // 从home进入时
            switch (this.action) {
                case 'join':
                    console.log('join part')
                    console.log(this.chartID)
                    if (!this.chartID || this.chartID.length != 16) {
                        alert("ID格式错误！")
                        return;
                    }else{
                        if(this.checkMD5Exist(this.chartID)){
                            document.cookie = "chartID="+this.chartID+";expires=2;"
                            this.$router.push('/joinchart/'+this.chartID);
                        }else{
                            alert("数据库不中存在该ID，请检查ID是否正确")
                        }
                    }
                    
                    break;
                case 'recruit':
                    console.log('recruit part')
                    if (!this.chartID || this.chartID.length != 8) {
                        alert("ID格式错误！")
                        return;
                    }else{
                        this.addIdMd5Relat(this.chartID);
                        alert("登陆成功，请记住您的登陆表单ID")
                        this.$router.push('/recruitchart/'+this.chartID);
                    }
                    break;            
                default:
                    break;
            }

            

            
        }
    },
    
    created:function(){
        console.log(this.action)
        let chartID = this.getCookie("chartID");
        console.log('Login:chartID',chartID)
        
        switch (this.action) {
            case 'join':
                this.placeholder = "您得到的的表单ID(16位小写字母)"
                if(chartID != null  && chartID.length == 16){
                    this.$router.push('/joinchart/'+chartID);
                }
                break;
            case 'recruit':
                this.placeholder = "表单ID(任意8位数字)"
                
                if(chartID != null && chartID.length == 8){
                    this.$router.push('/recruitchart/'+chartID);
                }
                break;            
            default:
                this.$router.replace('/');
                break;
        }

    },
  }
</script>



<style scoped>
    .login_form {
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
  }
  .qxs-ic_user {
    background: url("../assets/logo.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
  }
  .qxs-ic_password {
    background: url("../assets/logo.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;
  }
  .login_logo {
    height: 100%;
  }
  .login_btn {
    width: 100%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #000099, #2154FA); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #000099, #2154FA); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #000099, #2154FA); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #000099 , #2154FA); /* 标准的语法 */
    filter: brightness(1.4);
  }

</style>
