import { Box, TextField, Button, Typography, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import fundoLogin from "../../img/fundoLogin.png";
import logo from "../../img/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PGLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      if (usuario === "admin" && senha === "1234") {
        navigate("/home");
      } else {
        alert("Usuário ou senha inválidos!");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <Box
      component="main"
      onKeyDown={(e) => {
        if (e.key === "Enter") handleLogin();
      }}
      sx={{
        display: { xs: "block", md: "flex" },
        height: "100vh",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${fundoLogin})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: { xs: "0vh", md: "100vh" },
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 3,
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: { xs: "55%", sm: "45%", md: "60%" },
            maxWidth: "350px",
          }}
        />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.background.paper,
          px: 4,
        }}
      >
        <Box sx={{ width: "80%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: 2 }}>

          <TextField
            label="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            autoFocus
          />

          <TextField
            label="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              py: 1.3,
              fontWeight: 600,
              height: 50,
            }}
            onClick={handleLogin}
            disabled={loading}
          
          >
            {loading ? <CircularProgress size={22} color="info" /> : "ENTRAR"}
          </Button>
        </Box>

        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            bottom: 10,
            textAlign: "center",
            color: theme.palette.text.secondary,
            fontSize: { sx: "10px", md: "14px" },
          }}
        >
          Powered by <strong>Code Tech®</strong> - V0.0.1.
        </Typography>
      </Box>
    </Box>
  );
};
