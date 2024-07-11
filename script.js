// biblioteca de codigos de terceiros
const formatador = (data) => {
  return {
    dia: {
      numerico: dayjs(data).format('DD'),
      semana: {
        curto: dayjs(data).format('ddd'),
        longo: dayjs(data).format('dddd')
      }
    },
    mes: dayjs(data).format('MMMM'),
    hora: dayjs(data).format('HH:mm')
  };
};

// object {}
const atividade = {
  nome: "Almoço",
  data: new Date("2024-07-09 10:00"),
  finalizada: true
};

// array, lista e vetor
let atividades = [
  atividade,
  {
    nome: 'Academia em grupo',
    data: new Date("2024-07-09 12:00"),
    finalizada: false
  },
  {
    nome: 'Gaming Session',
    data: new Date("2024-07-09 16:00"),
    finalizada: true
  }
];

const criarItemDeAtividade = (atividade) => {
  let input = '<input type="checkbox" ';

  if (atividade.finalizada) {
    input += 'checked ';
  }

  input += '>';

  const formatar = formatador(atividade.data);

  return `
    <div>
      ${input}
      <span>${atividade.nome}</span>
      <time>${formatar.dia.semana.longo}, dia ${formatar.dia.numerico} de ${formatar.mes}, às ${formatar.hora}</time>
    </div>
  `;
};

const atualizarListaDeAtividades = () => {
  const section = document.querySelector('section');

  // VERIFICAR SE MINHA LISTA ESTÁ VAZIA
  if (atividades.length == 0) {
    section.innerHTML = `<p>Nenhuma atividade cadastrada.</p>`;
    return;
  } 

  // Limpar o conteúdo da section antes de adicionar os novos elementos
  section.innerHTML = '';

  for (let atividade of atividades) {
    section.innerHTML += criarItemDeAtividade(atividade);
  }
};

atualizarListaDeAtividades();
