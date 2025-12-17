import type { TableColumn } from "../../../components/Table/types";
import type { Usuario } from "../types/types";
import { gerarAvatar } from "../components/Avatar/avatar";


export const DADOS_EXIBICAO_USARIOS: TableColumn[] = [
    {
        label: "Fotos",
        key: "foto",
    },
    {
        label: "Nome",
        key: "nome",
    },
    {
        label: "Empresa",
        key: "empresa",
    },
    {
        label: "Data/nasc",
        key: "dataNasc",
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




export const USUARIOS_MOCK: Usuario[] = [
    {
        id: 1,
        nome: "Gustavo Lima",
        empresa: "Arena vidros",
        setor: "TI",
        dataNasc: "10/09/1999",
        cargo: "Desenvolvedor Front-end",
        usuario: "gustavo.lima",
        foto: gerarAvatar("Gustavo Lima"),
    },
    {
        id: 2,
        nome: "Maria Oliveira",
        empresa: "Genios",
        setor: "Financeiro",
        dataNasc: "19/01/2002",
        cargo: "Analista Financeiro",
        usuario: "maria.oliveira",
        foto: gerarAvatar("Maria Oliveira"),
    },
    {
        id: 3,
        nome: "Carlos Pereira",
        empresa: "Arena vidros",
        setor: "RH",
        dataNasc: "20/12/1982",
        cargo: "Analista de Recursos Humanos",
        usuario: "carlos.pereira",
        foto: gerarAvatar("Carlos Pereira"),
    },
    {
        id: 4,
        nome: "Ana Souza",
        empresa: "Genios",
        setor: "Comercial",
        dataNasc: "01/04/1970",
        cargo: "Executiva de Vendas",
        usuario: "ana.souza",
        foto: gerarAvatar("Ana Souza"),
    },
];



