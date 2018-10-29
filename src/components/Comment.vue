<template>
  <div class="comment" ref="showList"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <p>
      <span> </span>
      <span>{{list.length}}条评论</span>
      <span @click="hideNews"><i class="iconfont icon-cuo"></i></span>
    </p>
    <div class="con" ref="con">
      <li v-for="(item,index) in list" :key="index">
      <div>
        <img :src="item.img" alt="">
        <p>
          <span>{{item.name}}</span>
          <span>{{item.con}}</span>
          <span>{{item.time}}</span>
        </p>
      </div>
      <p id="lover" @click="love(item.count,index)">
        <i :class="[{'active':active && index===ind},{iconfont:true},{'icon-shoucang1':true}]"></i>
        <span>{{active && index===ind?item.count+1:item.count}}</span>
      </p>
    </li>
    <div class="pos">
      <input type="text" placeholder="留下你的评论吧" ref="inp">
      <p>
        <span>@</span>
        <span class="iconfont icon-querenwancheng" @click="sub"></span>
      </p>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        active: false,
        ind: '',
        num:0
      }
    },
    props:{
      list:{
        type: Array,
        default: [],
      }
    },
    methods:{
      hideNews(){
        this.$parent.isShow = false;
      },
      love(num,index){
        this.ind = index;
        this.active = !this.active;
        if(this.active && index===this.ind){
          this.num++;
        }else{
          this.num--;
        }
      },
      sub(){
        let val = this.$refs.inp.value.trim();
        if (val) {
          this.$emit("sloganEvent",val);
          this.$refs.inp.value = '';
        } else {
          console.log('请输入正确的评论');
        }
      },
      touchStart(e){
          // 记录手指滑动的位置
          e.stopPropagation();
          this.start = e.touches[0];
      },
      touchMove(e){
          // 让页面跟随手指滑动
          e.stopPropagation();
          let touch = e.touches[0];
          let offset = touch.pageY - this.start.pageY;
          // console.log('offset..', offset);
          if (offset < 0){
              offset = 0;
          }
          this.offset = offset;
          this.$refs.showList.style.transform = `translate3d(0,${offset}px,0)`;
          this.$refs.showList.style.transition = `width`;
      },
      touchEnd(){
          // 清除行内样式
          this.$refs.showList.style.transform = ``;
          this.$refs.showList.style.transition = ``;
          // 判断滑动距离是否到关闭的临界值
          if (this.offset >= window.innerWidth * 0.35){
              this.$parent.isShow=false;
          }
      }
    }
  }
</script>

<style scoped lang='scss'>
.comment{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #2C2922;
  height: 80%;
  display: flex;
  flex-direction: column;
  transform: translate3d(0, 0, 0);
  transition: all .3s linear;
  >p{
    height: .88rem;
    display: flex;
    align-items: center;
    padding: 0 .2rem;
    justify-content: space-between;
    color: #fff;
    flex-shrink: 0;
  }
  .con{
    flex:1;
    overflow: hidden;
    overflow-y: scroll;
    padding-bottom: .88rem;
  }
  li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .3rem;
    color: #fff;
    div{
      display: flex;
      p{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: .25rem;
      }
      img{
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        margin-right: .2rem;
      }
    }
  }
}
#lover{
  display: flex;
  flex-direction: column;
  .iconfont{
    font-size: .6rem;
    color: #505052;
    &.active{
      color: red; 
    }
  }
  span{
    color: #505052;
    text-align: center;
  }
}
.pos{
  background: #505052;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: .88rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: .2rem;
  p{
    span{
      padding: .2rem;
      color: #fff;
    }
  }
  input{
    border: 0;
    width: 70%;
    height: 100%;
    background: #505052;
    color: #fff;
    padding-left: .2rem;
  }
}
</style>