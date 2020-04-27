<template>
  <div class="wrp">
    <div class="side-wrp">
      <div class="side-content">
        <!-- <p class="title">管理菜单</p> -->
        <div class="option-list">
          <!-- <div class="option" @click="tap('chart')">设置表格</div> -->

          <router-link
            :to="{name:'ChartSetting'}"
            class="option"
            @click.native="tap('chart')"
            replace
          >设置表格</router-link>
          <router-link
            :to="{name:'RegistrationStatus'}"
            class="option"
            @click.native="tap('registration')"
            replace
          >查看报名</router-link>
          <div class="option" @click="logout()">注销</div>
        </div>
      </div>
    </div>
    <div v-if="isShowWelcome" class="welcome">
      <p>WELCOME.</p> 
    </div>
    <router-view v-if="!isShowWelcome" class="detail-panel"></router-view>
  </div>
</template>
<script>
import common from "../common/common.js";
export default {
  name: "RecruitSidebar",
  data: function() {
    return {
      isShowWelcome: true
    };
  },
  methods: {
    tap: function(optionName) {
      switch (optionName) {
        case "chart":
          // console.log("charttttt");
          break;
        case "registration":
          break;
        default:
          break;
      }
      this.isShowWelcome = false;
    },
    logout: function() {
      document.cookie = "chartID=; expires=Thu, 01 Jan 1972 00:00:00 GMT;";
      // console.log(common.util.getCookie('chartID'))
      // this.$router.replace({name:'Login',params: { action: 'recruit' }});
      this.$router.replace({ name: "Home" });
    },
    beforeunloadFn(e) {
      console.log("刷新或关闭");
      // ...
    }
  },
  created: function() {
    let chartid = common.util.getCookie("chartID");
    // 如果不存在cookie信息，则直接退出页面
    if (chartid == null) {
      this.$router.replace({ name: "Login", params: { action: "recruit" } });
    } else {
    }
    // 否则，向数据库进行验证，只有通过后，数据库才允许接下来的请求信息。

    window.addEventListener("beforeunload", e => this.beforeunloadFn(e));
  },
  destroyed() {
    window.removeEventListener("beforeunload", e => this.beforeunloadFn(e));
  }
};
</script>

<style scoped>
a:link {
  text-decoration: none;
}
.wrp {
  /* background-color: khaki; */
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  /* position: fixed; */
}
.side-wrp {
  /* position: fixed; */
  /* background-color: khaki; */
  background-color: #eef1f6;
  height: 100%;
  width: 10%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.side-content{
  height: 90%;
  width: 80%;
  background-color: #566d97;
  /* margin-top: 30rem; */
  margin: auto 0;
  border-radius: 0.5rem;
}
.title {
  width: 100%;
  color: rgb(255, 255, 255);
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 500;
}
.option-list {
  width: 100%;
  height: 90%;
  /* background-color: hotpink; */
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.option {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  color: white;
  /* background-color: indianred; */
  /* padding-top: 2rem; */
  /* margin-top: 2rem; */
}
.option:hover {
  background-color: #465678;
  border-radius: 0.5rem;
}

.detail-panel {
  width: 90%;
  height: 100%;
  background-color: #eef1f6;
}
.welcome {
  width: 90%;
  height: 100%;
  background-color: #eef1f6;
  font-size: 5rem;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  font-family: STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑";
}
.welcome p{
  width: 98%;
  background-color: #6076a09a;
  margin-top: 20%;
  box-shadow: 0 5px 20px;
}
</style>
