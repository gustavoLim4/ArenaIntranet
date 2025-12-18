import { useEffect, useState } from "react";
import { Box, Typography, Button, Drawer, TextField, useTheme, MenuItem } from "@mui/material";
import type { PoliticaForm } from "../types/types";
import { CATEGORIAS_POLITICAS } from "../util/util";
import { useToast } from "../../../hooks/useToast.hook";

interface PoliticaDrawerProps {
    open: boolean;
    onClose: () => void;
    onSave: (data: PoliticaForm) => void;
}

export const PoliticaDrawer = ({
    open,
    onClose,
    onSave,
}: PoliticaDrawerProps) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const { showToast } = useToast();
    const [form, setForm] = useState<PoliticaForm>({
        titulo: "",
        descricao: "",
        categoria: "",
        
        linkDocumento: "",
    });

    useEffect(() => {
        if (open) {
            setForm({
                titulo: "",
                descricao: "",
                categoria: "",
                linkDocumento: "",
            });
            setLoading(false);
        }
    }, [open]);

    const handleChange = (key: keyof PoliticaForm, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        setLoading(true);
        showToast("Nova politica cadastrada com sucesso", "success");
        setTimeout(() => {
            onSave({
                ...form,
                url: form.linkDocumento, 
            });
            onClose();
        }, 600);
    };

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            sx={{ zIndex: theme.zIndex.drawer + 2 }}
        >
            <Box sx={{
                width: { xs: 330, md: 450 },
                height: "100%",
                bgcolor: theme.palette.background.paper,
                display: "flex",
                flexDirection: "column"
            }}>
                <Typography variant="h6" sx={{ p: 2, bgcolor: theme.palette.primary.main, color: "#fff" }}>
                    Cadastrar Nova Política
                </Typography>

                <Typography fontSize={14} p={2} color="text.secondary">
                    Preencha as informações abaixo para disponibilizar o documento na biblioteca.
                </Typography>

                {/* Área de Campos */}
                <Box sx={{ pt: 1, px: 2, flex: 1, overflowY: "auto" }}>

                    <TextField
                        label="Título da Política"
                        fullWidth
                        value={form.titulo}
                        onChange={(e) => handleChange("titulo", e.target.value)}
                        sx={{ mb: 2 }}
                    />

                    <TextField
                        label="Categoria / Setor"
                        select
                        fullWidth
                        value={form.categoria}
                        onChange={(e) => handleChange("categoria", e.target.value)}
                        sx={{ mb: 2 }}
                    >
                        {CATEGORIAS_POLITICAS.map((cat) => (
                            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        label="Descrição Breve"
                        fullWidth
                        multiline
                        rows={3}
                        value={form.descricao}
                        onChange={(e) => handleChange("descricao", e.target.value)}
                        placeholder="Ex: Regras para utilização do estacionamento..."
                        sx={{ mb: 2 }}
                    />

                    <TextField
                        label="URL do Documento (PDF/Link)"
                        fullWidth
                        value={form.linkDocumento}
                        onChange={(e) => handleChange("linkDocumento", e.target.value)}
                        placeholder="https://link-do-arquivo.pdf"
                        helperText="Insira o link onde o arquivo está hospedado"
                    />
                </Box>

                {/* Footer com Botões */}
                <Box sx={{ p: 1.5, display: "flex", justifyContent: "flex-end", gap: 1, borderTop: '1px solid #eee' }}>
                    <Button variant="outlined" onClick={onClose} disabled={loading}>
                        Cancelar
                    </Button>
                    <Button variant="contained" onClick={handleSave} disabled={loading}>
                        {loading ? "Salvando..." : "Salvar Política"}
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
};