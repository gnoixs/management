<template>
  <div class="dashboard">
    <!-- 顶部 -->
    <div class="navbar navbar-top navbar-inverse">
      <div class="navbar-inner">
        <div class="container-fluid">
          <a class="brand" href="#">Admin</a>
          <!-- 小屏幕下上方的菜单切换按钮 -->
          <ul class="nav pull-right">
            <li class="toggle-primary-sidebar hidden-desktop" data-toggle="collapse"
                data-target=".nav-collapse-primary">
              <button type="button" class="btn btn-navbar"><i class="icon-th-list"></i></button>
            </li>
            <li class="hidden-desktop" data-toggle="collapse" data-target=".nav-collapse-top">
              <button type="button" class="btn btn-navbar"><i class="icon-align-justify"></i></button>
            </li>
          </ul>

          <!-- 右侧功能按钮 -->
          <div class="nav-collapse nav-collapse-top collapse">
            <div class="nav full pull-right">
              <button class="btn btn-primary">注销</button>
            </div>
            <!--<ul class="nav full pull-right">
              <li class="dropdown user-avatar">
                &lt;!&ndash; the dropdown has a custom user-avatar class, this is the small avatar with the badge &ndash;&gt;
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <span>
                    &lt;!&ndash;<img class="menu-avatar" src="../../images/avatars/avatar1.jpg"/>&ndash;&gt; <span>John Smith <i
                    class="icon-caret-down"></i></span>
                    <span class="badge badge-dark-red">5</span>
                  </span>
                </a>
                <ul class="dropdown-menu">
                  &lt;!&ndash; the first element is the one with the big avatar, add a with-image class to it &ndash;&gt;
                  <li class="with-image">
                    <div class="avatar">
                      &lt;!&ndash;<img src="../../images/avatars/avatar1.jpg"/>&ndash;&gt;
                    </div>
                    <span>John Smith</span>
                  </li>
                  <li class="divider"></li>
                  <li><a href="#"><i class="icon-user"></i> <span>Profile</span></a></li>
                  <li><a href="#"><i class="icon-cog"></i> <span>Settings</span></a></li>
                  <li><a href="#"><i class="icon-envelope"></i> <span>Messages</span> <span
                    class="label label-dark-red pull-right">5</span></a></li>
                  <li><a href="#"><i class="icon-off"></i> <span>Logout</span></a></li>
                </ul>
              </li>
            </ul>
            <form class="navbar-search pull-right">
              <input type="text" class="search-query animated" placeholder="Search">
              <i class="icon-search"></i>
            </form>
            <ul class="nav pull-right">
              <li class="active"><a href="#" title="Go home"><i class="icon-home"></i> Home</a></li>
              <li><a href="#" title="Manage users"><i class="icon-user"></i> Users</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Some link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>


            </ul>-->
          </div>
        </div>
      </div>
    </div>

    <!-- 左边栏伪容器 -->
    <div class="sidebar-background">
      <div class="primary-sidebar-background"></div>
    </div>
    <!-- 左边菜单栏 -->
    <div class="primary-sidebar">
      <!-- Main nav -->
      <ul class="hide-dropdown-sidebar nav nav-collapse collapse nav-collapse-primary">
        <li class="">
          <span class="glow"></span>
          <a href="../forms/forms.html">
            <i class="icon-dashboard icon-2x"></i>
            <span>我的面板</span>
          </a>
        </li>
        <li class="">
          <span class="glow"></span>
          <a href="../forms/forms.html">
            <i class="icon-user icon-2x"></i>
            <span>会员管理</span>
          </a>
        </li>
        <li class="dark-nav">
          <span class="glow"></span>
          <a class="accordion-toggle collapsed " data-toggle="collapse" href="#MGQ8Y2bxhU">
            <i class="icon-list-alt icon-2x"></i>
            <span>
              注单管理
              <i class="icon-caret-down"></i>
            </span>
          </a>

          <ul id="MGQ8Y2bxhU" class="collapse ">

            <li class="">
              <a href="../ui_lab/buttons.html">
                <i class="icon-angle-right"></i> 注单搜索
              </a>
            </li>
            <li class="">
              <a href="../ui_lab/buttons.html">
                <i class="icon-angle-right"></i> 注销注单
              </a>
            </li>
          </ul>
        </li>
        <li class="dark-nav ">
          <span class="glow"></span>
          <a class="accordion-toggle collapsed " data-toggle="collapse" href="#kdbBFDPsQA">
            <i class="icon-credit-card icon-2x"></i>
            <span>
              现金管理
              <i class="icon-caret-down"></i>
            </span>
          </a>
          <ul id="kdbBFDPsQA" class="collapse ">
            <li class="">
              <a href="../other/wizard.html">
                <i class="icon-magic"></i> 存取款明细
              </a>
            </li>
            <li class="">
              <a href="../other/login.html">
                <i class="icon-user"></i> 회원 설정
              </a>
            </li>
            <li class="">
              <a href="../other/sign_up.html">
                <i class="icon-user"></i> 메인페이지 설정
              </a>
            </li>
          </ul>

        </li>
        <li class="dark-nav ">
          <span class="glow"></span>
          <a class="accordion-toggle collapsed " data-toggle="collapse" href="#kdbBFDPsQA1">
            <i class="icon-link icon-2x"></i>
            <span>
              游戏设定
              <i class="icon-caret-down"></i>
            </span>
          </a>
          <ul id="kdbBFDPsQA1" class="collapse ">
            <li class="">
              <a href="../other/wizard.html">
                <i class="icon-magic"></i> 交易设定
              </a>
            </li>
            <li class="">
              <a href="../other/login.html">
                <i class="icon-user"></i> 赔率设定
              </a>
            </li>
            <li class="">
              <a href="../other/sign_up.html">
                <i class="icon-user"></i> 退水参照
              </a>
            </li>
            <li class="">
              <a href="../other/sign_up.html">
                <i class="icon-user"></i> 小球退水参照
              </a>
            </li>
            <li class="">
              <a href="../other/sign_up.html">
                <i class="icon-user"></i> 小球赔率设定
              </a>
            </li>
            <li class="">
              <a href="../other/sign_up.html">
                <i class="icon-user"></i> 跟单设置
              </a>
            </li>
            <li class="">
              <a href="../other/sign_up.html">
                <i class="icon-user"></i> 配置
              </a>
            </li>
          </ul>
        </li>
        <li class="dark-nav ">
          <span class="glow"></span>
          <a class="accordion-toggle collapsed " data-toggle="collapse" href="#kdbBFDPsQA2">
            <i class="icon-link icon-2x"></i>
            <span>
              历史开奖
              <i class="icon-caret-down"></i>
            </span>
          </a>
          <ul id="kdbBFDPsQA2" class="collapse ">
            <li class="">
              <a href="../other/wizard.html">
                <i class="icon-magic"></i> 北京赛车
              </a>
            </li>
            <li class="">
              <a href="../other/login.html">
                <i class="icon-user"></i> 重庆时时彩
              </a>
            </li>
            <li class="">
              <a href="../other/sign_up.html">
                <i class="icon-user"></i> 幸运飞艇
              </a>
            </li>
            <li class="">
              <a href="../other/sign_up.html">
                <i class="icon-user"></i> PC蛋蛋
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <!-- Small main nav 小导航切换（非必要元素） -->
      <!-- <ul class="hide-collapse-sidebar nav nav-collapse collapse nav-collapse-primary">


         <li class="active">
           <span class="glow"></span>
           <a href="dashboard.html">
             <i class="icon-dashboard icon-2x"></i>
             <span>Dashboard</span>
           </a>
         </li>


         <li class="dark-nav to-right ">

           <span class="glow"></span>
           <a class="dropdown-toggle" data-toggle="dropdown" href="../ui_lab/buttons.html">
             <i class="icon-beaker icon-2x"></i>
             <span>
                       UI Lab
                       <i class="icon-caret-right"></i>
                     </span>

           </a>

           <ul class="dropdown-menu">

             <li class="">
               <a href="../ui_lab/buttons.html">
                 <i class="icon-hand-up"></i> Buttons
               </a>
             </li>

             <li class="">
               <a href="../ui_lab/general.html">
                 <i class="icon-beaker"></i> General elements
               </a>
             </li>

             <li class="">
               <a href="../ui_lab/icons.html">
                 <i class="icon-info-sign"></i> Icons
               </a>
             </li>

             <li class="">
               <a href="../ui_lab/grid.html">
                 <i class="icon-th-large"></i> Grid
               </a>
             </li>

             <li class="">
               <a href="../ui_lab/tables.html">
                 <i class="icon-table"></i> Tables
               </a>
             </li>

             <li class="">
               <a href="../ui_lab/widgets.html">
                 <i class="icon-plus-sign-alt"></i> Widgets
               </a>
             </li>

           </ul>

         </li>


         <li class="">
           <span class="glow"></span>
           <a href="../forms/forms.html">
             <i class="icon-edit icon-2x"></i>
             <span>Forms</span>
           </a>
         </li>


         <li class="">
           <span class="glow"></span>
           <a href="../charts/charts.html">
             <i class="icon-bar-chart icon-2x"></i>
             <span>Charts</span>
           </a>
         </li>


         <li class="dark-nav to-right ">

           <span class="glow"></span>
           <a class="dropdown-toggle" data-toggle="dropdown" href="../other/wizard.html">
             <i class="icon-link icon-2x"></i>
             <span>
                       Others
                       <i class="icon-caret-right"></i>
                     </span>

           </a>

           <ul class="dropdown-menu">

             <li class="">
               <a href="../other/wizard.html">
                 <i class="icon-magic"></i> Wizard
               </a>
             </li>

             <li class="">
               <a href="../other/login.html">
                 <i class="icon-user"></i> Login Page
               </a>
             </li>

             <li class="">
               <a href="../other/sign_up.html">
                 <i class="icon-user"></i> Sign Up Page
               </a>
             </li>

             <li class="">
               <a href="../other/full_calendar.html">
                 <i class="icon-calendar"></i> Full Calendar
               </a>
             </li>

             <li class="">
               <a href="../other/error404.html">
                 <i class="icon-ban-circle"></i> Error 404 page
               </a>
             </li>

           </ul>

         </li>


       </ul>-->
      <!-- 左侧统计等 -->
      <!--     <div class="hide-dropdown-sidebar hidden-tablet hidden-phone">
         <div class="text-center" style="margin-top: 60px">
           <div class="easy-pie-chart-percent" style="display: inline-block" data-percent="89"><span>89%</span></div>
           <div style="padding-top: 20px"><b>CPU Usage</b></div>
         </div>

         <hr class="divider" style="margin-top: 60px">

         <div class="sparkline-box side">

           <div class="sparkline-row">
             <h4 class="gray"><span>Orders</span> 847</h4>
             <div class="sparkline big" data-color="gray">&lt;!&ndash;28,10,19,23,9,19,24,8,29,27,24,21&ndash;&gt;</div>
           </div>

           <hr class="divider">
           <div class="sparkline-row">
             <h4 class="dark-green"><span>Income</span> $43.330</h4>
             <div class="sparkline big" data-color="darkGreen">&lt;!&ndash;27,4,10,16,5,20,3,24,6,18,25,20&ndash;&gt;</div>
           </div>

           <hr class="divider">
           <div class="sparkline-row">
             <h4 class="blue"><span>Reviews</span> 223</h4>
             <div class="sparkline big" data-color="blue">&lt;!&ndash;22,20,24,29,23,11,25,15,29,10,19,28&ndash;&gt;</div>
           </div>

           <hr class="divider">
         </div>
       </div>-->
    </div>

    <!-- main content 主要内容区域 -->
    <div class="main-content">
      <div class="container-fluid">
        <div class="row-fluid">
          <div class="area-top clearfix">
            <div class="pull-left header col-md-5">
              <!-- 通知框2个-->
              <!--<div class="row">
                <div class="col-md-4">
                  <a href="#">
                      <div class="well relative">
                        <span class="triangle-button green">
                          <i class="icon-bell"></i>
                        </span>
                        <span>入款等待</span>
                        <span class="badge badge-green">0</span>
                      </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="#">
                    <div class="well relative second">
                        <span class="triangle-button blue">
                          <i class="icon-bell"></i>
                        </span>
                      <span>出款等待</span>
                      <span class="badge badge-blue">0</span>
                    </div>
                  </a>
                </div>
              </div>-->

              <div class="span3">
                <div class="well relative">
                  <span class="triangle-button green"><i class="icon-bell"></i></span>
                  入款等待
                  <span class="badge badge-green">100000</span>
                </div>
              </div>

              <div class="span3">
                <div class="well relative">
                  <span class="triangle-button blue"><i class="icon-bell"></i></span>
                  入款等待
                  <span class="badge badge-blue">200000</span>
                </div>
              </div>





            </div>
            <ul class="inline pull-right sparkline-box">
              <li class="sparkline-row">
                <h4 class="blue"><span>本周入款</span> 847</h4>
                <div class="sparkline big" data-color="blue"><!--19,20,8,3,25,13,23,9,17,29,19,16--></div>
              </li>
              <li class="sparkline-row">
                <h4 class="green"><span>本周出款</span> 223</h4>
                <div class="sparkline big" data-color="green"><!--4,29,19,19,21,6,5,9,25,9,16,13--></div>
              </li>
              <li class="sparkline-row">
                <h4 class="red"><span>在线人数</span> 7930</h4>
                <div class="sparkline big"><!--7,21,7,23,23,12,3,28,16,11,19,7--></div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container-fluid padded">
        <div class="row-fluid">

          <!-- Breadcrumb line -->

          <div id="breadcrumbs">
            <div class="breadcrumb-button blue">
              <span class="breadcrumb-label"><i class="icon-home"></i> Home</span>
              <span class="breadcrumb-arrow"><span></span></span>
            </div>


            <div class="breadcrumb-button">
          <span class="breadcrumb-label">
            <i class="icon-dashboard"></i> Dashboard
          </span>
              <span class="breadcrumb-arrow"><span></span></span>
            </div>
          </div>
        </div>
      </div>

  <!--<div class="container-fluid padded">
        <div class="row-fluid">

          <div class="span3">
            &lt;!&ndash; find me in partials/action_nav_normal &ndash;&gt;

            &lt;!&ndash;big normal buttons&ndash;&gt;
            <div class="action-nav-normal">

              <div class="row-fluid">
                <div class="span6 action-nav-button">
                  <a href="#" title="New Project">
                    <i class="icon-file-alt"></i>
                    <span>New Project</span>
                  </a>
                  <span class="triangle-button red"><i class="icon-plus"></i></span>
                </div>

                <div class="span6 action-nav-button">
                  <a href="#" title="Messages">
                    <i class="icon-comments-alt"></i>
                    <span>Messages</span>
                  </a>
                  <span class="label label-black">14</span>
                </div>
              </div>

              <div class="row-fluid">
                <div class="span6 action-nav-button">
                  <a href="#" title="Files">
                    <i class="icon-folder-open-alt"></i>
                    <span>Files</span>
                  </a>
                </div>

                <div class="span6 action-nav-button">
                  <a href="#" title="Users">
                    <i class="icon-user"></i>
                    <span>Users</span>
                  </a>
                  <span class="triangle-button green"><span class="inner">+3</span></span>
                </div>
              </div>

              <div class="row-fluid">
                <div class="span6 action-nav-button">
                  <a href="#" title="Friends">
                    <i class="icon-facebook-sign"></i>
                    <span>Friends</span>
                  </a>
                </div>

                <div class="span6 action-nav-button">
                  <a href="#" title="Followers">
                    <i class="icon-twitter"></i>
                    <span>Followers</span>
                  </a>
                  <span class="triangle-button blue"><span class="inner">+8</span></span>
                </div>
              </div>

            </div>
          </div>

          <div class="span9">
            &lt;!&ndash; find me in partials/big_chart &ndash;&gt;

            <div class="box">
              <div class="box-header">
                <div class="title">Charts</div>
                <ul class="box-toolbar">
                  <li class="toolbar-link">
                    <a href="#" data-toggle="dropdown"><i class="icon-cog"></i></a>
                    <ul class="dropdown-menu">
                      <li><a href="#"><i class="icon-plus-sign"></i> Add</a></li>
                      <li><a href="#"><i class="icon-remove-sign"></i> Remove</a></li>
                      <li><a href="#"><i class="icon-pencil"></i> Edit</a></li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div class="box-content padded">
                <div class="row-fluid">
                  <div class="span4 separate-sections" style="margin-top: 5px;">

                    <div class="row-fluid">
                      <div class="span12">
                        <div class="dashboard-stats">
                          <ul class="inline">
                            <li class="glyph"><i class="icon-bolt icon-2x"></i></li>
                            <li class="count">973,119</li>
                          </ul>
                          <div class="progress progress-blue">
                            <div class="bar tip" title="80%" data-percent="80"></div>
                          </div>
                          <div class="stats-label">Total Visits</div>
                        </div>
                      </div>
                    </div>

                    <div class="row-fluid" style="margin-top:30px;">
                      <div class="span6">
                        <div class="dashboard-stats small">
                          <ul class="inline">
                            <li class="glyph"><i class="icon-user"></i></li>
                            <li class="count">8800</li>
                          </ul>
                          <div class="progress progress-blue">
                            <div class="bar tip" title="65%" data-percent="65"></div>
                          </div>
                          <div class="stats-label">New Visitors</div>
                        </div>
                      </div>

                      <div class="span6">
                        <div class="dashboard-stats small">
                          <ul class="inline">
                            <li class="glyph"><i class="icon-eye-open"></i></li>
                            <li class="count">25668</li>
                          </ul>
                          <div class="progress progress-blue">
                            <div class="bar tip" title="80%" data-percent="80"></div>
                          </div>
                          <div class="stats-label">Page Views</div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="span8">
                    <div class="sine-chart" id="xchart-sine"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="row-fluid">
          <div class="span6">
            <div class="box">
              <div class="box-header">
                <div class="title">Full calendar</div>
              </div>

              <div class="box-content">
                <div id="calendar"></div>
              </div>
            </div>
          </div>

          <div class="span6">
            <div class="box">
              <div class="box-header">
                <span class="title">News with avatars (scrollable box)</span>
                <ul class="box-toolbar">
                  <li><span class="label label-blue">178</span></li>
                </ul>
              </div>
              <div class="box-content scrollable" style="height: 552px; overflow-y: auto">
                &lt;!&ndash; find me in partials/news_with_icons &ndash;&gt;

                <div class="box-section news with-icons">
                  <div class="avatar blue"><i class="icon-ok icon-2x"></i></div>
                  <div class="news-time">
                    <span>06</span> jan
                  </div>
                  <div class="news-content">
                    <div class="news-title"><a href="#">Twitter Bootstrap v3.0 is coming!</a></div>
                    <div class="news-text">
                      With 2.2.2 out the door, our attention has shifted almost entirely to the next major update to the project ...
                    </div>
                  </div>
                </div>

                <div class="box-section news with-icons">
                  <div class="avatar green"><i class="icon-lightbulb icon-2x"></i></div>
                  <div class="news-time">
                    <span>11</span> feb
                  </div>
                  <div class="news-content">
                    <div class="news-title"><a href="#">Ruby on Rails 4.0</a></div>
                    <div class="news-text">
                      Rails 4.0 is still unfinished, but it is shaping up to become a great release ...
                    </div>
                  </div>
                </div>

                <div class="box-section news with-icons">
                  <div class="avatar purple"><i class="icon-mobile-phone icon-2x"></i></div>
                  <div class="news-time">
                    <span>04</span> mar
                  </div>
                  <div class="news-content">
                    <div class="news-title"><a href="#">All about SCSS</a></div>
                    <div class="news-text">
                      Sass makes CSS fun again. Sass is an extension of CSS3, adding nested rules ...
                    </div>
                  </div>
                </div>


                <div class="box-section news with-icons">
                  <div class="avatar cyan"><i class="icon-ok icon-2x"></i></div>
                  <div class="news-time">
                    <span>22</span> dec
                  </div>
                  <div class="news-content">
                    <div class="news-title"><a href="#">Twitter Bootstrap v3.0 is coming!</a></div>
                    <div class="news-text">
                      With 2.2.2 out the door, our attention has shifted almost entirely to the next major update to the project ...
                    </div>
                  </div>
                </div>


                &lt;!&ndash; find me in partials/news_with_icons &ndash;&gt;

                <div class="box-section news with-icons">
                  <div class="avatar blue"><i class="icon-ok icon-2x"></i></div>
                  <div class="news-time">
                    <span>06</span> jan
                  </div>
                  <div class="news-content">
                    <div class="news-title"><a href="#">Twitter Bootstrap v3.0 is coming!</a></div>
                    <div class="news-text">
                      With 2.2.2 out the door, our attention has shifted almost entirely to the next major update to the project ...
                    </div>
                  </div>
                </div>

                <div class="box-section news with-icons">
                  <div class="avatar green"><i class="icon-lightbulb icon-2x"></i></div>
                  <div class="news-time">
                    <span>11</span> feb
                  </div>
                  <div class="news-content">
                    <div class="news-title"><a href="#">Ruby on Rails 4.0</a></div>
                    <div class="news-text">
                      Rails 4.0 is still unfinished, but it is shaping up to become a great release ...
                    </div>
                  </div>
                </div>

                <div class="box-section news with-icons">
                  <div class="avatar purple"><i class="icon-mobile-phone icon-2x"></i></div>
                  <div class="news-time">
                    <span>04</span> mar
                  </div>
                  <div class="news-content">
                    <div class="news-title"><a href="#">All about SCSS</a></div>
                    <div class="news-text">
                      Sass makes CSS fun again. Sass is an extension of CSS3, adding nested rules ...
                    </div>
                  </div>
                </div>


                <div class="box-section news with-icons">
                  <div class="avatar cyan"><i class="icon-ok icon-2x"></i></div>
                  <div class="news-time">
                    <span>22</span> dec
                  </div>
                  <div class="news-content">
                    <div class="news-title"><a href="#">Twitter Bootstrap v3.0 is coming!</a></div>
                    <div class="news-text">
                      With 2.2.2 out the door, our attention has shifted almost entirely to the next major update to the project ...
                    </div>
                  </div>
                </div>


                &lt;!&ndash; find me in partials/news_with_icons &ndash;&gt;

                <div class="box-section news with-icons">
                  <div class="avatar blue"><i class="icon-ok icon-2x"></i></div>
                  <div class="news-time">
                    <span>06</span> jan
                  </div>
                  <div class="news-content">
                    <div class="news-title"><a href="#">Twitter Bootstrap v3.0 is coming!</a></div>
                    <div class="news-text">
                      With 2.2.2 out the door, our attention has shifted almost entirely to the next major update to the project ...
                    </div>
                  </div>
                </div>

                <div class="box-section news with-icons">
                  <div class="avatar green"><i class="icon-lightbulb icon-2x"></i></div>
                  <div class="news-time">
                    <span>11</span> feb
                  </div>
                  <div class="news-content">
                    <div class="news-title"><a href="#">Ruby on Rails 4.0</a></div>
                    <div class="news-text">
                      Rails 4.0 is still unfinished, but it is shaping up to become a great release ...
                    </div>
                  </div>
                </div>

                <div class="box-section news with-icons">
                  <div class="avatar purple"><i class="icon-mobile-phone icon-2x"></i></div>
                  <div class="news-time">
                    <span>04</span> mar
                  </div>
                  <div class="news-content">
                    <div class="news-title"><a href="#">All about SCSS</a></div>
                    <div class="news-text">
                      Sass makes CSS fun again. Sass is an extension of CSS3, adding nested rules ...
                    </div>
                  </div>
                </div>


                <div class="box-section news with-icons">
                  <div class="avatar cyan"><i class="icon-ok icon-2x"></i></div>
                  <div class="news-time">
                    <span>22</span> dec
                  </div>
                  <div class="news-content">
                    <div class="news-title"><a href="#">Twitter Bootstrap v3.0 is coming!</a></div>
                    <div class="news-text">
                      With 2.2.2 out the door, our attention has shifted almost entirely to the next major update to the project ...
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

        <div class="row-fluid">
          <div class="span12">

            <ul class="chat-box timeline">

              <li class="arrow-box-left gray">
                &lt;!&ndash;<div class="avatar"><img class="avatar-small" src="../../images/avatars/avatar1.jpg"/></div>&ndash;&gt;
                <div class="info">
      <span class="name">
        <span class="label label-green">COMMENT</span> <strong class="indent">Alex</strong> posted a comment on this task: <strong>Core Admin</strong>
      </span>
                  <span class="time"><i class="icon-time"></i> 3 minutes ago</span>
                </div>
                <div class="content">
                  <blockquote>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </blockquote>
                  <div>
                    <a href="#"><i class="icon-paper-clip"></i> <b>project_news.docx</b></a>
                  </div>
                </div>
              </li>

              <li class="arrow-box-left gray">
               &lt;!&ndash; <div class="avatar"><img class="avatar-small" src="../../images/avatars/avatar2.jpg"/></div>&ndash;&gt;
                <div class="info">
      <span class="name">
        <span class="label label-blue">TASK</span> <strong class="indent">Michael</strong> completed this task: <strong
        class="strikethrough">Core Admin</strong>
      </span>
                  <span class="time"><i class="icon-time"></i> 6 minutes ago</span>
                </div>
              </li>

              <li class="arrow-box-left gray">
                &lt;!&ndash;<div class="avatar"><img class="avatar-small" src="../../images/avatars/avatar3.jpg"/></div>&ndash;&gt;
                <div class="info">
      <span class="name">
        <span class="label label-purple">FILE</span> <strong class="indent">Michael</strong> added 3 new files in project: <strong>Core Admin</strong>
      </span>
                  <span class="time"><i class="icon-time"></i> 12 minutes ago</span>
                </div>
                <div class="content">
                  <ul class="thumbnails padded">

                    <li class="span3">
                      <a href="#" class="thumbnail">
                        <img src="http://placehold.it/240x100" alt="">
                      </a>
                    </li>

                    <li class="span3">
                      <a href="#" class="thumbnail">
                        <img src="http://placehold.it/240x100" alt="">
                      </a>
                    </li>

                    <li class="span3">
                      <a href="#" class="thumbnail">
                        <img src="http://placehold.it/240x100" alt="">
                      </a>
                    </li>

                  </ul>
                </div>
              </li>
            </ul>

            <div class="box closable-chat-box">
              <div class="box-content padded">

                <div class="fields">
                  <div class="avatar">&lt;!&ndash;<img class="avatar-small" src="../../images/avatars/avatar2.jpg"/>&ndash;&gt;</div>
                  <ul>
                    <li><b>Add a comment for project <a href="#">Core Admin</a></b></li>
                    <li class="note">Click on the textarea below to expand it!</li>
                  </ul>
                </div>

                <form class="fill-up" action="/">

                  <div class="chat-message-box">
                    <textarea name="ttt" id="ttt" rows="5" placeholder="add a comment (click to expand!)"></textarea>
                  </div>

                  <div class="clearfix actions">
                    <span class="note">An optional note can go here</span>
                    <div class="pull-right faded-toolbar">
                      <a href="#" class="tip" title="Attach files"><i class="icon-paper-clip"></i></a>
                      <a href="#" class="btn btn-blue btn-mini">Send</a>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>

      </div>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dashboard',
    created(){

    },
    data(){
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .area-top .header i.icon-bell{
    float: none;
    font-size: 14px;
    margin-top: 0;
    margin-right: 0;
    color: #ffffff;
  }

  .pull-left .span3{
    min-width: 114px; 
  }

  .nav-collapse .btn{
    margin-top: 8px;
  }



</style>
