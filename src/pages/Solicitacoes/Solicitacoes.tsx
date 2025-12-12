import { Box, Button } from "@mui/material"
import CallIcon from "@mui/icons-material/Call";
import AddIcon from '@mui/icons-material/Add';
import { InfoGridItem } from "../../components/InfoGridItem/InfoGridItem";
import theme from "../../theme";

export const Solicitacoes = () => {
  return (
    <Box sx={{ width: "100%", p: 3, boxShadow: "0 0 10px rgba(12, 12, 12, 0.33)", borderRadius: 2, minHeight: "85vh", display: "flex", flexDirection: "column", }}>
      <Box sx={{ display: "flex", justifyContent: "end", mb: 2 }}>
        <Button startIcon={<AddIcon />} variant="contained" sx={{ bgcolor: theme.palette.primary.main }}>
          Novo chamado
        </Button>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <InfoGridItem
          icon={<CallIcon sx={{ fontSize: 40, color: "#003366" }} />}
          numero="67894"
          titulo="Outro problema"
          mensagem="Meu pc esta desligando toda hora"
          status="resolvido"
        />
        <InfoGridItem
          icon={<CallIcon sx={{ fontSize: 40, color: "#003366" }} />}
          numero="67894"
          titulo="Reposição de papel"
          mensagem="Meu pc esta desligando toda hora"
          status="aberto"
        />
        <InfoGridItem
          icon={<CallIcon sx={{ fontSize: 40, color: "#003366" }} />}
          numero="67894"
          titulo="Outro problema"
          mensagem="Meu pc esta desligando toda hora"
          status="resolvido"
        />
        <InfoGridItem
          icon={<CallIcon sx={{ fontSize: 40, color: "#003366" }} />}
          numero="67894"
          titulo="Outro problema"
          mensagem="Meu pc esta desligando toda hora"
          status="pendente"
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button variant="contained" sx={{ bgcolor: theme.palette.primary.main }}>
          Carregar mais
        </Button>
      </Box>
    </Box>
  )
}
