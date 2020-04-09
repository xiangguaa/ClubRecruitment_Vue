<template>
  <div class="wrp">
    <div class="mask">
      <header>社团招新 · Recruitment</header>
      <div class="route">
          <router-link to="/join">
            <img src="../assets/rj.jpg" alt="加入">
            <p>我要加入</p> 
          </router-link>
          <router-link to='/recruit'>
            <img src="../assets/rj.jpg" alt="加入">
            <p>我要招收</p> 
          </router-link>
          <!-- <router-link to='/test'>
            <img src="../assets/rj.jpg" alt="加入">
            <p>我要招收</p> 
          </router-link> -->
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name:'',
}
</script>

<style scoped>
  .wrp{
    background-color: rgb(56, 42, 37);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;


  }
  .mask{
    /* width: 100%;
    height: 100%; */
    background-color: darkcyan;
    
    

  }
  
  .route{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60rem;
    margin: 0 auto;
    /* background-color: plum; */
  }
  img{
    width: 20rem;
    height: 20rem;
  }
  header,p{
    font-size: 2rem;
  }
 


</style>
