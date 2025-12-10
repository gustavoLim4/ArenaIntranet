import { Box, Button } from "@mui/material"
import CallIcon from "@mui/icons-material/Call";
import AddIcon from '@mui/icons-material/Add';
import { InfoGridItem } from "../../components/InfoGridItem/InfoGridItem";

export const Solicitacoes = () => {
  return (
    <Box sx={{ width: "100%", mt: 2, p: 3, boxShadow: 3, borderRadius: 1, }}>
      <Box sx={{ display: "flex", justifyContent: "end", mb: 4 }}>
        <Button startIcon={<AddIcon />} variant="contained" >
          Novo chamado
        </Button>
      </Box>
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
  )
}
