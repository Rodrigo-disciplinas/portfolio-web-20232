document.getElementById("meuBotao").addEventListener("click", function() {
  alert("Você achou o segredo parabens!!");
});
// Função para alternar o modo escuro
function toggleDarkMode() {
	var body = document.body; // Seleciona o elemento body
	body.classList.toggle("dark-mode"); // Alterna a classe 'dark-mode' no elemento body, alternando o modo escuro
} 