import type { Setor } from "../types/typesLiderado";

export const ORGANOGRAMA_DATA: Setor[] = [
  {
    setor: "Diretoria Executiva",
    gestor: { id: 1, nome: "Carlos Eduardo Silva", cargo: "CEO & Diretor Executivo", foto: "https://i.pravatar.cc/150?u=1" },
    liderados: []
  },
  {
    setor: "Comercial e Vendas",
    gestor: { id: 2, nome: "Ana Paula Mendes", cargo: "Gerente Comercial", foto: "https://i.pravatar.cc/150?u=2" },
    liderados: [
      { id: 5, nome: "Roberto Alves", cargo: "Executivo de Vendas", foto: "https://i.pravatar.cc/150?u=5" },
      { id: 6, nome: "Luciana Dias", cargo: "Vendedora Interna", foto: "https://i.pravatar.cc/150?u=6" },
      { id: 11, nome: "Fernando Souza", cargo: "Projetista Técnico", foto: "https://i.pravatar.cc/150?u=11" },
    ]
  },
  {
    setor: "Produção e Fábrica",
    gestor: { id: 3, nome: "Marcos Vinícius", cargo: "Gerente de Produção", foto: "https://i.pravatar.cc/150?u=3" },
    liderados: [
      { id: 7, nome: "Ricardo Gomes", cargo: "Líder de Instalação", foto: "https://i.pravatar.cc/150?u=7" },
      { id: 8, nome: "Felipe Neto", cargo: "Cortador de Vidros", foto: "https://i.pravatar.cc/150?u=8" },
      { id: 13, nome: "José Roberto", cargo: "Auxiliar de Produção", foto: "https://i.pravatar.cc/150?u=13" },
    ]
  },
  {
    setor: "Novos Talentos (Estagiários)",
    gestor: { id: 4, nome: "Juliana Costa", cargo: "Gerente de RH", foto: "https://i.pravatar.cc/150?u=4" },
    liderados: [
      { id: 40, nome: "Gabriel Lima", cargo: "Estagiário de Desenvolvimento", foto: "https://i.pravatar.cc/150?u=40" },
      { id: 41, nome: "Sophia Rosa", cargo: "Estagiária de Marketing", foto: "https://i.pravatar.cc/150?u=41" },
      { id: 42, nome: "Lucas Pinho", cargo: "Estagiário Administrativo", foto: "https://i.pravatar.cc/150?u=42" },
    ]
  },
  {
    setor: "Tecnologia da Informação",
    gestor: { id: 20, nome: "Alexandre Pontes", cargo: "CTO / Diretor de TI", foto: "https://i.pravatar.cc/150?u=20" },
    liderados: [
      { id: 21, nome: "Guilherme Santos", cargo: "Desenvolvedor Full Stack Sênior", foto: "https://i.pravatar.cc/150?u=21" },
      { id: 22, nome: "Larissa Ferreira", cargo: "Desenvolvedora Frontend", foto: "https://i.pravatar.cc/150?u=22" },
      { id: 23, nome: "Bruno Moares", cargo: "Desenvolvedor Backend", foto: "https://i.pravatar.cc/150?u=23" },
      { id: 24, nome: "Rafael Lima", cargo: "Suporte e Infraestrutura", foto: "https://i.pravatar.cc/150?u=24" },
    ]
  },
  {
    setor: "Financeiro",
    gestor: { id: 30, nome: "Henrique Alencar", cargo: "CFO / Diretor Financeiro", foto: "https://i.pravatar.cc/150?u=30" },
    liderados: [
      { id: 10, nome: "Tiago Lemos", cargo: "Analista de Contas a Pagar", foto: "https://i.pravatar.cc/150?u=10" },
      { id: 31, nome: "Patrícia Amorim", cargo: "Analista de Faturamento", foto: "https://i.pravatar.cc/150?u=31" },
      { id: 32, nome: "Marcos Reais", cargo: "Tesouraria", foto: "https://i.pravatar.cc/150?u=32" },
    ]
  },
];