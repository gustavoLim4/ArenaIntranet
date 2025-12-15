import { Box, Typography, Paper } from "@mui/material";
import { type ReactNode } from "react";
import theme from "../../theme";

type InfoGridItemProps = {
  icon: ReactNode;
  numero: string | number;
  titulo: string;
  mensagem?: string;
  nome?: string;
  local?: string;
  horario?: string
  status?: "resolvido" | "pendente" | "aberto" | string;
  onClick?: () => void;
};

export const InfoGridItem = ({
  icon,
  numero,
  titulo,
  mensagem,
  nome,
  local,
  horario,
  onClick,
  status = "resolvido",
}: InfoGridItemProps) => {

  return (
    <>
      <Paper
        elevation={0}
        onClick={onClick}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 2,
          cursor: "pointer",
          transition: "0.2s",
          "&:hover": { backgroundColor: "#f5f5f5" },
          borderBottom: "1px solid #ddd",
          borderRadius: 0
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ width: 40, height: 40 }}>{icon}</Box>
          <Box>
            <Typography fontWeight={600}>
              {numero} — <span style={{ fontWeight: 600 }}>{titulo}</span>
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" sx={{ color: theme.palette.primary.main, fontWeight: 450 }}>{nome}</Typography>
              <Typography variant="body2" sx={{ color: theme.palette.secondary.main, fontWeight: 450 }}>{local}</Typography>
            </Box>
            {mensagem && (
              <Typography variant="body1" color="gray">
                {mensagem}
              </Typography>
            )}
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end", gap: .5 }}>
          <Typography sx={{ fontSize: 12 }}>
            {horario}
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
    </>
  );
};
