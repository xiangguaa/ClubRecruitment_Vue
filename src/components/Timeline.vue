<template>
    <div class="wrp">
        <div class="club">
            <p>辩</p>
        </div>
        <div class="timeline">
            <div class="item-wrp" v-for="(activity,idx) in timeline" :key="idx">
                <div class="item">
                    <!-- {{activity}} -->
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
            chartID:String,
        },
        created: function(){
            // console.log(this.timeline)
          

        },
    }
</script>
<style scoped>
    .wrp{
        background-color: #bdc8c9;
        width: 80%;
        height: 15rem;
        margin: 0 auto;
        position: relative;
        margin-top: 2rem;
        border-radius: 0 2rem 0 2rem;
        border: 1px solid #cad9ea;
    }
    .club{
        /* display: inline; */
        border-radius: 0 0 0 2rem;
        /* background-color: rgb(158, 89, 207); */
        width: 10%;
        height: inherit;
        line-height: 15rem;
        text-align: center;
        font-size: 4rem;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-weight: bolder;
        display: inline-block;
        position: absolute;
        left: 0rem;
    }
    .club p{
        margin: 0;
        padding: 0;
        /* background-color: tomato; */
        filter: blur(0.5px);

    }

    .timeline{
        display: inline-block;
        position: absolute;
        right: 0rem;
        /* background-color: #D4E599; */
        height: inherit;
        width: 90%;
        display: flex;
        justify-content: space-evenly;
        border-radius: 0 2rem 0 0;
        
    }

    .item-wrp{
        /* background-color: lightblue; */
        width: 100%;
        margin-left: 1rem;
        /* width: 25%; */
        height: 100%;
        display: flex;
        /* flex-direction: column; */
        justify-content: space-evenly;
    }
    .item-wrp:last-child{
        /* background-color: lightcoral; */
        border-radius: 0 2rem 0 0;
    }
    .item-wrp:last-child .arrow{
        visibility: hidden;
    }
    .item{
        filter: brightness(1.2);
        /* background-color: #86c976; */
         background-color: #98a6c2;
         filter: opacity(80%);
        filter: grayscale(0.2);
        border-radius: 0.7rem;
        width: 80%;
        /* height: fit-content; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    .activity-name{
        font-size: 1.5rem;
        color: white;

    }
    .activity-time{
        font-size: 1rem;
        color: rgb(0, 0, 0);
    }
    .activity-status{
        color: blue;
        font-size: 1.3rem;
        font-weight: 600;
    }
    .arrow{
        width: 20%;
        /* background-color: slateblue; */
        /* text-align: center; */
        filter: contrast(2) brightness(1.2);
        justify-content: flex-end;
        display: flex;
        align-items: center;

    }
   


</style>
