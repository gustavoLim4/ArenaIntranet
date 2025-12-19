export const EsconderScrollDesktop = {
    overflowY: "auto",
    "&::-webkit-scrollbar": {
        width: "0px",
        background: "transparent",
    },
    scrollbarWidth: "none",
    msOverflowStyle: "none",
}


export const EsconderScrollCelular = {
    overflowY: "auto",
    "&::-webkit-scrollbar": {
        width: "0px",
        background: "transparent",
    },
    scrollbarWidth: "none",
    msOverflowStyle: "none",

}

export const TelasStyles = {
    width: "100%",
    p: { xs: 2, md: 3 },
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