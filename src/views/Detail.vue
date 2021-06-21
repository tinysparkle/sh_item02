<template>
  <div class="detail_page">
    <div class="box">
      <div>
        <el-carousel :interval="2000" height="400px" direction="vertical">
          <el-carousel-item v-if="curId == 1">
            <img src="@/assets/imgs/goods01.png" alt="">
          </el-carousel-item>
          <el-carousel-item v-if="curId == 2">
            <img src="@/assets/imgs/goods02.png" alt="">
          </el-carousel-item>
          <el-carousel-item v-if="curId == 3">
            <img src="@/assets/imgs/goods03.png" alt="">
          </el-carousel-item>
          <el-carousel-item v-if="curId == 4">
            <img src="@/assets/imgs/goods04.png" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="right">
        <el-row type="flex" justify="start">
          <el-col :span="8">
            <div class="brand_materials">
              <span>品牌： Brand name</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="goods_color">
              <span>颜色： </span>
              <el-radio-group v-model="color">
                <el-radio-button label="灰色"></el-radio-button>
                <el-radio-button label="黑色"></el-radio-button>
              </el-radio-group>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start">
          <el-col :span="8">
            <div class="brand_materials">
              <span>材质： Wood, Leather, Acrylic</span>
            </div>
          </el-col>
          <el-col :span="6">
           <div class="goods_size">
            <span>尺寸： </span>
            <el-radio-group v-model="size">
              <el-radio-button label="S"></el-radio-button>
              <el-radio-button label="M"></el-radio-button>
              <el-radio-button label="L"></el-radio-button>
            </el-radio-group>
          </div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start">
          <el-col :span="24"></el-col>
          <el-col :span="2">
            <div class="goods_count">
              <el-button type="primary" @click="addShop">加入购物车</el-button>
              <el-button type="plain" @click="toDeal">去结算</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curId: 1,
      color: '',
      size: ''
    }
  },
  created() {
    this.curId = this.$route.params.id
  },
  methods: {
    addShop() {
      if(!this.color || !this.size) {
        this.$message.warning('请先选择颜色和尺码！')
        return
      }
      this.$notify({
          title: '成功',
          message: '添加购物车成功',
          type: 'success',
          duration: 1000
        });
    },
    toDeal() {
      this.$router.push('/home/shopping')
    }
  }
}
</script>

<style lang="scss" scoped>
.detail_page {
  .box {
    width: 1058px;
    height: 552px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    /deep/.el-carousel__container {
      width: 640px;
    }
    /deep/ .el-carousel__indicators--vertical{
      right: 40% !important;
    }
    // /deep/.el-carousel__button {
    //     background-color: #000;
    //   }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    .right {
      flex: 1;
      padding: 0 40px;
      h1 {
        font-size: 24px;
      }
      .price_desc {
        background-color: #ddd;
        color: #000;
        display: flex;
        justify-content: space-between;
        line-height: 32px;
        padding: 0 10px;
      }
      .goods_color {
        padding: 20px 10px;
        .el-button {
          border-radius: 0;
        }
      }
      .goods_size {
        padding: 0px 10px;
      }
      .goods_count {
        display: flex;
        padding: 20px 60px;
      }
      .service {
        padding: 0 10px;
        .service_item {
          margin-right: 5px;
        }
      }
    }
  }
  .brand_materials {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>