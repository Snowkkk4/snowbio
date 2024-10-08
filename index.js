// Funções para controlar a música e o vídeo
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('meuAudio');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const volumeControl = document.getElementById('volumeControl');
    const video = document.querySelector('video'); // Seleciona o vídeo

    // Função para tocar a música
    playBtn.addEventListener('click', () => {
        audio.play();
        video.play(); // Toca o vídeo junto
    });

    // Função para pausar a música e o vídeo
    pauseBtn.addEventListener('click', () => {
        audio.pause();
        video.pause(); // Pausa o vídeo
    });

    // Função para controlar o volume
    volumeControl.addEventListener('input', () => {
        audio.volume = volumeControl.value;
    });
});

// Função para remover o overlay e o desfoque
document.getElementById('overlay').addEventListener('click', function() {
    this.style.display = 'none'; // Esconde o overlay
    document.body.style.overflow = 'auto'; // Permite rolagem
    document.getElementById('meuAudio').play(); // Inicia a música
});
