<template>
    <div>
        <timeline :timeline="schedule" :clubName="clubName"></timeline>
        <ap-chart :clubName="clubName"></ap-chart>
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
            schedule: []
        }
    },
    // data:{
    //     schedule:[]
    // },
    name:'Joinchart',
    props: {
        clubName:String
    },

    beforeCreate: function () {
        var aData = new Date();
        console.log(aData) //Wed Aug 21 2019 10:00:58 GMT+0800 (中国标准时间)
        console.log(this)
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
        this.chart = {}
    },
    components:{
        t2
    }
}
</script>
<style scoped>

</style>
