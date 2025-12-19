import type { MensagemOuvidoria } from "../types/types";

export const CATEGORIAS_OUVIDORIA = [
  "Sugestão",
  "Elogio",
  "Reclamação",
  "Denúncia Ética",
  "Infraestrutura / TI",
  "Recursos Humanos"
];


export const MOCK_MENSAGENS_OUVIDORIA: MensagemOuvidoria[] = [
  {
    id: 1,
    data: "18/12/2025",
    categoria: "Denúncia Ética",
    assunto: "Comportamento inadequado no setor de corte",
    mensagem: "Gostaria de relatar que alguns colaboradores não estão utilizando os EPIs corretamente durante o turno da tarde.",
    anonimo: true,
    autor: "Anônimo",
  },
  {
    id: 2,
    data: "15/12/2025",
    categoria: "Sugestão",
    assunto: "Melhoria no refeitório",
    mensagem: "Poderíamos ter mais opções de frutas no café da manhã.",
    anonimo: false,
    autor: "João Silva",

  },
  {
    id: 3,
    data: "18/12/2025",
    categoria: "Denúncia Ética",
    assunto: "Comportamento inadequado no setor de corte",
    mensagem: "Gostaria de relatar que alguns colaboradores não estão utilizando os EPIs corretamente durante o turno da tarde.",
    anonimo: true,
    autor: "Anônimo",
  },
  {
    id: 4,
    data: "15/12/2025",
    categoria: "Sugestão",
    assunto: "Melhoria no refeitório",
    mensagem: "Poderíamos ter mais opções de frutas no café da manhã.",
    anonimo: false,
    autor: "João Silva",

  },
  {
    id: 5,
    data: "18/12/2025",
    categoria: "Denúncia Ética",
    assunto: "Comportamento inadequado no setor de corte",
    mensagem: "Gostaria de relatar que alguns colaboradores não estão utilizando os EPIs corretamente durante o turno da tarde.",
    anonimo: true,
    autor: "Anônimo",
  },
  {
    id: 6,
    data: "15/12/2025",
    categoria: "Sugestão",
    assunto: "Melhoria no refeitório",
    mensagem: "Poderíamos ter mais opções de frutas no café da manhã.",
    anonimo: false,
    autor: "João Silva",

  },

];