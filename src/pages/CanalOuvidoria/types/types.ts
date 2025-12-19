

export interface MensagemOuvidoria {
    id: number;
    data: string;
    categoria: string;
    assunto: string;
    mensagem: string;
    anonimo: boolean;
    autor: string;
}

export interface FormOuvidoria {
    categoria: string;
    assunto: string;
    mensagem: string;
    anonimo: boolean;
}