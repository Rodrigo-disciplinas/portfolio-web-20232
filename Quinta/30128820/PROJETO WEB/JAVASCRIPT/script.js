function modoEscuro() {
    const body = document.body;
    body.classList.toggle('modonoturno');

    // Verifica se o modo noturno está ativado ou desativado
    const modoNoturnoAtivo = body.classList.contains('modonoturno');

    // Armazena o estado do modo noturno no armazenamento local
    localStorage.setItem('modoNoturno', modoNoturnoAtivo);
}

// Verifica o estado do modo noturno ao carregar a página
window.addEventListener('DOMContentLoaded', function () {
    const modoNoturnoSalvo = localStorage.getItem('modoNoturno');

    // Se o modo noturno estiver ativado no armazenamento local, aplica o estilo
    if (modoNoturnoSalvo === 'true') {
        const body = document.body;
        body.classList.add('modonoturno');
    }
});
