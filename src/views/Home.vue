<template>
  <el-container class="home_page">
    <el-header>
      <el-row type="flex" justify="end">
        <el-col :span="10">
          <el-menu
          mode="horizontal"
          :default-active="curIndex"
          @select="select"
          background-color="#000"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <span slot="title">HOME</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">PRODUCT OVERVIEW</span>
          </el-menu-item>
          <el-menu-item index="5">
            <span slot="title">SHOOPING CART</span>
          </el-menu-item>
          <!-- <el-menu-item index="2" v-if="isAdmin">
            <span slot="title">USER MANAGE</span>
          </el-menu-item> -->
        </el-menu>
        </el-col>
        <el-col :span="1" v-if="user" :pull="1">
          <el-dropdown placement="bottom-start" @command="handleCommand">
            <span class="el-dropdown-link">
              <p style="fontSize: 14px;lineHeight: 61px; margin: 0; height: 100%">{{ user | toUp }}</p>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus" command="1">切换用户</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus" command="2">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="2" v-else>
          <el-button  @click="login" style="background: #000; color: #fff;">Login</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
    select(index) {
      index == 1 ? this.$router.push('/home/welcome') : 
      index == 2 ? this.$router.push('/home/user') :
      index == 3 ? this.$router.push('/home/goods') :
      index == 4 ? this.$router.push('/home/analysis') :
      index == 5 ? this.$router.push('/home/shopping') : ''
    },
    handleCommand(command) {
      console.log(command);
      if(command == 1) {
        this.$router.push('/login')
      }else {
        sessionStorage.clear()
        location.reload();
      }
    }
  },
  filters: {
    toUp(val) {
      return val.toUpperCase()
    }
  },
  computed: {
    ...mapState({
      user: state => state.user,
      isAdmin: state => state.isAdmin
    }),
    curIndex() {
      let index = ''
      const name = this.$route.name
      if(name === 'Analysis') {
        index = '4'
      } else if(name === 'Goods') {
        index = '3'
      } else if(name === 'Welcome') {
        index = '1'
      } else if(name === 'User') {
        index = '2'
      } else if(name === 'Shopping') {
        index = '5'
      }
      return index 
    }
  }
}
</script>

<style lang="scss" scoped>
.home_page {
  width: 100%;
  height: 100%;
  .el-header {
    color: #fff;
    background-color: #000;
    border-bottom: 1px solid rgb(34, 33, 33);
    h4 {
      height: 100%;
      line-height: 100%;
    }
    .el-button {
      border-radius: 0;
      margin-top: 10px;
    }
  }
  .el-aside {
    background-color: #000;
    .el-menu {
      .el-menu-item {
        width: 249px !important;
        background-color: #000 !important;
      }
    }
  }
  .el-container {
    height: calc(100vh - 60px);
  }
  .el-dropdown-link {
    cursor: pointer;
  }
}
</style>
