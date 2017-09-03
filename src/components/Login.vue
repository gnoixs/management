<template>
<div id="login">
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
  
<div class="span4 offset4">


  <div class="padded">
    <div class="login box" style="margin-top: 80px;">

      <div class="box-header">
        <span class="title">Login</span>
      </div>

      <div class="box-content padded">
        <form class="separate-sections">
          <div class="input-prepend">
          <span class="add-on" href="#">
            <i class="icon-user"></i>
          </span>
            <input type="text" placeholder="username">
          </div>

          <div class="input-prepend">
          <span class="add-on" href="#">
            <i class="icon-key"></i>
          </span>
            <input type="password" placeholder="password">
          </div>

          <div>
            <a class="btn btn-blue btn-block" href="../dashboard/dashboard.html">
                Login <i class="icon-signin"></i>
            </a>
          </div>

        </form>

        <div>
          <a href="sign_up.html">
              Don't have an account? <strong>Sign Up</strong>
          </a>
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
  name: 'login',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
