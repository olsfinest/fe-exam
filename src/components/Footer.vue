<template>
  <div id="footer">

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
                  <b-nav-item href="#">Link</b-nav-item>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
        </b-col>
       </b-row>
    </b-container>

    <b-container  fluid="sm">
        <b-row>
          <b-col sm="12">

            <p class="txt-2">Template created by <a target="_blank" href="http://www.casinotemplates.net" class="style8">casino templates</a> &amp; <a target="_blank" href="http://www.usaonlinecasinos.org" class="style8">usaonlinecasinos.org</a></p>

          </b-col>
       </b-row>
    </b-container>

   
  </div>



</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">

.txt-2 {
      font-size: 12px;
    line-height: 17px;
    color: #FFF;
    text-align:center;
    margin-top:10px;
}

.style8 {
    color: #AEEB6D;
    text-decoration:none;
}


</style>