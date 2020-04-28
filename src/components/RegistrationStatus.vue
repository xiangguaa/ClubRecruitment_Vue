<template>
    <div class="wrp">
        <div class="content-wrp">
            <div class="title"><h1>报名信息</h1></div>
            <div class="pannel">
                <div class="person" :to="{ name: 'PersonDetail', params: { id:idx,personData:item }}" v-for="(item,idx) in registration" :key="idx" @click="navigate(item.id,idx)">
                    <h3>{{item.name}}</h3>
                    <h3>{{item.school}}</h3>
                    <h3>{{item.phone}}</h3>
                </div>
            </div>
            <!-- <div class="retur"></div> -->
            <router-view v-if="isShowRouterview" :key="tmpKey"></router-view>
        </div>
        
        <!-- <keep-alive v-if="!$route.meta.noKeepAlive">
            <router-view></router-view>
        </keep-alive>
        <router-view v-if="$route.meta.noKeepAlive"></router-view> -->
    </div>
</template>
<script>
export default {
  name:'',
  data:function(){
      return {
          tmpKey:null,
          isShowRouterview:false,
          registration:[
              {'name':'zs','id':'201722123123','ratio':'M','school':'软件学院','qq':'132131231212','writtenTest':'2020:12:20T19:30','phone':'181231212331','awards':'家乐福进阿里简单快捷flaw饥饿疗法骄傲无力反击了几分俩杰弗里我就二分我房里娃儿分类安慰覅浪费我饥饿疗法瓦洛夫法律纠纷拉我姐夫','selfIntro':'立法会拉回发和无法安慰和非为为放开我啊发生的士大夫啊非为为放开我啊发生的士大夫啊非为为放开我啊发生的士大夫啊非为为放开我啊发生的士大夫啊非为为我啊发生的士大夫啊非为为放开我啊发生的士大夫啊非为为我啊发生的士大夫啊非为为放开我啊发生的士大夫啊非为为我啊发生的士大夫啊非为为放开我啊发生的士大夫啊非为为我啊发生的士大夫啊非为为放开我啊发生的士大夫啊非为为我啊发生的士大夫啊非为为放开我啊发生的士大夫啊非为为放开我啊发生的士大夫啊非为为放开我啊发生的士大夫啊手动阀手动阀手动阀而非哈克我发哈为合法卡位回复后可见我分开后违法和开挖合肥啊我喝咖啡华为开发和为客户反馈为合法喝完咖啡和无可厚非客户反馈为合法我和方可恢复何况我分可凡和我客服 '},
              {'name':'zs','id':'2017221233','ratio':'M','school':'软件学院','qq':'132131231212','writtenTest':'2020:12:20T19:30','phone':'181231212331','awards':'家乐福进阿里简单快捷flaw饥饿疗法骄傲无力反击了几分俩杰弗里我就二分我房里娃儿分类安慰覅浪费我饥饿疗法瓦洛夫法律纠纷拉我姐夫','selfIntro':'立法会拉回发和无法安慰和非为为放开我而非哈克我发哈为合法卡位回复后可见我分开后违法和开挖合肥啊我喝咖啡华为开发和为客户反馈为合法喝完咖啡和无可厚非客户反馈为合法我和方可恢复何况我分可凡和我客服 '},
              {'name':'zs','id':'20172212123','ratio':'M','school':'软件学院','qq':'132131231212','writtenTest':'2020:12:20T19:30','phone':'181231212331','awards':'家乐福进阿里简单快捷flaw饥饿疗法骄傲无力反击了几分俩杰弗里我就二分我房里娃儿分类安慰覅浪费我饥饿疗法瓦洛夫法律纠纷拉我姐夫','selfIntro':'立法会拉回发和无法安慰和非为为放开我而非哈克我发哈为合法卡位回复后可见我分开后违法和开挖合肥啊我喝咖啡华为开发和为客户反馈为合法喝完咖啡和无可厚非客户反馈为合法我和方可恢复何况我分可凡和我客服 '},
              {'name':'zs','id':'20172213123','ratio':'M','school':'软件学院','qq':'132131231212','writtenTest':'2020:12:20T19:30','phone':'181231212331','awards':'家乐福进阿里简单快捷flaw饥饿疗法骄傲无力反击了几分俩杰弗里我就二分我房里娃儿分类安慰覅浪费我饥饿疗法瓦洛夫法律纠纷拉我姐夫','selfIntro':'立法会拉回发和无法安慰和非为为放开我而非哈克我发哈为合法卡位回复后可见我分开后违法和开挖合肥啊我喝咖啡华为开发和为客户反馈为合法喝完咖啡和无可厚非客户反馈为合法我和方可恢复何况我分可凡和我客服 '},
              {'name':'zs','id':'72223123','ratio':'M','school':'软件学院','qq':'132131231212','writtenTest':'2020:12:20T19:30','phone':'181231212331','awards':'家乐福进阿里简单快捷flaw饥饿疗法骄傲无力反击了几分俩杰弗里我就二分我房里娃儿分类安慰覅浪费我饥饿疗法瓦洛夫法律纠纷拉我姐夫','selfIntro':'立法会拉回发和无法安慰和非为为放开我而非哈克我发哈为合法卡位回复后可见我分开后违法和开挖合肥啊我喝咖啡华为开发和为客户反馈为合法喝完咖啡和无可厚非客户反馈为合法我和方可恢复何况我分可凡和我客服 '},
              {'name':'zs','id':'1722123123','ratio':'M','school':'软件学院','qq':'132131231212','writtenTest':'2020:12:20T19:30','phone':'181231212331','awards':'家乐福进阿里简单快捷flaw饥饿疗法骄傲无力反击了几分俩杰弗里我就二分我房里娃儿分类安慰覅浪费我饥饿疗法瓦洛夫法律纠纷拉我姐夫','selfIntro':'立法会拉回发和无法安慰和非为为放开我而非哈克我发哈为合法卡位回复后可见我分开后违法和开挖合肥啊我喝咖啡华为开发和为客户反馈为合法喝完咖啡和无可厚非客户反馈为合法我和方可恢复何况我分可凡和我客服 '},
              {'name':'zs','id':'0172123123','ratio':'M','school':'软件学院','qq':'132131231212','writtenTest':'2020:12:20T19:30','phone':'181231212331','awards':'家乐福进阿里简单快捷flaw饥饿疗法骄傲无力反击了几分俩杰弗里我就二分我房里娃儿分类安慰覅浪费我饥饿疗法瓦洛夫法律纠纷拉我姐夫','selfIntro':'立法会拉回发和无法安慰和非为为放开我而非哈克我发哈为合法卡位回复后可见我分开后违法和开挖合肥啊我喝咖啡华为开发和为客户反馈为合法喝完咖啡和无可厚非客户反馈为合法我和方可恢复何况我分可凡和我客服 '},
              
          ],
      }
  },
  beforeCreate:function(){
    //   console.log(this.$router)
    // 根据8位数chartID，查询数据库中的报名信息。
    // 存储在registration中。
  },
  methods:{
      navigate(id,idx){
          this.isShowRouterview = true;
        //   console.log(idx)
        //   console.log(this.registration[idx])
          this.tmpKey = idx;
          this.$router.push({name:'PersonDetail',params:{id:this.registration[idx].id,personData:this.registration[idx]}})
        //   console.log(this.$route)

      }
  },
  created:function(){
  },

}
</script>
<style scoped>
    .wrp{
    }
    .content-wrp{
        width: 90%;
        height: 90%;
        /* background-color: burlywood; */
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: start;
        box-shadow: #566d97 0 0 20px;
        border: 1px solid #cad9ea;
    }
    .title{
        /* background-color: beige; */
        width: 100%;
        padding: 1rem;
        height: 5%;
    }
    .title h1{
        /* text-align: center; */
        width: 10%;
        margin: auto;
        /* background-color: aquamarine; */
        /* margin-left: 1rem; */
    }
    .pannel{
        width: 100%;
        height: fit-content;
        /* background-color: rgb(135, 135, 211); */
        display: flex;
        justify-content: start;
        flex-flow: wrap;
        padding-top: 2%;
    }
    .person{
        width: 30%;
        margin: 1.5%;
        height: fit-content;
        /* background-color: brown; */
        border: 1px solid #cad9ea;
        border-radius: 0.5rem;
        background-color: #cce9ec;
        /* display: flex;/ */
        /* align-items: center; */
        /* justify-content: center; */
    }
    .person:hover{
        background-color: #899ec2;
        cursor: crosshair;
    }
    .person h3{
        /* background-color: chartreuse; */
    }

</style>
