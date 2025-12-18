export const COMUNICADOS_MOCK = [
    {
        id: 1,
        titulo: "Nova Política de Home Office",
        data: "18/12/2025",
        categoria: "RH",
        urgencia: "Alta",
        conteudo: "A partir de janeiro, adotaremos o modelo híbrido oficial. Confira os detalhes no manual.",
    },
    {
        id: 2,
        titulo: "Manutenção do Sistema Financeiro",
        data: "20/12/2025",
        categoria: "TI",
        urgencia: "Média",
        conteudo: "O sistema ficará instável entre 22h e 04h para atualização de segurança.",
    },
    {
        id: 3,
        titulo: "Confraternização de Final de Ano",
        data: "22/12/2025",
        categoria: "Eventos",
        urgencia: "Baixa",
        conteudo: "Nossa festa será no dia 22! Não esqueça de confirmar sua presença no link enviado.",
    }
];

export const FIELDS_CONFIG_COMUNICADO = [
    { key: "titulo", label: "Título do Comunicado", placeholder: "" },
    { key: "conteudo", label: "Conteúdo do Comunicado", placeholder: "Escreva aqui a mensagem principal...", multiline: true, rows: 5 },
];

export const CATEGORIAS_COMUNICADO = ["Geral", "RH", "TI", "Eventos", "Operacional"];
export const NIVEIS_URGENCIA = ["Baixa", "Média", "Alta"];
