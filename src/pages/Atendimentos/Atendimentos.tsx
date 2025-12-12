import { Box, Button } from "@mui/material"
import { StatusCard } from "../../components/StatusCard/StatusCard";
import { InfoGridItem } from "../../components/InfoGridItem/InfoGridItem";
import CallIcon from "@mui/icons-material/Call";

export const Atendimentos = () => {
  return (
    <Box sx={{
      width: "100%", p: 3, boxShadow: "0 0 10px rgba(12, 12, 12, 0.33)", borderRadius: 2, minHeight: "85vh", display: "flex", flexDirection: "column", }}>
      <Box sx={{ display: { xs: "block", md: "flex" }, gap: 2, justifyContent: "center", mb: 5 }}>
        <StatusCard
          titulo="Total"
          descricao="Todos os atendimentos do seu departamento"
          valor={0}
          corStatus="#333"
        />
        <StatusCard
          titulo="Pendente"
          descricao="Todos os chamados em aberto para ser atendido"
          valor={0}
          corStatus="#ffae00ff"
        />
        <StatusCard
          titulo="Em atendimento"
          descricao="Todos os chamados que estão sendo atendidos"
          valor={0}
          corStatus="#c4be17"
        />
        <StatusCard
          titulo="Resolvido"
          descricao="Todos os chamados que já estão resolvidos"
          valor={0}
          corStatus="green"
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <InfoGridItem
          icon={<CallIcon sx={{ fontSize: 40, color: "#003366" }} />}
          numero="67894"
          titulo="Outro problema"
          nome="Gustavo"
          local="Financeiro"
          mensagem="Meu pc esta desligando toda hora"
          status="pendente"
        />
        <InfoGridItem
          icon={<CallIcon sx={{ fontSize: 40, color: "#003366" }} />}
          numero="67894"
          titulo="Outro problema"
          nome="Erika"
          local="Caixa"
          mensagem="Meu pc esta desligando toda hora"
          status="pendente"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button variant="contained" sx={{ bgcolor: "primary.main" }}>
          Carregar mais
        </Button>
      </Box>
    </Box>
  )
}
