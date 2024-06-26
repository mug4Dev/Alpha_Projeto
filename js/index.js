// Função de deixar a senha visivel!
document.getElementById('togglePassword').addEventListener('click', function() {
    var senhaEscudo = document.getElementById('password');
    var eyeIcon = this.querySelector('img');
    
   // Verifica o tipo do campo de senha
   if (senhaEscudo.type === 'password') {
    // Se a senha estiver oculta, mude para texto Troque o ícone para o olho aberto
    senhaEscudo.type = 'text';
    
    eyeIcon.src = 'eye_close.png';
    eyeIcon.alt = 'mostrar';
    } else {
        // Se a senha esttiver visivel(text) mude para password E junto mude a img para eye_open
        senhaEscudo.type = 'password';
        eyeIcon.src = 'eye_open.png';
        eyeIcon.alt = 'ocultar';
    }
});

// Acesar a Pagina principal com verificação dos compos

document.getElementById('enviar').addEventListener('click', function() {
    let email = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(email ===''|| password === '' ){
        alert("Por favor preeencha os campos.");
    }else{
        alert('Login bem-sucedido!');
        window.location.href = '/mainPage.html';
    }
});

