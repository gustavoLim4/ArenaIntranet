import type { Atendimento } from "../types/types";

export const statusColor = (status: Atendimento["status"]) => {
  switch (status) {
    case "Pendente":
      return "red";
    case "Em atendimento":
      return "#c4be17";
    case "Resolvido":
      return "green";
    default:
      return "text.primary";
  }
};
