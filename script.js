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
      <time>${formatar.dia.semana.longo}, dia ${formatar.dia.numerico} de ${formatar.mes}, às ${formatar.hora}h</time>
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

const salvarAtividade = (event) => {
  event.preventDefault();
};

const criarDiasSelecao = () => {
  const dias = [
    "2024-02-28",
    "2024-02-29",
    "2024-03-01",
    "2024-03-02",
    "2024-03-03"
  ];

  let diasSelecao = '';

  for (let dia of dias) {
    const formatar = formatador(new Date(dia));
    const diaFormatado = `${formatar.dia.numerico} de ${formatar.mes}`;

    diasSelecao += `
      <option value="${dia}">${diaFormatado}</option>
    `;
  }

  document.querySelector('select[name="dia"]').innerHTML = diasSelecao;
};

criarDiasSelecao();

const criarHoraSelecao = () => {
  let horasDisponiveis = '';

  for (let i = 6; i < 23; i++) {
    horasDisponiveis += `<option value="${i}:00">${i}:00</option>`
    horasDisponiveis += `<option value="${i}:30">${i}:30</option>`;
  }

  document.querySelector('select[name="hora"]').innerHTML = horasDisponiveis;
};

criarHoraSelecao();
