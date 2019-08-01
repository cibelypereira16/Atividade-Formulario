let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confirmarEmail = document.querySelector("#confirmarEmail");
let senha = document.querySelector("#senha");
let select = document.querySelector("#selecionar");
let botaoEnviar = document.querySelector("button");


botaoEnviar.onclick = function(){
if (email.value == confirmarEmail.value){
    localStorage.setItem('Nome', nome.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('confirmarEmail', confirmarEmail.value);
    localStorage.setItem('senha', senha.value);
    localStorage.setItem('select', selecionar.value);

}else {
    alert("ERRO");
}
}