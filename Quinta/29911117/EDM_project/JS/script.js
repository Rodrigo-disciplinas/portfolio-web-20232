//Obtém o botão e o elemento <body>
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Adiciona o ouvinte de eventos ao botão
modeToggle.addEventListener('click', function() {
  // Verifica se o modo atual é claro ou escuro
  if (body.classList.contains('dark-mode')) {
    // Modo escuro ativado, muda para o modo claro
    body.classList.add('dark-mode');
    modeToggle.textContent = 'Modo Claro';
  } else {
    // Modo claro ativado, muda para o modo escuro
    body.classList.remove('dark-mode');
    modeToggle.textContent = 'Modo Escuro';
  }
});
