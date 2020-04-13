<template>
  <div class="wrp">
    <div  class="side">
      <p class="title">管理菜单</p>
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
    <div v-if="isShowWelcome" class="welcome">WELCOME</div>
    <router-view v-if="!isShowWelcome" class="detail-panel"></router-view>
  </div>
</template>
<script>
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
          console.log("charttttt");
          break;
        case "registration":
          console.log("regissssss");
          break;
        default:
          break;
      }
      this.isShowWelcome = false;
    },
    logout: function() {
      console.log("logout");
      document.cookie = "chartID=; expires=Thu, 01 Jan 1971 00:00:00 GMT;";
      //   this.$router.replace({name:'Login',params: { action: 'recruit' }});
      this.$router.replace({ name: "Home" });
    },
    beforeunloadFn(e) {
      console.log("刷新或关闭");
      // ...
    }
  },
  created: function() {
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
.side {
  background-color: khaki;
  height: 100%;
  width: 10%;
  margin: 0;
  padding: 0;
}
.title {
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: larger;
  font-weight: 600;
  background-color: rgb(17, 196, 172);
}
.option-list {
  width: 100%;
  height: 95%;
  background-color: hotpink;
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
  background-color: indianred;
  /* padding-top: 2rem; */
  margin-top: 2rem;
}
.option:hover {
  background-color: bisque;
}

.detail-panel {
  width: 90%;
  height: 100%;
  background-color: blueviolet;
}
.welcome {
  width: 90%;
  height: 100%;
  background-color: rgb(43, 226, 73);
}
</style>
