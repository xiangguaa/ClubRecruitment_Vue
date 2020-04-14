<template>
    <div class="wrp">
        <div class="title"><h1>个人信息</h1></div>
        <div class="detail" >
            <div class="info" v-for="(item,name,idx) in personData" :key="idx">
                <p class="info-title"> {{name.toUpperCase()}}</p>
                <p class="info-content">{{item}}</p>
            </div>
            
        </div>
        <!-- <div > -->
            <img class="back" @click="back()" src="../assets/logo.png" alt="返回">
        <!-- </div> -->
    </div>
</template>
<script>
export default {
  name:'',
  props:{
      id:String,
      personData:Object
  },
  methods:{
      back(){
          this.$router.replace({name:'RegistrationStatus'})
      }
  },
  beforeCreate:function(){
    //   console.log("before created");
  },
  created(){

    //   console.log(this.personData)
  },
  mounted(){
    //   console.log('mounteed');
  }
  
}
</script>
<style scoped>
    .wrp{
        width: 100%;
        height: 100%;
        background-color: rgb(145, 131, 131);
        display: flex;
        flex-direction: column;
        justify-content: start;
    }
    .title{
        background-color: beige;
        width: 100%;
        height: 5%;
    }
    .detail{
        width: 100%;
        height: fit-content;
        /* background-color: rgb(158, 17, 146); */
        display: flex;
        justify-content: start;
        flex-flow: wrap;
        padding-top: 2%;
    }
    .info{
        background-color: cornflowerblue;
        height: fit-content;
        min-height: 4rem;
        margin: 1.666rem;
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .info-title{
        font-weight: bolder;
    }
    .info-content{
        margin-top: 0.5rem;
    }
    .back{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        position: fixed;
        right: 2rem;
        bottom: 2rem;
        background-color: darkkhaki;
        outline:none;
    }
    .back:hover{
        background-color: darkgrey;
    }
    


</style>
