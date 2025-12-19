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



export const botaoMobileMais = {
    minWidth: "48px",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "primary.main", color: "#fff",
    "&:hover": { backgroundColor: "primary.dark" },
}