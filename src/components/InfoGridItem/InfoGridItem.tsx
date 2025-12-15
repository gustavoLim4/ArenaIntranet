import { Box, Typography, Paper } from "@mui/material";
import theme from "../../theme";
import type { Atendimento } from "../../pages/Atendimentos/types/types";

export const InfoGridItem = ({
  icon,
  numero,
  titulo,
  mensagem,
  nome,
  local,
  horario,
  onClick,
  status 
}: Atendimento) => {

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
          <Box sx={{ width: 40, height: 40, display: { xs: "none", md: "block" } }}>{icon}</Box>
          <Box>
            <Typography fontWeight={600} fontSize={{ xs: 15, md: 16 }}>
              {numero} — <span style={{ fontWeight: 600 }}>{titulo}</span>
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" sx={{ color: theme.palette.primary.main, fontWeight: 450 }}>{nome}</Typography>
              <Typography variant="body2" sx={{ color: theme.palette.secondary.main, fontWeight: 450 }}>{local}</Typography>
            </Box>
            {mensagem && (
              <Typography variant="body1" color="gray" fontSize={{ xs: 15, md: 16 }}>
                {mensagem}
              </Typography>
            )}
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end", gap: .5 }}>
          <Typography sx={{ fontSize: 12, display: { xs: "none", md: "block" } }}>
            {horario}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color:
                status === "Resolvido" ? "green" : status === "Pendente" ? "red" : "#c4be17",
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
