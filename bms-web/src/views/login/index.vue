<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      label-position="left"
      class="login-form"
    >
      <div class="title-container">
        <h3>后台管理系统</h3>
      </div>

      <el-form-item prop="usename">
        <span class="svg-container">
          <svg-icon/>
        </span>
        <el-input v-model="loginForm.username" placeholder="账号"/>
      </el-form-item>

      <el-tooltip v-model="capsTooltip" manual content="大写字母已开启">
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon/>
          </span>
          <el-input
            v-model="loginForm.password"
            placeholder="密码"
            show-password
          />
        </el-form-item>
      </el-tooltip>

      <el-button type="primary">登录</el-button>

      <div style="position:relative">
        <div class="tips">
          <span>Username : admin</span>
          <span>Password : any</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">Username : editor</span>
          <span>Password : any</span>
        </div>

        <el-button
          class="thirdparty-button"
          type="primary"
          @click="showDialog = true"
        >
          Or connect with
        </el-button>
      </div>

      <el-dialog :visible.sync="showDialog" title="Or connect with">
        Can not be simulated on local, so please combine you own business
        simulation! ! !
        <br >
        <br >
        <br >
        <social-sign />
      </el-dialog>
    </el-form>
  </div>
</template>
<script>
import SocialSign from './components/social-sign'
export default {
  name: 'Login',
  components: { SocialSign },
  data() {
    return {
      capsTooltip: false,
      showDialog: false,
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [],
        password: []
      }
    }
  }
}
</script>
