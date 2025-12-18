import type { Treinamento } from "../types/types";

export const TREINAMENTOS_MOCK: Treinamento[] = [
    {
        id: 1,
        titulo: "Segurança no Trabalho com Vidros",
        instrutor: "Abravidro",
        imgVideo: "https://img.youtube.com/vi/QEoCFKm0ufk/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=QEoCFKm0ufk",
        categoria: "Segurança"
    },
    {
        id: 2,
        titulo: "Técnicas de Corte de Precisão",
        instrutor: "Uso do Vidro",
        imgVideo: "https://img.youtube.com/vi/TYvv4zprEC8/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=TYvv4zprEC8",
        categoria: "Operacional"
    },
    {
        id: 3,
        titulo: "COMO ABORDAR CLIENTES EM 6 PASSOS",
        instrutor: "TV do verdedor",
        imgVideo: "https://i.ytimg.com/vi/P82kY3ynZLE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAf_dGd9o78XHj5EdQTrwYOZEuaUw",
        videoUrl: "https://www.youtube.com/watch?v=P82kY3ynZLE",
        categoria: "Atendimento ao cliente"
    },
    {
        id: 4,
        titulo: "Instalação de Vidros Temperados",
        instrutor: "Jonas Alves Vidraceiro",
        imgVideo: "https://vidroimpresso.com.br/imagens/noticias/setor-vidreiro/instalacao-de-vidro-em-2021:-6-passos-para-um-projeto-perfeito-vidro.png",
        videoUrl: "https://www.youtube.com/watch?v=bnLi6O8J1wI",
        categoria: "Instalação"
    },
    {
        id: 5,
        titulo: "Mario Sergio Cortella - Faça o Teu Melhor",
        instrutor: "Canal do Cortella",
        imgVideo: "https://i.ytimg.com/vi/dd1bsHYYqjg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCCZMQAHGb2mbRfDIYh4sFU5BvQZQ",
        videoUrl: "https://www.youtube.com/watch?v=dd1bsHYYqjg",
        categoria: "Motivacional"
    },
    {
        id: 6,
        titulo: "Técnicas Poderosas Para Fechar Vendas em Muito Menos Tempo!",
        instrutor: "Carol Iasmim",
        imgVideo: "https://i.ytimg.com/vi/fiqPPT-viHY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCQNjWBjKZ_7kPRjaJkANRPJ_tgCg",
        videoUrl: "https://www.youtube.com/watch?v=fiqPPT-viHY",
        categoria: "Vendas"
    },
    {
        id: 7,
        titulo: "Papo Saúde - Atenção Básica e Meio Ambiente",
        instrutor: "Saúde Digital UFSC",
        imgVideo: "https://i.ytimg.com/vi/7ISl802NHdA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCiN_SQLEDRYGDgYOHV-yuf3k75wg",
        videoUrl: "https://www.youtube.com/watch?v=7ISl802NHdA",
        categoria: "Saúde Ambiental"
    },
];

export const FIELDS_CONFIG = [
    { key: "titulo", label: "Título do Vídeo", placeholder: "" },
    { key: "instrutor", label: "Nome do Instrutor", placeholder: "" },
    { key: "videoUrl", label: "Link do Vídeo (YouTube)", placeholder: "https://www.youtube.com/watch?v=..." },
];



export const CATEGORIAS_TREINAMENTO = [
    "Saúde Ambiental",
    "Inteligência Emocional",
    "Motivacional",
    "Operacional",
    "Atendimento ao cliente",
    "Segurança",
    "Vendas",
    "Instalação"
];