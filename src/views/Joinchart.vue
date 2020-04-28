<template>
    <div class="awrp">
        <timeline :timeline="schedule" :chartID="chartID"></timeline>
        <ap-chart :chartID="chartID" :chart="chart"></ap-chart>
        <button class="logout" @click="logout()">注销</button>
        <!-- <router-link :to="{name:'t'}">所发的发射点法大师傅阿松大</router-link> -->
        <!-- <t2></t2> -->
        <!-- <router-view></router-view> -->
    </div>
    <!-- <div>jfladsjf</div> -->
</template>

<script>
import t2 from "../views/test2.vue"  
export default {
    data: function () {
        return {
            schedule: [],
            chart:{},
        }
    },
    name:'Joinchart',
    props: {
        chartID:String
    },
    methods:{
        getChartByMd5:function(md5){

        },
        logout:function(){
            document.cookie = "chartID=; expires=Thu, 01 Jan 1972 00:00:00 GMT;";
            console.log(document.cookie) 
            // this.$router.replace({name:'Login',params: { action: 'join' }});
            this.$router.replace({name:'Home'});
        }
    },

    beforeMount: function () {
        // axios.get('https://a.b.com?chartID='+this.chartID)
        // 返回该社团的活动时间表数据
        this.schedule = [
                            [{'time': "2020-02-02 08:30:00"},{'name':"提交报名资料"}],
                            [{'time': "2020-02-02 08:30:00"},{'name':"提交报名资料"}],
                            [{'time': "2020-02-02 08:30:00"},{'name':"提交报名资料"}],
                            [{'time': "2020-02-02 08:30:00"},{'name':"提交报名资料"}]
                        ]
        // axios.get('https://a.b.com?chartID='+this.chartID)
        // 返回该社团的招新问卷表结构
        this.chart = {
            'header':{'value':"辩论队"},
            'body':[
                {'infoName':'姓名','infoValue':'姓名','infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'text'},
                {'infoName':'性别','infoValue':['男','女'],'infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'checkbox'},
                {'infoName':'学号','infoValue':'学号','infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'text'},
                {'infoName':'电话','infoValue':'电话','infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'text'},
                {'infoName':'学院','infoValue':'学院','infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'text'},
                {'infoName':'QQ','infoValue':'QQ','infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'text'},
                {'infoName':'笔试时间','infoValue':['aa','bb','cc'],'infoStyle':{'entireRow':true,'fontWeight':'light'},'inputType':'checkbox'},
                {'infoName':'奖项/比赛经历','infoValue':'奖项/比赛经历','infoStyle':{'entireRow':true,'fontWeight':'light'},'inputType':'textarea'},
                {'infoName':'自我介绍','infoValue':'自我介绍','infoStyle':{'entireRow':true,'fontWeight':'light'},'inputType':'textarea'},
                

            ],
            'footer':[
                'dsfasdfasdf',
                '大家发来减肥哈哈哈我和嘎哈大哥啊大哥拉回到发生的的立法和斯大林发送大量法律上的封建落后阿斯弗舒服多啦合适的方式发挥了',
                '觉得拉法基类毒素解放拉萨地方啊深度发掘建立了上的飞机啊'
            ]
        }
    },
    created:function(){
        console.log(this.chartID)
        document.cookie = "chartID="+this.chartID+";expires=2;"
        
        
    },
    components:{
        t2
    }
}
</script>
<style scoped>
   .awrp{
       width: 100%;
       height: 100%;
       padding-bottom: 10%;
   }
   .logout{
       width: 85%;
       height: 5%;
       outline: none;
       border: none;
        border-radius: 0.4rem;
       /* background-color: #578acc; */
       background-color: #98a6c2;
       color: white;
       font-size: 2rem;
       letter-spacing: 1rem;
       font-weight: 550;
       margin-bottom: 5rem;
       /* margin-bottom: ; */
   }
   .logout:hover{
       /* background-color: #cc3681; */
       background-color: #365ecc;
   }

</style>
