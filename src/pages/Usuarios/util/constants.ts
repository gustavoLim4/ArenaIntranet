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
        label: "Telefone",
        key: "telefone",
    },
    {
        label: "Empresa",
        key: "empresa",
    },
    {
        label: "Data de admissão",
        key: "dataAdmissao",
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
        label: "Permanência",
        key: "tempoEmpresa",
    },
];



export const USUARIOS_MOCK: Usuario[] = [
    {
        id: 1,
        nome: "Gustavo Lima",
        empresa: "Arena vidros",
        setor: "TI",
        dataNasc: "10/09/1999",
        dataAdmissao: "11/01/2020",
        cargo: "Desenvolvedor Front-end",
        usuario: "gustavo.lima",
        telefone: "(11) 94489-2012",
        email: "gustavolima@gmail.com",
        foto: gerarAvatar("Gustavo Lima"),
    },
    {
        id: 2,
        nome: "Maria Oliveira",
        empresa: "Genios",
        setor: "Financeiro",
        dataNasc: "19/01/2002",
        dataAdmissao: "10/09/2013",
        cargo: "Analista Financeiro",
        usuario: "maria.oliveira",
        telefone: "(11) 94489-2012",
        email: "gustavolima@gmail.com",
        foto: gerarAvatar("Maria Oliveira"),
    },
    {
        id: 3,
        nome: "Carlos Pereira",
        empresa: "Arena vidros",
        setor: "RH",
        dataNasc: "20/12/1982",
        dataAdmissao: "05/03/2010",
        cargo: "Analista de Recursos Humanos",
        usuario: "carlos.pereira",
        telefone: "(11) 94489-2012",
        email: "gustavolima@gmail.com",
        foto: gerarAvatar("Carlos Pereira"),
    },
    {
        id: 4,
        nome: "Ana Souza",
        empresa: "Genios",
        setor: "Comercial",
        dataNasc: "01/04/1970",
        dataAdmissao: "01/12/2024",
        cargo: "Executiva de Vendas",
        usuario: "ana.souza",
        telefone: "(11) 94489-2012",
        email: "gustavolima@gmail.com",
        foto: gerarAvatar("Ana Souza"),
    },
];



