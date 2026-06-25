// script.js – Missão IA com tema Lua Azul Escuro
// Perguntas diferentes e atualizadas

const missionData = [
  {
    nivel: 1,
    alerta: "[ALERTA] IA generativa cria poemas que emocionam mais que os humanos. Como a arte deve evoluir?",
    opcoes: [
      "🔹 Criar curadoria mista humano-IA",
      "🔸 Incentivar a IA como ferramenta criativa",
      "🔹 Exigir transparência na autoria",
      "🔸 Deixar a arte fluir sem restrições"
    ],
    progresso: 20
  },
  {
    nivel: 2,
    alerta: "[ALERTA] Algoritmo de recomendação começa a criar bolhas culturais extremas. Como intervir?",
    opcoes: [
      "🔹 Injetar conteúdo diverso manualmente",
      "🔸 Redesenhar a função de recompensa",
      "🔹 Limitar tempo de exposição por tópico",
      "🔸 Permitir que o usuário escolha o viés"
    ],
    progresso: 40
  },
  {
    nivel: 3,
    alerta: "[ALERTA] IA de diagnóstico médico sugere tratamentos com base em dados limitados. Qual conduta?",
    opcoes: [
      "🔹 Exigir validação por especialistas",
      "🔸 Ampliar base de dados com mais variáveis",
      "🔹 Usar como segunda opinião apenas",
      "🔸 Liberar para acelerar descobertas"
    ],
    progresso: 60
  },
  {
    nivel: 4,
    alerta: "[ALERTA] Sistema de IA educacional personaliza tanto que alunos perdem habilidades sociais. Como equilibrar?",
    opcoes: [
      "🔹 Incluir atividades colaborativas obrigatórias",
      "🔸 Reduzir personalização em 30%",
      "🔹 Adicionar módulo de inteligência emocional",
      "🔸 Deixar a critério das escolas"
    ],
    progresso: 80
  },
  {
    nivel: 5,
    alerta: "[ALERTA] IA prevê com 99% de acerto eventos globais. Governos querem usá-la para controle. Qual caminho?",
    opcoes: [
      "🔹 Criar tratado internacional de uso ético",
      "🔸 Tornar as previsões públicas e abertas",
      "🔹 Usar apenas para desastres naturais",
      "🔸 Proibir uso governamental da IA"
    ],
    progresso: 100
  }
];

let currentLevel = 0;
let progress = 20;

const questDisplay = document.getElementById('questDisplay');
const alertDisplay = document.getElementById('alertDisplay');
const optionsGrid = document.getElementById('optionsGrid');
const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');
const levelDisplay = document.getElementById('levelDisplay');
const resetBtn = document.getElementById('resetBtn');

function renderLevel(index) {
  const data = missionData[index];
  if (!data) return;

  questDisplay.textContent = `[QUEST] NÍVEL ${data.nivel}/5`;
  alertDisplay.textContent = data.alerta;

  levelDisplay.textContent = data.nivel;

  progress = data.progresso;
  progressFill.style.width = progress + '%';
  progressPercent.textContent = progress + '%';

  optionsGrid.innerHTML = '';
  data.opcoes.forEach((opcao) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opcao;
    btn.addEventListener('click', () => handleOptionClick(data));
    optionsGrid.appendChild(btn);
  });
}

function handleOptionClick(data) {
  if (currentLevel === missionData.length - 1) {
    alertDisplay.textContent = '🌙 MISSÃO LUNAR CONCLUÍDA! Sob a lua azul, você decidiu o futuro da IA. O eco de suas escolhas ressoará.';
    optionsGrid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: #b0daff; padding: 0.8rem; background: #0a1f33; border-radius: 40px; border: 1px solid #2a7faf; box-shadow: 0 0 30px #0055aa40;">
      ✅ JORNADA FINALIZADA. Clique em "REINICIAR" para uma nova órbita.
    </div>`;
    progressFill.style.width = '100%';
    progressPercent.textContent = '100%';
    return;
  }

  currentLevel++;
  renderLevel(currentLevel);
}

function resetMission() {
  currentLevel = 0;
  renderLevel(0);
  progressFill.style.width = '20%';
  progressPercent.textContent = '20%';
  const data = missionData[0];
  if (data) {
    alertDisplay.textContent = data.alerta;
  }
}

resetBtn.addEventListener('click', resetMission);
renderLevel(0);
