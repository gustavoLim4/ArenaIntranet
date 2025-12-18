import { Box, Typography, Card, CardContent, Chip, Stack, Divider, useMediaQuery, useTheme, Button, IconButton } from '@mui/material';
import { TelasStyles } from '../../styles/styleresposecomun.styles';
import { COMUNICADOS_MOCK } from './util/util';
import { useState } from 'react';
import CampaignIcon from '@mui/icons-material/Campaign';
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ComunicadoDrawer } from './components/ComunicadoDrawer';
import type { ComunicadoForm } from './types/types';
import { useToast } from '../../hooks/useToast.hook';



export const ComunicadoGeral = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [openDrawer, setOpenDrawer] = useState(false);
    const [comunicados, setComunicados] = useState(COMUNICADOS_MOCK);
    const { showToast } = useToast();


    const handleSave = (novoDado: ComunicadoForm) => {
        const novoComunicado = {
            ...novoDado,
            id: Date.now(),
            data: new Date().toLocaleDateString('pt-BR'),
        };
        showToast("Cominucado publicado com sucesso", "success");
        setComunicados((prev) => [novoComunicado, ...prev]);
        setOpenDrawer(false);
    };

    const handleDelete = (id: number) => {
        setComunicados((prev) => prev.filter((item) => item.id !== id));
        showToast("Cominucado publicado deletado com sucesso", "success");
    };

    return (
        <Box sx={{ ...TelasStyles }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: { xs: 4, sm: 1 } }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <CampaignIcon color="primary" sx={{ fontSize: { xs: 29, sm: 36 } }} />
                    <Typography fontWeight={700} sx={{ fontSize: { xs: 24, sm: 32, md: 32 } }} >Comunicados Oficiais</Typography>
                </Stack>

                <Box>
                    {isMobile ? (
                        <Button
                            onClick={() => setOpenDrawer(true)}
                            sx={{
                                minWidth: "48px", width: "48px", height: "48px",
                                borderRadius: "50%", backgroundColor: "primary.main", color: "#fff",
                                "&:hover": { backgroundColor: "primary.dark" },
                            }}
                        >
                            <AddIcon />
                        </Button>
                    ) : (
                        <Button
                            startIcon={<AddIcon />}
                            onClick={() => setOpenDrawer(true)}
                            variant="contained"
                        >
                            Novo comunicado
                        </Button>
                    )}
                </Box>
            </Box>

            <Typography variant="body2" color="text.secondary" mb={4} sx={{ display: { xs: "none", sm: "block" } }}>
                Fique por dentro das últimas atualizações e avisos da empresa.
            </Typography>

            <Stack spacing={2}>
                {comunicados.length === 0 ? (
                    <Box
                        sx={{
                            textAlign: 'center',
                            py: 15,
                            borderRadius: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 1
                        }}
                    >
                        <CampaignIcon sx={{ fontSize: 55, color: 'text.disabled', opacity: 0.5 }} />
                        <Typography color="text.secondary" fontWeight={500} sx={{ fontSize: { xs: 16, sm: 24 } }}>
                            Nenhum comunicado publicado no momento.
                        </Typography>
                        <Typography variant="body2" color="text.disabled">
                            Novos avisos aparecerão aqui assim que forem publicados.
                        </Typography>
                    </Box>
                ) : (
                    comunicados.map((item) => (
                        <Card key={item.id} variant="outlined" sx={{ borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                            <CardContent>
                                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1}>
                                    <Box>
                                        <Typography variant="overline" color="primary.main" fontWeight={700}>
                                            {item.categoria}
                                        </Typography>
                                        <Typography variant="h6" fontWeight={600} sx={{ lineHeight: 1.2 }}>
                                            {item.titulo}
                                        </Typography>
                                    </Box>

                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Chip
                                            label={item.urgencia}
                                            size="small"
                                            color={item.urgencia === 'Alta' ? 'error' : item.urgencia === 'Média' ? 'warning' : 'default'}
                                        />
                                        <IconButton
                                            onClick={() => handleDelete(item.id)}
                                            sx={{
                                                color: theme.palette.error.main,
                                                backgroundColor: 'rgba(211, 47, 47, 0.04)',
                                            }}
                                        >
                                            <DeleteOutlineIcon fontSize="small" />
                                        </IconButton>
                                    </Stack>
                                </Stack>

                                <Divider sx={{ my: 1.5 }} />

                                <Typography variant="body2" color="text.primary" mb={2}>
                                    {item.conteudo}
                                </Typography>

                                <Typography variant="caption" color="text.secondary">
                                    Publicado em: {item.data}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                )}
            </Stack>
            <ComunicadoDrawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onSave={handleSave}
            />
        </Box>
    );
};