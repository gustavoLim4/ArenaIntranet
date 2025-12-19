import { Box, Typography, Card, Stack, Button, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { dadosNãoEncostrado, TelasStyles } from '../../styles/stylesComun.styles';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DescriptionIcon from '@mui/icons-material/Description';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { POLITICAS_MOCK } from './util/util';
import SearchInput from '../../components/SearchInput/SearchInput';
import { PoliticaDrawer } from './components/PoliticaDrawer';
import { useToast } from '../../hooks/useToast.hook';
import { botaoMobileMais } from '../../styles/styleresposecomun.styles';

export const Politicas = () => {
    const theme = useTheme();
    const { showToast } = useToast();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [busca, setBusca] = useState("");
    const [politicas, setPoliticas] = useState(POLITICAS_MOCK);
    const [openDrawer, setOpenDrawer] = useState(false);

    const filtradas = politicas.filter(p =>
        p.titulo.toLowerCase().includes(busca.toLowerCase()) ||
        p.categoria.toLowerCase().includes(busca.toLowerCase())
    );

    const handleDelete = (id: number) => {
        setPoliticas(prev => prev.filter(p => p.id !== id));
        showToast("Política deletada com sucesso", "success");
    };

    const handleOpenPDF = (url?: string) => {
        if (url && url.trim() !== "") {
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            showToast("Documento não disponível ou link inválido", "error");
        }
    };

    return (
        <Box sx={{ ...TelasStyles }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
                <Box>
                    <Typography fontWeight={700} variant='h5'>Políticas da Empresa</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ display: { xs: "none", sm: "block" } }}>
                        Fique por dentro das últimas atualizações e diretrizes da organização.
                    </Typography>
                </Box>
                <Box>
                    {isMobile ? (
                        <Button onClick={() => setOpenDrawer(true)} sx={{ ...botaoMobileMais }}>
                            <AddIcon />
                        </Button>
                    ) : (
                        <Button startIcon={<AddIcon />} onClick={() => setOpenDrawer(true)} variant="contained" >
                            Novo politicas
                        </Button>
                    )}
                </Box>
            </Box>

            <Box sx={{ mb: 4, width: { xs: "100%", sm: "45%" } }}>
                <SearchInput
                    placeholder="Pesquisar por título ou categoria..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                />
            </Box>

            <Stack spacing={2}>
                {filtradas.length > 0 ? (
                    filtradas.map((item) => (
                        <Card
                            key={item.id}
                            variant="outlined"
                            onClick={() => handleOpenPDF(item.url)}
                            sx={{
                                borderRadius: 2,
                                p: { xs: 1, sm: 2 },
                                cursor: 'pointer',
                                transition: '0.3s',
                                '&:hover': {
                                    borderColor: theme.palette.primary.main,
                                    bgcolor: 'rgba(25, 118, 210, 0.02)',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Box sx={{
                                    bgcolor: 'primary.light',
                                    color: 'primary.main',
                                    p: 1.5,
                                    borderRadius: 2,
                                    display: { xs: "none", sm: "flex" }
                                }}>
                                    <DescriptionIcon fontSize="large" />
                                </Box>

                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="subtitle1" fontWeight={700}>
                                        {item.titulo}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                        {item.descricao}
                                    </Typography>
                                    <Stack direction="row" spacing={{ xs: 3, sm: 2 }}>
                                        <Typography variant="caption" sx={{ fontWeight: 600, color: 'primary.main' }}>
                                            • {item.categoria}
                                        </Typography>
                                        <Typography variant="caption" color="text.disabled">
                                            Atualizado em: {item.ultimaAtualizacao}
                                        </Typography>
                                    </Stack>
                                </Box>

                                <IconButton
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete(item.id);
                                    }}
                                    sx={{ color: theme.palette.error.main }}
                                >
                                    <DeleteOutlineIcon />
                                </IconButton>
                            </Stack>
                        </Card>
                    ))
                ) : (
                    <Typography sx={{ ...dadosNãoEncostrado }}>
                        Nenhuma política encontrada ou erro de digitação.
                    </Typography>
                )}
            </Stack>

            <PoliticaDrawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onSave={(dados) => {
                    const nova = {
                        ...dados,
                        id: Date.now(),
                        ultimaAtualizacao: new Date().toLocaleDateString('pt-BR'),
                        url: dados.linkDocumento
                    };
                    setPoliticas(prev => [nova, ...prev]);
                }}
            />
        </Box>
    );
};