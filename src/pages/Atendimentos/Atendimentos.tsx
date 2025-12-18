import { Box, Button } from "@mui/material"
import { StatusCard } from "../../components/StatusCard/StatusCard";
import { InfoGridItem } from "../../components/InfoGridItem/InfoGridItem";
import CallIcon from "@mui/icons-material/Call";
import { useState } from "react";
import { ModalAtendimento } from "./Modal/AntedimentoModal";
import type { Atendimento, FiltroStatus } from "./types/types";
import { ATENDIMENTOS_MOCK } from "./util/constast";
import theme from "../../theme";
import { dadosNãoEncostrado, TelasStyles } from "../../styles/styleresposecomun.styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


export const Atendimentos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [atendimentoSelecionado, setAtendimentoSelecionado] = useState<Atendimento | null>(null);
  const [mostrarTudo, setMostrarTudo] = useState(false);
  const [filtroStatus, setFiltroStatus] = useState<FiltroStatus>("TODOS")
  const LIMITE_INICIAL = 5;
  const atendimentosFiltrados = filtroStatus === "TODOS" ? ATENDIMENTOS_MOCK : ATENDIMENTOS_MOCK.filter((item) => item.status === filtroStatus);
  const solicitacoesVisiveis = mostrarTudo ? atendimentosFiltrados : atendimentosFiltrados.slice(0, LIMITE_INICIAL);

  const abrirModal = (item: Atendimento) => {
    setAtendimentoSelecionado(item);
    setOpenModal(true);
  };

  const handleToggle = () => {
    setMostrarTudo((prev) => !prev);
  };




  return (
    <Box sx={{ ...TelasStyles }}>
      <Box sx={{ display: { xs: "block", md: "flex" }, gap: 2, justifyContent: "center", mb: 5 }}>
        <StatusCard
          titulo="Total"
          descricao="Todos os atendimentos do seu departamento"
          valor={ATENDIMENTOS_MOCK.length}
          corStatus="#333"
          onClick={() => {
            setFiltroStatus("TODOS");
            setMostrarTudo(false);
          }}
        />
        <StatusCard
          titulo="Em aberto"
          descricao="Todos os chamados em aberto para ser atendido"
          valor={ATENDIMENTOS_MOCK.filter(i => i.status === "Pendente").length}
          corStatus="red"
          onClick={() => {
            setFiltroStatus("Pendente");
            setMostrarTudo(false);
          }}
        />
        <StatusCard
          titulo="Em atendimento"
          descricao="Todos os chamados que estão sendo atendidos"
          valor={ATENDIMENTOS_MOCK.filter(i => i.status === "Em atendimento").length}
          corStatus="#c4be17"
          onClick={() => {
            setFiltroStatus("Em atendimento");
            setMostrarTudo(false);
          }}
        />
        <StatusCard
          titulo="Resolvido"
          descricao="Todos os chamados que já estão resolvidos"
          valor={ATENDIMENTOS_MOCK.filter(i => i.status === "Resolvido").length}
          corStatus="green"
          onClick={() => {
            setFiltroStatus("Resolvido");
            setMostrarTudo(false);
          }}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {solicitacoesVisiveis.length === 0 ? (
          <Box sx={{ ...dadosNãoEncostrado }}>
            Nenhum chamado encontrado!
          </Box>
        ) : (
          solicitacoesVisiveis.map((item) => (
            <InfoGridItem
              key={item.id}
              id={item.id}
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
          ))
        )}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        {ATENDIMENTOS_MOCK.length > LIMITE_INICIAL && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{ bgcolor: theme.palette.primary.main }}
              onClick={handleToggle}
              endIcon={mostrarTudo ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
