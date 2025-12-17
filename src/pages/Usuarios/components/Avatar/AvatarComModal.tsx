import { Avatar, Dialog, Box } from "@mui/material";
import { useState } from "react";

import imagem1 from "../../../../img/foto-minha.jpeg";
import imagem2 from "../../../../img/foto-minha2.jpeg";

const imagens = [imagem1, imagem2];

interface Props {
  nome: string;
  size?: number;
}

export const AvatarComModal = ({ nome, size = 35}: Props) => {
  const [open, setOpen] = useState(false);

  const hash = nome
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const indexImagem = hash % imagens.length;
  const imagemSelecionada = imagens[indexImagem];

  return (
    <>
      <Avatar
        src={imagemSelecionada}
        alt={nome}
        onClick={() => setOpen(true)}
        sx={{ width: size, height: size, border: "1px solid #e0e0e0", fontSize: 14, bgcolor: "primary.main", cursor: "pointer" }}>
        {nome.charAt(0)}
      </Avatar>


      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth={false}
        PaperProps={{
          sx: {
            width: { xs: 200, md: 400 },
            height: { xs: 200, md: 400 },
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <Box sx={{ width: "100%", height: "100%", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "background.paper", }} >
          <Avatar
            src={imagemSelecionada}
            alt={nome}
            sx={{ width: "100%", height: "100%", fontSize: 64, bgcolor: "primary.main", }}>
            {nome.charAt(0)}
          </Avatar>
        </Box>
      </Dialog>
    </>
  );
};
