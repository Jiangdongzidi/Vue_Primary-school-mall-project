<template>
    <div class="container">
        <!-- 轮播图 -->
        <div class="ratation">
            <div class="block">
                <!-- <span class="demonstration">Click 指示器触发</span> -->
                <el-carousel trigger="click" height="260px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                    <span>{{img[item-1]}}</span>
                </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Recommend',
  data () {
    return {
      img: [123, 456, 789, 100]
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.container {
    max-width: 900px;
    height: 700px;
    background-color: antiquewhite;
    margin: 0 auto;
}
/* 轮播图 */
.ratation {
    background-color: aqua;
}
</style>
