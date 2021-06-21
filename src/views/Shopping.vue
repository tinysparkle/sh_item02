<template>
  <div class="shopping_page">
    <div class="chunk">
      <div class="address"><span>收货地址</span></div>
      <el-card>
        <p>{{ user | toUp }}</p>
        <p>江苏 无锡市 北塘区</p>
        <p>民风西苑82号202室(214045)</p>
      </el-card>
    </div>
    <div class="chunk">
      <div class="address"><span>支付方式</span></div>
      <el-card>
        <el-checkbox-group v-model="checkboxGroup1" :max="1">
          <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </el-card>
    </div>
    <div class="chunk">
      <div class="address"><span>配送方式</span></div>
      <el-card>
        <el-checkbox label="快递配送(免运费)" checked border></el-checkbox>
      </el-card>
     </div>
     <div class="chunk">
      <div class="address"><span>送货时间</span></div>
      <el-card>
        <el-checkbox label="不限送货时间" border></el-checkbox>
        <el-checkbox label="工作日送货" border></el-checkbox>
        <el-checkbox label="双休日假日送货" checked border></el-checkbox>
      </el-card>
     </div>
    <el-row type="flex" justify="end">
      <el-col :span="2" style="display: flex; justifyContent: flex-end">
        <el-button type="success" @click="toDeal">确认付款</el-button>
      </el-col>
      <el-col :span="2" style="display: flex; justifyContent: flex-end">
        <el-button type="info" @click="goBack">再看看</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name:'Shopping',
  data() {
    return {
      tableData: [
        {
          id: 1,
          goodsInfo: '2021新款高腰中长款大码大摆裙子女夏系带褶皱胖MM连衣裙潮',
          color: '白色',
          size: 'S',
          price: '89.9',
          count: 1
        },
      ],
      cities: ['在线支付', '打白条', '花呗', '贷款'],
      checkboxGroup1: ['在线支付'],
    }
  },
  methods: {
    deleBtn(id) {
      for(let i in this.tableData) {
        if(this.tableData[i].id == id) {
          this.tableData.splice(i, 1)
        }
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    toDeal() {
       window.location.href = 'https://www.alipay.com/';
    },
    goBack() {
      this.$router.back()
    }
  },
  filters: {
    toUp(val) {
      return val.charAt(0).toUpperCase() + val.slice(1)
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  }
}
</script>

<style lang="scss" scoped>
.shopping_page {
  padding-bottom: 50px;
  .chunk {
    margin-bottom: 20px;
    .address {
      border-bottom: 1px solid rgb(173, 170, 170);
      padding: 10px 0;
    }
    .el-card {
      margin-top: 20px;
    }
  }
}
</style>