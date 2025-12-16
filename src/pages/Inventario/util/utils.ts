import type { TableColumn } from "../../../components/Table/types";
import type { ModeloEquipamento } from "../types/inventario.type";

export const DADOS_EXIBICAO_INVENTARIO: TableColumn[] = [
    { key: "equipamento", label: "Equipamento" },
    { key: "categoria", label: "Categoria" },
    { key: "qtdMarcas", label: "Qtd. de Marcas" },
    { key: "quantidade", label: "Quantidade Total" },
];
export const DADOS_EXIBICAO_INVENTARIO_FORM: TableColumn[] = [
    { key: "equipamento", label: "Equipamento" },
    { key: "categoria", label: "Categoria" },
];

export const CATEGORIAS_MOCK = [
    "Equipamentos",
    "Periféricos",
    "Cabos",
    "Rede",
    "Hardware",
    "Impressão",
];

export const COLUNAS_MODELOS_EQUIPAMENTO: TableColumn[] = [
    { key: "modelo", label: "Modelo", width: 200 },
    { key: "decrementar", label: "Diminuir", width: 30 },
    { key: "incrementar", label: "Aumentar" },
    { key: "quantidade", label: "Quantidade", width: 30 },
];


export const MODELOS_POR_EQUIPAMENTO: Record<string, ModeloEquipamento[]> = {
    Notebook: [
        { modelo: "Dell Latitude 5420", quantidade: 6 },
        { modelo: "HP ProBook 440", quantidade: 5 },
        { modelo: "Lenovo ThinkPad E14", quantidade: 4 },
    ],

    Desktop: [
        { modelo: "Dell OptiPlex 7090", quantidade: 6 },
        { modelo: "HP EliteDesk 800", quantidade: 4 },

    ],

    Monitor: [
        { modelo: "Samsung 24''", quantidade: 8 },
        { modelo: "LG 22''", quantidade: 6 },
        { modelo: "AOC 21''", quantidade: 5 },
        { modelo: "Dell 23''", quantidade: 3 },

    ],

    Impressora: [
        { modelo: "HP LaserJet M404", quantidade: 3 },
        { modelo: "Brother HL-1212W", quantidade: 2 },

    ],

    "Cabo VGA": [
        { modelo: "VGA 1.5m", quantidade: 10 },
        { modelo: "VGA 3m", quantidade: 8 },
        { modelo: "VGA 5m", quantidade: 10 },

    ],

    "Cabo DVI": [
        { modelo: "DVI-D", quantidade: 8 },
        { modelo: "DVI-I", quantidade: 6 },

    ],

    "Cabo HDMI": [
        { modelo: "HDMI 1.4", quantidade: 20 },
        { modelo: "HDMI 2.0", quantidade: 25 },
        { modelo: "HDMI 2.1", quantidade: 15 },
        { modelo: "HDMI 5m", quantidade: 0 },

    ],

    "Cabo DisplayPort": [
        { modelo: "DP 1.2", quantidade: 10 },
        { modelo: "DP 1.4", quantidade: 9 },
    ],

    "Cabo de Rede": [
        { modelo: "CAT5e", quantidade: 50 },
        { modelo: "CAT6", quantidade: 40 },
        { modelo: "CAT6A", quantidade: 30 },
    ],

    Mouse: [
        { modelo: "Logitech M170", quantidade: 20 },
        { modelo: "Dell MS116", quantidade: 15 },
        { modelo: "Microsoft Basic", quantidade: 10 },
    ],

    Teclado: [
        { modelo: "Logitech K120", quantidade: 15 },
        { modelo: "Dell KB216", quantidade: 13 },
        { modelo: "Microsoft Wired", quantidade: 10 },
    ],

    Headset: [
        { modelo: "Logitech H390", quantidade: 10 },
        { modelo: "Jabra Evolve 20", quantidade: 8 },
    ],

    "Placa de Vídeo": [
        { modelo: "GTX 1660", quantidade: 5 },
        { modelo: "RTX 3060", quantidade: 4 },
        { modelo: "RX 6600", quantidade: 3 },
    ],

    Roteador: [
        { modelo: "TP-Link Archer C6", quantidade: 5 },
        { modelo: "Mikrotik hAP ac2", quantidade: 4 },
    ],

    Switch: [
        { modelo: "TP-Link 8 portas", quantidade: 4 },
        { modelo: "Cisco SG110", quantidade: 3 },
    ],
};
