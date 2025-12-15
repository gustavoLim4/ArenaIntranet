import type { ReactNode } from "react";

type StatusAtendimento =  | "Pendente" | "Em atendimento" | "Resolvido";

export interface Atendimento {
  id: number;
  numero: string;
  titulo: string;
  nome?: string;
  local?: string;
  mensagem?: string;
  status?: StatusAtendimento;
  horario?: string;
  icon?: ReactNode;
  onClick?: () => void;
};



export type FiltroStatus = "TODOS" | StatusAtendimento;