<template>
  <div class="user">
    <el-table
      border
      :data="users"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="创建日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="editBtn(scope.row)"></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="deleBtn(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="修改用户"
      :visible.sync="editDialog"
      width="50%">
      <el-form :model="editForm" ref="editRef">
        <el-form-item label="用户名：" label-width="120px">
          <el-input :disabled="isDisabled" v-model.trim="editForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密 码：" label-width="120px">
          <el-input v-model.trim="editForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialog = false">取 消</el-button>
        <el-button type="primary" @click="confirmEdit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'User',
  data() {
    return {
      editDialog: false,
      isDisabled: false,
      editForm: {
        username: '',
        password: '',
        date: ''
      }
    }
  },
  methods: {
    editBtn(row) {
      this.editForm.username = row.username
      this.editForm.password = row.password
      this.editForm.date = row.date
      if(row.username === 'admin') {
        this.isDisabled = true
      }else {
        this.isDisabled = false
      }
      this.editDialog = true
    },
    confirmEdit() {
      this.$store.commit('EDIT_USER', this.editForm)
      this.$message.success('修改成功')
      this.editDialog = false
    },
    deleBtn(row) {
       this.$confirm('确定要删除当前用户么, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.commit('DELE_USER', row)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  },
  computed: {
    ...mapState({
      users: state => state.users
    })
  }
}
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  height: 100%;
  .el-table {
    width: 70% !important;
  }
}
</style>