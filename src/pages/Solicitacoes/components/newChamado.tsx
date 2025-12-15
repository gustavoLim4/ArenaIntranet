import React, { useState } from "react";
import { Box, Button, TextField, MenuItem, Select, InputLabel, FormControl, Typography, Tabs, Tab, } from "@mui/material";
import { TIPOS_CHAMADO_RH, TIPOS_CHAMADO_TI } from "../util/util";
import FileUploadButton from "../../../components/FileUploadButton/FileUploadButton";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

interface NovoChamadoModalProps {
    open: boolean;
    onClose: () => void;
}

type AbaChamado = "TI" | "RH";

const NovoChamadoModal: React.FC<NovoChamadoModalProps> = ({ open, onClose, }) => {
    const [aba, setAba] = useState<AbaChamado>("TI");
    const [tipo, setTipo] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");

    if (!open) return null;

    const tiposAtuais = aba === "TI" ? TIPOS_CHAMADO_TI : TIPOS_CHAMADO_RH;

    const handleChangeAba = (
        _: React.SyntheticEvent,
        newValue: AbaChamado
    ): void => {
        setAba(newValue);
        setTipo("");
    };

    const handleSubmit = (): void => {
        const payload = {
            setor: aba,
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
                <Tabs value={aba} onChange={handleChangeAba} sx={{ height: 60, borderBottom: "1px solid #c4c4c4ff"}} >
                    <Tab value="TI" icon={<ComputerOutlinedIcon sx={{ fontSize: 15, marginLeft: -1 }} />} iconPosition="start" label="TI" />
                    <Tab value="RH" icon={<PersonOutlineIcon sx={{ fontSize: 18, marginLeft: -1 }} />} iconPosition="start" label="RH" />
                </Tabs>

                <FormControl fullWidth>
                    <InputLabel id="assunto">
                        Assunto
                    </InputLabel>
                    <Select
                        labelId="assunto"
                        value={tipo}
                        label="Assunto"
                        onChange={(e) => setTipo(e.target.value)}
                        sx={{width: {xs: "100%", md: 350}}}
                    >
                        {tiposAtuais.map((item) => (
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

export default NovoChamadoModal;
