import React, { useState } from "react";
import { Box, Button, TextField, MenuItem, Select, InputLabel, FormControl, Typography, } from "@mui/material";
import FileUploadButton from "../../../components/FileUploadButton/FileUploadButton";
import { TIPOS_CHAMADO_TI } from "../util/util";

interface NovoChamadoModalProps {
    open: boolean;
    onClose: () => void;
}


export const NovoChamadoModal: React.FC<NovoChamadoModalProps> = ({ open, onClose, }) => {
    const [tipo, setTipo] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");

    if (!open) return null;


    const handleSubmit = (): void => {
        const payload = {
            tipo,
            descricao,
        };

        console.log(payload);
        onClose();
    };

    return (
        <>
            <Box onClick={onClose} sx={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1200, }} />

            <Box sx={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "background.paper", borderRadius: 2, width: { xs: 350, md: 650 }, p: 3, zIndex: 1300, display: "flex", flexDirection: "column", gap: 3, }}>
                <Typography variant="h6">
                    Novo Chamado
                </Typography>

                <FormControl fullWidth>
                    <InputLabel id="assunto">
                        Assunto
                    </InputLabel>
                    <Select
                        labelId="assunto"
                        value={tipo}
                        label="Assunto"
                        onChange={(e) => setTipo(e.target.value)}
                        sx={{ width: { xs: "100%", md: 350 } }}
                    >
                        {TIPOS_CHAMADO_TI.map((item) => (
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    label="Descrição"
                    multiline
                    rows={4}
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    fullWidth
                />
                <FileUploadButton
                    multiple
                    onChange={(files) => {
                        console.log(files);
                    }}
                />

                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 2, }}>
                    <Button onClick={onClose} color="inherit">
                        Cancelar
                    </Button>
                    <Button onClick={handleSubmit} variant="contained" disabled={!tipo || !descricao}>
                        Abrir Chamado
                    </Button>
                </Box>
            </Box>
        </>
    );
};

