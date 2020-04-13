<template>
    <div class="chart-wrp">
        <div class="chart-added">
            <h2 class="chart-title">当前数据</h2>
            <div class="chart-division-wrp chart-added-wrp">
                <!-- <h1>{{clubName}}</h1> -->
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
                <div class="chart-notes" id="chart-notes">

                </div>
                <button @click="test()">test</button>
                <div class="chart-title-setting">
                    <h2 style="width:5rem;diplay:inline-block;">社团名称</h2>
                    <input style="width:10rem;diplay:inline-block;" type="text" @keyup.enter="setTitle()" v-model="clubName" placeholder="请输入社团名称">
                    <input type="button" value="确定" @click="setTitle()">
                </div>
            </div>
        </div> 
        <div class="chart-preset">
            <h2 class="chart-title">添加预设数据</h2>
            <div class="chart-division-wrp chart-preset-wrp"></div>
        </div>
    </div>
</template>
<script>

import $ from 'jquery'
export default {
  name:'Chartsetting',
  data:function(){
      return {
          clubName:'',
          chart:{
            'header':{'value':"辩论队"},
            'body':[
                {'infoName':'姓名','infoValue':'姓名','infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'text'},
                {'infoName':'性别','infoValue':['男','女'],'infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'checkbox'},
                {'infoName':'学号','infoValue':'学号','infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'text'},
                {'infoName':'电话','infoValue':'电话','infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'text'},
                {'infoName':'学院','infoValue':'学院','infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'text'},
                {'infoName':'QQ','infoValue':'QQ','infoStyle':{'entireRow':false,'fontWeight':'bold'},'inputType':'text'},
                {'infoName':'笔试时间','infoValue':['aa','bb','cc'],'infoStyle':{'entireRow':true,'fontWeight':'light'},'inputType':'checkbox'},
                {'infoName':'奖项/经历','infoValue':'奖项/比赛经历','infoStyle':{'entireRow':true,'fontWeight':'light'},'inputType':'textarea'},
                {'infoName':'自我介绍','infoValue':'自我介绍','infoStyle':{'entireRow':true,'fontWeight':'light'},'inputType':'textarea'},
            ],
            'footer':[
                'dsfasdfasdf',
                '大家发来减肥哈哈哈我和嘎哈大哥啊大哥拉回到发生的的立法和斯大林发送大量法sdfadfasdfasdf律上的封建落后阿斯弗舒服多啦合适的方式发挥了',
                '觉得拉法基类毒素解放拉萨地方啊深度发掘建立了上的飞机啊'
            ]
        }
      }
  },
  methods:{
      test(){
          console.log('test')
          
      },
      setTitle(){
          console.log(this.clubName)
          this.chart.header.value = this.clubName;
          console.log(this.chart.header)
      },
      delete(e){
        console.log(e.currentTarget.id)
        var str = String(e.currentTarget.id)
        console.log(str[0])
        switch (str[0]) {
            case 't':
                // 被删除的数组元素以空数组代替，避免因删除数组元素导致的数组序号改变
                // 最后上传数据时，需要将空数组全部去除。
                this.chart.body.splice(parseInt(str.replace(/[^0-9]/ig,"")),1,[])
                break;
            case 'p':
                this.chart.footer.splice(parseInt(str.replace(/[^0-9]/ig,"")),1,[])
                break;
            default:
                break;
        }
        console.log(parseInt(str.replace(/[^0-9]/ig,"")));
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

    for(let i=0;i<this.chart.footer.length;i++){
        var tdArr = document.getElementById('chart-notes');
        let div=document.createElement("div");  
        div.innerHTML ='<div class="chart-note"><p>'+this.chart.footer[i]+'</p>'+ '<p class="chart-op-del" id=p'+String(i)+'>删除</p></div>';
        tdArr.appendChild(div)
    }

    this.$nextTick(() => {
        // 动态添加dom元素，并绑定VUE事件（.pdf-item为动态添加的元素，放置在父元素.pdf-body下）
        $('.table').on('click', '.chart-op-del', this.delete)
        $('.chart-notes').on('click', '.chart-op-del', this.delete)
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
        width: 100%;
        height: 100%;
        background-color: forestgreen;
        display: flex;
        justify-content: start;
    }
    .chart-added{
        width: 50%;
        height: 100%;
        background-color: firebrick;
        
    }
    .chart-preset{
        width: 50%;
        height: 100%;
        background-color: rgb(6, 211, 40);
    }
    .chart-title{
        background-color: rgb(70, 127, 165);
        width: 100%;
        padding: 0rem;
        height: 5%;
        /* margin-top: 1%; */
        padding-top: 1%;
    }
    .chart-division-wrp{
        background-color: gray;
        height: 89.4%;
        width: 100%;
        padding-top: 5%;
    }
    .chart-preset-wrp{
        background-color: greenyellow;
    }
    table{
        font-size: 1.5rem;
        width: 90%;
        margin: 0 auto;
        
    }
    .chart-op-del{
        background-color: hotpink;
    }
    .chart-op-del:hover{
        background-color: indigo;
    }
    .chart-notes{
        background-color: aquamarine;
        width: 90%;
        margin: 0 auto;
        margin-top: 1rem;
        /* padding: 1rem; */
    }
    .chart-note{
        /* overflow: scroll; */
        /* overflow: hidden; */
        padding: 2rem;
        
    }

</style>
