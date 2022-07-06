<template>
    <div class="container">
      <div class="topBanner">
         <!-- 左侧位置 -->
      <div class="location">
        <a href="javascript:;">
          <i class="el-icon-location"></i>
          <span>广东</span>
        </a>
      </div>
      <!-- 右侧菜单栏 -->
      <div>
        <ul>
          <li><a href="javascript:;">你好，请登录</a></li>
          <li>
            <a href="javascript:;">免费注册</a>
            <span>|</span>
          </li>
          <li>
            <a href="javascript:;">我的订单</a>
            <span>|</span>
          </li>
          <li>
            <a href="javascript:;">我的京东</a>
            <span>|</span>
          </li>
          <li>
            <a href="javascript:;">京东会员</a>
            <span>|</span>
          </li>
          <li>
            <a href="javascript:;">企业采购</a>
            <span>|</span>
          </li>
          <li>
            <a href="javascript:;">客服会员</a>
            <span>|</span>
          </li>
          <li>
            <a href="javascript:;">网站导航</a>
            <span>|</span>
          </li>
          <li>
            <a href="javascript:;">手机京东</a>
            <span>|</span>
          </li>
          <li><a href="javascript:;">网站无障碍</a></li>
        </ul>
      </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'TopBanner',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  background-color: #e3e4e5;
  height: 28px;
  line-height: 30px;
}
.topBanner {
  display: flex;
  margin: 0 164.6px;
  justify-content: space-between;
}
.location {
  float: left;
  font-size: 10px;
  color: #f10215;
}
.location a i {
  color: #f10215;
  font-size: 16px;
}
.location a span {
  margin-left: 4px;
}
.location a span:hover {
  color: #f10215;
}
ul li{
  float: left;
  font-size: 10px;
  color: rgb(186, 184, 184);
}
ul li:nth-child(2) a{
  color: #f10215 !important;
  margin-left: 8px;
}
a:hover{
  color: #f10215;
}
ul li span {
 color: #999;
 margin-left: 12px;
 margin-right: 12px;
}

</style>
