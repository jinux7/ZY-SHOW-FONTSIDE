<template>
  <div id="app">
    <section class="wrap">
      <pagehead></pagehead>
      <router-view></router-view> 
      <pageFoot></pageFoot>
      <toPageTop></toPageTop>
    </section>
    
  </div>
</template>

<script>
import pagehead from '@/components/pagehead.vue'
import pageFoot from '@/components/pageFoot.vue'
import toPageTop from '@/components/toPageTop.vue'
export default {
  name: 'app',
  components:{
    pagehead,
    pageFoot,
    toPageTop
  }
}
</script>

<style>
 html,body,p {
    margin: 0;
    padding: 0;
    font-family: "microsoft yahei";
  }
  a {
    text-decoration: none;
  }
  img {
    width: 100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#app {
    background-image: url('/static/images/index_bg.jpg');
    background-position: center 60px;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .wrap {
    width: 100%;  
    margin: 0 auto; 
  }
  /*** media查询***************/
    @media (min-width: 760px){
      .wrap {
          width: 750px;
      } 
      .banner h1 {
        font-size: 2.5rem;
        margin-top: 100px;
      }
      .banner p {
        font-size: 1.3rem;
      }
  }
    @media (min-width: 992px){
      .wrap {
          width: 970px;
      }
      .banner h1 {
        font-size: 2.5rem;
        margin-top: 146px;
      }
  }
    @media (min-width: 1200px){
      .wrap {
          width: 1170px;
      }
  }
</style>
