export interface Pessoa {
    id?: number;
    nome: string;
    cargo: string;
    foto: string;
}

export interface Setor {
    setor: string;
    gestor: Pessoa;
    liderados: Pessoa[];
}

export interface CardPessoaProps extends Pessoa {
    onEdit: () => void;
}

export interface ModalPessoaProps {
    open: boolean;
    initialData: Pessoa | null;
    setor: string | null;
    onClose: () => void;
    onSave: (data: Pessoa) => void;
}