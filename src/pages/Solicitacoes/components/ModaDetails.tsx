// components/ModalAtendimento.tsx
import { Box, Modal, Typography, TextField } from "@mui/material";
import FileUploadButton from "../../../components/FileUploadButton/FileUploadButton";
import type { Atendimento } from "../../Atendimentos/types/types";
import { statusColor } from "../../Atendimentos/util/help";

type Props = {
    open: boolean;
    onClose: () => void;
    atendimento: Atendimento | null;
};

export const ModaDetails = ({ open, onClose, atendimento }: Props) => {

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
                <Box sx={{ display: "flex", gap: 1, borderBottom: "1px solid", width: 300, pb: 1, mb: 2 }}>
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
                    value={atendimento.mensagem ?? ""}
                    disabled
                />
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, }}   >
                    <FileUploadButton
                        multiple
                        disabled
                        onChange={(files) => {
                            console.log(files);
                        }}
                    />
                </Box>
            </Box>
        </Modal>
    );
};
