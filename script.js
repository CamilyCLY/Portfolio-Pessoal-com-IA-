
const botaoTema = document.getElementById("tema");
const formulario = document.getElementById("formulario");
const aviso = document.getElementById("aviso");

botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("escuro");

  const modoEscuro = document.body.classList.contains("escuro");

  botaoTema.textContent = modoEscuro ? "☀️" : "🌙";
  botaoTema.setAttribute(
    "aria-label",
    modoEscuro ? "Ativar modo claro" : "Ativar modo escuro"
  );
});

document.getElementById("ano").textContent =
  new Date().getFullYear();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    aviso.textContent = "Preencha todos os campos.";
    return;
  }

  aviso.textContent =
    `Obrigado, ${nome}! O formulário foi validado, mas a mensagem não foi enviada.`;

  formulario.reset();
});
