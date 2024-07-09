
//isso serve como funcao - () => {} (ARROW FUNCTION)
const atividade = {
  nome: "Almoco",
  data: new Date("2024-07-09"),
  finalizada: false
}
const criarItemDeAtividade = (atividade) => {

  let input = ''

  return `
  <div>
    <input type="checkbox" />
    <span>${atividade.nome}</span>
    <time>${atividade.data}</time>
  </div>
  
  `
}

const section = document.querySelector('section')
section.innerHTML = criarItemDeAtividade(atividade)