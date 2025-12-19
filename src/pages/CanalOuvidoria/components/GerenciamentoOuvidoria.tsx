import { Box, Typography, Paper, Stack, useTheme, Divider, Modal } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import type { MensagemOuvidoria } from '../types/types';
import { dadosNãoEncostrado } from '../../../styles/stylesComun.styles';

interface GerenciamentoOuvidoriaProps {
    open: boolean;
    onClose: () => void;
    mensagens: MensagemOuvidoria[];
    setMensagens: React.Dispatch<React.SetStateAction<any[]>>;
}

const styleModal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 800 },
    maxHeight: '75vh',
    minHeight: '65vh',
    bgcolor: 'background.paper',
    boxShadow: '0px 20px 40px rgba(0,0,0,0.2)',
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    overflow: "hidden",
    borderRadius: 3
};

export const GerenciamentoOuvidoria = ({ open, onClose, mensagens, setMensagens }: GerenciamentoOuvidoriaProps) => {
    const theme = useTheme();

    const handleDelete = (id: number) => {
        setMensagens(mensagens.filter(m => m.id !== id));
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={styleModal}>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${theme.palette.divider}` }}>
                    <Typography fontWeight={800} variant='h6' color="primary">
                        Gestão de Ouvidoria
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {mensagens.length} relatos no total
                    </Typography>
                </Box>

                <Box sx={{ p: 3, bgcolor: '#f8f9fa', overflowY: "auto", flex: 1 }}>
                    <Stack spacing={2}>
                        {mensagens.map((msg) => (
                            <Paper
                                key={msg.id}
                                elevation={0}
                                sx={{
                                    p: 2,
                                    borderRadius: 2,
                                    border: `1px solid ${theme.palette.divider}`,
                                    bgcolor: 'background.paper',
                                    transition: '0.2s',
                                    '&:hover': { borderColor: theme.palette.primary.main, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box sx={{ display: "flex", gap: 1 }}>
                                        <Typography variant="caption" color="text.secondary">
                                            {msg.data}
                                        </Typography>
                                        <Divider orientation="vertical" flexItem sx={{ height: 14, alignSelf: 'center' }} />
                                        <Typography variant="caption" fontWeight={700} color="primary" sx={{ textTransform: 'uppercase' }}>
                                            {msg.categoria}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ bgcolor: theme.palette.secondary.main, borderRadius: 150, color: "#fff", p: "6px 6px 0px 6px", '&:hover': { bgcolor: theme.palette.secondary.light, } }} onClick={() => handleDelete(msg.id)} >
                                        <DeleteOutlineIcon fontSize="small" />
                                    </Box>
                                </Box>

                                <Typography variant="subtitle1" fontWeight={700} sx={{ mt: 1 ,mb: 0.5, lineHeight: 1.2 }}>
                                    {msg.assunto}
                                </Typography>

                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.5 }}>
                                    {msg.mensagem}
                                </Typography>

                                <Divider sx={{ my: 1.5, opacity: 0.6 }} />

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="caption" sx={{ fontWeight: 600, color: msg.anonimo ? theme.palette.error.main : theme.palette.text.primary, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        {msg.anonimo ? "🔒 Relato Anônimo" : ` Nome: ${msg.autor}`}
                                    </Typography>
                                </Box>
                            </Paper>
                        ))}

                        {mensagens.length === 0 && (
                            <Box sx={{ ...dadosNãoEncostrado }}>
                                <Typography variant="body2" color="text.secondary">
                                    Não existem relatos para exibir.
                                </Typography>
                            </Box>
                        )}
                    </Stack>
                </Box>
            </Box>
        </Modal>
    );
};