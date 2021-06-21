<template>
  <div class="goods">
    <div>
        <span>热爱生活的人</span>
        <el-divider direction="vertical"></el-divider>
        <span>生活也爱他</span>
        <el-divider></el-divider>
      </div>
    <div class="head_img">
      <img src="@/assets/imgs/banner01.jpeg" alt="" width="100%">
    </div>
    <el-row :gutter="20" style="margin: 0">
      <el-col :span="4">
        <el-card class="box-card" style="marginTop: 20px">
          <h1>Service</h1>
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
          <i class="el-icon-phone"></i> <span>+00225228</span><br>
          <i class="el-icon-message"></i> <span>email@163.com</span>
        </el-card>
      </el-col>
      <el-col :span="20">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card"> 
              <img src="@/assets/imgs/goods01.png" @click="toDetail(1)" height="400px" alt="">
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <img src="@/assets/imgs/goods02.png" @click="toDetail(2)" height="400px" alt="">
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <img src="@/assets/imgs/goods03.png" @click="toDetail(3)" height="400px" alt="">
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <img src="@/assets/imgs/goods04.png" @click="toDetail(4)"  height="400px" alt="">
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  data() {
    return {
      activeName: '1'
    }
  },
  methods: {
    toDetail(id) {
      this.$router.push(`/home/detail/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  .head_img {
    height: 234px;
    overflow: hidden;
  }
  .el-row {
    margin-top: 20px;
    .el-card:hover {
      box-shadow: 0px 0px 10px;
    }
    i {
      margin-top: 15px;
    }
  }
}
</style>