<template>
  <div class="wrap">
    <section>
      <router-view></router-view>
    </section>
    <footer>
      <router-link to='/index/first'>首页</router-link>
      <router-link to='/index/follow'>关注</router-link>
      <p>
        <router-link to='/index/add'>+</router-link>
      </p>
      <router-link to='/index/news'>消息</router-link>
      <router-link to='/index/my'>我的</router-link>
    </footer>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: linear-gradient(#D4C2A3 20%, #6C6862 80%);
}
section{
  flex: 1;
}
footer{
  width: 100%;
  height: .88rem;
  border-top: .01rem solid #ccc;
  display: flex;
  align-items: center;
}
footer>a{
  flex: 1;
  text-align: center;
  color:#fff;
  font-size: .3rem;
  line-height: .8rem;
}
footer p{
  background: #fff;
  padding: .05rem .3rem;
  border-radius: .1rem;
}
footer>a.router-link-active{
  border-bottom: .08rem solid #fff;
}
</style>