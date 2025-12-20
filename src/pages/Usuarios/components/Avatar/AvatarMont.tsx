import { Avatar } from "@mui/material";
import imagem1 from "../../../../img/foto-minha.jpeg";
import imagem2 from "../../../../img/foto-minha2.jpeg";

const imagens = [imagem1, imagem2];

interface Props {
  nome: string;
  size?: number;
}
export const AvatarUsuario = ({ nome, size = 35 }: Props) => {
  const hash = nome
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const indexImagem = hash % imagens.length;
  const imagemSelecionada = imagens[indexImagem];

  return (
    <Avatar
      src={imagemSelecionada}
      alt={nome}
      sx={{ 
        width: size, 
        height: size, 
        border: "2px solid #fff", 
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        fontSize: size / 2.5, 
        bgcolor: "primary.main" 
      }}
    >
      {nome.charAt(0).toUpperCase()}
    </Avatar>
  );
};

export const gerarAvatar = (nome: string) => {
  return <AvatarUsuario nome={nome} />;
};