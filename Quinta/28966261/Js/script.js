var h1Element = document.getElementById('title'); // Seleciona o elemento h1

// Função para iniciar a animação
function startAnimation() {
	h1Element.classList.add('animated'); // Adiciona a classe 'animated'
}

// Função para parar a animação
function stopAnimation() {
	h1Element.classList.remove('animated'); // Remove a classe 'animated'
}

// Adiciona os eventos ao elemento h1
h1Element.addEventListener('mouseover', startAnimation); // Quando o mouse passar por cima do elemento h1, inicia a animação
h1Element.addEventListener('mouseout', stopAnimation); // Quando o mouse sair do elemento h1, para a animação

// Função para alternar o modo escuro
function toggleDarkMode() {
	var body = document.body; // Seleciona o elemento body
	body.classList.toggle("dark-mode"); // Alterna a classe 'dark-mode' no elemento body, alternando o modo escuro
}
