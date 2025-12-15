export type Atendimento = {
  id: number;
  numero: string;
  titulo: string;
  nome: string;
  local: string;
  mensagem: string;
  status: "pendente" | "resolvido" | "aberto";
  horario: string;
};

