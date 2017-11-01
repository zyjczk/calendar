<template>
  <div class="login-box">
    <span>用户名:</span></br><input v-model="user" type="text">
    <span>密码:</span></br><input v-model="password" type="text">
    <button class="btn btn-primary btn-block" @click="login">登录</button>
    <button class="btn btn-primary btn-block">注册</button>
  </div>
</template>

<script>

export default {
  data:function(){
    return {
      user:'',
      password:''
    }
  },
  methods:{
    login:function(){
      console.log(this.user);
      this.$router.push('note')
    }
  }
}
</script>

<style lang="scss">
  .login-box{
    width:50%;
    border:1px solid #fff;
    margin-top:25%;
    margin-left:25%;
    text-align: left;
    float:left;
    input{
      margin:10px 0;
      display: block;
      width:100%
    }
    button{
      margin-top:25px !important;
      
    }    
  }
</style>