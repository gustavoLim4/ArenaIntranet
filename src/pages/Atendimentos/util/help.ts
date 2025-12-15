import type { Atendimento } from "../types/types";

export const statusColor = (status: Atendimento["status"]) => {
  switch (status) {
    case "pendente":
      return "orange";
    case "aberto":
      return "blue";
    case "resolvido":
      return "green";
    default:
      return "text.primary";
  }
};
