import { Box, Typography, Modal, IconButton } from "@mui/material";
import type { Usuario } from "../../types/types";
import { calcularTempoEmpresa } from "../../../../util/masc";
import { AvatarUsuario } from "../Avatar/AvatarMont";
import theme from "../../../../theme";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    open: boolean;
    onClose: () => void;
    usuario: Usuario | null;
}

const styleContainer = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: 780 },
    bgcolor: "#f4f6f8",
    boxShadow: "0px 10px 40px rgba(0,0,0,0.12)",
    borderRadius: 3,
    outline: "none",
    overflow: "hidden",
};

const InfoBox = ({ label, value, }: { label: string; value?: string; }) => (
    <Box sx={{ width: { xs: "100%", sm: "48%" }, mb: 1, p: 1.5, bgcolor: "white", borderRadius: 1.5, border: "1px solid #eef0f2", }}>
        <Typography sx={{ fontSize: "0.7rem", fontWeight: 700, color: "text.secondary", textTransform: "uppercase", mb: 0.5, }} >
            {label}
        </Typography>
        <Typography sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
            {value || "---"}
        </Typography>
    </Box>
);

export const UsuarioInfoModal = ({ open, onClose, usuario }: Props) => {
    if (!usuario) return null;

    const tempoTrabalho = calcularTempoEmpresa(usuario.dataAdmissao);

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={styleContainer}>
                <Box sx={{ p: 2, bgcolor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#1A2027' }}>Ficha do Colaborador</Typography>
                    <IconButton onClick={onClose} size="small"><CloseIcon /></IconButton>
                </Box>

                <Box sx={{ p: 2, maxHeight: "85vh", overflowY: "auto" }}>

                    <Box sx={{ display: "flex", gap: 3, mb: 2, p: 2, bgcolor: "white", borderRadius: 2, boxShadow: "0px 2px 8px rgba(0,0,0,0.04)", }}>
                        <AvatarUsuario nome={usuario.nome} size={90} />
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 800, color: theme.palette.primary.main }} >
                                {usuario.nome}
                            </Typography>
                            
                            <Typography sx={{ fontWeight: 600, color: theme.palette.secondary.main, }}>
                                {usuario.cargo}
                            </Typography>

                            <Typography sx={{ mt: 1, display: "inline-block", fontWeight: 600, bgcolor: "#E3F2FD", color: "#0D47A1", px: 1, py: 0.5, borderRadius: 1, }}>
                                ⏱️ {tempoTrabalho} na empresa
                            </Typography>
                        </Box>
                    </Box>

                    <Typography sx={{ mb: 1.5, ml: 0.5, fontWeight: 700, color: "text.secondary", }}>
                        DADOS PROFISSIONAIS
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                        <InfoBox label="Empresa" value={usuario.empresa} />
                        <InfoBox label="Setor" value={usuario.setor} />
                        <InfoBox label="Usuário de Acesso" value={usuario.usuario} />
                        <InfoBox label="Data de Admissão" value={usuario.dataAdmissao} />
                    </Box>

                    <Typography sx={{ mb: 1.5, ml: 0.5, fontWeight: 700, color: "text.secondary", }}>
                        CONTATO E PESSOAL
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                        <InfoBox label="E-mail" value={usuario.email} />
                        <InfoBox label="Telefone" value={usuario.telefone} />
                        <InfoBox label="Data de Nascimento" value={usuario.dataNasc} />
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};
