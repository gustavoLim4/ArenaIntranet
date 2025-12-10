import { Box } from "@mui/material"
import { StatusCard } from "../../components/StatusCard/StatusCard";


export const Atendimentos = () => {
  return (
    <Box sx={{ width: "100%", mt: 4, px: 3 }}>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <StatusCard
          titulo="Total"
          descricao="Todos os atendimentos do seu departamento"
          valor={5066}
          corStatus="#333"
        />

        <StatusCard
          titulo="Em aberto"
          descricao="Todos os chamados em aberto para ser atendido"
          valor={0}
          corStatus="red"
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
          valor={5066}
          corStatus="green"
        />
      </Box>
      <h1>Gus</h1>
    </Box>
  )
}
