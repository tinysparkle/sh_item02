<template>
  <div>
    <div class="side_show">
      <div>
        <span>现代家居</span>
        <el-divider direction="vertical"></el-divider>
        <span>改变生活</span>
        <el-divider></el-divider>
      </div>
      <el-carousel height="500px">
        <el-carousel-item>
          <img src="@/assets/imgs/banner02.jpeg"  width="1496px" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/imgs/banner01.jpeg" width="1496px" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/imgs/banner03.jpeg" width="1496px" alt="">
        </el-carousel-item>
        <div class="carousel_desc">
          <h2>Modern furniture theme</h2>
          <p>Modern & powerfull template.</p>
          <p>Clean design & reponsive layout. Google fonts integration</p>
        </div>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.side_show {
  width: 100%;
  height: 100%;
  .el-carousel {
    position: relative;
  }
  .carousel_desc {
    position: absolute;
    top: 25%;
    left: 10%;
    z-index: 99;
    color: #fff;
    h2 {
      font-size: 48px;
    }
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  /deep/ .el-carousel__indicator {
    .el-carousel__button {
      background-color: #333;
    }
  }
}
</style>