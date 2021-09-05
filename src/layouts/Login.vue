<template> 
    <div>
        <div id="principal" v-if="principal">                
            <h4>Login</h4>              
            <div id="login">          
                <q-input v-model="user" type="text" label="Usuário" :dense="dense" />
                <q-input v-model="text" type="password" label="Senha" :dense="dense"/>
                <q-btn id="entrar" @click="validaCampo" color="secondary" label="Entrar"/>            
                <q-dialog v-model="alert">  '
                    <q-card>
                        <q-card-section>
                        <div class="text-h6">Alerta</div>
                        </q-card-section>
                        <q-card-section class="q-pt-none">
                            {{mensagem}}
                        </q-card-section>
                        <q-card-actions align="right">
                        <q-btn flat label="OK" color="primary" v-close-popup />
                        </q-card-actions>
                    </q-card>
                </q-dialog>                        
            </div> 
            <br /><br /><br />
            <div id="title">
                {{titulo}}
            </div> 
    
        </div>
        <div v-if="vPrincipal">
            <Principal />
        </div>
    </div>
</template>
<script>
//import $ from "jquery";
import axios from "axios";
import Principal from './../components/Principal.vue';
export default {
    components: {
        Principal
        
    },
    data() {                  
        return {            
            text: "789",
            user: "TMF",
            alert: false,
            dense: true,
            erroServico : false,
            erroSenha : false,
            visible: true,
            titulo: "Sistema de contas a pagar",
            mensagem:"",
            principal : true,
            vPrincipal: false
        }
    },
    methods: {       
        validaCampo(){

           const URL = "http://localhost:5000/user/login/"+this.user+"/senha/"+this.text

           if(this.user==""){
               this.alert = true               
               this.mensagem = "Usuário não informado. Verifique!"
           } else  
           if(this.text==""){
               this.alert = true               
               this.mensagem = "Senha não informada. Verifique!"                                                              
           }else{

               axios.get(URL)              
               .then((res)=>{
                   if(res.data){
                       this.principal = false
                       this.vPrincipal = true
                   }else{
                       this.alert = true               
                       this.mensagem = "Usuário e/ou senha incorreto. Verifique!"
                   }
               })
               .catch((error)=>{
                   console.log(error)
               })               
           }
        }
    }
}
</script>
<style scoped>

    #principal{
        margin: 0 auto;
        width: 400px;
        height: 400px;
        border: 1px solid;
        position: relative;
        top:100px;
        border-radius: 20px;
        background-color: cyan;
        box-shadow: 0px 0px 8px 2px #af4a4a;
        border: 1px solid;
    }

    #login{
        top: 30px;
        position: relative;
        padding: 50px;                
    }

    #entrar{
        left: 25%;
        top: 25px;
        border-radius: 20px;
        width: 150px;
    }

    h4{
        top: -100px;
        position: absolute;
        left: 150px;
        font-family:Georgia, 'Times New Roman', Times, serif;        
    }
    #title{
        font-family: 'Times New Roman', Times, serif;
        font-size: 35px;
        text-align: center;                
    }


</style>