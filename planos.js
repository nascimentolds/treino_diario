// planos.js

const TODOS_OS_PLANOS = {
  "plano_original": {
    id: "plano_original",
    nome: "Plano Força e Resistência",
    descricao: "Um plano completo focado em full body, HIIT e core.",
    dias: {
      segunda: { title: "Full Body – Força e Resistência", components: [{ type: 'circuito', name: 'Circuito A', sets: 3, rest: 60, exercises: [{ name: 'Agachamento livre', type: 'reps', value: '15 reps' }, { name: 'Flexão de braço', type: 'reps', value: '10-15 reps' }, { name: 'Afundo alternado', type: 'reps', value: '10 reps/perna' }, { name: 'Prancha', type: 'time', value: 45 }] }, { type: 'circuito', name: 'Circuito B', sets: 3, rest: 60, exercises: [{ name: 'Agachamento sumô', type: 'reps', value: '15 reps' }, { name: 'Flexão diamante', type: 'reps', value: '10 reps' }, { name: 'Elevação de pernas deitado', type: 'reps', value: '15 reps' }, { name: 'Prancha com toque no ombro', type: 'reps', value: '20 reps' }] }, { type: 'finalizador', name: 'Finalizador (Opcional)', sets: 2, rest: 30, exercises: [{ name: 'Burpee', type: 'time', value: 30 }, { name: 'Agachamento com salto', type: 'time', value: 30 }] }] },
      terca: { title: "HIIT + Core", components: [{ type: 'circuito', name: 'Bloco 1 HIIT', sets: 4, rest: 60, exercises: [{ name: 'Polichinelo', type: 'time', value: 30, rest: 15 }, { name: 'Agachamento com salto', type: 'time', value: 30, rest: 15 }, { name: 'Corrida estacionária', type: 'time', value: 30, rest: 15 }, { name: 'Mountain climbers', type: 'time', value: 30, rest: 0 }] }, { type: 'core-block', name: 'Core', sets: 3, rest: 45, exercises: [{ name: 'Canivete abdominal', type: 'reps', value: '15 reps' }, { name: 'Abdominal bicicleta', type: 'reps', value: '20 reps' }, { name: 'Prancha', type: 'time', value: 60 }] }, { type: 'finalizador', name: 'Final', sets: 1, rest: 0, exercises: [{ name: 'Burpee', type: 'time', value: 30 }, { name: 'Abdominal infra', type: 'reps', value: '20 reps' }, { name: 'Sprint no lugar', type: 'time', value: 20 }] }] },
      quarta: { title: "Superior + Core", components: [{ type: 'circuito', name: 'Circuito A', sets: 3, rest: 60, exercises: [{ name: 'Flexão tradicional', type: 'reps', value: '10-15 reps' }, { name: 'Remada com elástico', type: 'reps', value: '12 reps' }, { name: 'Elevação frontal com elástico', type: 'reps', value: '12 reps' }, { name: 'Prancha', type: 'time', value: 45 }] }, { type: 'circuito', name: 'Circuito B', sets: 3, rest: 60, exercises: [{ name: 'Flexão com toque no ombro', type: 'reps', value: '12 reps' }, { name: 'Abdominal canivete', type: 'reps', value: '15 reps' }, { name: 'Superman', type: 'reps', value: '15 reps' }, { name: 'Prancha lateral', type: 'time', value: 30, note: 'por lado' }] }, { type: 'finalizador', name: 'Finalizador', sets: 2, rest: 0, exercises: [{ name: 'Sprint no lugar', type: 'time', value: 30 }, { name: 'Burpee', type: 'time', value: 30 }] }] },
      quinta: { title: "HIIT + Core (Intenso)", components: [{ type: 'tabata_circuit', name: 'Tabata (8 Rounds)', rounds: 8, exercises: [{ name: 'Agachamento com salto' }, { name: 'Flexão' }, { name: 'Burpee' }] }, { type: 'core-block', name: 'Core Blaster', sets: 2, rest: 60, exercises: [{ name: 'Prancha', type: 'time', value: 60 }, { name: 'Elevação de pernas', type: 'reps', value: '20 reps' }, { name: 'Abdominal cruzado', type: 'reps', value: '20 reps' }] }] },
      sexta: { title: "Inferior + Abdômen", components: [{ type: 'circuito', name: 'Circuito Pernas', sets: 3, rest: 60, exercises: [{ name: 'Agachamento isométrico', type: 'time', value: 45 }, { name: 'Afundo estacionário', type: 'reps', value: '10 reps/perna' }, { name: 'Elevação de panturrilha', type: 'reps', value: '20 reps' }, { name: 'Ponte de glúteo', type: 'reps', value: '15 reps' }] }, { type: 'core-block', name: 'Core', sets: 3, rest: 60, exercises: [{ name: 'Abdominal infra', type: 'reps', value: '15 reps' }, { name: 'Prancha lateral c/ elevação', type: 'time', value: 30, note: 'por lado' }, { name: 'Abdominal com pés elevados', type: 'reps', value: '20 reps' }, { name: 'Prancha com braço estendido', type: 'time', value: 45 }] }, { type: 'finalizador', name: 'Finalizador (Opcional)', sets: 1, rest: 0, exercises: [{ name: 'Sprint parado', type: 'time', value: 30 }, { name: 'Canivete abdominal', type: 'reps', value: '15 reps' }, { name: 'Burpee', type: 'time', value: 30 }] }] }
    }
  },
  "plano_hipertrofia": {
    id: "plano_hipertrofia",
    nome: "Foco em Hipertrofia",
    descricao: "Plano ABC estruturado para promover hipertrofia muscular com o uso de peso corporal e elástico leve, dividido em grupos musculares para volume e recuperação adequada.",
    dias: {
      segunda: { title: "Peito, Ombro e Tríceps", components: [{ type: "circuito", name: "Empurrar – Parte Superior", sets: 4, rest: 60, exercises: [{ name: "Flexão de braço", type: "reps", value: "Até a falha" }, { name: "Flexão inclinada", type: "reps", value: "12-15 reps" }, { name: "Flexão diamante", type: "reps", value: "10-12 reps" }, { name: "Elevação frontal com elástico", type: "reps", value: "12-15 reps" }] }, { type: "core-block", name: "Core Estático", sets: 3, rest: 45, exercises: [{ name: "Prancha", type: "time", value: 60 }, { name: "Canivete abdominal", type: "reps", value: "15 reps" }] }] },
      terca: { title: "Costas, Bíceps e Posterior", components: [{ type: "circuito", name: "Puxar – Parte Superior", sets: 4, rest: 60, exercises: [{ name: "Remada com elástico", type: "reps", value: "12-15 reps" }, { name: "Rosca bíceps com elástico", type: "reps", value: "12-15 reps" }, { name: "Superman", type: "reps", value: "15 reps" }, { name: "Ponte de glúteo", type: "reps", value: "20 reps" }] }, { type: "core-block", name: "Core Rotacional", sets: 3, rest: 45, exercises: [{ name: "Abdominal bicicleta", type: "reps", value: "30 reps" }, { name: "Prancha lateral", type: "time", value: 30, note: "por lado" }] }] },
      quarta: { title: "Descanso Ativo + Core Isométrico", components: [{ type: "core-block", name: "Estabilidade Central", sets: 3, rest: 45, exercises: [{ name: "Abdominal infra", type: "reps", value: "20 reps" }, { name: "Prancha com braço estendido", type: "time", value: 60 }, { name: "Sprint parado", type: "time", value: 30 }] }] },
      quinta: { title: "Inferiores – Glúteo, Quadríceps, Posterior e Panturrilha", components: [{ type: "circuito", name: "Membros Inferiores", sets: 4, rest: 60, exercises: [{ name: "Agachamento livre", type: "reps", value: "20 reps" }, { name: "Afundo alternado", type: "reps", value: "12-15 reps/perna" }, { name: "Ponte de glúteo unilateral", type: "reps", value: "12 reps por perna" }, { name: "Elevação de panturrilha", type: "reps", value: "25 reps" }] }, { type: "core-block", name: "Core Ativo", sets: 2, rest: 30, exercises: [{ name: "Abdominal com pés elevados", type: "reps", value: "20 reps" }, { name: "Prancha com toque no ombro", type: "reps", value: "20 reps" }] }] },
      sexta: { title: "Empurrar + Finalizador Metabólico", components: [{ type: "circuito", name: "Reforço de Peito e Ombro", sets: 3, rest: 60, exercises: [{ name: "Flexão tradicional", type: "reps", value: "Até a falha" }, { name: "Flexão diamante", type: "reps", value: "12 reps" }, { name: "Elevação lateral com elástico", type: "reps", value: "12 reps" }] }, { type: "finalizador", name: "Metabólico", sets: 2, rest: 30, exercises: [{ name: "Burpee", type: "time", value: 30 }, { name: "Sprint parado", type: "time", value: 30 }, { name: "Prancha", type: "time", value: 30 }] }] }
    }
  },
  "plano_perda_peso": {
    id: "plano_perda_peso",
    nome: "Perda de Peso – Alta Intensidade",
    descricao: "Plano estratégico de alta intensidade com foco em queima calórica, HIIT funcional e fortalecimento do core.",
    dias: {
      segunda: { title: "HIIT Explosivo + Core", components: [{ type: "circuito", name: "HIIT Acelerado", sets: 4, rest: 60, exercises: [{ name: "Corrida estacionária", type: "time", value: 30, rest: 15 }, { name: "Burpee", type: "time", value: 30, rest: 15 }, { name: "Agachamento com salto", type: "time", value: 30, rest: 15 }, { name: "Mountain climbers", type: "time", value: 30, rest: 0 }] }, { type: "core-block", name: "Core Ativo", sets: 3, rest: 30, exercises: [{ name: "Abdominal cruzado", type: "reps", value: "30 reps" }, { name: "Prancha", type: "time", value: 60 }, { name: "Elevação de pernas", type: "reps", value: "20 reps" }] }] },
      terca: { title: "Full Body – Condicionamento Funcional", components: [{ type: "circuito", name: "Full Body Burn", sets: 3, rest: 60, exercises: [{ name: "Agachamento sumô", type: 'reps', value: '20 reps' }, { name: "Flexão com toque no ombro", type: 'reps', value: '15 reps' }, { name: "Ponte de glúteo", type: 'reps', value: '20 reps' }, { name: "Prancha com toque no ombro", type: 'reps', value: '20 reps' }] }, { type: "finalizador", name: "Sprint + Core", sets: 1, rest: 30, exercises: [{ name: "Sprint parado", type: 'time', value: 30 }, { name: "Abdominal infra", type: 'reps', value: '20 reps' }] }] },
      quarta: { title: "HIIT Tabata + Core Intenso", components: [{ type: "tabata_circuit", name: "Tabata HIIT", rounds: 8, exercises: [{ name: "Burpee" }, { name: "Corrida estacionária" }, { name: "Agachamento com salto" }] }, { type: "core-block", name: "Core de Resistência", sets: 3, rest: 45, exercises: [{ name: "Prancha lateral", type: "time", value: 30, note: "por lado" }, { name: "Abdominal bicicleta", type: "reps", value: "30 reps" }, { name: "Prancha com braço estendido", type: "time", value: 45 }] }] },
      quinta: { title: "Funcional com Ênfase em Resistência", components: [{ type: "circuito", name: "Funcional Completo", sets: 4, rest: 60, exercises: [{ name: "Polichinelo", type: "time", value: 30 }, { name: "Afundo alternado", type: "reps", value: "15 reps/perna" }, { name: "Flexão tradicional", type: "reps", value: "15 reps" }, { name: "Agachamento com impulso", type: "reps", value: "20 reps" }] }, { type: "core-block", name: "Core Rápido", sets: 2, rest: 30, exercises: [{ name: "Canivete abdominal", type: "reps", value: "15 reps" }, { name: "Elevação de pernas", type: "reps", value: "20 reps" }] }] },
      sexta: { title: "Queima Final + Core Isométrico", components: [{ type: "core-block", name: "Core de Controle", sets: 3, rest: 45, exercises: [{ name: "Abdominal infra", type: "reps", value: "20 reps" }, { name: "Prancha com respiração profunda", type: "time", value: 60 }, { name: "Prancha lateral com elevação", type: "time", value: 30, note: "por lado" }] }, { type: "finalizador", name: "HIIT Finalizador", sets: 2, rest: 30, exercises: [{ name: "Agachamento com salto", type: "time", value: 30 }, { name: "Burpee", type: "time", value: 30 }, { name: "Sprint no lugar", type: "time", value: 20 }] }] }
    }
  },
  "plano_massa_magra": {
    id: "plano_massa_magra",
    nome: "Manutenção de Massa Magra",
    descricao: "Plano equilibrado com estímulos de força, resistência moderada e mobilidade para manter a massa muscular e promover definição.",
    dias: {
      segunda: { title: "Full Body – Força e Estabilidade", components: [{ type: 'circuito', name: 'Circuito A – Força Global', sets: 3, rest: 60, exercises: [{ name: 'Agachamento livre', type: 'reps', value: '15 reps' }, { name: 'Flexão tradicional', type: 'reps', value: '12–15 reps' }, { name: 'Remada com elástico', type: 'reps', value: '12–15 reps' }, { name: 'Prancha', type: 'time', value: 45 }] }, { type: 'core-block', name: 'Core Estável', sets: 2, rest: 45, exercises: [{ name: 'Abdominal infra', type: 'reps', value: '15 reps' }, { name: 'Prancha lateral', type: 'time', value: 30, note: 'por lado' }] }] },
      terca: { title: "Cardio Funcional + Core", components: [{ type: 'circuito', name: 'Bloco Cardio/Core', sets: 4, rest: 45, exercises: [{ name: 'Corrida estacionária', type: 'time', value: 30 }, { name: 'Polichinelo', type: 'time', value: 30 }, { name: 'Abdominal bicicleta', type: 'reps', value: '30 reps' }, { name: 'Elevação de pernas', type: 'reps', value: '20 reps' }] }, { type: 'finalizador', name: 'Sprint & Prancha', sets: 1, rest: 0, exercises: [{ name: 'Sprint parado', type: 'time', value: 30 }, { name: 'Prancha com toque no ombro', type: 'reps', value: '20 reps' }] }] },
      quarta: { title: "Parte Superior – Resistência Muscular", components: [{ type: 'circuito', name: 'Circuito Superior', sets: 3, rest: 60, exercises: [{ name: 'Flexão de braço', type: 'reps', value: '12–15 reps' }, { name: 'Rosca com elástico', type: 'reps', value: '12–15 reps' }, { name: 'Elevação lateral com elástico', type: 'reps', value: '12 reps' }, { name: 'Superman', type: 'reps', value: '15 reps' }] }, { type: 'core-block', name: 'Core Funcional', sets: 2, rest: 45, exercises: [{ name: 'Abdominal canivete', type: 'reps', value: '15 reps' }, { name: 'Prancha com braço estendido', type: 'time', value: 45 }] }] },
      quinta: { title: "Inferior + Core Dinâmico", components: [{ type: 'circuito', name: 'Pernas & Glúteo', sets: 3, rest: 60, exercises: [{ name: 'Afundo alternado', type: 'reps', value: '15 reps/perna' }, { name: 'Ponte de glúteo', type: 'reps', value: '20 reps' }, { name: 'Elevação de panturrilha', type: 'reps', value: '25 reps' }, { name: 'Agachamento isométrico', type: 'time', value: 45 }] }, { type: 'core-block', name: 'Core Dinâmico', sets: 2, rest: 45, exercises: [{ name: 'Abdominal com pés elevados', type: 'reps', value: '20 reps' }, { name: 'Prancha lateral c/ elevação', type: 'time', value: 30, note: 'por lado' }] }] },
      sexta: { title: "Mobilidade + Ativação Leve", components: [{ type: 'circuito', name: 'Mobilidade e Controle Corporal', sets: 2, rest: 60, exercises: [{ name: 'Alongamento dinâmico', type: 'time', value: 60 }, { name: 'Agachamento com peso corporal + mobilidade', type: 'reps', value: '15 reps' }, { name: 'Prancha com respiração profunda', type: 'time', value: 60 }] }, { type: 'finalizador', name: 'Fechamento Leve', sets: 1, rest: 0, exercises: [{ name: 'Caminhada leve no lugar', type: 'time', value: 120 }, { name: 'Alongamento estático', type: 'time', value: 90 }] }] }
    }
  },
  "plano_aquecimento_mobilidade": {
    id: "plano_aquecimento_mobilidade",
    nome: "Aquecimento e Mobilidade",
    descricao: "Rotina leve e funcional para ativar o corpo, melhorar a mobilidade articular e prevenir lesões. Pode ser usada antes de treinos ou como recuperação ativa.",
    dias: {
      segunda: {
        title: "Aquecimento Geral",
        components: [
          {
            type: "circuito",
            name: "Ativação Dinâmica",
            sets: 2,
            rest: 30,
            exercises: [
              { name: "Polichinelo", type: "time", value: 30 },
              { name: "Mobilidade de quadril (círculos com perna)", type: "reps", value: "10 reps por lado" },
              { name: "Mobilidade de ombro (círculos com braços)", type: "reps", value: "15 reps frente e trás" },
              { name: "Marcha no lugar com elevação de joelho", type: "time", value: 30 }
            ]
          }
        ]
      },
      terca: {
        title: "Mobilidade de Quadril e Coluna",
        components: [
          {
            type: "circuito",
            name: "Quadril e Lombar",
            sets: 2,
            rest: 45,
            exercises: [
              { name: "Alongamento dinâmico de adutores (afundo lateral alternado)", type: "reps", value: "10 reps por lado" },
              { name: "Mobilidade torácica (posição de 4 apoios, rotação de braço)", type: "reps", value: "10 reps por lado" },
              { name: "Alongamento do gato e camelo (cat-cow)", type: "reps", value: "10 reps lentas" },
              { name: "Ponte de glúteo", type: "reps", value: "15 reps" }
            ]
          }
        ]
      },
      quarta: {
        title: "Ativação de Core + Respiração",
        components: [
          {
            type: "core-block",
            name: "Estabilização Central",
            sets: 2,
            rest: 30,
            exercises: [
              { name: "Prancha com respiração profunda", type: "time", value: 45 },
              { name: "Prancha lateral com elevação de braço", type: "time", value: 30, note: "por lado" },
              { name: "Respiração diafragmática deitado", type: "time", value: 60 }
            ]
          }
        ]
      },
      quinta: {
        title: "Mobilidade de Ombro, Tórax e Cervical",
        components: [
          {
            type: "circuito",
            name: "Parte Superior Leve",
            sets: 2,
            rest: 30,
            exercises: [
              { name: "Mobilidade de escápula (círculos lentos)", type: "reps", value: "15 reps" },
              { name: "Alongamento de peitoral (em parede ou porta)", type: "time", value: 30 },
              { name: "Elevação e depressão de ombros", type: "reps", value: "15 reps" },
              { name: "Rotação cervical lenta", type: "reps", value: "5 voltas por lado" }
            ]
          }
        ]
      },
      sexta: {
        title: "Full Body Leve + Alongamento",
        components: [
          {
            type: "circuito",
            name: "Fechamento Corporal",
            sets: 2,
            rest: 30,
            exercises: [
              { name: "Alongamento dinâmico de corpo inteiro (varredura com as mãos até os pés + elevação de braços)", type: "reps", value: "10 reps" },
              { name: "Afundo com torção de tronco", type: "reps", value: "10 reps por lado" },
              { name: "Alongamento estático posterior (sentado)", type: "time", value: 30 },
              { name: "Alongamento cervical + respiração profunda", type: "time", value: 60 }
            ]
          }
        ]
      }
    }
  }
};