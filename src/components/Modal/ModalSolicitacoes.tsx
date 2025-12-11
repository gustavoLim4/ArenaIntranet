import { Box, Modal, Typography } from "@mui/material";

type ModalAtendimentoProps = {
  open: boolean;
  onClose: () => void;
  numero: string | number;
  titulo: string;
  mensagem?: string;
};

export const ModalSolicitacoes = ({
  open,
  onClose,
  numero,
  titulo,
  mensagem,
}: ModalAtendimentoProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "white",
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" mb={2}>
          Detalhes do Item
        </Typography>

        <Typography fontWeight={600}>
          {numero} — {titulo}
        </Typography>

        {mensagem && (
          <Typography mt={1} color="gray">
            {mensagem}
          </Typography>
        )}
      </Box>
    </Modal>
  );
};
