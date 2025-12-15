import { Box, Button } from "@mui/material"
import { StatusCard } from "../../components/StatusCard/StatusCard";
import { InfoGridItem } from "../../components/InfoGridItem/InfoGridItem";
import CallIcon from "@mui/icons-material/Call";
import { useState } from "react";
import { ModalAtendimento } from "./Modal/AntedimentoModal";
import type { Atendimento } from "./types/types";
import { ATENDIMENTOS_MOCK } from "./util/constast";
import theme from "../../theme";

export const Atendimentos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [atendimentoSelecionado, setAtendimentoSelecionado] = useState<Atendimento | null>(null);
  const [mostrarTudo, setMostrarTudo] = useState(false);
  const LIMITE_INICIAL = 5;
  const solicitacoesVisiveis = mostrarTudo ? ATENDIMENTOS_MOCK : ATENDIMENTOS_MOCK.slice(0, LIMITE_INICIAL);

  const abrirModal = (item: Atendimento) => {
    setAtendimentoSelecionado(item);
    setOpenModal(true);
  };

  const handleToggle = () => {
    setMostrarTudo((prev) => !prev);
  };




  return (
    <Box sx={{
      width: "100%", p: 3, boxShadow: "0 0 10px rgba(12, 12, 12, 0.33)", borderRadius: 2, minHeight: "100vh", display: "flex", flexDirection: "column",
    }}>
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
        {solicitacoesVisiveis.map((item) => (
          <InfoGridItem
            key={item.id}
            icon={<CallIcon sx={{ fontSize: 40, color: "#003366" }} />}
            numero={item.numero}
            titulo={item.titulo}
            nome={item.nome}
            local={item.local}
            mensagem={item.mensagem}
            status={item.status}
            horario={item.horario}
            onClick={() => abrirModal(item)}
          />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        {ATENDIMENTOS_MOCK.length > LIMITE_INICIAL && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              variant="contained"
              sx={{ bgcolor: theme.palette.primary.main }}
              onClick={handleToggle}
            >
              {mostrarTudo ? "Carregar menos" : "Carregar mais"}
            </Button>
          </Box>
        )}
      </Box>
      <ModalAtendimento
        open={openModal}
        onClose={() => setOpenModal(false)}
        atendimento={atendimentoSelecionado}
      />
    </Box>
  )
}
