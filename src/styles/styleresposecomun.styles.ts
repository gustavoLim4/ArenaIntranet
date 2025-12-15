import type { Theme } from "@mui/material/styles";

export const containerTableResposeStyles = {
    borderRadius: { xs: 2 },
    overflowX: { xs: "auto", md: "visible" },
    overflowY: "hidden",
    maxWidth: { xs: "89vw", sm: "94vw", md: "100%" },
    mt: 3,
}


export const scrollResponse = (theme: Theme) => ({
    overflowX: "auto",
    position: "relative",

    "&::-webkit-scrollbar": {
        height: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.primary.main,
        borderRadius: "10px",
    },
    "&::-webkit-scrollbar-track": {
        backgroundColor: "#e1e1e1",
    },
});

export const TelasStyles = {
    width: "100%",
    p: {xs: 2, md: 3},
    boxShadow: "0 0 10px rgba(12, 12, 12, 0.33)",
    borderRadius: 2,
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
}

export const dadosNãoEncostrado = {
    textAlign: "center",
    mt: 3,
    color: "#717171ff"
}
