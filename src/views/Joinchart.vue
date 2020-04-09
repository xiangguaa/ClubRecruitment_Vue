<template>
    <div>
        <timeline :timeline="schedule" :clubName="clubName"></timeline>
        <ap-chart :clubName="clubName" :chart="chart"></ap-chart>
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
        clubName:String
    },

    beforeCreate: function () {
        // var aData = new Date();
        // console.log(aData) //Wed Aug 21 2019 10:00:58 GMT+0800 (中国标准时间)
        // console.log(this)
    },
    created:function(){
        console.log(this.clubName)
        // axios.get('https://a.b.com?clubName='+this.clubName)
        // 返回该社团的活动时间表数据
        this.schedule = [
                            [{'time': "2020-02-02 08:30:00"},{'name':"提交报名资料"}],
                            [{'time': "2020-02-02 08:30:00"},{'name':"提交报名资料"}],
                            [{'time': "2020-02-02 08:30:00"},{'name':"提交报名资料"}],
                            [{'time': "2020-02-02 08:30:00"},{'name':"提交报名资料"}]
                        ]
        // axios.get('https://a.b.com?clubName='+this.clubName)
        // 返回该社团的招新问卷表结构
        this.chart = {
            'header':{'value':"辩论队招新报名表"},
            'body':[
                {'infoName':'姓名','infoValue':'姓名','infoStyle':{'entireRow':false,'fontWeight':'bold'},'isCheckbox':false},
                {'infoName':'性别','infoValue':'性别','infoStyle':{'entireRow':false,'fontWeight':'bold'},'isCheckbox':false},
                {'infoName':'学号','infoValue':'学号','infoStyle':{'entireRow':false,'fontWeight':'bold'},'isCheckbox':false},
                {'infoName':'电话','infoValue':'电话','infoStyle':{'entireRow':false,'fontWeight':'bold'},'isCheckbox':false},
                {'infoName':'学院','infoValue':'学院','infoStyle':{'entireRow':false,'fontWeight':'bold'},'isCheckbox':false},
                {'infoName':'QQ','infoValue':'QQ','infoStyle':{'entireRow':false,'fontWeight':'bold'},'isCheckbox':false},
                {'infoName':'笔试时间','infoValue':['aa','bb','cc'],'infoStyle':{'entireRow':true,'fontWeight':'light'},'isCheckbox':true},
                {'infoName':'奖项/比赛经历','infoValue':'奖项/比赛经历','infoStyle':{'entireRow':true,'fontWeight':'light'},'isCheckbox':false},
                {'infoName':'自我介绍','infoValue':'自我介绍','infoStyle':{'entireRow':true,'fontWeight':'light'},'isCheckbox':false},
                

            ],
            'footer':[
                'dsfasdfasdf',
                '大家发来减肥哈哈哈我和嘎哈大哥啊大哥拉回到发生的的立法和斯大林发送大量法律上的封建落后阿斯弗舒服多啦合适的方式发挥了',
                '觉得拉法基类毒素解放拉萨地方啊深度发掘建立了上的飞机啊'
            ]
        }
        console.log(this.chart)
        console.log(this.chart.header)
    },
    components:{
        t2
    }
}
</script>
<style scoped>

</style>
