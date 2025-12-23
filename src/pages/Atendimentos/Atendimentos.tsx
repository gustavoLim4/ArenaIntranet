import { Box, Button } from "@mui/material";
import { StatusCard } from "../../components/StatusCard/StatusCard";
import { InfoGridItem } from "../../components/InfoGridItem/InfoGridItem";
import CallIcon from "@mui/icons-material/Call";
import { useState } from "react";
import { ModalAtendimento } from "./Modal/AntedimentoModal";
import type { Atendimento, FiltroStatus } from "./types/types";
import { ATENDIMENTOS_MOCK } from "./util/constast";
import { dadosNãoEncostrado, TelasStyles } from "../../styles/stylesComun.styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export const Atendimentos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [atendimentoSelecionado, setAtendimentoSelecionado] =
    useState<Atendimento | null>(null);

  const [filtroStatus, setFiltroStatus] =
    useState<FiltroStatus>("TODOS");

  const LIMITE_INICIAL = 5;
  const [visibleCount, setVisibleCount] = useState(LIMITE_INICIAL);

  const atendimentosFiltrados = filtroStatus === "TODOS" ? ATENDIMENTOS_MOCK : ATENDIMENTOS_MOCK.filter((item) => item.status === filtroStatus);

  const isExpanded = visibleCount >= atendimentosFiltrados.length;

  const abrirModal = (item: Atendimento) => {
    setAtendimentoSelecionado(item);
    setOpenModal(true);
  };

  const handleToggleAtendimentos = () => {
    if (isExpanded) {
      setVisibleCount(LIMITE_INICIAL);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setVisibleCount(atendimentosFiltrados.length);
    }
  };

  return (
    <Box sx={{ ...TelasStyles }}>
      <Box sx={{ display: { xs: "block", md: "flex" }, gap: 2, justifyContent: "center", mb: 5, }}>
        <StatusCard
          titulo="Total"
          descricao="Todos os atendimentos"
          valor={ATENDIMENTOS_MOCK.length}
          corStatus="#333"
          onClick={() => {
            setFiltroStatus("TODOS");
            setVisibleCount(LIMITE_INICIAL);
          }}
        />

        <StatusCard
          titulo="Em aberto"
          descricao="Chamados pendentes"
          valor={ATENDIMENTOS_MOCK.filter(
            (i) => i.status === "Pendente"
          ).length}
          corStatus="red"
          onClick={() => {
            setFiltroStatus("Pendente");
            setVisibleCount(LIMITE_INICIAL);
          }}
        />

        <StatusCard
          titulo="Em atendimento"
          descricao="Chamados em andamento"
          valor={ATENDIMENTOS_MOCK.filter(
            (i) => i.status === "Em atendimento"
          ).length}
          corStatus="#c4be17"
          onClick={() => {
            setFiltroStatus("Em atendimento");
            setVisibleCount(LIMITE_INICIAL);
          }}
        />

        <StatusCard
          titulo="Resolvido"
          descricao="Chamados finalizados"
          valor={ATENDIMENTOS_MOCK.filter(
            (i) => i.status === "Resolvido"
          ).length}
          corStatus="green"
          onClick={() => {
            setFiltroStatus("Resolvido");
            setVisibleCount(LIMITE_INICIAL);
          }}
        />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        {atendimentosFiltrados.length === 0 ? (
          <Box sx={{ ...dadosNãoEncostrado }}>
            Nenhum chamado encontrado!
          </Box>
        ) : (
          atendimentosFiltrados
            .slice(0, visibleCount)
            .map((item) => (
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

      {atendimentosFiltrados.length > LIMITE_INICIAL && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            endIcon={isExpanded ? (<ExpandLessIcon />) : (<ExpandMoreIcon />)}
            onClick={handleToggleAtendimentos}
          >
            {isExpanded ? "Ver menos" : "Ver mais"}
          </Button>
        </Box>
      )}

      <ModalAtendimento
        open={openModal}
        onClose={() => setOpenModal(false)}
        atendimento={atendimentoSelecionado}
      />
    </Box>
  );
};
