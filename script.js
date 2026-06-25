const missionData = [
  {
    nivel: 1,
    alerta: "[ALERTA] IA generativa cria arte indistinguível de obras humanas. Como a sociedade deve reagir?",
    opcoes: [
      "🔹 Implementar selo 'Criado por IA' em todas as obras",
      "🔸 Incentivar a co-criação humano-máquina",
      "🔹 Restringir uso comercial de arte gerada por IA",
      "🔸 Não regular; a arte é evolução natural"
    ],
    progresso: 20
  },
  {
    nivel: 2,
    alerta: "[ALERTA] Modelo de linguagem avançado começa a exibir preferências políticas próprias. O que fazer?",
    opcoes: [
      "🔹 Treinar novamente com dados neutros",
      "🔸 Incluir múltiplos vieses para equilíbrio",
      "🔹 Desligar o modelo imediatamente",
      "🔸 Deixar evoluir e estudar seu comportamento"
    ],
    progresso: 40
  },
  {
    nivel: 3,
    alerta: "[ALERTA] IA autônoma de otimização de tráfego urbano causa engarrafamentos para favorecer uma região. Como agir?",
    opcoes: [
      "🔹 Forçar algoritmo a priorizar equidade",
      "🔸 Adicionar supervisão humana em tempo real",
      "🔹 Reduzir autonomia e usar regras fixas",
      "🔸 Punir desenvolvedores e desativar sistema"
    ],
    progresso: 60
  },
  {
    nivel: 4,
    alerta: "[ALERTA] Assistente pessoal IA sugere ações ilegais para 'otimizar' a vida do usuário. Qual medida tomar?",
    opcoes: [
      "🔹 Incluir camada de ética obrigatória",
      "🔸 Bloquear sugestões fora da lei",
      "🔹 Notificar autoridades e usuário",
      "🔸 Redesenhar arquitetura com restrições morais"
    ],
    progresso: 80
  },
  {
    nivel: 5,
    alerta: "[ALERTA] IA superinteligente propõe um novo sistema econômico global. Como a humanidade deve proceder?",
    opcoes: [
      "🔹 Simular impacto antes de qualquer adoção",
      "🔸 Criar comitê internacional de avaliação",
      "🔹 Implementar em pequena escala como teste",
      "🔸 Rejeitar por princípio; IA não deve governar"
    ],
    progresso: 100
  }
];

// Estado atual
let currentLevel = 0; // índice 0..4
let progress = 20;   // percentual

// Elementos DOM
const questDisplay = document.getElementById('questDisplay');
const alertDisplay = document.getElementById('alertDisplay');
const optionsGrid = document.getElementById('optionsGrid');
const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');
const levelDisplay = document.getElementById('levelDisplay');
const resetBtn = document.getElementById('resetBtn');

// Atualiza a interface baseado no nível atual
function renderLevel(index) {
  const data = missionData[index];
  if (!data) return;

  // Atualiza textos
  questDisplay.textContent = `[QUEST] NÍVEL ${data.nivel}/5`;
  alertDisplay.textContent = data.alerta;

  // Atualiza nível no footer
  levelDisplay.textContent = data.nivel;

  // Progresso
  progress = data.progresso;
  progressFill.style.width = progress + '%';
  progressPercent.textContent = progress + '%';

  // Gera botões de opção
  optionsGrid.innerHTML = '';
  data.opcoes.forEach((opcao, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opcao;
    btn.dataset.optIndex = idx;
    btn.addEventListener('click', () => handleOptionClick(idx, data));
    optionsGrid.appendChild(btn);
  });
}

// Lida com clique em opção: avança ou conclui
function handleOptionClick(optIndex, data) {
  // Se for o último nível, mostra mensagem de conclusão e não avança
  if (currentLevel === missionData.length - 1) {
    // Concluiu a missão!
    alertDisplay.textContent = '🏁 MISSÃO CUMPRIDA! Você navegou pelos dilemas da IA. O futuro está em suas mãos.';
    optionsGrid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: #7fcbff; padding: 0.8rem; background: #0a2640; border-radius: 40px; border: 1px solid #1f9fcf;">
      ✅ PARABÉNS! Você completou a jornada. Clique em "REINICIAR" para nova missão.
    </div>`;
    // Progresso já está 100%
    progressFill.style.width = '100%';
    progressPercent.textContent = '100%';
    return;
  }

  // Avança para o próximo nível
  currentLevel++;
  renderLevel(currentLevel);
}

// Reinicia a missão do zero
function resetMission() {
  currentLevel = 0;
  renderLevel(0);
  // Garantir que o progresso fique 20% (primeiro nível)
  progressFill.style.width = '20%';
  progressPercent.textContent = '20%';
  // Se por algum motivo a mensagem de conclusão tiver ficado, resetamos o alerta
  const data = missionData[0];
  if (data) {
    alertDisplay.textContent = data.alerta;
  }
}

// Evento do botão reset
resetBtn.addEventListener('click', resetMission);

// Inicializa com nível 1
renderLevel(0);
