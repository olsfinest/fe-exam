<template>
  <div id="login">

    <b-modal id="modal-1" title="Login">

        <b-form-input type="text" v-model="text" placeholder="Enter your email"></b-form-input><br/>

        <b-form-input type="password" v-model="password" placeholder="Enter your password"></b-form-input><br/>

        <b-button variant="outline-primary" v-on:click="login">Login</b-button>

        <br/>

        <p id="text-report"></p>
        
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
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Cookie", "__cfduid=dd129ee8d839f829fbc71a85ac71e8f001607612594");

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", this.text);
        urlencoded.append("password", this.password);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };
        
        

        fetch("https://reqres.in/api/login", requestOptions)
        .then(response => response.text())
        .then(
            
            function(data) {

                var i;

                var string_data = "";

                var error_data;
                
                var token;
                
                for (i = 0; i < data.length; i++) {

                  string_data += data[i];
                        
                }

                var obj = JSON.parse(string_data);

            
                if(obj.error === undefined) {

                    error_data = "";

                } else {

                    error_data = obj.error;

                }

                
                if(obj.token === undefined) {

                    token = "";

                } else {

                    token = obj.token;

                }
                
                document.getElementById("text-report").innerHTML = error_data + token;
             
            }

        )
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

#text-report {
    color: white;
    font-size: 15px;
    margin-top: 10px;
}


#modal-1___BV_modal_footer_ .btn-primary {
    display:none;
}

.modal-content {
    background-color: #9B0101!important;
}

.modal-title {
    color: white;
}

.btn-outline-primary {
    color: white!important;
    border-color: white!important;
    background-color: black!important;
}

.close {
    color: white!important;
}

</style>