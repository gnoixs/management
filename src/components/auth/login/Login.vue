<template>
  <div id="login">
    <div class="navbar navbar-top navbar-inverse">
      <div class="navbar-inner">
        <div class="container-fluid">

          <a class="brand" href="#">管理端</a>

          <!-- the new toggle buttons -->

          <!--<ul class="nav pull-right">

            <li class="toggle-primary-sidebar hidden-desktop"
                data-toggle="collapse"
                data-target=".nav-collapse-primary">
              <button type="button" class="btn btn-navbar">
                <i class="icon-th-list"></i>
              </button>
            </li>

            <li class="hidden-desktop"
                data-toggle="collapse"
                data-target=".nav-collapse-top">
              <button type="button" class="btn btn-navbar">
                <i class="icon-align-justify"></i>
              </button>
            </li>
          </ul>-->

        </div>
      </div>
    </div>
    <div class="container">

      <div class="span4 offset4">


        <div class="padded">
          <div class="login box" style="margin-top: 80px;">

            <div class="box-header">
              <span class="title">登陆</span>
            </div>

            <div class="box-content padded">
              <form class="separate-sections">
                <div class="input-prepend">
          <span class="add-on" href="#">
            <i class="icon-user"></i>
          </span>
                  <input type="text" placeholder="请输入用户名" v-model="User.user_name">
                </div>

                <div class="input-prepend">
          <span class="add-on" href="#">
            <i class="icon-key"></i>
          </span>
                  <input type="password" placeholder="请输入密码" v-model="User.user_passwd">
                </div>

                <div>
                  <a class="btn btn-blue btn-block" @click.prevent="onSubmit">
                    登陆 <i class="icon-signin"></i>
                  </a>
                </div>

              </form>

              <div>
                <router-link class='link' :to="{name: 'signup'}">
                  还没有账号? <strong>注册</strong>
                </router-link>
              </div>
            </div>

          </div>

          <div class="row-fluid">
            <div class="span6">
              <a href="#" class="btn btn-facebook btn-block"><i class="icon-facebook-sign"></i> Facebook</a>
            </div>
            <div class="span6">
              <a href="#" class="btn btn-twitter btn-block"><i class="icon-twitter"></i> Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {PATH_LOGIN} from '@/assets/scripts/interfaces.js'
  //import axios from 'axios'
  import { setStorage } from '@/assets/scripts/sessionStorage.js'
  export default {
    name: 'login',
    created(){
      //console.log(PATH_LOGIN);
    },
    data () {
      return {
          User:{
            user_name: '',
            user_passwd: ''
          },
        errorMsg: ''
      }
    },
    methods: {
        onSubmit(){
          if(this.User.user_name == ''){
              this.errorMsg = '用户名不能为空!';
              return
          }else if(/[a-zA-Z0-9_]{3,16}/.test(this.User.user_name)){
              this.errorMsg = '用户名必须是3到16位数字字母或下划线组合!';
          }
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
