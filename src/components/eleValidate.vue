<template>
  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
      class="card-box login-form">

      <el-form-item prop="username">
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="用户名"/>
      </el-form-item>

      <el-form-item prop="password">
        <el-input name="password" v-model="loginForm.password" autoComplete="on"
          placeholder="密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" style="width:100%;">
          登陆
        </el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import validate from '../validate'

export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { validator: validate('name', '用户名由字母、数字、下划线以及短横线组成。', '用户名不能为空！'), trigger: 'blur' },
          { max: 50, message: '用户名最多为50个字符！', trigger: 'blur' }
        ],
        password: [
          { validator: validate('passWord', '密码由字母、数字及下划线组成。', '密码不能为空！'), trigger: 'blur' },
          { max: 25, message: '密码最多为25个字符！', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>
<style>
  .login-container {
    width: 300px;
    margin: 0 auto;
    margin-top: 100px;
  }
</style>
