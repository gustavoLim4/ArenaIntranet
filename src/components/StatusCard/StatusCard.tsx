import { Box, Paper, Typography } from "@mui/material";

type StatusCardProps = {
  titulo: string;
  descricao: string;
  valor: number | string;
  corStatus?: string;
  onClick?: () => void;
};

export const StatusCard = ({
  titulo,
  descricao,
  valor,
  corStatus = "#000",
  onClick,
}: StatusCardProps) => {
  return (
    <Paper
      elevation={0}
      onClick={onClick}
      sx={{
        width: "100%",
        padding: 2,
        borderRadius: 2,
        border: "1px solid #ddd",
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": { backgroundColor: "#fafafa" },
        mt: { xs: 1, md: 0 }
      }}
    >
      <Box sx={{ display: { xs: "flex", md: "block", justifyContent: "space-between", alignItems: "center" } }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography fontWeight={600}>{titulo}</Typography>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: corStatus,
              }}
            />
          </Box>

          <Typography
            variant="body2"
            color="gray"
            mt={1}
            sx={{ minHeight: 20, display: { xs: "none", md: "block" } }}
          >
            {descricao}
          </Typography>
        </Box>
        <Typography
          mt={{ xs: 0, md: 2 }}
          fontSize={{ xs: 20, md: 28 }}
          fontWeight={700}
          color="#424242ff"
        >
          {valor}
        </Typography>
      </Box>
    </Paper>
  );
};
