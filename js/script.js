document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

var nome=document.getElementById("nome")
var email=ocument.getElementById("email")
var telefone=document.getElementById("telefone")

function validaFormulario(){
  if(nome.value != "" && email.value != "" && telefone.value != ""){

    alert("Prontinho! Você receberá as novidades por email.")

  }else{

    alert("Por favor, preencha os campos nome, email e telefone.")
    
  }

}


