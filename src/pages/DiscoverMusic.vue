<template>
    <div class="container">
      <div class="discoverBanner">
          <div class="bannerList">
            <router-link class="Item" active-class="active" to="/home/discover/recommend">推荐</router-link>
            <router-link class="Item" active-class="active" to="/home/discover/ranking">排行榜</router-link>
            <div class="Item">歌单</div>
            <div class="Item">主播电台</div>
            <div class="Item">歌手</div>
            <div class="Item">新碟上架</div>
          </div>
      </div>
      <!-- 发现音乐内容展示区 -->
      <div class="mainShow">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
export default {
  name: 'DiscoverMusic',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
/* 导航栏样式 */
.discoverBanner {
  background-color: #c20c0c;
  height: 30px;
  width: 100%;
  /* display: flex; */
  /* align-items: center; */
}
.discoverBanner .bannerList {
  max-width: 550px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background-color: antiquewhite; */
   margin: 0 auto;
  padding-top: 4px;

}
.bannerList .Item {
  font-size: 4px;
  color: #fff;
  padding: 3px 15px;

}
.active, .bannerList .Item:hover{
  background-color: #9b0909;
  border: #c20c0c 1px solid;
  border-radius: 50px;
}

</style>
