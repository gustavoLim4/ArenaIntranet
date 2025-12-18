import { useEffect, useState } from "react";
import { Box, Typography, Button, Drawer, TextField, useTheme, MenuItem } from "@mui/material";
import type { Treinamento } from "../types/types";
import { CATEGORIAS_TREINAMENTO, FIELDS_CONFIG } from "../util/util";
import { getYoutubeThumbnail } from "../../../util/masc";


export const TreinamentoDrawer = ({ open, onClose, onSave }: any) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        titulo: "",
        instrutor: "",
        videoUrl: "",
        categoria: "",
    });

    useEffect(() => {
        if (open) {
            setForm({ titulo: "", instrutor: "", videoUrl: "", categoria: "" });
            setLoading(false);
        }
    }, [open]);


    const handleSave = () => {
        setLoading(true);

        const novoTreinamento: Treinamento = {
            id: Date.now(),
            titulo: form.titulo,
            instrutor: form.instrutor,
            videoUrl: form.videoUrl,
            imgVideo: getYoutubeThumbnail(form.videoUrl),
            categoria: form.categoria,
        };

        setTimeout(() => {
            onSave(novoTreinamento);
            onClose();
        }, 500);
    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose} sx={{ zIndex: theme.zIndex.drawer + 2 }}>
            <Box sx={{ width: { xs: 330, md: 450 }, height: "100%", display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" sx={{ p: 2, bgcolor: theme.palette.primary.main, color: "#fff" }}>
                    Novo Treinamento
                </Typography>

                <Box sx={{ p: 2, flex: 1 }}>
                    {FIELDS_CONFIG.map((field) => (
                        <TextField
                            key={field.key}
                            label={field.label}
                            fullWidth
                            sx={{ mb: 2 }}
                            value={(form as any)[field.key]}
                            onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        />
                    ))}

                    <TextField
                        label="Categoria"
                        select
                        fullWidth
                        value={form.categoria}
                        onChange={(e) => setForm({ ...form, categoria: e.target.value })}
                    >
                        <MenuItem value="" disabled>Selecione</MenuItem>
                        {CATEGORIAS_TREINAMENTO.map((cat) => (
                            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Box sx={{ p: 1.5, display: "flex", justifyContent: "flex-end", gap: 1 }}>
                    <Button variant="outlined" onClick={onClose} disabled={loading}>
                        Cancelar
                    </Button>
                    <Button variant="contained" onClick={handleSave} disabled={loading}>
                        {loading ? "Salvando..." : "Salvar"}
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
};