import { useEffect, useState } from "react";
import { Box, Typography, Button, Drawer, TextField, useTheme, MenuItem } from "@mui/material";
import { CATEGORIAS_COMUNICADO, FIELDS_CONFIG_COMUNICADO, NIVEIS_URGENCIA } from "../util/util";
import type { ComunicadoForm } from "../types/types";

interface ComunicadoDrawerProps {
    open: boolean;
    onClose: () => void;
    onSave: (data: ComunicadoForm) => void;
}


export const ComunicadoDrawer = ({ open, onClose, onSave }: ComunicadoDrawerProps) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState<ComunicadoForm>({
        titulo: "",
        categoria: "",
        urgencia: "",
        conteudo: "",
    });

    useEffect(() => {
        if (open) {
            setForm({
                titulo: "",
                categoria: "",
                urgencia: "",
                conteudo: "",
            });
            setLoading(false);
        }
    }, [open]);

    const handleChange = (key: keyof ComunicadoForm, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        setLoading(true);
        setTimeout(() => {
            onSave(form);
            onClose();
        }, 500);
    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose} sx={{ zIndex: theme.zIndex.drawer + 2 }}>
            <Box sx={{ width: { xs: 330, md: 450 }, height: "100%", bgcolor: theme.palette.background.paper, display: "flex", flexDirection: "column" }}>

                <Typography variant="h6" sx={{ p: 2, bgcolor: theme.palette.primary.main, color: "#fff" }}>
                    Publicar Novo Comunicado
                </Typography>

                <Typography fontSize={14} p={2} color="text.secondary">
                    Preencha as informações que serão enviadas para os colaboradores.
                </Typography>

                <Box sx={{ pt: 1, px: 2, flex: 1, overflowY: "auto" }}>

                    {FIELDS_CONFIG_COMUNICADO.map((field) => (
                        <TextField
                            key={field.key}
                            label={field.label}
                            placeholder={field.placeholder}
                            multiline={field.multiline}
                            rows={field.rows}
                            value={form[field.key as keyof ComunicadoForm]}
                            onChange={(e) => handleChange(field.key as keyof ComunicadoForm, e.target.value)}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                    ))}

                    <TextField
                        label="Categoria"
                        select
                        value={form.categoria}
                        onChange={(e) => handleChange("categoria", e.target.value)}
                        fullWidth
                        sx={{ mb: 2 }}
                    >
                        {CATEGORIAS_COMUNICADO.map((opcao) => (
                            <MenuItem key={opcao} value={opcao}>{opcao}</MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        label="Nível de Urgência"
                        select
                        value={form.urgencia}
                        onChange={(e) => handleChange("urgencia", e.target.value)}
                        fullWidth
                        sx={{ mb: 2 }}
                    >
                        {NIVEIS_URGENCIA.map((nivel) => (
                            <MenuItem key={nivel} value={nivel}>{nivel}</MenuItem>
                        ))}
                    </TextField>

                </Box>

                <Box sx={{ p: 1.5, borderTop: '1px solid #eee', display: "flex", justifyContent: "flex-end", gap: 1 }}>
                    <Button variant="outlined" onClick={onClose} disabled={loading}>
                        Cancelar
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleSave}
                        disabled={loading || !form.titulo || !form.categoria}
                    >
                        {loading ? "Publicando..." : "Publicar"}
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
};