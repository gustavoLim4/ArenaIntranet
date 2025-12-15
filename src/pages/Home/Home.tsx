
import { Box, Typography, Avatar, } from "@mui/material";
import Marquee from "react-fast-marquee";
import { CarrosselBanners } from "./components/Carrossel";
import { TelasStyles } from "../../styles/styleresposecomun.styles";

const aniversariantes = [
    { nome: "FLAVIO DOS SANTOS", data: "10/12", status: "Hoje!" },
    { nome: "MARCUS VINICIUS GOMES", data: "11/12", status: "Amanhã!" },
    { nome: "ADRIANO MENEZES", data: "11/12", status: "Amanhã!" },
    { nome: "FABIO BARRETO DA FONSECA", data: "09/12", status: "Ontem!" },
    { nome: "ANA CAROLINA MENEZES", data: "12/12" },
    { nome: "ANDRE MIGUEL GONÇALVES", data: "03/12" },
];

export const Home = () => {

    return (
        <Box sx={{ ...TelasStyles }}>
            <Box mb={5}>
                <CarrosselBanners />
            </Box>

            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                Aniversariantes do mês! 🥳🎂
            </Typography>
            <Marquee
                speed={60}
                pauseOnHover={true}
                style={{ display: "flex", gap: "16px", padding: 9, overflow: "hidden" }}
            >
                <Box sx={{ display: "flex", gap: 2 }}>
                    {aniversariantes.map((pessoa, i) => (

                        <Box key={i} sx={{ borderRadius: 3, boxShadow: "0 0 10px rgba(12, 12, 12, 0.33)", p: 2, width: 330, display: "flex", alignItems: "center", justifyContent: "space-between", bgcolor: "white" }} >

                            <Avatar sx={{ bgcolor: "#9e9e9e", width: 48, height: 48, }} />

                            <Box sx={{ display: "flex", flexDirection: "column", }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, textAlign: "end" }} >
                                    {pessoa.nome}
                                </Typography>

                                <Box sx={{ display: "flex", justifyContent: "end", gap: 1, mt: 0.5, }} >
                                    {pessoa.status && (
                                        <Typography variant="body2" sx={{ fontWeight: 700, color: "secondary.main" }}>
                                            {pessoa.status}
                                        </Typography>
                                    )}
                                    <Typography variant="body2" sx={{ fontWeight: 700, color: "primary.main" }}>{pessoa.data}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Marquee>
        </Box>
    );
}
