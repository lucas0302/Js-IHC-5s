function validarCampos(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const telefone = document.getElementById("telefone").value;
    const termoAdesao = document.getElementById("termoAdesao").value;
    const confirmaSenha = document.getElementById("confirmaSenha").value;

    if (nome === ""){ // o operador === compara valores e tipos
        alert("Por favor, preencha o campo Nome.");
        event.preventDefaut(); // Impede o envio do formulário
        return;
    }
    if (email === ""){
        alert("Por favor, preencha o campo Email.");
        event.preventDefaut();
        return;
    }
    if (telefone === ""){
        alert("Por favor, preencha o campo Telefone");
        event.preventDefaut();
        return;
    }

    // validar a senha 
    if (senha.length < 8){
        alert("A senha deve conter pelo menos 8 caracteres.");
        event.preventDefaut();
        return;
    }
    //Verificar se a senha atende aos critérios
    const letrasMaiusculas = /[A-Z]/;
    const letrasMinusculas = /[a-z]/;
    const numeros = /[0-9]/;
    const caracteresEspeciais = /[!@#$%¨&*()_+{}[\]:;<>,.?~]/;

    if(
        !letrasMaiusculas.test(senha) ||
        !letrasMinusculas.test(senha) ||
        !numeros.test(senha) ||
        !caracteresEspeciais.test(senha)
    ){
        alert(
            "Sue senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
        );
        event.preventDefault();
        return;
    }
    if (senha !== confirmaSenha){
        alert("As senha sao divergente.");
        event.preventDefaut();
        return;
    }
    if (!termoAdesao.checked){
        alert("aceite os termos.");
        event.preventDefaut();
        return;
    }
}