<template>
  <div class="mask">
      <div class="wrp">
          <p class="title">{{this.chart.header.value}}</p>
          <form action="" method="get">
            <div class="body">
                <div :style="[item.infoStyle.entireRow==true?itemStyle2:itemStyle]" 
                    class="main-item"  
                    v-for="(item,idx) in chart.body" :key="idx">
                        <!-- 输入框：姓名、学号、学院等 -->
                        <div v-if="item.inputType=='text'" class="input-type">
                            <label class="item-name">{{item.infoValue}}</label>
                            <input  class="item-input"
                                :type="[item.isCheckbox==true?'':'text']"
                                :style="[item.infoStyle.entireRow==true?itemStyle2:itemStyle]"
                                :name="[item.infoValue]" id="name">     
                        </div>

                        <!-- 笔试日期多选框 -->
                        <div v-else-if="item.inputType=='checkbox'" class="checkbox-type">
                            <label class="item-name">{{item.infoName}}</label>
                            <div class="checbox-wrp">
                                <div class="citem"
                                    v-for="(checkitem,checkIdx) in item.infoValue"
                                    :key="checkIdx">
                                    <input class="checkbox-input"
                                        type="checkbox"
                                        :style="[item.infoStyle.entireRow==true?itemStyle2:itemStyle]"
                                        :name="[item.infoValue]">
                                    <div>{{checkitem}}  {{checkIdx}}</div>
                                </div>
                            </div>
                        </div>

                        <div v-else-if="item.inputType=='textarea'" class="textarea-type">
                            <label class="item-name">{{item.infoName}}</label>
                            <textarea :name="[item.infoValue]" >
                                我是一个文本框。
                            </textarea>
                        </div>

                        <!-- 下拉选择框：性别 -->
                             
                        <!-- {{item.infoName}} - {{item.infoValue}} - {{item.infoStyle}} -->
                </div>
            </div>
            <div class="notes">
                <div class="note-item" v-for="(item,idx) in chart.footer" :key="idx">
                    {{item}}
                </div>
            </div>
            <div class="submit">
                <input type="submit">
            </div>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        chartID:String,
        chart:Object,
    },
    name:"ApplicationChart",
    created:function(){
        // console.log(this.chart)
        // console.log(checkIdx)
    },
    data:function(){
        return {
            ratioChecked:'',
            itemStyle: {
                color: 'red',
                fontSize: '13px',
                backgroudColor:'blue',
                width:'49%',
                // border:'solid 2px black',
                // boxSizing: 'border-box',
            },
            itemStyle2: {
                color: 'blue',
                fontSize: '13px',
                backgroudColor:'red',
                width:'100%',
                // border:'solid 2px black',
                // boxSizing: 'border-box',
            }
            
        }
    }

}
</script>
    

<style scoped>

    .wrp{
        background-color: gray;
        width: 80%;
        /* height: 55rem; */
        margin: 1rem auto;
        border: black solid 0.5px;
    }
    .title{
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        margin: 1rem 0rem 1rem 0rem;

        padding: 1rem 0rem 1rem 0rem;
        font-size: 2rem ;
    }
    form{

    }
    .body{

        width: inherit;
        height: 40rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .main-item{
        background-color: khaki;
        height: 5rem;
        display: flex;
        align-items: center;
        
    }
    .input-type{
        width: 100%;
        background-color: lemonchiffon;
        padding-left: 1rem;
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .item-name{
        font-size: 1.5rem;
        width: 20%;
        margin: 0rem;
        padding: 0;
        display: flex;
        justify-content: start;
        /* background-color: magenta; */
    }
    .item-input{width: 80%;}

    .checkbox-type{
        padding-left: 1rem;
        width: 100%;
        background-color: lightcoral;
        display: flex;
        justify-content: start;
        align-items: center;
    }
    
    
    .checbox-wrp{
        width: 80%;
        background-color: lightslategray;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .citem{
        background-color: maroon;
        width: 25%;
        height: inherit;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .citem input{
        /* width: 5%; */
        background-color: lime;
    }
    .citem div{
        background-color: blueviolet;
        width: 50%;
        
    }
    

    .textarea-type{
        /* margin-left: 1rem; */
        padding-left: 1rem;
        width: 100%;
        height: inherit;
        background-color: lightblue;
        display: flex;
        justify-content: start;
    }
    textarea {
       resize: none;
       /* height: 5rem; */
       height: auto;
       width: 80%;
    }

    .notes{
        background-color: rgb(151, 151, 151);
    }
    .submit{
        background-color: blue;
    }
</style>