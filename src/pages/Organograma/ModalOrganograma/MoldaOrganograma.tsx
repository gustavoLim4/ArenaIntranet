import { Dialog, DialogContent, TextField, Button, Stack, Avatar, Box, Typography, IconButton } from "@mui/material";
import { useEffect, useState, type ChangeEvent } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import type { Pessoa } from "../types/typesLiderado";

interface Props {
    open: boolean;
    onClose: () => void;
    onSave: (data: Pessoa) => void;
    initialData?: Pessoa | null;
    setor?: string | null;
}

export const ModalPessoa = ({ open, onClose, onSave, initialData }: Props) => {

    const [form, setForm] = useState<Pessoa>({ id: 0, nome: "", cargo: "", foto: "" });

    useEffect(() => {
        if (initialData) {
            setForm(initialData);
        } else {
            setForm({ id: 0, nome: "", cargo: "", foto: "" });
        }
    }, [initialData, open]);

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = (loadEvent) => {
                if (loadEvent.target?.result) {
                    setForm({ ...form, foto: loadEvent.target.result as string });
                }
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 2, pt: 2 }}>
                <Typography sx={{ fontSize: 23, fontWeight: 600 }}>
                    {initialData ? "Editar integrante" : "Novo integrante"}
                </Typography>
                {initialData && (
                    <IconButton color="error" onClick={alert} sx={{ width: 40, height: 40, bgcolor: "error.main", color: "background.paper" }}>
                        <DeleteOutlineIcon />
                    </IconButton>
                )}
            </Box>

            <DialogContent>
                <Stack spacing={2} alignItems="center" mb={2}>
                    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                        <Avatar src={form.foto} sx={{ width: { xs: 160, sm: 200 }, height: { xs: 160, sm: 200 }, border: '1px solid #ccc' }} />
                        <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />} size="small" >
                            Escolher Foto
                            <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
                        </Button>
                        {!form.foto && <Typography variant="caption" color="text.secondary">Nenhuma foto selecionada</Typography>}
                    </Box>

                    <TextField label="Nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} fullWidth />

                    <TextField label="Cargo" value={form.cargo} onChange={(e) => setForm({ ...form, cargo: e.target.value })} fullWidth />
                </Stack>
                <Box sx={{ display: "flex", justifyContent: "end", width: "100%" }}>
                    <Button onClick={onClose}>Cancelar</Button>
                    <Button variant="contained" onClick={() => onSave(form)}>
                        {initialData ? "Salvar" : "Criar"}
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};