
const btnProgramas = document.getElementById('btnProgramas');
const btnEventos = document.getElementById('btnEventos');


btnProgramas.addEventListener('click', () => {
  imprimirSaludo();
});

btnEventos.addEventListener('click', () => {
  imprimirSaludo();
});


function imprimirSaludo() {
  console.log("Hola profe");
}
