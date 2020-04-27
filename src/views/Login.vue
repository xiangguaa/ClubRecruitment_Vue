<template>
    <div class="wrp">
      <div class="outer_label">
        <img class="login_logo" src="../assets/login.png">
      </div>
      <div class="login_form">
        <input type="text" @keyup.enter="login()"  class="passwd qxs-icon"  :placeholder="placeholder" v-model="chartID">
        <button class="login_btn" @click="login()" type="primary" round :loading="isBtnLoading">登录</button>
        <div style="margin-top: 10px">
          <span style="color: #000099;" >请谨记您的表单ID，该ID用于查询管理入团信息</span>
        </div>
      </div>
  </div>
</template>



<script>
//  import { userLogin } from '../../api/api';
import common from '../common/common.js'
 
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
            // console.log(this.action)
            // 从home进入时
            switch (this.action) {
                case 'join':
                    // console.log('join part')
                    // console.log(this.chartID)
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
                    // console.log('recruit part')
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
        // console.log(this.action)
        let chartID = common.util.getCookie("chartID");
        // console.log('Login:chartID',chartID)
        
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
  .wrp{
    /* background-color: chartreuse; */
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .login_form {
    /* background-color: chartreuse; */
    padding-top: 3%;
    padding-left: 10%;
    padding-right: 10%;
    width: 40%;
    margin: 0 auto;
    /* background-color: blueviolet; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .passwd {
    /* background: url("../assets/login.png") no-repeat; */
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;
    outline: none;
    width: 50%;
    height: 3rem;
    text-indent: 1rem;
  }
  .login_logo {
    height: 10rem;
    width: 10rem;
  }
  .login_btn {
    margin: 0;
    padding: 0;
    border: 1px solid transparent;  
    outline: none;    
    width: 51%;
    height: 3rem;
    border-radius: 2px;
    font-size: 16px;
    background-color: #25bb9b;
    color: white;
    letter-spacing: 1rem;
    font-weight: 300;
    /* filter: brightness(1.4); */
  }

</style>
