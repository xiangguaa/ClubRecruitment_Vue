<template>
    <div class="chart-wrp">
        <div class="content-wrp">
            <div class="chart-added">
                <h2 class="chart-title">当前数据</h2>
                <div class="chart-division-wrp chart-added-wrp">
                    <table border="1" id="table" class="table">
                        <tr>
                            <th>项目名称</th>
                            <th>项目值</th>
                            <th>整行</th>
                            <th>加粗</th>
                            <th>类型</th>
                            <th>操作</th>
                        </tr>
                    </table>
                    <div class="chart-club-title">社团名称：{{clubName}}</div>
                    <div class="chart-notes" id="chart-notes">
                    </div>
                    <!-- <button @click="test()">test</button> -->
                    
                    <div class="chart-added-el" id="chart-added-el"></div>
                </div>
            </div> 

            <div class="chart-preset">
                <h2 class="chart-title">添加预设数据</h2>
                <div class="chart-division-wrp chart-preset-wrp">
                    <div class="chart-preset-time">
                        <div class="chart-time-title">
                            <h3>笔试时间</h3>    
                            <p>个数任意</p>
                        </div>
                        <div class="chart-time-picker">
                            <input type="datetime-local" name="time1" v-model="date1">
                            <input type="datetime-local" name="time2" v-model="date2">
                            <!-- <input type="datetime-local" name="time3" v-model="date3"> -->
                            
                        </div>
                        <button class="chart-time-confirm" @click="addTime()">添加</button>
                    </div>
                    <div class="chart-preset-title">
                        <div>社团名称</div>
                        <input type="text" class="chart-name-input" @keyup.enter="setTitle()" v-model="clubName" placeholder="请输入社团名称">
                        <input type="button" value="确定" class="chart-time-confirm" @click="setTitle()">
                    </div>
                    <div class="chart-preset-notes">
                        <div class="chart-preset-notes-title">
                            <h3 style="display:inline;">备注  </h3>
                            <p style="display:inline;font-size:0.7rem;">最多添加三条</p>
                        </div>
                        <div class="chart-notes-add">
                            <textarea name="note1" v-model="note1"></textarea>
                            <textarea name="note2" v-model="note2"></textarea>
                            <textarea name="note3" v-model="note3"></textarea>
                        </div>
                        <button class="chart-notes-confirm" @click="addNotes()">添加</button>
                    </div>
                
                </div>
                

            </div>
        </div>
        
    </div>
</template>
<script>

import $ from 'jquery'
export default {
  name:'Chartsetting',
  data:function(){
      return {
          dateArr:[],
          date1:null,
          date2:null,
          note1:null,
          note2:null,
          note3:null,
        //   date3:null,
          clubName:'未设置',
          chart:{
            'header':{'value':"辩论队"},
            'body':[
                {'infoName':'姓名','infoValue':'姓名','infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'text'},
                {'infoName':'性别','infoValue':['男','女'],'infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'checkbox'},
                {'infoName':'学号','infoValue':'学号','infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'text'},
                {'infoName':'电话','infoValue':'电话','infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'text'},
                {'infoName':'学院','infoValue':'学院','infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'text'},
                {'infoName':'QQ','infoValue':'QQ','infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'text'},
                // {'infoName':'笔试时间','infoValue':['aa','bb','cc'],'infoStyle':{'entireRow':true,'fontWeight':'light'},'inputType':'checkbox'},
                {'infoName':'奖项/经历','infoValue':'奖项/比赛经历','infoStyle':{'entireRow':true,'fontWeight':'light'},'inputType':'textarea'},
                {'infoName':'自我介绍','infoValue':'自我介绍','infoStyle':{'entireRow':true,'fontWeight':'light'},'inputType':'textarea'},
            ],
            'footer':[]
        }
      }
  },
  methods:{
      test(){
        //   console.log('test')
          
      },
      setTitle(){
        //   console.log(this.clubName)
          this.chart.header.value = this.clubName;
        //   console.log(this.chart.header)
          alert("设置成功！")
      },
      addTime(){
        var el = document.getElementById('chart-added-el');
        let div=document.createElement("div");
        if(this.date1!=null && this.date2!=null){
            div.innerHTML ='<div class="chart-time-wrp"><h3>笔试时间:</h3>'+'<p class="chart-time-content">'+this.date1+'  -  '+this.date2+'</p>'+'<p class="chart-time-del" id="date">删除</p></div>';
            this.chart.body.push({'infoName':'笔试时间:','infoValue':[this.date1,this.date2],'infoStyle':{'entireRow':true,'fontWeight':'light'},'inputType':'checkbox'})
            el.appendChild(div)
        }else if(this.date1!=null && this.date2==null){
            div.innerHTML ='<div class="chart-time-wrp"><h3>笔试时间:</h3>'+'<p class="chart-time-content">'+this.date1+'</p>'+'<p class="chart-time-del" id="date">删除</p></div>';
            this.chart.body.push({'infoName':'笔试时间:','infoValue':[this.date1],'infoStyle':{'entireRow':true,'fontWeight':'light'},'inputType':'checkbox'})
            el.appendChild(div)
        }else if(this.date1==null && this.date2!=null){
            div.innerHTML ='<div class="chart-time-wrp"><h3>笔试时间:</h3>'+'<p class="chart-time-content">'+this.date2+'</p>'+'<p class="chart-time-del" id="date">删除</p></div>';
            this.chart.body.push({'infoName':'笔试时间:','infoValue':[this.date2],'infoStyle':{'entireRow':true,'fontWeight':'light'},'inputType':'checkbox'})
            el.appendChild(div)
        }else{
            alert("数据未填写完整，请先填写数据。")
        }
        $('.chart-added-el').on('click', '.chart-time-del', this.delete)
        // console.log(this.chart.body)

      },
      addNotes(){
        if(this.note1 != null){
            this.chart.footer[0]=this.note1
        }
        if(this.note2 != null){
            this.chart.footer[1]=this.note2
        }
        if(this.note3 != null){
            this.chart.footer[2]=this.note3
        }

        for(let i=0;i<this.chart.footer.length;i++){
            var tdArr = document.getElementById('chart-notes');
            let div=document.createElement("div");  
            div.innerHTML ='<div class="chart-note"><p class="chart-note-content">'+this.chart.footer[i]+'</p>'+ '<p class="chart-note-del" id=p'+String(i)+'>删除</p></div>';
            tdArr.appendChild(div)
        }
        $('.chart-notes').on('click', '.chart-note-del', this.delete)
        // console.log(this.chart.footer)
      },
      delete(e){
        // console.log(e.currentTarget.id)
        var str = String(e.currentTarget.id)
        switch (str[0]) {
            case 't':   // 删除表格tr元素
                // 被删除的数组元素以空数组代替，避免因删除数组元素导致的数组序号改变
                // 最后上传数据时，需要将空数组全部去除。
                this.chart.body.splice(parseInt(str.replace(/[^0-9]/ig,"")),1,[])
                break;
            case 'p':   // 删除备注中的元素
                this.chart.footer.splice(parseInt(str.replace(/[^0-9]/ig,"")),1,[])
                // console.log(this.chart.footer)
                break;
            case 'd':
                for(let i=0;i<this.chart.body.length;i++){
                    if(this.chart.body[i].infoName == '笔试时间'){
                        this.chart.body.splice(i,1,[])
                    }
                }
                break;
            default:
                break;
        }
        // console.log(this.chart)
        let idObject = document.getElementById(e.currentTarget.id);
        idObject.parentNode.parentNode.removeChild(idObject.parentNode);
      }
  },

  created:function(){

  },
  mounted:function(){
    //   获取信息并存储至this.chart中
    // 
    for(let i=0;i<this.chart.body.length;i++){
        var tdArr = document.getElementById('table');
        let tr=document.createElement("tr");   
        tr.innerHTML ='<td>' + this.chart.body[i].infoName + '</td>'+ '<td>'+this.chart.body[i].infoValue+'\
        </td>'+'<td>'+this.chart.body[i].infoStyle.entireRow+'</td>'+'<td>'+this.chart.body[i].infoStyle.fontWeight+'</td>'+'\
        <td>'+this.chart.body[i].inputType+'</td>'+'<td class="chart-op-del" id=td'+String(i)+'>删除</td>';
        tdArr.appendChild(tr)
    }

    

    this.$nextTick(() => {
        // 动态添加dom元素，并绑定VUE事件（.pdf-item为动态添加的元素，放置在父元素.pdf-body下）
        $('.table').on('click', '.chart-op-del', this.delete)
        
    });
        
    // $('.chart-op-del').each(function() {
    //     $(this).bind("click", function() {
    //         // 处理逻辑
    //         console.log("tetet")
    //     });
    // });
    
    
   
  }
}
</script>



<style>
    .chart-wrp{
        background-color: #eef1f6;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .content-wrp{
        width: 95%;
        height: 90%;
        /* background-color: yellow; */
        display: flex;
        justify-content: space-between;
    }
    .chart-added{
        width: 48%;
        height: 100%;
        background-color: #ffffff;
        border-radius: 0.5rem;
        box-shadow: #566d97 0 0 20px;
        overflow: scroll;

        
    }
    ::-webkit-scrollbar {
        /*隐藏滚轮*/
        display: none;
    }
    .chart-preset{
        width: 48%;
        height: 100%;
        background-color: #ffffff;
        border-radius: 0.5rem;
        display: flex;
        box-shadow: #566d97 0 0 20px;
        flex-direction: column;
        justify-content: flex-start;
        border-radius: 0.5rem;
    }
    .chart-title{
        /* background-color: rgb(70, 127, 165); */
        width: 100%;
        padding: 0rem;
        height: 5%;
        color: rgb(0, 0, 0);
        font-size: 1.5rem;
        letter-spacing: 2px;
        /* margin-top: 1%; */
        padding-top: 1%;
    }
    .chart-division-wrp{
        background-color: #ffffff;
        height: 89.4%;
        width: 100%;
        padding-top: 5%;
    }
    .chart-preset-wrp{
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    table{
        font-size: 1.5rem;
        width: 96%;
        margin: 0 auto;
        border-collapse: collapse;
        /* margin: 0 auto; */
        padding: 0;
        text-align: center;
        /* border: 2px solid #b0c3d8; */
    }
 
    table td, table th{
        border: 1px solid #cad9ea;
        color: #666;
        height: 30px;
    }
 
    table thead th{
        background-color: #CCE8EB;
        width: 100px;
    }
 
    table tr:nth-child(odd){
        background: #fff;
    }

    table tr:nth-child(even){
        background: #F5FAFA;
    }
    .chart-op-del{
        background-color: rgb(236, 226, 231);
    }
    .chart-op-del:hover{
        background-color: rgb(175, 145, 197);
        cursor: crosshair;
    }
    .chart-club-title{
        /* background-color: blueviolet; */
        width: 96%;
        margin: 0 auto;
        border: 1px solid #cad9ea;
        height: 30px;
        margin-top: 1rem;
        display: flex;
        justify-content: flex-start;
        text-indent: 2rem;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 600;
        
        /* text-indent: 0; */
    }
    .chart-notes{
        background-color: white;
        width: 96%;
        border: 1px solid #cad9ea;
        margin: 0 auto;
        margin-top: 1rem;
        /* padding: 1rem; */
        /* display: flex;
        flex-direction: column;
        align-items: center; */
    }
    .chart-note{
        width: 95%;
        height: fit-content;
        /* background-color: #f5fafa; */
        /* background-color: tomato; */
        /* overflow: scroll; */
        /* overflow: hidden; */
        padding: .5rem;
        margin: .5rem auto;
        display: flex;
        /* justify-content: flex-end; */
        justify-content: space-between;
        
    }
    .chart-note-content{
        width: 80%;
        /* background-color: turquoise; */
        font-size: 1.2rem;
    }
    .chart-note-del{
        width: 5%;
        /* height: 3rem; */
        /* background-color: yellowgreen; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .chart-note-del:hover{
        background-color: #af91c5;
        cursor: crosshair;
    }
    #chart-added-el{
        width: 96%;
        margin: 1rem auto;
        height: fit-content;
        /* background-color: rgb(116, 179, 75); */
        border: 1px solid #cad9ea;
    }
    .chart-time-wrp{
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .chart-time-wrp h3{
        width: 20%;
        /* background-color: tomato; */
        font-size: 1.5rem;
        letter-spacing: 2px;
        text-indent: 1.2rem;
    }
    .chart-time-content{
        width: 70%;
        /* background-color: violet; */
        font-size: 1.3rem;
    }
    .chart-time-del{
        width: 10%;
        /* background-color: rgb(28, 13, 163); */
        height: fit-content;
    }
    .chart-time-del:hover{
        background-color: rgb(175, 145, 197);
        cursor: crosshair;
    }
    /* ----------------------------------------------- */
    .chart-preset-time{
        border: 1px solid #cad9ea;
        width: 90%;
        height: 10%;
        background-color: rgb(255, 255, 255);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
    }
    .chart-time-title{
        width: 12%;
        text-indent: 0.2rem;
        /* background-color: burlywood; */
    }
    .chart-time-picker{
        width: 80%;
        height: 100%;
        /* background-color: rgb(29, 32, 170); */
        display: flex;
        justify-content: space-around;
        border: 0;
        outline: none;
        /* background-color: brown; */
    }
    .chart-time-picker input{
        width: 50%;
        border: 1px solid #cad9ea;
        /* border: 0rem; */
        
    }
    .chart-time-confirm{
        margin: 0;
        padding: 0;
        /* border: 1px solid transparent;  */
        border: 1px solid #cad9ea;
        outline: none;   
        background-color: #ece2e7;
        width: 10%;
        height: 100%;
    }
    .chart-time-confirm:hover{
        background-color: #af91c5;
    }
    .chart-added-el{
        width: 90%;
    }
    .chart-preset-title{
        border: 1px solid #cad9ea;
        width: 90%;
        height: 10%;
        margin-top: 1rem;
        background-color: rgb(255, 255, 255);
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* width: 100%; */
    }
    .chart-preset-title div{
        /* background-color: aquamarine; */
        width: 14%;
        height: 100%;
        display: flex;
        /* justify-content: center; */
        text-indent: 0.7rem;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 600;
    }
    .chart-name-input{
        width: 80%;
        /* background-color: blueviolet; */
        
        height: 100%;
        /* border: 0; */
        border: 1px solid #cad9ea;
        text-indent: 1rem;
        border-right: 0;
    }
    .chart-preset-notes{
        width: 90%;
        height: 40%;
        padding-bottom: 1rem;
        border: 1px solid #cad9ea;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        /* background-color: cornflowerblue; */
    }
    .chart-preset-notes-title{
        /* background-color: blueviolet; */
        width: 100%;
        padding: 1rem;
    }
    .chart-notes-add{
        /* background-color: brown; */
        /* height: fit-content; */
        /* height: 70%; */
        margin-bottom: 3rem;
    }
    .chart-preset-notes textarea{
        /* width: 5rem; */
        width: 100%;
        border: 1px solid #cad9ea;
        height: 35%;
        resize: none;
        /* margin: ; */
        margin-bottom: 0.3rem;
    }
    .chart-notes-confirm{
        /* background-color: blueviolet; */
        /* margin-right: ; */
        margin: 0rem;
        border: 1px solid #cad9ea;
        outline: none;   
        background-color: #ece2e7;
        width: 80%;
        border-radius: 0.5rem;

    }
    .chart-notes-confirm:hover{
        background-color: #af91c5;
    }

</style>
