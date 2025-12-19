import { useEffect, useState } from "react";
import { Box, Typography, Button, Drawer, TextField, useTheme, MenuItem, } from "@mui/material";
import type { EquipamentoForm } from "../types/inventario.type";
import { CATEGORIAS_MOCK, DADOS_EXIBICAO_INVENTARIO_FORM } from "../util/utils";

interface EquipamentoDrawerProps {
    open: boolean;
    onClose: () => void;
    onSave: (data: EquipamentoForm) => void;
}

export const EquipamentoDrawer = ({ open, onClose, onSave, }: EquipamentoDrawerProps) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState<EquipamentoForm>({
        categoria: "",
        equipamento: "",
        qtdMarcas: 0,
        quantidade: 0,
    });

    useEffect(() => {
        if (open) {
            setForm({
                categoria: "",
                equipamento: "",
                qtdMarcas: 0,
                quantidade: 0,
            });
            setLoading(false);
        }
    }, [open]);

    const handleChange = (key: keyof EquipamentoForm, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        setLoading(true);
        onSave(form);
        onClose();
    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose} sx={{ zIndex: theme.zIndex.drawer + 2 }}>
            <Box sx={{ width: { xs: 330, md: 450 }, height: "100%", bgcolor: theme.palette.background.paper, display: "flex", flexDirection: "column", }} >
                <Typography variant="h6" sx={{ p: 2, bgcolor: theme.palette.primary.main, color: theme.palette.background.paper, }}>
                    Cadastrar Equipamento
                </Typography>

                <Typography fontSize={14} p={2}>
                    Preencha os dados do equipamento abaixo.
                </Typography>

                <Box sx={{ pt: 1, px: 2, flex: 1, overflowY: "auto" }}>
                    {DADOS_EXIBICAO_INVENTARIO_FORM.map((campo) => {
                        const isCategoria = campo.key === "categoria";

                        return (
                            <TextField
                                key={campo.key}
                                label={campo.label}
                                select={isCategoria}
                                value={form[campo.key as keyof EquipamentoForm]}
                                onChange={(e) =>
                                    handleChange(
                                        campo.key as keyof EquipamentoForm,
                                        e.target.value
                                    )
                                }
                                fullWidth
                                sx={{ mb: 2 }}
                            >
                                {isCategoria &&
                                    CATEGORIAS_MOCK.map((categoria) => (
                                        <MenuItem key={categoria} value={categoria}>
                                            {categoria}
                                        </MenuItem>
                                    ))}
                            </TextField>
                        );
                    })}
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
