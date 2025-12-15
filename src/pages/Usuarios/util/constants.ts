import type { TableColumn } from "../../../components/Table/types";


export const DADOS_EXIBICAO_USARIOS: TableColumn[] = [
    {
        label: "Nome",
        key: "nome",
    },
    {
        label: "Empresa",
        key: "empresa",
    },
    {
        label: "Setor",
        key: "setor",
    },
    {
        label: "Cargo",
        key: "cargo",
    },
    {
        label: "Usuário",
        key: "usuario",
    },
];



export const USUARIOS_MOCK = [
    {
        id: 1,
        nome: "Gustavo Lima",
        empresa: "Arena vidros",
        setor: "TI",
        cargo: "Desenvolvedor Front-end",
        usuario: "gustavo.lima",
    },
    {
        id: 2,
        nome: "Maria Oliveira",
        empresa: "Genios",
        setor: "Financeiro",
        cargo: "Analista Financeiro",
        usuario: "maria.oliveira",
    },
    {
        id: 3,
        nome: "Carlos Pereira",
        empresa: "Arena vidros",
        setor: "RH",
        cargo: "Analista de Recursos Humanos",
        usuario: "carlos.pereira",
    },
    {
        id: 4,
        nome: "Ana Souza",
        empresa: "Genios",
        setor: "Comercial",
        cargo: "Executiva de Vendas",
        usuario: "ana.souza",
    },
];


