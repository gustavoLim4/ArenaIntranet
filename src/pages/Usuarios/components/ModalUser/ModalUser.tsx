import { Box, Typography, Divider, Modal } from "@mui/material";
import type { Usuario } from "../../types/types";
import { calcularTempoEmpresa } from "../../../../util/masc";

interface Props {
    open: boolean;
    onClose: () => void;
    usuario: Usuario | null;
}

const styleContainer = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 700 },
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: 0,
    outline: 'none'
};

export const UsuarioInfoModal = ({ open, onClose, usuario }: Props) => {
    if (!usuario) return null;

    const tempoTrabalho = calcularTempoEmpresa(usuario.dataAdmissao);

    const RowInfo = ({ label, value }: { label: string; value: string }) => (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5, borderBottom: '1px solid #f0f0f0' }}>
            <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>{label}:</Typography>
            <Typography sx={{ color: 'text.primary' }}>{value || "---"}</Typography>
        </Box>
    );

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={styleContainer}>
                <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Detalhes do Colaborador</Typography>
                </Box>

                <Divider />

                <Box sx={{ p: 3, maxHeight: '80vh', overflowY: 'auto' }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>

                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{usuario.nome}</Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: 'primary.main',
                                fontWeight: 500,
                                bgcolor: 'action.hover',
                                px: 2,
                                py: 0.5,
                                borderRadius: 5,
                                mt: 1
                            }}
                        >
                            {tempoTrabalho} de empresa
                        </Typography>
                    </Box>

                    <RowInfo label="E-mail" value={usuario.email} />
                    <RowInfo label="Telefone" value={usuario.telefone} />
                    <RowInfo label="Empresa" value={usuario.empresa} />
                    <RowInfo label="Setor" value={usuario.setor} />
                    <RowInfo label="Cargo" value={usuario.cargo} />
                    <RowInfo label="Usuário de acesso" value={usuario.usuario} />
                    <RowInfo label="Data de Admissão" value={usuario.dataAdmissao} />
                    <RowInfo label="Data de Nascimento" value={usuario.dataNasc} />
                </Box>
            </Box>
        </Modal>
    );
};