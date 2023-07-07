// Obtém a referência para o elemento HTML com o ID 'chk'
const chk = document.getElementById('chk');

// Obtém a referência para o primeiro elemento 'section' encontrado no documento
const section = document.querySelector('section');

// Obtém uma lista de todos os elementos 'li' encontrados no documento
const listItems = document.querySelectorAll('li');

// Adiciona um ouvinte de evento para o evento 'change' no elemento 'chk'
chk.addEventListener('change', () => {
  // Alterna a classe 'dark' no elemento 'body' do documento
  document.body.classList.toggle('dark');

  // Alterna a classe 'dark' no elemento 'section'
  section.classList.toggle('dark');

  // Para cada item na lista de elementos 'li'
  listItems.forEach(item => {
    // Alterna a classe 'dark' para cada item
    item.classList.toggle('dark');
  });
});
