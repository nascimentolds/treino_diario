// js/data/planos.js (VERSÃO CORRIGIDA COM TRADUÇÃO E LINKS VERIFICADOS)

export const TODOS_OS_PLANOS = {
  "plano_original": {
    id: "plano_original",
    nome: "Plano Força e Resistência",
    descricao: "Um plano completo focado em full body, HIIT e core.",
    dias: {
      segunda: {
        title: "Full Body – Força e Resistência",
        components: [
          {
            type: 'circuito', name: 'Circuito A', sets: 3, rest: 60, restAfter: 60, exercises: [
              { name: 'Agachamento livre', type: 'reps', value: '15 reps', demoGif: 'https://gymvisual.com/img/p/2/8/1/6/1/28161.gif' },
              { name: 'Flexão de braço', type: 'reps', value: '10-15 reps', demoGif: 'https://gymvisual.com/img/p/6/5/7/8/6578.gif' },
              { name: 'Afundo alternado', type: 'reps', value: '10 reps/perna', demoGif: 'https://gymvisual.com/img/p/2/2/8/7/7/22877.gif' },
              { name: 'Prancha', type: 'time', value: 45, demoGif: 'https://grandeatleta.com.br/blog/wp-content/uploads/2018/06/Prancha-abdominal-Ponte-ventral.gif' }]
          },
          {
            type: 'circuito', name: 'Circuito B', sets: 3, rest: 60, restAfter: 60, exercises: [
              { name: 'Agachamento sumô', type: 'reps', value: '15 reps', demoGif: 'https://gymvisual.com/img/p/5/7/6/5/5765.gif' },
              { name: 'Flexão diamante', type: 'reps', value: '10 reps', demoGif: 'https://gymvisual.com/img/p/1/9/8/5/6/19856.gif' },
              { name: 'Elevação de pernas deitado', type: 'reps', value: '15 reps', demoGif: 'https://gymvisual.com/img/p/5/8/5/9/5859.gif' },
              { name: 'Prancha com toque no ombro', type: 'reps', value: '20 reps', demoGif: '../img/52731201-plank-shoulder-tap-waist-view.gif' }]
          },
          {
            type: 'finalizador', name: 'Finalizador (Opcional)', sets: 2, rest: 30, exercises: [
              { name: 'Burpee', type: 'time', value: 30, demoGif: 'https://gymvisual.com/img/p/3/3/1/3/6/33136.gif' },
              { name: 'Agachamento com salto', type: 'time', value: 30, demoGif: 'https://gymvisual.com/img/p/2/6/2/3/7/26237.gif' }]
          }
        ]
      },
      terca: {
        title: "HIIT + Core",
        components: [
          {
            type: 'circuito', name: 'Bloco 1 HIIT', sets: 4, rest: 60, restAfter: 60, exercises: [
              { name: 'Polichinelo', type: 'time', value: 30, rest: 15, demoGif: 'https://gymvisual.com/img/p/1/4/9/3/7/14937.gif' },
              { name: 'Agachamento com salto', type: 'time', value: 30, rest: 15, demoGif: 'https://gymvisual.com/img/p/2/6/2/3/7/26237.gif' },
              { name: 'Corrida estacionária', type: 'time', value: 30, rest: 15, demoGif: '../img/40041201-place-jog-male-cardio-view.gif' },
              { name: 'Mountain climbers', type: 'time', value: 30, rest: 0, demoGif: 'https://gymvisual.com/img/p/1/9/8/5/7/19857.gif' }]
          },
          {
            type: 'core-block', name: 'Core', sets: 3, rest: 45, restAfter: 60, exercises: [
              { name: 'Canivete abdominal', type: 'reps', value: '15 reps', demoGif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal-em-V-no-chao.gif' },
              { name: 'Abdominal bicicleta', type: 'reps', value: '20 reps', demoGif: 'https://gymvisual.com/img/p/2/5/8/3/3/25833.gif' },
              { name: 'Prancha', type: 'time', value: 60, demoGif: 'https://grandeatleta.com.br/blog/wp-content/uploads/2018/06/Prancha-abdominal-Ponte-ventral.gif' }]
          },
          {
            type: 'finalizador', name: 'Final', sets: 1, rest: 0, exercises: [
              { name: 'Burpee', type: 'time', value: 30, demoGif: 'https://gymvisual.com/img/p/3/3/1/3/6/33136.gif' },
              { name: 'Abdominal infra', type: 'reps', value: '20 reps', demoGif: 'https://gymvisual.com/img/p/7/6/3/8/7638.gif' },
              { name: 'Sprint no lugar', type: 'time', value: 20, demoGif: '../img/40041201-place-jog-male-cardio-view.gif' }]
          }
        ]
      },
      quarta: {
        title: "Superior + Core",
        components: [
          {
            type: 'circuito', name: 'Circuito A', sets: 3, rest: 60, restAfter: 60, exercises: [
              { name: 'Flexão tradicional', type: 'reps', value: '10-15 reps', demoGif: 'https://gymvisual.com/img/p/1/4/5/1/2/14512.gif' },
              { name: 'Remada com elástico', type: 'reps', value: '12 reps', demoGif: 'https://gymvisual.com/17084-large_default/band-straight-back-seated-row-male.jpg' },
              { name: 'Elevação frontal com elástico', type: 'reps', value: '12 reps', demoGif: 'https://gymvisual.com/img/p/1/5/5/1/6/15516.gif' },
              { name: 'Prancha', type: 'time', value: 45, demoGif: 'https://grandeatleta.com.br/blog/wp-content/uploads/2018/06/Prancha-abdominal-Ponte-ventral.gif' }]
          },
          {
            type: 'circuito', name: 'Circuito B', sets: 3, rest: 60, restAfter: 60, exercises: [
              { name: 'Flexão com toque no ombro', type: 'reps', value: '12 reps', demoGif: 'https://gymvisual.com/img/p/1/5/4/1/7/15417.gif' },
              { name: 'Abdominal canivete', type: 'reps', value: '15 reps', demoGif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal-em-V-no-chao.gif' },
              { name: 'Superman', type: 'reps', value: '15 reps', demoGif: 'https://gymvisual.com/img/p/1/5/0/5/2/15052.gif' },
              { name: 'Prancha lateral', type: 'time', value: 30, note: 'por lado', demoGif: 'https://gymvisual.com/img/p/2/4/3/0/3/24303.gif' }]
          },
          {
            type: 'finalizador', name: 'Finalizador', sets: 2, rest: 0, exercises: [
              { name: 'Sprint no lugar', type: 'time', value: 30, demoGif: '../img/40041201-place-jog-male-cardio-view.gif' },
              { name: 'Burpee', type: 'time', value: 30, demoGif: 'https://gymvisual.com/img/p/3/3/1/3/6/33136.gif' }]
          }
        ]
      },
      quinta: {
        title: "HIIT + Core (Intenso)",
        components: [
          {
            type: 'tabata_circuit', name: 'Tabata (8 Rounds)', rounds: 8, restAfter: 90, exercises: [
              { name: 'Agachamento com salto', demoGif: 'https://gymvisual.com/img/p/2/6/2/3/7/26237.gif' },
              { name: 'Flexão', demoGif: 'https://gymvisual.com/img/p/1/4/5/1/2/14512.gif' },
              { name: 'Burpee', demoGif: 'https://gymvisual.com/img/p/3/3/1/3/6/33136.gif' }]
          },
          {
            type: 'core-block', name: 'Core Blaster', sets: 2, rest: 60, exercises: [
              { name: 'Prancha', type: 'time', value: 60, demoGif: 'https://grandeatleta.com.br/blog/wp-content/uploads/2018/06/Prancha-abdominal-Ponte-ventral.gif' },
              { name: 'Elevação de pernas', type: 'reps', value: '20 reps', demoGif: 'https://gymvisual.com/img/p/5/8/5/9/5859.gif' },
              { name: 'Abdominal cruzado', type: 'reps', value: '20 reps', demoGif: '../img/eresfitness_com-00031205-air-bike-m_waist-flat.gif' }]
          }
        ]
      },
      sexta: {
        title: "Inferior + Abdômen",
        components: [
          {
            type: 'circuito', name: 'Circuito Pernas', sets: 3, rest: 60, restAfter: 60, exercises: [
              { name: 'Agachamento isométrico', type: 'time', value: 45, demoGif: 'https://gymvisual.com/img/p/9/0/5/3/9053.gif' },
              { name: 'Afundo estacionário', type: 'reps', value: '10 reps/perna', demoGif: 'https://gymvisual.com/img/p/2/2/8/7/7/22877.gif' },
              { name: 'Elevação de panturrilha', type: 'reps', value: '20 reps', demoGif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/03/elevacao-de-panturrilhas-com-o-peso-do-corpo.gif' },
              { name: 'Ponte de glúteo', type: 'reps', value: '15 reps', demoGif: 'https://gymvisual.com/img/p/1/2/4/4/4/12444.gif' }]
          },
          {
            type: 'core-block', name: 'Core', sets: 3, rest: 60, restAfter: 60, exercises: [
              { name: 'Abdominal infra', type: 'reps', value: '15 reps', demoGif: 'https://gymvisual.com/img/p/7/6/3/8/7638.gif' },
              { name: 'Prancha lateral c/ elevação', type: 'time', value: 30, note: 'por lado', demoGif: 'https://gymvisual.com/img/p/2/7/6/5/6/27656.gif' },
              { name: 'Abdominal com pés elevados', type: 'reps', value: '20 reps', demoGif: 'https://gymvisual.com/img/p/2/7/0/8/1/27081.gif' },
              { name: 'Prancha com braço estendido', type: 'time', value: 45, demoGif: 'https://gymvisual.com/img/p/2/4/0/0/3/24003.gif' }]
          },
          {
            type: 'finalizador', name: 'Finalizador (Opcional)', sets: 1, rest: 0, exercises: [
              { name: 'Sprint parado', type: 'time', value: 30, demoGif: '../img/40041201-place-jog-male-cardio-view.gif' },
              { name: 'Canivete abdominal', type: 'reps', value: '15 reps', demoGif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal-em-V-no-chao.gif' },
              { name: 'Burpee', type: 'time', value: 30, demoGif: 'https://gymvisual.com/img/p/3/3/1/3/6/33136.gif' }]
          }
        ]
      }
    }
  },
  "plano_hipertrofia": {
    id: "plano_hipertrofia",
    nome: "Foco em Hipertrofia",
    descricao: "Plano ABC estruturado para promover hipertrofia muscular com o uso de peso corporal e elástico leve, dividido em grupos musculares para volume e recuperação adequada.",
    dias: {
      segunda: {
        title: "Peito, Ombro e Tríceps", components: [
          {
            type: "circuito", name: "Empurrar – Parte Superior", sets: 4, rest: 60, exercises: [
              { name: "Flexão de braço", type: "reps", value: "Até a falha", demoGif: 'https://gymvisual.com/img/p/1/7/5/9/7/17597.gif' },
              { name: "Flexão inclinada", type: "reps", value: "12-15 reps", demoGif: 'https://gymvisual.com/img/p/1/7/5/1/5/17515.gif' },
              { name: "Flexão diamante", type: "reps", value: "10-12 reps", demoGif: 'https://gymvisual.com/img/p/1/9/8/5/6/19856.gif' },
              { name: "Elevação frontal com elástico", type: "reps", value: "12-15 reps", demoGif: 'https://gymvisual.com/img/p/1/5/5/1/6/15516.gif' }]
          },
          {
            type: "core-block", name: "Core Estático", sets: 3, rest: 45, exercises: [
              { name: "Prancha", type: "time", value: 60, demoGif: 'https://grandeatleta.com.br/blog/wp-content/uploads/2018/06/Prancha-abdominal-Ponte-ventral.gif' },
              { name: "Canivete abdominal", type: "reps", value: "15 reps", demoGif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal-em-V-no-chao.gif' }]
          }]
      },
      terca: {
        title: "Costas, Bíceps e Posterior", components: [
          {
            type: "circuito", name: "Puxar – Parte Superior", sets: 4, rest: 60, exercises: [
              { name: "Remada com elástico", type: "reps", value: "12-15 reps", demoGif: 'https://gymvisual.com/17084-large_default/band-straight-back-seated-row-male.jpg' },
              { name: "Rosca bíceps com elástico", type: "reps", value: "12-15 reps", demoGif: 'https://gymvisual.com/img/p/1/3/1/0/1/13101.gif' },
              { name: "Superman", type: "reps", value: "15 reps", demoGif: 'https://gymvisual.com/img/p/1/5/0/5/2/15052.gif' },
              { name: "Ponte de glúteo", type: "reps", value: "20 reps", demoGif: 'https://gymvisual.com/img/p/1/2/4/4/4/12444.gif' }]
          },
          {
            type: "core-block", name: "Core Rotacional", sets: 3, rest: 45, exercises: [
              { name: "Abdominal bicicleta", type: "reps", value: "30 reps", demoGif: 'https://gymvisual.com/img/p/2/5/8/3/3/25833.gif' },
              { name: "Prancha lateral", type: "time", value: 30, note: "por lado", demoGif: 'https://gymvisual.com/img/p/2/4/3/0/3/24303.gif' }]
          }]
      },
      quarta: {
        title: "Descanso Ativo + Core Isométrico", components: [
          {
            type: "core-block", name: "Estabilidade Central", sets: 3, rest: 45, exercises: [
              { name: "Abdominal infra", type: "reps", value: "20 reps", demoGif: 'https://gymvisual.com/img/p/7/6/3/8/7638.gif' },
              { name: "Prancha com braço estendido", type: "time", value: 60, demoGif: 'https://gymvisual.com/img/p/2/4/0/0/3/24003.gif' },
              { name: "Sprint parado", type: "time", value: 30, demoGif: '../img/40041201-place-jog-male-cardio-view.gif' }]
          }]
      },
      quinta: {
        title: "Inferiores – Glúteo, Quadríceps, Posterior e Panturrilha", components: [
          {
            type: "circuito", name: "Membros Inferiores", sets: 4, rest: 60, exercises: [
              { name: "Agachamento livre", type: "reps", value: "20 reps", demoGif: 'https://gymvisual.com/img/p/2/8/1/6/1/28161.gif' },
              { name: "Afundo alternado", type: "reps", value: "12-15 reps/perna", demoGif: 'https://gymvisual.com/img/p/2/2/8/7/7/22877.gif' },
              { name: "Ponte de glúteo unilateral", type: "reps", value: "12 reps por perna", demoGif: 'https://gymvisual.com/img/p/1/7/6/2/1/17621.gif' },
              { name: "Elevação de panturrilha", type: "reps", value: "25 reps", demoGif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/03/elevacao-de-panturrilhas-com-o-peso-do-corpo.gif' }]
          },
          {
            type: "core-block", name: "Core Ativo", sets: 2, rest: 30, exercises: [
              { name: "Abdominal com pés elevados", type: "reps", value: "20 reps", demoGif: 'https://gymvisual.com/img/p/2/7/0/8/1/27081.gif' },
              { name: "Prancha com toque no ombro", type: "reps", value: "20 reps", demoGif: '../img/52731201-plank-shoulder-tap-waist-view.gif' }]
          }]
      },
      sexta: {
        title: "Empurrar + Finalizador Metabólico", components: [
          {
            type: "circuito", name: "Reforço de Peito e Ombro", sets: 3, rest: 60, exercises: [
              { name: "Flexão tradicional", type: "reps", value: "Até a falha", demoGif: 'https://gymvisual.com/img/p/1/4/5/1/2/14512.gif' },
              { name: "Flexão diamante", type: "reps", value: "12 reps", demoGif: 'https://gymvisual.com/img/p/1/9/8/5/6/19856.gif' },
              { name: "Elevação lateral com elástico", type: "reps", value: "12 reps", demoGif: 'https://gymvisual.com/img/p/1/3/1/2/4/13124.gif' }]
          },
          {
            type: "finalizador", name: "Metabólico", sets: 2, rest: 30, exercises: [
              { name: "Burpee", type: "time", value: 30, demoGif: 'https://gymvisual.com/img/p/3/3/1/3/6/33136.gif' },
              { name: "Sprint parado", type: "time", value: 30, demoGif: '../img/40041201-place-jog-male-cardio-view.gif' },
              { name: "Prancha", type: "time", value: 30, demoGif: 'https://grandeatleta.com.br/blog/wp-content/uploads/2018/06/Prancha-abdominal-Ponte-ventral.gif' }]
          }]
      }
    }
  },
  "plano_perda_peso": {
    id: "plano_perda_peso",
    nome: "Perda de Peso – Alta Intensidade",
    descricao: "Plano estratégico de alta intensidade com foco em queima calórica, HIIT funcional e fortalecimento do core.",
    dias: {
      segunda: {
        title: "HIIT Explosivo + Core", components: [
          {
            type: "circuito", name: "HIIT Acelerado", sets: 4, rest: 60, exercises: [
              { name: "Corrida estacionária", type: "time", value: 30, rest: 15, demoGif: '../img/40041201-place-jog-male-cardio-view.gif' },
              { name: "Burpee", type: "time", value: 30, rest: 15, demoGif: 'https://gymvisual.com/img/p/3/3/1/3/6/33136.gif' },
              { name: "Agachamento com salto", type: "time", value: 30, rest: 15, demoGif: 'https://gymvisual.com/img/p/2/6/2/3/7/26237.gif' },
              { name: "Mountain climbers", type: "time", value: 30, rest: 0, demoGif: 'https://gymvisual.com/img/p/1/9/8/5/7/19857.gif' }]
          },
          {
            type: "core-block", name: "Core Ativo", sets: 3, rest: 30, exercises: [
              { name: "Abdominal cruzado", type: "reps", value: "30 reps", demoGif: '../img/eresfitness_com-00031205-air-bike-m_waist-flat.gif' },
              { name: "Prancha", type: "time", value: 60, demoGif: 'https://grandeatleta.com.br/blog/wp-content/uploads/2018/06/Prancha-abdominal-Ponte-ventral.gif' },
              { name: "Elevação de pernas", type: "reps", value: "20 reps", demoGif: 'https://gymvisual.com/img/p/5/8/5/9/5859.gif' }]
          }]
      },
      terca: {
        title: "Full Body – Condicionamento Funcional", components: [
          {
            type: "circuito", name: "Full Body Burn", sets: 3, rest: 60, exercises: [
              { name: 'Agachamento sumô', type: 'reps', value: '20 reps', demoGif: 'https://gymvisual.com/img/p/5/7/6/5/5765.gif' },
              { name: 'Flexão com toque no ombro', type: 'reps', value: '15 reps', demoGif: 'https://gymvisual.com/img/p/1/5/4/1/7/15417.gif' },
              { name: 'Ponte de glúteo', type: 'reps', value: '20 reps', demoGif: 'https://gymvisual.com/img/p/1/2/4/4/4/12444.gif' },
              { name: 'Prancha com toque no ombro', type: 'reps', value: '20 reps', demoGif: '../img/52731201-plank-shoulder-tap-waist-view.gif' }]
          },
          {
            type: "finalizador", name: "Sprint + Core", sets: 1, rest: 30, exercises: [
              { name: 'Sprint parado', type: 'time', value: 30, demoGif: 'https://gymvisual.com/img/p/1/7/5/0/8/17508.gif' },
              { name: 'Abdominal infra', type: 'reps', value: '20 reps', demoGif: 'https://gymvisual.com/img/p/7/6/3/8/7638.gif' }]
          }]
      },
      quarta: {
        title: "HIIT Tabata + Core Intenso", components: [
          {
            type: "tabata_circuit", name: "Tabata HIIT", rounds: 8, exercises: [
              { name: "Burpee", demoGif: 'https://gymvisual.com/img/p/3/3/1/3/6/33136.gif' },
              { name: "Corrida estacionária", demoGif: 'https://gymvisual.com/img/p/1/7/5/0/8/17508.gif' },
              { name: "Agachamento com salto", demoGif: 'https://gymvisual.com/img/p/2/6/2/3/7/26237.gif' }]
          },
          {
            type: "core-block", name: "Core de Resistência", sets: 3, rest: 45, exercises: [
              { name: "Prancha lateral", type: "time", value: 30, note: "por lado", demoGif: 'https://gymvisual.com/img/p/2/4/3/0/3/24303.gif' },
              { name: "Abdominal bicicleta", type: "reps", value: "30 reps", demoGif: 'https://gymvisual.com/img/p/2/5/8/3/3/25833.gif' },
              { name: "Prancha com braço estendido", type: "time", value: 45, demoGif: 'https://gymvisual.com/img/p/2/4/0/0/3/24003.gif' }]
          }]
      },
      quinta: {
        title: "Funcional com Ênfase em Resistência", components: [
          {
            type: "circuito", name: "Funcional Completo", sets: 4, rest: 60, exercises: [
              { name: "Polichinelo", type: "time", value: 30, demoGif: 'https://gymvisual.com/img/p/1/4/9/3/7/14937.gif' },
              { name: "Afundo alternado", type: "reps", value: "15 reps/perna", demoGif: 'https://gymvisual.com/img/p/2/2/8/7/7/22877.gif' },
              { name: "Flexão tradicional", type: "reps", value: "15 reps", demoGif: 'https://gymvisual.com/img/p/1/4/5/1/2/14512.gif' },
              { name: "Agachamento com impulso", type: "reps", value: "20 reps", demoGif: 'https://gymvisual.com/img/p/1/7/5/5/5/17555.gif' }]
          },
          {
            type: "core-block", name: "Core Rápido", sets: 2, rest: 30, exercises: [
              { name: "Canivete abdominal", type: "reps", value: "15 reps", demoGif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal-em-V-no-chao.gif' },
              { name: "Elevação de pernas", type: "reps", value: "20 reps", demoGif: 'https://gymvisual.com/img/p/5/8/5/9/5859.gif' }]
          }]
      },
      sexta: {
        title: "Queima Final + Core Isométrico", components: [
          {
            type: "core-block", name: "Core de Controle", sets: 3, rest: 45, exercises: [
              { name: "Abdominal infra", type: "reps", value: "20 reps", demoGif: 'https://gymvisual.com/img/p/7/6/3/8/7638.gif' },
              { name: "Prancha com respiração profunda", type: "time", value: 60, demoGif: 'https://gymvisual.com/img/p/2/4/0/0/3/24003.gif' },
              { name: "Prancha lateral com elevação", type: "time", value: 30, note: "por lado", demoGif: 'https://gymvisual.com/img/p/2/7/6/5/6/27656.gif' }]
          },
          {
            type: "finalizador", name: "HIIT Finalizador", sets: 2, rest: 30, exercises: [
              { name: "Agachamento com salto", type: "time", value: 30, demoGif: 'https://gymvisual.com/img/p/2/6/2/3/7/26237.gif' },
              { name: "Burpee", type: "time", value: 30, demoGif: 'https://gymvisual.com/img/p/3/3/1/3/6/33136.gif' },
              { name: "Sprint no lugar", type: "time", value: 20, demoGif: 'https://gymvisual.com/img/p/1/7/5/0/8/17508.gif' }]
          }]
      }
    }
  },
  "plano_massa_magra": {
    id: "plano_massa_magra",
    nome: "Manutenção de Massa Magra",
    descricao: "Plano equilibrado com estímulos de força, resistência moderada e mobilidade para manter a massa muscular e promover definição.",
    dias: {
      segunda: {
        title: "Full Body – Força e Estabilidade", components: [
          {
            type: 'circuito', name: 'Circuito A – Força Global', sets: 3, rest: 60, exercises: [
              { name: 'Agachamento livre', type: 'reps', value: '15 reps', demoGif: 'https://gymvisual.com/img/p/2/8/1/6/1/28161.gif' },
              { name: 'Flexão tradicional', type: 'reps', value: '12–15 reps', demoGif: 'https://gymvisual.com/img/p/1/4/5/1/2/14512.gif' },
              { name: 'Remada com elástico', type: 'reps', value: '12–15 reps', demoGif: 'https://gymvisual.com/17084-large_default/band-straight-back-seated-row-male.jpg' },
              { name: 'Prancha', type: 'time', value: 45, demoGif: 'https://grandeatleta.com.br/blog/wp-content/uploads/2018/06/Prancha-abdominal-Ponte-ventral.gif' }]
          },
          {
            type: 'core-block', name: 'Core Estável', sets: 2, rest: 45, exercises: [
              { name: 'Abdominal infra', type: 'reps', value: '15 reps', demoGif: 'https://gymvisual.com/img/p/7/6/3/8/7638.gif' },
              { name: 'Prancha lateral', type: 'time', value: 30, note: 'por lado', demoGif: 'https://gymvisual.com/img/p/2/4/3/0/3/24303.gif' }]
          }]
      },
      terca: {
        title: "Cardio Funcional + Core", components: [
          {
            type: 'circuito', name: 'Bloco Cardio/Core', sets: 4, rest: 45, exercises: [
              { name: 'Corrida estacionária', type: 'time', value: 30, demoGif: 'https://gymvisual.com/img/p/1/7/5/0/8/17508.gif' },
              { name: 'Polichinelo', type: 'time', value: 30, demoGif: 'https://gymvisual.com/img/p/1/4/9/3/7/14937.gif' },
              { name: 'Abdominal bicicleta', type: 'reps', value: '30 reps', demoGif: 'https://gymvisual.com/img/p/2/5/8/3/3/25833.gif' },
              { name: 'Elevação de pernas', type: 'reps', value: '20 reps', demoGif: 'https://gymvisual.com/img/p/5/8/5/9/5859.gif' }]
          },
          {
            type: 'finalizador', name: 'Sprint & Prancha', sets: 1, rest: 0, exercises: [
              { name: 'Sprint parado', type: 'time', value: 30, demoGif: 'https://gymvisual.com/img/p/1/7/5/0/8/17508.gif' },
              { name: 'Prancha com toque no ombro', type: 'reps', value: '20 reps', demoGif: '../img/52731201-plank-shoulder-tap-waist-view.gif' }]
          }]
      },
      quarta: {
        title: "Parte Superior – Resistência Muscular", components: [
          {
            type: 'circuito', name: 'Circuito Superior', sets: 3, rest: 60, exercises: [
              { name: 'Flexão de braço', type: 'reps', value: '12–15 reps', demoGif: 'https://gymvisual.com/img/p/1/7/5/9/7/17597.gif' },
              { name: 'Rosca com elástico', type: 'reps', value: '12–15 reps', demoGif: 'https://gymvisual.com/img/p/1/3/1/0/1/13101.gif' },
              { name: 'Elevação lateral com elástico', type: 'reps', value: '12 reps', demoGif: 'https://gymvisual.com/img/p/1/3/1/2/4/13124.gif' },
              { name: 'Superman', type: 'reps', value: '15 reps', demoGif: 'https://gymvisual.com/img/p/1/5/0/5/2/15052.gif' }]
          },
          {
            type: 'core-block', name: 'Core Funcional', sets: 2, rest: 45, exercises: [
              { name: 'Abdominal canivete', type: 'reps', value: '15 reps', demoGif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal-em-V-no-chao.gif' },
              { name: 'Prancha com braço estendido', type: 'time', value: 45, demoGif: 'https://gymvisual.com/img/p/2/4/0/0/3/24003.gif' }]
          }]
      },
      quinta: {
        title: "Inferior + Core Dinâmico", components: [
          {
            type: 'circuito', name: 'Pernas & Glúteo', sets: 3, rest: 60, exercises: [
              { name: 'Afundo alternado', type: 'reps', value: '15 reps/perna', demoGif: 'https://gymvisual.com/img/p/2/2/8/7/7/22877.gif' },
              { name: 'Ponte de glúteo', type: 'reps', value: '20 reps', demoGif: 'https://gymvisual.com/img/p/1/2/4/4/4/12444.gif' },
              { name: 'Elevação de panturrilha', type: 'reps', value: '25 reps', demoGif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/03/elevacao-de-panturrilhas-com-o-peso-do-corpo.gif' },
              { name: 'Agachamento isométrico', type: 'time', value: 45, demoGif: 'https://gymvisual.com/img/p/9/0/5/3/9053.gif' }]
          },
          {
            type: 'core-block', name: 'Core Dinâmico', sets: 2, rest: 45, exercises: [
              { name: 'Abdominal com pés elevados', type: 'reps', value: '20 reps', demoGif: 'https://gymvisual.com/img/p/2/7/0/8/1/27081.gif' },
              { name: 'Prancha lateral c/ elevação', type: 'time', value: 30, note: 'por lado', demoGif: 'https://gymvisual.com/img/p/2/7/6/5/6/27656.gif' }]
          }]
      },
      sexta: {
        title: "Mobilidade + Ativação Leve", components: [
          {
            type: 'circuito', name: 'Mobilidade e Controle Corporal', sets: 2, rest: 60, exercises: [
              { name: 'Alongamento dinâmico', type: 'time', value: 60, demoGif: 'https://gymvisual.com/img/p/1/7/5/1/4/17514.gif' },
              { name: 'Agachamento com peso corporal + mobilidade', type: 'reps', value: '15 reps', demoGif: 'https://gymvisual.com/img/p/1/7/5/5/4/17554.gif' },
              { name: 'Prancha com respiração profunda', type: 'time', value: 60, demoGif: 'https://grandeatleta.com.br/blog/wp-content/uploads/2018/06/Prancha-abdominal-Ponte-ventral.gif' }]
          },
          {
            type: 'finalizador', name: 'Fechamento Leve', sets: 1, rest: 0, exercises: [
              { name: 'Caminhada leve no lugar', type: 'time', value: 120, demoGif: 'https://gymvisual.com/img/p/1/7/5/7/2/17572.gif' },
              { name: 'Alongamento estático', type: 'time', value: 90, demoGif: 'https://gymvisual.com/img/p/1/1/3/3/0/11330.gif' }]
          }]
      }
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
              { name: "Polichinelo", type: "time", value: 30, demoGif: 'https://gymvisual.com/img/p/1/4/9/3/7/14937.gif' },
              { name: "Mobilidade de quadril (círculos com perna)", type: "reps", value: "10 reps por lado", demoGif: 'https://gymvisual.com/img/p/1/7/5/1/0/17510.gif' },
              { name: "Mobilidade de ombro (círculos com braços)", type: "reps", value: "15 reps frente e trás", demoGif: 'https://gymvisual.com/img/p/1/7/4/5/7/17457.gif' },
              { name: "Marcha no lugar com elevação de joelho", type: "time", value: 30, demoGif: 'https://gymvisual.com/img/p/1/7/5/0/8/17508.gif' }
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
              { name: "Alongamento dinâmico de adutores (afundo lateral alternado)", type: "reps", value: "10 reps por lado", demoGif: 'https://gymvisual.com/img/p/1/7/6/1/4/17614.gif' },
              { name: "Mobilidade torácica (posição de 4 apoios, rotação de braço)", type: "reps", value: "10 reps por lado", demoGif: 'https://gymvisual.com/img/p/1/0/9/0/5/10905.gif' },
              { name: "Alongamento do gato e camelo (cat-cow)", type: "reps", value: "10 reps lentas", demoGif: 'https://gymvisual.com/img/p/1/7/4/7/2/17472.gif' },
              { name: "Ponte de glúteo", type: "reps", value: "15 reps", demoGif: 'https://gymvisual.com/img/p/1/2/4/4/4/12444.gif' }
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
              { name: "Prancha com respiração profunda", type: "time", value: 45, demoGif: 'https://grandeatleta.com.br/blog/wp-content/uploads/2018/06/Prancha-abdominal-Ponte-ventral.gif' },
              { name: "Prancha lateral com elevação de braço", type: "time", value: 30, note: "por lado", demoGif: 'https://gymvisual.com/img/p/2/4/3/0/3/24303.gif' },
              { name: "Respiração diafragmática deitado", type: "time", value: 60, demoGif: 'https://gymvisual.com/img/p/1/7/4/8/8/17488.gif' }
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
              { name: "Mobilidade de escápula (círculos lentos)", type: "reps", value: "15 reps", demoGif: 'https://gymvisual.com/img/p/1/7/6/0/8/17608.gif' },
              { name: "Alongamento de peitoral (em parede ou porta)", type: "time", value: 30, demoGif: 'https://gymvisual.com/img/p/1/0/7/9/3/10793.gif' },
              { name: "Elevação e depressão de ombros", type: "reps", value: "15 reps", demoGif: 'https://gymvisual.com/img/p/1/6/1/0/1/16101.gif' },
              { name: "Rotação cervical lenta", type: "reps", value: "5 voltas por lado", demoGif: 'https://gymvisual.com/img/p/1/7/5/8/1/17581.gif' }
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
              { name: "Alongamento dinâmico de corpo inteiro (varredura com as mãos até os pés + elevação de braços)", type: "reps", value: "10 reps", demoGif: 'https://gymvisual.com/img/p/1/7/5/1/4/17514.gif' },
              { name: "Afundo com torção de tronco", type: "reps", value: "10 reps por lado", demoGif: 'https://gymvisual.com/img/p/1/7/5/6/9/17569.gif' },
              { name: "Alongamento estático posterior (sentado)", type: "time", value: 30, demoGif: 'https://gymvisual.com/img/p/1/1/3/3/0/11330.gif' },
              { name: "Alongamento cervical + respiração profunda", type: "time", value: 60, demoGif: 'https://gymvisual.com/img/p/1/7/5/8/1/17581.gif' }
            ]
          }
        ]
      }
    }
  },
  "plano_foco_abdomen": {
    id: "plano_foco_abdomen",
    nome: "Foco na Perda de Gordura Abdominal",
    descricao: "Plano de 6 semanas com foco em HIIT, calistenia e core, projetado para queima máxima de gordura e definição abdominal.",
    dias: {
      segunda: {
        title: "HIIT Explosivo + Core",
        components: [
          {
            type: "circuito",
            name: "HIIT Acelerado",
            sets: 4,
            rest: 60,
            exercises: [
              { name: "Corrida estacionária", type: "time", value: 30, rest: 15, demoGif: "https://gymvisual.com/img/p/1/7/5/0/8/17508.gif" },
              { name: "Burpee", type: "time", value: 30, rest: 15, demoGif: "https://gymvisual.com/img/p/3/3/1/3/6/33136.gif" },
              { name: "Agachamento com salto", type: "time", value: 30, rest: 15, demoGif: "https://gymvisual.com/img/p/2/6/2/3/7/26237.gif" },
              { name: "Mountain climbers", type: "time", value: 30, rest: 0, demoGif: "https://gymvisual.com/img/p/1/9/8/5/7/19857.gif" }
            ]
          },
          {
            type: "core-block",
            name: "Core Ativo",
            sets: 3,
            rest: 30,
            exercises: [
              { name: "Abdominal cruzado", type: "reps", value: "30 reps", demoGif: "../img/eresfitness_com-00031205-air-bike-m_waist-flat.gif" },
              { name: "Prancha", type: "time", value: 60, demoGif: "https://grandeatleta.com.br/blog/wp-content/uploads/2018/06/Prancha-abdominal-Ponte-ventral.gif" },
              { name: "Elevação de pernas", type: "reps", value: "20 reps", demoGif: "https://gymvisual.com/img/p/5/8/5/9/5859.gif" }
            ]
          }
        ]
      },
      terca: {
        title: "Full Body Funcional",
        components: [
          {
            type: "circuito",
            name: "Força Corporal",
            sets: 3,
            rest: 60,
            exercises: [
              { name: "Agachamento sumô", type: "reps", value: "20 reps", demoGif: "https://gymvisual.com/img/p/5/7/6/5/5765.gif" },
              { name: "Flexão tradicional", type: "reps", value: "15 reps", demoGif: "https://gymvisual.com/img/p/1/7/5/9/7/17597.gif" },
              { name: "Afundo alternado", type: "reps", value: "15 reps/perna", demoGif: "https://gymvisual.com/img/p/2/2/8/7/7/22877.gif" },
              { name: "Prancha com toque no ombro", type: "reps", value: "20 reps", demoGif: "../img/52731201-plank-shoulder-tap-waist-view.gif" }
            ]
          },
          {
            type: "finalizador",
            name: "Sprint + Core",
            sets: 1,
            rest: 30,
            exercises: [
              { name: "Sprint parado", type: "time", value: 30, demoGif: "https://gymvisual.com/img/p/1/7/5/0/8/17508.gif" },
              { name: "Abdominal infra", type: "reps", value: "20 reps", demoGif: "https://gymvisual.com/img/p/7/6/3/8/7638.gif" }
            ]
          }
        ]
      },
      quarta: {
        title: "HIIT Tabata + Core Intenso",
        components: [
          {
            type: "tabata_circuit",
            name: "Tabata HIIT",
            rounds: 8,
            exercises: [
              { name: "Burpee", demoGif: "https://gymvisual.com/img/p/3/3/1/3/6/33136.gif" },
              { name: "Corrida estacionária", demoGif: "https://gymvisual.com/img/p/1/7/5/0/8/17508.gif" },
              { name: "Agachamento com salto", demoGif: "https://gymvisual.com/img/p/2/6/2/3/7/26237.gif" }
            ]
          },
          {
            type: "core-block",
            name: "Resistência de Core",
            sets: 3,
            rest: 45,
            exercises: [
              { name: "Prancha lateral", type: "time", value: 30, note: "por lado", demoGif: "https://gymvisual.com/img/p/2/4/3/0/3/24303.gif" },
              { name: "Abdominal bicicleta", type: "reps", value: "30 reps", demoGif: "https://gymvisual.com/img/p/2/5/8/3/3/25833.gif" },
              { name: "Prancha com braço estendido", type: "time", value: 45, demoGif: "https://gymvisual.com/img/p/2/4/0/0/3/24003.gif" }
            ]
          }
        ]
      },
      quinta: {
        title: "Cardio Funcional + Core Rápido",
        components: [
          {
            type: "circuito",
            name: "Cardio Burn",
            sets: 3,
            rest: 45,
            exercises: [
              { name: "Polichinelo", type: "time", value: 30, demoGif: "https://gymvisual.com/img/p/1/4/9/3/7/14937.gif" },
              { name: "Afundo alternado", type: "reps", value: "15 reps/perna", demoGif: "https://gymvisual.com/img/p/2/2/8/7/7/22877.gif" },
              { name: "Flexão com toque no ombro", type: "reps", value: "15 reps", demoGif: "https://gymvisual.com/img/p/1/5/4/1/7/15417.gif" },
              { name: "Agachamento com impulso", type: "reps", value: "20 reps", demoGif: "https://gymvisual.com/img/p/1/7/5/5/5/17555.gif" }
            ]
          },
          {
            type: "core-block",
            name: "Core Rápido",
            sets: 2,
            rest: 30,
            exercises: [
              { name: "Canivete abdominal", type: "reps", value: "15 reps", demoGif: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal-em-V-no-chao.gif" },
              { name: "Elevação de pernas", type: "reps", value: "20 reps", demoGif: "https://gymvisual.com/img/p/5/8/5/9/5859.gif" }
            ]
          }
        ]
      },
      sexta: {
        title: "Queima Final + Abdômen Isométrico",
        components: [
          {
            type: "core-block",
            name: "Core Estático",
            sets: 3,
            rest: 45,
            exercises: [
              { name: "Abdominal infra", type: "reps", value: "20 reps", demoGif: "https://gymvisual.com/img/p/7/6/3/8/7638.gif" },
              { name: "Prancha com respiração profunda", type: "time", value: 60, demoGif: "https://gymvisual.com/img/p/2/4/0/0/3/24003.gif" },
              { name: "Prancha lateral com elevação", type: "time", value: 30, note: "por lado", demoGif: "https://gymvisual.com/img/p/2/7/6/5/6/27656.gif" }
            ]
          },
          {
            type: "finalizador",
            name: "HIIT Final",
            sets: 2,
            rest: 30,
            exercises: [
              { name: "Agachamento com salto", type: "time", value: 30, demoGif: "https://gymvisual.com/img/p/2/6/2/3/7/26237.gif" },
              { name: "Burpee", type: "time", value: 30, demoGif: "https://gymvisual.com/img/p/3/3/1/3/6/33136.gif" },
              { name: "Sprint no lugar", type: "time", value: 20, demoGif: "https://gymvisual.com/img/p/1/7/5/0/8/17508.gif" }
            ]
          }
        ]
      }
    }
  }
};