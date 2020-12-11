<template>
  <div id="login">

    <b-modal id="modal-1" title="Login">

        <b-form-input type="text" v-model="text" placeholder="Enter your email"></b-form-input><br/>

        <b-form-input type="password" v-model="password" placeholder="Enter your password"></b-form-input><br/>

        <b-button variant="outline-primary" v-on:click="login">Login</b-button>

        <br/>

        <p style="color:red; padding-top:10px;" id="text-report"></p>
        
    </b-modal>

   
  </div>

</template>

<script>

export default {

  name: 'Login',
  props: {
    msg: String
  } ,
  methods : {

      login() {

            var myHeaders = new Headers();
          
            myHeaders.append("Cookie", "__cfduid=dd129ee8d839f829fbc71a85ac71e8f001607612594");

            var formdata = new FormData();

            formdata.append("email", this.text);
            formdata.append("password", this.password);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://reqres.in/api/login", requestOptions).then((resp) => resp.json()).then(function(data) {

                document.getElementById("text-report").innerHTML = data.error;
             
            })

            .catch(function(error) {

                document.getElementById("text-report").innerHTML = error;

            });

           
      }
  } , 
  data() {
    return {
        text: '',
        password: '',
        result: ''
    }
  }

}

</script>

<style lang="scss">


</style>