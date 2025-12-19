import React from "react";

export interface Usuario {
  id: number;
  foto?: React.ReactNode;
  nome: string;
  empresa: string;
  setor: string;
  cargo: string;
  dataNasc: string;
  dataAdmissao: string;
  usuario: string;
  telefone: string;
  email: string;
  [key: string]: string | number | React.ReactNode | undefined;
}

export interface UsuarioForm {
  id: number
  nome: string;
  empresa: string;
  setor: string;
  cargo: string;
  dataNasc: string;
  senha?: string;
  telefone: string;
  email: string;
  usuario: string;
  dataAdmissao: string;
  foto?: React.ReactNode;
}