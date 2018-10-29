<template>
  <div class="box"
    @touchstart="touchStart"
    @touchend="touchEnd"
  >
    <div class="imgs">
      <h1>大多数人都等不到来日方长，只有乍然离场而已</h1>
      <img src="@/assets/1.jpg" alt="">
      <!-- <video poster="@/assets/1.jpg" controls></video> -->
      <p>在合适的时间遇见合适的人是一种幸福。 @抖音小助手 #情感语录 #一禅小和尚</p>
      <p><span> @ 一禅经典语录原声带</span></p>
      <div class="pos">
        <div class="portrait">
        <img src="@/assets/2.jpg" alt="">
        <span>+</span>
      </div>
      <div id="love" @click="love">
        <i :class="[{'active':active},{iconfont:true},{'icon-shoucang1':true}]"></i>
        <span :class="{'active':active}">3.7w</span>
      </div>
      <div class="news" @click="showNews">
        <i class="iconfont icon-xiaoxi"></i>
        <span>851</span>
      </div>
      <div class="weixin" @click="share">
        <div class="ip">
          <i class="iconfont icon-weixin"></i>
        </div>
        <span>1.1w</span>
      </div>
      </div>
    </div>
    <comment :list='list' v-on:sloganEvent="onSloganEvent" v-show="isShow"/>
    <div class="lover" ref="lover">
      <i class="iconfont icon-shoucang1"></i>
    </div>
  </div>
</template>

<script>
import comment from '@/components/Comment.vue';
import soshm from 'soshm';
import 'soshm/dist/soshm.min.js';
  export default {
    data(){
      return {
        active: false,
        isShow: false,
        list: []
      }
    },
    components:{
      comment
    },
    methods:{
      love(){
        this.active = !this.active;
      },
      showNews(){
        this.isShow = true;
      },
      share(){
        soshm.popIn({
            title: '弹窗分享',
            sites: ['weixin', 'weixintimeline', 'weibo', 'qzone', 'tqq', 'qq']
          });
      },
      onSloganEvent(val){
        let str =`{
          "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541335514&di=7fa5fa127ed948fe12bd116ffc67a8d1&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017122809191781760.jpg",
          "name":"Zoe",
          "con":"${val}",
          "count": 0,
          "time":"刚刚"
        }`
        this.list.unshift(JSON.parse(str));
      },
      touchStart(e){
        e.stopPropagation();
        this.$refs.lover.style.display='block';
        let touch = e.touches[0];
        let x = touch.pageX,
        y = touch.pageY;
        if(x > window.screen.availWidth - 70 || x < 10){
          this.$refs.lover.style.display='none';
          x = 0;
        }else{
          this.active = true;
        }
        this.$refs.lover.style.left = x - 35 + 'px';
        this.$refs.lover.style.top = y - 35 + 'px';
        this.y = y;
      },
      touchEnd(){
        let that = this;
        setTimeout(()=>{
          that.$refs.lover.style.top = this.y-60;
          that.$refs.lover.style.display='none';
        },2000)
      }
    },
    mounted(){
      fetch('https://www.easy-mock.com/mock/5b62e4bd518de97c5d45fd57/example/recommend').then(res=>res.json()).then(body=>{
        this.list = body;
      })
    }
  }
</script>

<style scoped lang='scss'>
.box{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.imgs{
  margin-top: 2rem;
}
.imgs video,.imgs img{
  width: 100%;
}
.imgs h1{
  padding: .2rem;
  font-size: .5rem;
  color: #000;
  text-align: center;
  font-weight: 600;
}
.imgs p{
  width: 75%;
  color: #fff;
  margin: .1rem .2rem;
  line-height: 2;
  font-size: .3rem;
}
.imgs p span{
  font-size: .25rem;
}
.pos{
  position: fixed;
  right: .15rem;
  top: 3.8rem;
  width: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.portrait{
  width: 1rem;
  height: 1rem;
  margin-bottom: .6rem;
}
.portrait span{
  position: relative;
  display: inline-block;
  width: .5rem;
  text-align: center;
  height: .5rem;
  background: #FF2C55;
  line-height: .5rem;
  top: -.3rem;
  right: -.22rem;
  color: #fff;
  border-radius: 50%;
}
.portrait img{
  width: 100%;
  border-radius: 50%;
}
#love,.news,.weixin{
  text-align: center;
}

.news{
  margin-top: .2rem;
}
.weixin .ip{
  width: .6rem;
  border-radius: 50%;
  background: #00C80D;
}
#love i,.news i,.weixin i{
  font-size: .5rem;
  color:#fff;
}
#love span,.news span,.weixin span{
  color: #fff;
  font-size: .25rem;
}
.active{
  color: red!important;
}
.lover{
  position: fixed;
  display: none;
  transition: all .5s ease;
  i.iconfont{
    font-size: 1.5rem;
    color: red;
  }
}
</style>