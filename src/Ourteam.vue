<template>
  <div id="app">

    <Header />

    <b-container class="header-bottom" fluid="sm">
        <b-row>
         
          <Sidebar />

          <b-col sm="9" class="offset pull-left">

             <b-container class="content-top" fluid="sm">
              <b-row>
               <b-col sm="12">
                    <h1 class="title">Our team</h1>
               </b-col>
              </b-row>

            </b-container>

            <b-container class="content-top" fluid="sm">
                <b-row>
                  <b-col sm="12">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris at sem mattis elemen tump Etiam erat nunc, vene natis quis ultrices vulpu tate, iaculis ac odio. Nul lam non laoreet sapien. Morbi adipiscing, lacus non tempus port acl ligula tellus pulvinar neque, a sodales ligula nisl eget.
                    <br/><br/>
                    Aliquam cursus, lorem vitae blandit lobortis, felis mi laor eet arcu, ac vehic ula ig ula elit nec maurisp. Integer quis mauris sed odio.</p>
                  </b-col>

               

                </b-row>

            </b-container>
          </b-col>
        </b-row>
    </b-container>


     <Footer />

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header , Sidebar , Footer
  }
}
</script>

