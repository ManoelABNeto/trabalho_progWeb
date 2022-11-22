const form = document.querySelector('form');
const ul = document.querySelector('ul')

form.onsubmit = function(event){
    event.preventDefault(); 

    const input = form.querySelector('input')
    const value = input.value

    if (value=="") return;

    botaoX = '<button class="botao">X</button>'
    ul.innerHTML = ul.innerHTML + `<li>${value}${botaoX}</li>` 

    input.value = ""
}

ul.onclick = function(event){
 if(event.target.classList.contains('botao')){
   //console.log('CLicou no botão delete');
   if(confirm('Deseja apagar esse item? ')){
     console.log('remove o item');
     event.target.parentElement.remove();
   }
 }

}

class Aluno {
    nome;
    matricula;
    nota1;
    nota2;
    nota3;
  
     constructor(nome, matricula, n1, n2, n3) {
       this.nome = nome;
       this.matricula = matricula;
       this.nota1 = n1;
       this.nota2 = n2;
       this.nota3 = n3;
    }
  
     exibeInfo() {
       return `Aluno: ${this.nome} - mat: ${this.matricula}
      Notas: N1: ${this.nota1} - N2: ${this.nota2} - N3: ${this.nota3}
      Média:${this.calculaMedia()} 
      `;
    }
  
     calculaMedia() {
       return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
    }
  
  }