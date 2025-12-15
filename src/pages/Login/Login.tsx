import { Box, TextField, Button, Typography, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import fundoLogin from "../../img/fundoLogin.png";
import logo from "../../img/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erroUsuario, setErroUsuario] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroLogin, setErroLogin] = useState("");

  const handleLogin = () => {
    setErroUsuario("");
    setErroSenha("");
    setErroLogin("");

    let hasError = false;

    if (!usuario.trim()) {
      setErroUsuario("Informe o usuário.");
      hasError = true;
    }

    if (!senha.trim()) {
      setErroSenha("Informe a senha.");
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);

    if (usuario === "admin" && senha === "1234") {
      navigate("/home");
    } else {
      setErroLogin("Usuário ou senha inválidos!");
    }

    setLoading(false);
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
            width:  "65%",
            position: { xs: "absolute", md: "static" },
            top: { xs: "120px", sm: "180px", md: "0px" }
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
          mt: { xs: 5, md: 0 }
        }}
      >
        <Box
          sx={{
            minWidth: { xs: "100%",sm:"80%", md: "75%" },
            display: "flex",
            flexDirection: "column",
            gap: 2
          }}
        >

          <TextField
            label="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            error={!!erroUsuario}
            helperText={erroUsuario}
            autoFocus
          />

          <TextField
            label="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            error={!!erroSenha}
            helperText={erroSenha}
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
          >{loading ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <span>Entrando...</span>
              <CircularProgress size={18} color="inherit" />
            </Box>
          ) : (
            "ENTRAR"
          )}
          </Button>

          {erroLogin && (
            <Typography color="error" sx={{ fontSize: "14px", fontWeight: 400, mt: 1 }}>
              {erroLogin}
            </Typography>
          )}

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
