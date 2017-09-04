<template>
  <div class="not-found">
    <div class="navbar navbar-top navbar-inverse">
      <div class="navbar-inner">
        <div class="container-fluid">

          <a class="brand" href="#">Core Admin</a>

          <!-- the new toggle buttons -->

          <ul class="nav pull-right">

            <li class="toggle-primary-sidebar hidden-desktop" data-toggle="collapse" data-target=".nav-collapse-primary"><button type="button" class="btn btn-navbar"><i class="icon-th-list"></i></button></li>

            <li class="hidden-desktop" data-toggle="collapse" data-target=".nav-collapse-top"><button type="button" class="btn btn-navbar"><i class="icon-align-justify"></i></button></li>

          </ul>



        </div>
      </div>
    </div>
    <div class="container">

      <div class="row-fluid">
        <div class="span8 offset2">
          <div class="error-box">
            <div class="message-small">未找到页面</div>
            <div class="message-big">404</div>
            <div class="message-small">You are not where you're supposed to be</div>

            <div style="margin-top: 50px">
              <router-link class="btn btn-blue" :to="{name: 'dashboard'}">
                <i class="icon-arrow-left"></i> 返回我的面板
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

</style>
