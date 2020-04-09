<template>
    <div class="wrp">
        <div class="club-route">
            <div class="hd">
                <p>职业能力测评</p> 
            </div>
            <div class="bd">
                <div class="club-list clearfix">
                    <router-link :to="{ name: 'recruitchart', params: { clubName: 'Debate' }}" class="club-item">
                        <span class="club-name">辩论队</span>
                        <div class="club-img"><img src="../assets/rj.jpg" alt=""></div>
                    </router-link>
                    <router-link :to="{ path: 'recruitchart/robot'}" class="club-item">
                        <span class="club-name">机器人社</span>
                        <div class="club-img"><img src="../assets/rj.jpg" alt=""></div>
                    </router-link>
                    <router-link :to="{ name: 'recruitchart', params: { clubName: 'Debate' }}" class="club-item">
                        <span class="club-name">PS社</span>
                        <div class="club-img"><img src="../assets/rj.jpg" alt=""></div>
                    </router-link>
                    <router-link :to="{ name: 'recruitchart', params: { clubName: 'Debate' }}" class="club-item">
                        <span class="club-name">音乐社</span>
                        <div class="club-img"><img src="../assets/rj.jpg" alt=""></div>
                    </router-link>
                    <router-link :to="{ name: 'recruitchart', params: { clubName: 'Debate' }}" class="club-item">
                        <span class="club-name">街舞社</span>
                        <div class="club-img"><img src="../assets/rj.jpg" alt=""></div>
                    </router-link>
                    <router-link :to="{ name: 'recruitchart', params: { clubName: 'Debate' }}" class="club-item">
                        <span class="club-name">青志协</span>
                        <div class="club-img"><img src="../assets/rj.jpg" alt=""></div>
                    </router-link>
                    <router-link :to="{ name: 'recruitchart', params: { clubName: 'Debate' }}" class="club-item">
                        <span class="club-name">支教队</span>
                        <div class="club-img"><img src="../assets/rj.jpg" alt=""></div>
                    </router-link>
                    <router-link :to="{ name: 'recruitchart', params: { clubName: 'Debate' }}" class="club-item">
                        <span class="club-name">广播站</span>
                        <div class="club-img"><img src="../assets/rj.jpg" alt=""></div>
                    </router-link>
    
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
  name:'Recruit',
}
</script>
<style scoped>
    /* div{
        display: block;
        word-break: break-word;
    } */
     .wrp{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: rgb(20, 109, 150);
    }
    .club-route{
        width: 100%;
        /* height: 50%; */
        height: fit-content;
        /* background-color: darkslategrey; */
        display: flex;
        padding-top: 10%;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }
    .hd{
        font-size: 2rem;
    }
    .bd{
        width: 80%;
    }
    .club-list {
        
        font-size: 0;
        margin-right: -30px;
        /* background-color: hotpink; */
    }

    .club-item {
        background-color: darkviolet;
        display: inline-block;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        width: 220px;
        height: 170px;
        padding: 20px 10px;
        margin: 0 20px 20px 0;
        border: 1px solid #ddd;
        border-radius: 4px
    }

    .club-item:hover {
        box-shadow: 0 2px 6px rgba(0,0,0,.1)
    }

    .club-img {
        width: 80px;
        height: 80px;
        margin: 0 auto;
        overflow: hidden;
        background: #f4f4f4;
        border-radius: 50%;
        display: block
    }

    .club-img img {
        width: 100%
    }

    .club-name {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        max-width: 10em;
        margin-bottom: 20px;
        font-size: 16px
    }
    

</style>