import { useEffect, useState } from "react";
import { Box, Typography, Button, Drawer, TextField, useTheme, MenuItem, Avatar, IconButton, } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useMediaQuery } from "@mui/material";
import type { UsuarioForm } from "../../types/types";
import { DADOS_EXIBICAO_USARIOS_FORM } from "../../util/utils";
import { maskDataNascimento } from "../../../../util/masc";

export const EMPRESAS_MOCK = ["Arena vidros", "Genios"];

interface UsuarioDrawerProps {
    open: boolean;
    onClose: () => void;
    modo: "criar" | "editar";
    usuarioSelecionado?: UsuarioForm | null;
    onSave: (data: UsuarioForm) => void;
}

export const UsuarioDrawer = ({
    open,
    onClose,
    modo,
    usuarioSelecionado,
    onSave,
}: UsuarioDrawerProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState<UsuarioForm>({
        id: 0,
        foto: "",
        nome: "",
        empresa: "",
        setor: "",
        cargo: "",
        senha: "",
        telefone: "",
        email: "",
        dataNasc: "",
        dataAdmissao: "",
        usuario: "",
    });

    useEffect(() => {
        if (modo === "editar" && usuarioSelecionado) {
            setForm(usuarioSelecionado);
        } else {
            setForm({
                id: 0,
                foto: "",
                nome: "",
                empresa: "",
                setor: "",
                dataNasc: "",
                telefone: "",
                email: "",
                dataAdmissao: "",
                cargo: "",
                senha: "",
                usuario: "",
            });
        }
    }, [modo, usuarioSelecionado, open]);

    const handleChange = (key: keyof UsuarioForm, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleImageUpload = (file: File) => {
        const reader = new FileReader();
        reader.onload = () => {
            setForm((prev) => ({
                ...prev,
                foto: reader.result as string,
            }));
        };
        reader.readAsDataURL(file);
    };

    const handleSave = () => {
        setLoading(true);
        onSave(form);
        onClose();
        setLoading(false);
    };

    const handleDelete = () => {
        console.log("Deletar usuário:", form);
        onClose();
    };

    return (

        <Drawer anchor="right" open={open} onClose={onClose} sx={{ zIndex: theme.zIndex.drawer + 2 }} >
            <Box sx={{ width: { xs: 330, md: 450 }, height: "100%", display: "flex", flexDirection: "column", bgcolor: theme.palette.background.paper, }}>
                <Typography variant="h6" sx={{ p: 2, bgcolor: theme.palette.primary.main, color: theme.palette.background.paper, }} >
                    {modo === "editar" ? "Editar Usuário" : "Cadastrar Usuário"}
                </Typography>

                <Typography fontSize={14} p={2}>
                    Preencha os dados do usuário abaixo.
                </Typography>

                <Box sx={{ px: 2, flex: 1, overflowY: "auto" }}>
                    {DADOS_EXIBICAO_USARIOS_FORM.map((campo) => {
                        const isEmpresa = campo.key === "empresa";
                        const isFoto = campo.key === "foto";
                        const isDataNasc = campo.key === "dataNasc";
                        const isDataAdmissao = campo.key === "dataAdmissao";


                        if (isFoto) {
                            return (
                                <Box key="foto" sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3, }}>
                                    <Avatar src={typeof form.foto === "string" && form.foto !== "" ? form.foto : undefined} sx={{ width: 50, height: 50, border: "1px solid #e0e0e0" }}>
                                        {(!form.foto || typeof form.foto !== "string") && form.nome?.charAt(0)}
                                    </Avatar>

                                    <Button variant="outlined" component="label" startIcon={<PhotoCameraIcon />}  >
                                        Selecionar foto
                                        <input
                                            hidden
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                if (e.target.files?.[0]) {
                                                    handleImageUpload(e.target.files[0]);
                                                }
                                            }}
                                        />
                                    </Button>


                                </Box>
                            );
                        }

                        return (
                            <TextField
                                key={campo.key}
                                label={campo.label}
                                select={isEmpresa}
                                value={form[campo.key as keyof UsuarioForm] || ""}
                                onChange={(e) => {
                                    const value =
                                        isDataNasc || isDataAdmissao
                                            ? maskDataNascimento(e.target.value)
                                            : e.target.value;

                                    handleChange(campo.key as keyof UsuarioForm, value);
                                }}
                                placeholder={isDataNasc || isDataAdmissao ? "DD/MM/AAAA" : undefined}
                                inputProps={isDataNasc || isDataAdmissao ? { maxLength: 10 } : undefined}
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
                    {modo === "criar" && (
                        <TextField
                            label="Senha"
                            type="password"

                            value={form.senha || ""}
                            onChange={(e) => handleChange("senha", e.target.value)}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                    )}
                </Box>

                <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", width: "100%" }}>
                    {modo === "editar" && (
                        isMobile ? (
                            <IconButton color="error" onClick={handleDelete} sx={{ mt: .5, width: 40, height: 40, border: "1px solid", borderColor: "error.main", }}>
                                <DeleteOutlineIcon />
                            </IconButton>
                        ) : (
                            <Button color="error" variant="outlined" startIcon={<DeleteOutlineIcon />} onClick={handleDelete}                            >
                                Deletar
                            </Button>
                        )
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
        </Drawer>
    );
};
