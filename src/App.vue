<template>

  <div id="app">


      <router-view></router-view>


  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">

.content-top { 
  background-color:#212121; 
}

h1.title {
  font: Arial;
    font-size: 20px;
    font-weight: none;
    color: #FF9900;
    margin-top: 10px;
}

.video-div {
  background-color:#212121; padding-bottom: 10px;
}

.navbar5 {
    font-family: Tahoma;
    font-size: 12px;
    font-weight: none;
    text-decoration: none;
    color: #FFFF00;
    padding-left: 5px;
    padding-right: 20px;
}

p {
    font-size: 12px;
    line-height: 17px;
    color: #FFF;
}

h2.head {
    font-family: Arial;
    font-size: 20px;
    font-weight: 100;
    color: #FF9900;
    padding:10px 0 10px 0;
}

.gallery-content {
  background-color:#212121;
  padding:10px 0 10px 0;
}

.gallery-content .col-sm-9 {
  font-size: 12px;
  line-height: 17px;
  color: #FFF;
}

.style5 {
    font-size: 17px;
    color: #FFFFFF;
    font-weight: bold;
}

.style6 {
  font-size: 15px;
    color: #FFFFFF;
    font-weight: bold;
}

.style7 {
    color: #FFCC00;
    font-weight: bold;
}

.style15 {
  font-size: 12px;
    line-height: 17px;
    color: #FFF;
}

.border-bottom8 {
  border-bottom:1px solid #212121;
  padding-bottom: 10px;
  margin-bottom: 10px;
  display:block;
}

.border-bottom9 {
   border-bottom:1px solid #212121;
   margin-bottom: 10px;
}

.gallery-content img {
  margin-bottom: 10px;
}

.star {
  margin-top:6px;
}

@media only screen and (max-width: 600px) {

  .content-top {
    padding-bottom:10px;
  }
  

}


</style>
