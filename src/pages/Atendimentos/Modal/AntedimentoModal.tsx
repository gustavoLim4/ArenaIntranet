// components/ModalAtendimento.tsx
import { Box, Modal, Typography, TextField, Button, Select, MenuItem } from "@mui/material";
import type { Atendimento } from "../types/types";
import { statusColor } from "../util/help";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from "@emotion/styled";
import { useState } from "react";

type Props = {
    open: boolean;
    onClose: () => void;
    atendimento: Atendimento | null;
};

type Status = "aceitar" | "encerrar" | "reabrir";

const VisuallyHiddenInput = styled('input')({
    height: 1,
    width: 1,
});



export const ModalAtendimento = ({ open, onClose, atendimento }: Props) => {
    const [statusAtual, setStatusAtual] = useState<Status>("aceitar");
    const isEncerrado = statusAtual === "encerrar";

    const opcoes = [
        { label: "Aceitar", value: "aceitar", disabled: isEncerrado },
        { label: "Encerrar", value: "encerrar", disabled: isEncerrado },
        { label: "Reabrir", value: "reabrir", disabled: !isEncerrado },
    ];

    if (!atendimento) return null;

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "background.paper", p: 4, borderRadius: 2, width: 700, display: "flex", flexDirection: "column", gap: 2, }} >
                <Box sx={{ display: "flex", justifyContent: "space-between", }}>
                    <Typography variant="h6" color="primary.main">
                        Chamado
                    </Typography>
                    <Typography variant="h6" color="secondary.main">
                        #{atendimento.numero}
                    </Typography>

                </Box>
                <Box sx={{ display: "flex", gap: 1, borderBottom: "1px solid #D12029", width: 300, pb: 1, mb: 2 }}>
                    <Typography color="primary.main">Assunto :</Typography>
                    <Typography fontWeight={600}>{atendimento.titulo}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography color="primary.main">
                        Solicitante: <strong>{atendimento.nome}</strong>
                    </Typography>
                    <Typography color="primary.main" >
                        Horário: <strong>{atendimento.horario}</strong>
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                    <Typography color="primary.main" >
                        Setor: <strong>{atendimento.local}</strong>
                    </Typography>

                    <Typography color="primary.main">
                        Status:{" "}
                        <Typography component="span" fontWeight={600} sx={{ color: statusColor(atendimento.status) }} >
                            {atendimento.status}
                        </Typography>
                    </Typography>
                </Box>
                <TextField
                    label="Mensagem"
                    multiline
                    minRows={3}
                    sx={{ color: "primary.main", mb: 2 }}
                    value={atendimento.mensagem}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, }}   >
                    <Button
                        component="label"
                        variant="outlined"
                        startIcon={<CloudUploadIcon />}
                    >
                        Anexar
                        <VisuallyHiddenInput
                            type="file"
                            multiple
                            onChange={(event) => console.log(event.target.files)}
                        />
                    </Button>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Select
                            size="small"
                            value={statusAtual}
                            onChange={(e) => setStatusAtual(e.target.value as Status)}
                            sx={{ minWidth: 160, p: "5px 0px" }}
                        >
                            {opcoes.map((opcao) => (
                                <MenuItem
                                    key={opcao.value}
                                    value={opcao.value}
                                    disabled={opcao.disabled}
                                    sx={{ opacity: opcao.disabled ? 0.4 : 1 }}
                                >
                                    {opcao.label}
                                </MenuItem>
                            ))}
                        </Select>

                        <Button variant="contained" onClick={() => console.log("Ação:", statusAtual)} >
                            {statusAtual.charAt(0).toUpperCase() + statusAtual.slice(1)}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};
