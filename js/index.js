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