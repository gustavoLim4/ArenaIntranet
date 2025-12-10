import { Box, Typography, Paper } from "@mui/material";
import { type ReactNode, useState } from "react";
import { ModalSolicitacoes } from "../../pages/Solicitacoes/Modal/ModalSolicitacoes";

type InfoGridItemProps = {
  icon: ReactNode;
  numero: string | number;
  titulo: string;
  mensagem?: string;
  status?: "resolvido" | "pendente" | "aberto" | string;
};

export const InfoGridItem = ({
  icon,
  numero,
  titulo,
  mensagem,
  status = "resolvido",
}: InfoGridItemProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Paper
        elevation={0}
        onClick={() => setOpen(true)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 2,
          cursor: "pointer",
          transition: "0.2s",
          "&:hover": { backgroundColor: "#f5f5f5" },
          borderBottom: "1px solid #ddd",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ width: 40, height: 40 }}>{icon}</Box>
          <Box>
            <Typography fontWeight={600} mb={1}>
              {numero} — <span style={{ fontWeight: 500 }}>{titulo}</span>
            </Typography>

            {mensagem && (
              <Typography variant="body2" color="gray">
                {mensagem}
              </Typography>
            )}
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end", gap: .5 }}>
          <Typography sx={{ fontSize: 12 }}>
            10/09/2025 - 18:44:20
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color:
                status === "resolvido"
                  ? "green"
                  : status === "pendente"
                    ? "orange"
                    : "blue",
              fontWeight: "bold",
            }}
          >
            {status}
          </Typography>
        </Box>
      </Paper>

      <ModalSolicitacoes
        open={open}
        onClose={() => setOpen(false)}
        numero={numero}
        titulo={titulo}
        mensagem={mensagem}
      />
    </>
  );
};
