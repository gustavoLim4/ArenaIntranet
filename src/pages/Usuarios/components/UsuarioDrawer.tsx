import { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Button,
    Drawer,
    TextField,
    useTheme,
    MenuItem,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import type { UsuarioForm } from "../types/types";
import { DADOS_EXIBICAO_USARIOS_FORM } from "../util/utils";
import { useMediaQuery } from "@mui/material";


export const EMPRESAS_MOCK = [
    "Arena vidros",
    "Genios"
];

interface UsuarioDrawerProps {
    open: boolean;
    onClose: () => void;
    modo: "criar" | "editar";
    usuarioSelecionado?: UsuarioForm | null;
    onSave: (data: UsuarioForm) => void;
}

export const UsuarioDrawer = ({ open, onClose, modo, usuarioSelecionado, onSave }: UsuarioDrawerProps) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [form, setForm] = useState<UsuarioForm>({
        nome: "",
        empresa: "",
        setor: "",
        cargo: "",
        usuario: "",
    });

    useEffect(() => {
        if (modo === "editar" && usuarioSelecionado) {
            setForm(usuarioSelecionado);
        } else {
            setForm({
                nome: "",
                empresa: "",
                setor: "",
                cargo: "",
                usuario: "",
            });
        }
    }, [modo, usuarioSelecionado, open]);

    const handleChange = (key: keyof UsuarioForm, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        onSave(form);
        onClose();
        setLoading(true)
    };

    const handleDelete = () => {
        console.log("Deletar usuário:", form);
        // Aqui você implementaria a lógica de exclusão
        onClose();
    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose} sx={{ zIndex: theme.zIndex.drawer + 2 }}>
            <Box sx={{ width: { xs: 330, md: 450 }, height: "100%", bgcolor: theme.palette.background.paper, display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" sx={{ p: 2, bgcolor: theme.palette.primary.main, color: theme.palette.background.paper }}>
                    {modo === "editar" ? "Editar Usuário" : "Cadastrar Usuário"}
                </Typography>

                <Typography fontSize={14} p={2}>
                    Preencha os dados do usuário abaixo.
                </Typography>

                <Box sx={{ pt: 1, px: 2, flex: 1, overflowY: "auto" }}>
                    {DADOS_EXIBICAO_USARIOS_FORM.map((campo) => {
                        const isEmpresa = campo.key === "empresa";

                        return (
                            <TextField
                                key={campo.key}
                                label={campo.label}
                                select={isEmpresa}
                                value={form[campo.key as keyof UsuarioForm]}
                                onChange={(e) =>
                                    handleChange(campo.key as keyof UsuarioForm, e.target.value)
                                }
                                fullWidth
                                sx={{ mb: 2 }}
                            >
                                {isEmpresa &&
                                    EMPRESAS_MOCK.map((empresa) => (
                                        <MenuItem key={empresa} value={empresa}>
                                            {empresa}
                                        </MenuItem>
                                    ))}
                            </TextField>
                        );
                    })}
                </Box>

                <Box sx={{ p: 1.5, display: "flex" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        {modo === "editar" && (
                            <Button
                                color="error"
                                onClick={handleDelete}
                                variant={isMobile ? "contained" : "outlined"}
                                startIcon={!isMobile ? <DeleteOutlineIcon /> : undefined}
                                sx={{
                                    mt: .5,
                                    minWidth: isMobile ? 40 : "auto",
                                    height: isMobile ? 40 : "auto",
                                    borderRadius: isMobile ? "50%" : 1,
                                    padding: isMobile ? 0 : "6px 16px",
                                }}
                            >
                                {isMobile ? <DeleteOutlineIcon /> : "Deletar"}
                            </Button>
                        )}
                        <Box sx={{ display: "flex", gap: 1, justifyContent: "end", width: "100%" }}>
                            <Button variant="outlined" onClick={onClose} disabled={loading}>
                                Cancelar
                            </Button>
                            <Button variant="contained" onClick={handleSave} disabled={loading}>
                                {loading ? "Salvando..." : "Salvar"}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Drawer>
    );
};
