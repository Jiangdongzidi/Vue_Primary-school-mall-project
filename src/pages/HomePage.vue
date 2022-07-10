<template>
<div class="container">
  <!-- 头部导航栏 -->
   <div class="topBanner">
          <div></div>
      <div class="logo">
        <img src="../assets/Images/home/logo.png" alt="">
        <span>网易云音乐</span>
      </div>
      <!--  -->
      <div class="rightList">
         <div class="bannerList">
            <router-link class="link" active-class="active" to="/home/discover">发现音乐</router-link>
            <router-link div class="link" active-class="active" to="/home/my">我的音乐</router-link>
            <router-link div class="link" active-class="active" to="/home/follow">关注</router-link>
            <div class="link">商城</div>
            <div class="link">音乐人</div>
        <div>
          <span>下载客户端</span>
          <div class="icon"></div>
        </div>
         </div>
        <div class="Info">
          <el-input minlength=100 placeholder="音乐/视频/电台" prefix-icon="el-icon-search"></el-input>
          <div class="create">创作者中心</div>
          <img src="../assets/Images/home/logo.png" alt="">
        </div>
      </div>
   </div>
   <!-- 主要内容 -->
   <div class="main">
      <router-view></router-view>
   </div>
</div>
</template>
<script>
export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {}
}
</script>
<style scoped>
/* 头部导航栏 */
.topBanner {
  background-color: #242424;
  height: 60px;
  display: flex;
  padding: 0 200px;
}
/* logo样式 */
.logo {
  /* background-color: antiquewhite; */
  width: 200px;
  display: flex;
  align-items: center;
  justify-content:space-around;
}
img {
  width: 30px;
  height: 30px;
  border-radius: 50px;
  /* margin-right: 5px; */
}
.logo span {
  color: #fff;
  font-size: 22px;
}
/* 右侧样式 */
.rightList {
  width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: bisque; */
}
.bannerList {
  width: 450px;
  height: 60px;
  /* background-color: aquamarine; */
  display: flex;
  align-items: center;
  justify-content:space-around;
}
/* 列表样式 */
.bannerList .link {
  color: #fff;
  font-size: 14px;
}
.bannerList .link:hover {
  background-color: #000000;
}
.active {
  color: red;
  background-color: red;
}
/* 信息样式 */
.Info {
  width: 280px;
  display: flex;
  justify-content:space-between;
  align-items: center;
}
.Info el-input {
  border-radius: 30px;
}
.Info .create {
  width: 120px;
  padding: 9px 10px;
  border: #fff 1px solid;
  border-radius: 30px;
  height: 6px;
  line-height: 6px;
  font-size: 2px;
  color: #fff;
  margin: 0 10px;
}
</style>
