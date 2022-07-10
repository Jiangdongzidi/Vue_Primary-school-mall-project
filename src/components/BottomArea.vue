<template>
    <div class="bottomContainer">
        <div class="leftBottom">
            <div class="linkList">
                <a href="javascript:;">服务条款</a><span>|</span>
                <a href="javascript:;">隐私政策</a><span>|</span>
                <a href="javascript:;">儿童隐私政策</a><span>|</span>
                <a href="javascript:;">版权投诉</a><span>|</span>
                <a href="javascript:;">投资者关系</a><span>|</span>
                <a href="javascript:;">广告合作</a><span>|</span>
                <a href="javascript:;">廉正举报</a><span>|</span>
                <a href="javascript:;">联系我们</a>
            </div>
            <div class="explain">
                <div>
                    <span>网易公司版权所有©1997-2022杭州乐读科技有限公司运营：</span>
                     <a href="javascript:;">浙网文[2021] 1186-054号</a>
                </div>
                <div>
                    <a href="javascript:;">粤B2-20090191-18  工业和信息化部备案管理系统网站</a>
                    <a href="javascript:;">浙公网安备 33010902002564号</a>
                </div>
                <div>互联网宗教信息服务许可证：浙（2022）0000120</div>
            </div>
        </div>
        <div class="rightBottom">
            <div class="Items">
                <a href="javascript:;"><img src="../assets/Images/home/logo.png" alt=""></a>
                <span>Amped Studio</span>
            </div>
             <div class="Items">
                <a href="javascript:;"><img src="../assets/Images/home/logo.png" alt=""></a>
                <span>用户认证</span>
            </div>
             <div class="Items">
                <a href="javascript:;"><img src="../assets/Images/home/logo.png" alt=""></a>
                <span>独立音乐人</span>
            </div>
             <div class="Items">
                <a href="javascript:;"><img src="../assets/Images/home/logo.png" alt=""></a>
                <span>赞赏</span>
            </div>
             <div class="Items">
                <a href="javascript:;"><img src="../assets/Images/home/logo.png" alt=""></a>
                <span>视频奖励</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'BottomArea',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.bottomContainer {
    padding: 0 1px;
    height: 155px;
    display: flex;
    justify-content: space-between;
    background-color: #f2f2f2;
    border-top: 1px solid rgb(186, 183, 183);
}
/* 左侧 */
.leftBottom {
    width: 497px;
}
.linkList {
    margin-top: 20px;
}
.linkList a, .linkList span {
    font-size: 4px;
    color: #999999;
}
.linkList span {
    display: inline-block;
    margin: 0 3px;
}
.Items img {
    width: 45px;
    height: 45px;
    border-radius: 50px;
}
.explain div {
    margin-top: 8px;
}
.explain div:last-child{
    margin-top: 20px;
}
.explain span, .explain a, .explain div{
    font-size: 8px;
    color: #333;
}
/* 右侧 */
.rightBottom {
    width: 397px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.rightBottom .Items {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.Items span {
    color: #999999;
    font-size: 8px;
}
</style>
