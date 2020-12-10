<template>
  <div id="header">
     
    <b-container class="header" fluid="sm">
        <b-row>
          <b-col sm="2"></b-col>
          <b-col sm="10">
            <div class="title header-logo-title">CASINO NAME</div>
            <div class="slogan">Make Money with Best Casino Online</div>
          </b-col>
        
       </b-row>
   
    </b-container>

    <b-container class="navigation" fluid="sm">
        <b-row>
          <b-col sm="12">
          <b-navbar toggleable="lg" type="dark" variant="info">
           <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item href="#">Link</b-nav-item>
                  <b-nav-item href="#">Link</b-nav-item>
                  <b-nav-item href="#">Link</b-nav-item>
                  <b-nav-item href="#">Link</b-nav-item>
                  <b-nav-item href="#">Link</b-nav-item>
                  <b-nav-item href="#">Link</b-nav-item>
                  <b-nav-item v-b-modal.modal-1 href="#">Login</b-nav-item>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
        </b-col>
       </b-row>
    </b-container>

    <div>

    <Login />

    
</div>


    <b-container class="header-bottom" fluid="sm">
        <b-row>
          <b-col sm="3">
            <h2 class="head-title head-1">Top Casino Name</h2>
            <a href="#"><img src="../assets/images/casino-pic.jpg" class="img-responsive"></a>

          <b-row>
            <b-col sm="5">
              <img src="../assets/images/star-bult.jpg" height="19" width="19">
              <a href="#" class="navbar6">Visit Now</a>
            </b-col>
             <b-col sm="7">
              <img src="../assets/images/star-bult.jpg" height="19" width="19">
              <a href="#" class="navbar6">Download Now</a>
            </b-col>
          </b-row>

          </b-col>
          <b-col sm="3">
            <h2 class="head-title head-2">Top Casino Name</h2>
              <a href="#"><img src="../assets/images/casino-pic.jpg" class="img-responsive"></a>

                <b-row>
                <b-col sm="5">
                  <img src="../assets/images/star-bult.jpg" height="19" width="19">
                  <a href="#" class="navbar6">Visit Now</a>
                </b-col>
                <b-col sm="7">
                  <img src="../assets/images/star-bult.jpg" height="19" width="19">
                  <a href="#" class="navbar6">Download Now</a>
                </b-col>
              </b-row>

          </b-col>
          <b-col sm="3">
            <h2 class="head-title head-3">Top Casino Name</h2>
              <a href="#"><img src="../assets/images/casino-pic.jpg" class="img-responsive"></a>

              <b-row>
                <b-col sm="5">
                  <img src="../assets/images/star-bult.jpg" height="19" width="19">
                  <a href="#" class="navbar6">Visit Now</a>
                </b-col>
                <b-col sm="7">
                  <img src="../assets/images/star-bult.jpg" height="19" width="19">
                  <a href="#" class="navbar6">Download Now</a>
                </b-col>
              </b-row>

          </b-col>
          <b-col sm="3">
            <h2 class="head-title head-4">Top Casino Name</h2>
              <a href="#"><img src="../assets/images/casino-pic.jpg" class="img-responsive"></a>

              <b-row>
                <b-col sm="5">
                  <img src="../assets/images/star-bult.jpg" height="19" width="19">
                  <a href="#" class="navbar6">Visit Now</a>
                </b-col>
                <b-col sm="7">
                  <img src="../assets/images/star-bult.jpg" height="19" width="19">
                  <a href="#" class="navbar6">Download Now</a>
                </b-col>
              </b-row>

          </b-col>
       </b-row>
    </b-container>

  </div>

</template>

<script>

import Login from './Login.vue'

export default {
  name: 'Header',
  props: {
    msg: String
  } , 
  components: {
    Login
  }
}


</script>

<style lang="scss">

body {
  background-color:black!important;
}

@media (min-width: 1200px) {
  .container, .container-sm, .container-md, .container-lg, .container-xl {
      max-width: 990px!important;
  }
}

.header {
  background:url('../assets/images/header.jpg') no-repeat;
  background-size:cover;
  min-height: 255px;
}

.title {
    padding-left: 0px;
    font-family: Arial;
    font-size: 31px;
    font-weight: none;
    color: #000;
}

.slogan {
    font-family: Tahoma;
    font-size: 12px;
    font-weight: none;
    line-height: 18px;
    color: #000;
}

.navigation ,  .bg-info {
  background-image: linear-gradient(#FD1616, #9B0101);
}

.navbar-dark .navbar-nav .nav-link {
  font-family: Tahoma;
  font-size: 12px;
  text-decoration: none;
  color: #FFF;
  font-weight: none;
}

.navbar-nav .nav-item  {
  border-right:1px solid white;
  padding-left:47px;
  padding-right:47px;
}

.navbar-nav .nav-item:last-child {
  border-right:0px solid white;
}

.header-bottom {
  margin-top:10px;
}

.head-title {
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
  padding: 10px;
}

.head-1 {
  background-color:#FF8E04;
}

.head-2 {
  background-color:#92A609;
}

.head-3 {
  background-color:#BB0154;
}

.head-4 {
  background-color:#0197B8;
}

.img-responsive {
  width: auto;
  max-width: 100%;
  margin-bottom: 10px;
}

.navbar6 {
    font-family: Tahoma;
    font-size: 12px;
    font-weight: none;
    text-decoration: none;
    color: #FDFD67!important;  
}

.header-bottom {
  background:url('../assets/images/line.jpg') repeat-x bottom center;
  padding-bottom:20px;
}

@media only screen and (max-width: 600px) {

  .video-div {
    margin-bottom: 30px;
  }

  .navbar-nav .nav-item {
    padding:0;
    border-right: 0px solid white;
  }

  .head-title {
    margin-top:20px;
  }

  .head {
    margin-top:20px;
    margin-bottom:10px;
  }

  .img-responsive {
    margin-bottom:10px;
  }

  .header-logo-title {
    margin-top: 0px!important;
    margin-left:100px;
  }

  .slogan {
    margin-left:100px;
  }

}
</style>