<template>
  <div class="signup">
    <div class="navbar navbar-top navbar-inverse">
      <div class="navbar-inner">
        <div class="container-fluid">

          <a class="brand" href="#">管理端</a>

          <!-- the new toggle buttons -->

        <!--  <ul class="nav pull-right">

            <li class="toggle-primary-sidebar hidden-desktop" data-toggle="collapse"
                data-target=".nav-collapse-primary">
              <button type="button" class="btn btn-navbar"><i class="icon-th-list"></i></button>
            </li>

            <li class="hidden-desktop" data-toggle="collapse" data-target=".nav-collapse-top">
              <button type="button" class="btn btn-navbar"><i class="icon-align-justify"></i></button>
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
              <span class="title">注册</span>
            </div>

            <div class="box-content padded">
              <form class="separate-sections">

                <div class="input-prepend">
          <span class="add-on" href="#">
            <i class="icon-envelope"></i>
          </span>
                  <input type="text" placeholder="请输入邮箱">
                </div>

                <div class="input-prepend">
          <span class="add-on" href="#">
            <i class="icon-user"></i>
          </span>
                  <input type="text" placeholder="请输入用户名">
                </div>

                <div class="input-prepend">
          <span class="add-on" href="#">
            <i class="icon-key"></i>
          </span>
                  <input type="password" placeholder="请输入密码">
                </div>

                <div class="input-prepend">
          <span class="add-on" href="#">
            <i class="icon-key"></i>
          </span>
                  <input type="password" placeholder="请确认密码">
                </div>

                <div>
                  <a class="btn btn-blue btn-block" href="../dashboard/dashboard.html">
                    注册 <i class="icon-ok"></i>
                  </a>
                </div>

              </form>

              <div>
                <router-link class='link' :to="{name: 'login'}">
                  已有账户? <strong>登陆</strong>
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
  export default {
    name: 'signup',
    data(){
      return {}
    }
  }
</script>

<style scoped>

</style>
