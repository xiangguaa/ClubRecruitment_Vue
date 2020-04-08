<template>
    <div class="wrp">
        <div class="club">
            <p>辩</p>
        </div>
        <div class="timeline">
            <div class="item-wrp" v-for="(activity,idx) in timeline" :key="idx">
                <div class="item">
                    {{activity}}
                    <p class="activity-name">{{activity[1].name}}</p>
                    <p class="activity-time">{{activity[0].time}}</p>
                    <div class="activity-status">已完成</div>
                </div>
                <div class="arrow">
                    <img src="../assets/arrow.png" alt="指向箭头">
                </div>

            </div>
            
        </div>

        
    </div>
</template>
<script>
    export default {
        name:'',
        data:function(){
            return {
                // itemWidth:0

            }
        },
        props: {
            timeline:Array,
            clubName:String,
        },
        created: function(){
            console.log(this.timeline)
          

        },
    }
</script>
<style scoped>
    .wrp{
        background-color: hotpink;
        width: 80%;
        height: 15rem;
        margin: 0 auto;
        position: relative;
        margin-top: 2rem;
    }
    .club{
        /* display: inline; */
        background-color: rgb(158, 89, 207);
        width: 10%;
        height: inherit;
        line-height: 15rem;
        text-align: center;
        font-size: 2rem;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-weight: bolder;
        display: inline-block;
        position: absolute;
        left: 0rem;
    }
    .club p{
        margin: 0;
        padding: 0;
    }

    .timeline{
        display: inline-block;
        position: absolute;
        right: 0rem;
        background-color: khaki;
        height: inherit;
        width: 90%;
        display: flex;
        justify-content: space-evenly;

    }

    .item-wrp{
        background-color: lightblue;
        width: 100%;
        margin-left: 1rem;
        /* width: 25%; */
        height: 100%;
        display: flex;
        /* flex-direction: column; */
        justify-content: space-evenly;
    }
    .item{
        background-color: limegreen;
        width: 80%;
    }
    .activity-name{
        font-size: 1.5rem;

    }
    .activity-time{
        font-size: 1rem;
        color: slategray;
    }
    .activity-status{
        color: blue;
    }
    .arrow{
        width: 20%;
        background-color: slateblue;
        /* text-align: center; */
        justify-content: flex-end;
        display: flex;
        align-items: center;

    }
   


</style>
