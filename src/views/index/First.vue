<template>
  <div class="box">
    <header>
      <span>搜索</span>
      <div>
        <router-link to='/index/first/recomd'>推荐</router-link>
        <router-link to='/index/first/beijing'>北京</router-link>
      </div>
      <span>更多</span>
    </header>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.box{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
header{
  width: 100%;
  height: .88rem;
  display: flex;
  align-items: center;
  padding: 0 .1rem;
}
header div{
  flex:1;
  text-align: center;
  line-height: .8rem;
}
header span{
  color: #fff;
  margin: 0 .2rem;
}
header div a{
  color: #EBE7E0;
  padding: 0 .2rem;
}
header div a.router-link-active{
  color: #fff;
}
header div a:nth-child(1){
  border-right: .01rem solid #fff;
}
section{
  flex: 1;
}
</style>