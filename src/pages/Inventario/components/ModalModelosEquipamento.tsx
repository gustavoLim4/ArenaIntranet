import { useEffect, useMemo, useState } from "react";
import {
    Box,
    Modal,
    Typography,
    IconButton,
    Button,
    Divider,
    useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import type { ModeloEquipamento } from "../types/inventario.type";
import { MuiTableContainer } from "../../../components/Table/MuiTable";
import type { TableRow } from "../../../components/Table/types";
import SearchInput from "../../../components/SearchInput/SearchInput";
import { COLUNAS_MODELOS_EQUIPAMENTO } from "../util/utils";
import theme from "../../../theme";
import { botaoMobileMais, scrollResponse } from "../../../styles/styleresposecomun.styles";
import { useToast } from "../../../hooks/useToast.hook";


interface ModalModelosEquipamentoProps {
    open: boolean;
    equipamento: string | null;
    modelos: ModeloEquipamento[];
    onClose: () => void;
    onSave?: (modelos: ModeloEquipamento[]) => void;
}

export const ModalModelosEquipamento = ({ open, equipamento, modelos, onClose, onSave, }: ModalModelosEquipamentoProps) => {
    const [search, setSearch] = useState("");
    const [modelosState, setModelosState] = useState<ModeloEquipamento[]>([]);
    const [loading, setLoading] = useState(false);
    const { showToast } = useToast();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        if (open) {
            setModelosState(modelos);
        }
    }, [open, modelos]);

    const modelosFiltrados = useMemo(
        () =>
            modelosState.filter((m) =>
                m.modelo.toLowerCase().includes(search.toLowerCase())
            ),
        [modelosState, search]
    );

    const quantidadeTotal = useMemo(
        () => modelosState.reduce((acc, cur) => acc + cur.quantidade, 0),
        [modelosState]
    );

    const handleIncrement = (index: number) => {
        setModelosState((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, quantidade: item.quantidade + 1 } : item
            )
        );
    };

    const handleDecrement = (index: number) => {
        setModelosState((prev) =>
            prev.map((item, i) =>
                i === index && item.quantidade > 0
                    ? { ...item, quantidade: item.quantidade - 1 }
                    : item
            )
        );
    };

    const handleSave = () => {
        setLoading(true);

        console.log("Salvar modelos:", modelosState);
        onSave?.(modelosState);

        setTimeout(() => {
            setLoading(false);
            onClose();
            showToast("Equipamento atualizado com sucesso", "success");
        }, 600);
    };
    const handleDelete = (row: ModeloEquipamento) => {
        console.log("Deletar modelo:", row);
    };

    const rows: TableRow[] = modelosFiltrados.map((item, index) => ({
        modelo: item.modelo,

        decrementar: (
            <IconButton
                size="small"
                disabled={item.quantidade <= 0}
                onClick={() => handleDecrement(index)}
                sx={{
                    bgcolor: theme.palette.primary.main,
                    color: "#fff",
                    "&:hover": {
                        bgcolor: theme.palette.primary.dark,
                    },
                }}
            >
                <RemoveIcon fontSize="small" />
            </IconButton>
        ),

        incrementar: (
            <IconButton
                size="small"
                onClick={() => handleIncrement(index)}
                sx={{
                    bgcolor: theme.palette.primary.main,
                    color: "#fff",
                    "&:hover": {
                        bgcolor: theme.palette.primary.dark,
                    },
                }}
            >
                <AddIcon fontSize="small" />
            </IconButton>
        ),

        quantidade: item.quantidade,
    }));

    const actions = [
        {
            icon: (
                <DeleteOutlineIcon sx={{ fontSize: 25, color: theme.palette.primary.main }} />
            ),
            Label: "Deletar",
            onClick: (row: ModeloEquipamento) => handleDelete(row),
        },
    ];
    ;


    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ width: { xs: "90%", sm: 630, md: 700 }, bgcolor: "background.paper", borderRadius: 2, boxShadow: 24, p: 2.5, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", }}>

                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                    <Typography fontWeight={600}>
                        Modelos — {equipamento}
                    </Typography>

                    <Typography fontSize={16} color="text.secondary">
                        Total: <strong>{quantidadeTotal}</strong>
                    </Typography>
                </Box>

                <Divider sx={{ mb: 3 }} />

                <Box sx={{ display: "flex", gap: 1, mb: 3, alignItems: "center", justifyContent: "space-between" }}>
                    <Box sx={{ width: { xs: 250, sm: 450 } }}>
                        <SearchInput placeholder="Buscar modelo..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </Box>
                    <Box>
                        {isMobile ? (
                            <Button sx={{ ...botaoMobileMais }}>
                                <AddIcon />
                            </Button>
                        ) : (
                            <Button startIcon={<AddIcon />} variant="contained">
                                Novo modelo
                            </Button>
                        )}
                    </Box>
                </Box>

                <MuiTableContainer
                    columns={COLUNAS_MODELOS_EQUIPAMENTO}
                    rows={rows}
                    lastColumn="Editar"
                    actions={actions}
                    LastColumnSx={{ textAlign: "end" }}
                    tableIConSx={{ justifyContent: "end" }}
                    containerSx={{
                        ...scrollResponse(theme),
                    }}
                />

                <Box sx={{ mt: 5, display: "flex", justifyContent: "flex-end", gap: 1, }}>
                    <Button variant="outlined" onClick={onClose} disabled={loading}>
                        Cancelar
                    </Button>
                    <Button variant="contained" onClick={handleSave} disabled={loading}>
                        {loading ? "Salvando..." : "Salvar"}
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};
