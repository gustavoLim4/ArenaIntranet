// components/table/types.ts
import React from "react";

export interface TableColumn {
  key: string;
  label: string;
  width?: string | number;
  lastColunm?: string;
}

export interface TableAction {
  icon: React.ReactNode;
  label?: string;
  onClick: (row: any) => void;
}

export interface TableRow {
  [key: string]: string | number | React.ReactNode | null | object;
}
