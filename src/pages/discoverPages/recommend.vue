<template>
    <div class="container">
        <!-- 轮播图 -->
        <div class="ratation">
            <div class="block">
                <el-carousel trigger="click" height="260px">
                <el-carousel-item v-for="bannerItem in bannerList" :key="bannerItem.id">
                    <img :src= "bannerItem.imageUrl" alt="">
                </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <!-- 内容区域 -->
        <div class="mainContainer">
          <el-container>
            <el-main>
              <div class="firstMain">
                <!-- 热门推荐导航栏 -->
                <div class="childBanner">
                  <div class="leftChild">
                      <div class="childRecommend">
                      <div class="icon"></div>
                      <span>热门推荐</span>
                    </div>
                    <div class="childList">
                      <div class="childItem">
                        <span>华语</span>
                        <span>|</span>
                        </div>
                      <div class="childItem">
                        <span>流行</span>
                        <span>|</span>
                        </div>
                      <div class="childItem">
                        <span>摇滚</span>
                        <span>|</span>
                        </div>
                      <div class="childItem">
                        <span>民谣</span>
                        <span>|</span>
                        </div>
                      <div class="childItem">
                        <span>电子</span>
                        </div>
                    </div>
                  </div>
                  <div class="more">
                    <span>更多</span>
                    <div class="moreIcon"></div>
                  </div>
                </div>
                <!-- 热门推荐数据 -->
                <div class="recommendData">
                  <!-- 图片div -->
                  <div class="dataImg">
                    <img src="" alt="">
                    <div class="dataIcon">
                      <!-- 播放量 -->
                      <div class="dataShow">
                        <img src="" alt="">
                         <span>1301万</span>
                      </div>
                      <!-- 播放按钮 -->
                      <img src="" alt="">
                    </div>
                  </div>
                  <!-- 底部解析 -->
                  <div class="dataExplain">
                    <span>国语珍藏</span>
                    <span>|</span>
                    <span>给你一张过去的CD</span>
                  </div>
                </div>
              </div>
            </el-main>
            <el-aside width="200px">Aside</el-aside>
          </el-container>
        </div>
        <!-- 底部 -->
        <div class="bottomArea">
          <BottomArea/>
        </div>

    </div>
</template>
<script>
import BottomArea from '../../components/BottomArea.vue'
export default {
  name: 'Recommend',
  components: { BottomArea },
  data () {
    return {
    // 轮播图数据
      bannerList: []
    }
  },
  created () {
    // 获取轮播图的数据
    this.getBannerList()
  },
  methods: {
    async getBannerList () {
      const { data: res } = await this.$http.get('banner', { type: 0 })
      if (res.code !== 200) {
        return '加载失败'
      }
      this.bannerList = res.banners
      console.log(res.banners)
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
.container {
    max-width: 900px;
    height: 900px;
    background-color: antiquewhite;
    margin: 0 auto;
    position: relative;
    border-left: 1px solid rgb(186, 183, 183);
    border-right: 1px solid rgb(186, 183, 183);
}
/* 轮播图 */
.ratation {
    background-color: aqua;
}
.ratation img{
    width: 900px;
    height: 260px;
}
/* 内容区域 */
/* 子内容区域导航栏 */
.childBanner {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #c10d0c;
  padding: 6px 10px;
  align-items: center;
  margin-right: 20px;
}
.leftChild {
  display: flex;
  align-items: center;
}
.childRecommend {
  display: flex;
  align-items: center;
}
.childRecommend .icon {
  width: 3px;
  height: 3px;
  border: 5px solid #c10d0c;
  border-radius: 50px;
  margin-right: 5px;
}
.childRecommend span {
  font-size: 18px;
  /* font-weight: bold; */
}
/* 列表 */
.childList {
  display: flex;
  margin-left: 14px;

}
.childList .childItem {
  color: #666666;
  font-size: 8px;
}
.childList .childItem span:last-child {
  margin: 0 11px;
}
/* 更多 */
.more {
  display: flex;
  align-items: center;
}
.moreIcon {
  margin-left: 7px;
  width: 6px;
  height: 2px;
  background-color: #c10d0c;
}

/* Aside 旁边样式 */
 .el-aside {
  border-left: 1px solid rgb(186, 183, 183);
}
/* 底部 */
.bottomArea{
    width: 100%;
    position: absolute;
    bottom: 0;
}
</style>
