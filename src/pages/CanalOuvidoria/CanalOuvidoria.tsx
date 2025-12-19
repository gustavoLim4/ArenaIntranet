import { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Paper, Stack, useTheme, Alert, FormControlLabel, Checkbox } from '@mui/material';
import { TelasStyles } from '../../styles/stylesComun.styles';
import SendIcon from '@mui/icons-material/Send';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';
import { CATEGORIAS_OUVIDORIA, MOCK_MENSAGENS_OUVIDORIA } from './util/util';
import { GerenciamentoOuvidoria } from './components/GerenciamentoOuvidoria';
import type { MensagemOuvidoria } from './types/types';

export const CanalOuvidoria = () => {
  const theme = useTheme();
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openAdmin, setOpenAdmin] = useState(false);
  const [mensagens, setMensagens] = useState(MOCK_MENSAGENS_OUVIDORIA);

  const isAdmin = true;

  const [form, setForm] = useState({
    categoria: "",
    assunto: "",
    mensagem: "",
    anonimo: false
  });

const handleSend = () => {
    setLoading(true);
    
    setTimeout(() => {
        // Tipamos o objeto explicitamente
        const novoRelato: MensagemOuvidoria = {
            id: Date.now(), 
            data: new Date().toLocaleDateString('pt-BR'),
            categoria: form.categoria,
            assunto: form.assunto,
            mensagem: form.mensagem,
            anonimo: form.anonimo,
            autor: form.anonimo ? "Anônimo" : "Colaborador Atual",
        };

        setMensagens([novoRelato, ...mensagens]);
        setLoading(false);
        setEnviado(true);
        setForm({ categoria: "", assunto: "", mensagem: "", anonimo: false });
    }, 1500);
}

  return (
    <Box sx={{ ...TelasStyles }}>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={4}>
        <Stack spacing={1}>
          <Typography fontWeight={700} variant='h5'>Canal de Ouvidoria</Typography>
          <Typography variant="body2" color="text.secondary">
            Este é um espaço seguro e sigiloso para você enviar sugestões, críticas ou denúncias.
          </Typography>
        </Stack>

        {isAdmin && (
          <Button
            variant="outlined"
            color="primary"
            startIcon={<SettingsIcon />}
            onClick={() => setOpenAdmin(true)}
            sx={{ borderRadius: 2 }}
          >
            Gerenciar Relatos ({mensagens.length})
          </Button>
        )}
      </Stack>

      <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
        <Paper elevation={0} sx={{ flex: 2, borderRadius: 3 }}>
          {enviado ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Alert severity="success" sx={{ mb: 3 }}>Relato enviado com sucesso! Agradecemos sua colaboração.</Alert>
              <Button variant="outlined" onClick={() => setEnviado(false)}>Enviar novo relato</Button>
            </Box>
          ) : (
            <Stack spacing={3}>
              <TextField
                select
                label="Categoria do Relato"
                fullWidth
                value={form.categoria}
                onChange={(e) => setForm({ ...form, categoria: e.target.value })}
              >
                {CATEGORIAS_OUVIDORIA.map((cat) => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
              </TextField>

              <TextField
                label="Assunto"
                fullWidth
                value={form.assunto}
                onChange={(e) => setForm({ ...form, assunto: e.target.value })}
              />

              <TextField
                label="Sua Mensagem"
                multiline
                rows={6}
                fullWidth
                placeholder="Descreva aqui com detalhes..."
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={form.anonimo}
                    onChange={(e) => setForm({ ...form, anonimo: e.target.checked })}
                  />
                }
                label="Enviar este relato de forma anônima"
              />

              <Button
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                onClick={handleSend}
                disabled={loading || !form.categoria || !form.mensagem}
                sx={{ py: 1.5, fontWeight: 700 }}
              >
                {loading ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </Stack>
          )}
        </Paper>

        <Box sx={{ flex: 1 }}>
            <Paper elevation={0} sx={{ p: 3, bgcolor: 'rgba(25, 118, 210, 0.04)', borderRadius: 3, border: `1px dashed ${theme.palette.primary.main}` }}>
                <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'primary.main' }}>
                        <SecurityIcon />
                        <Typography fontWeight={700}>Compromisso com o Sigilo</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        1. Relatos analisados pelo comitê de ética.<br />
                        2. Garantimos o anonimato total.<br />
                        3. Sem retaliações.<br />
                        4. Retorno em até 5 dias úteis.
                    </Typography>
                </Stack>
            </Paper>
        </Box>
      </Box>
      <GerenciamentoOuvidoria
        open={openAdmin}
        onClose={() => setOpenAdmin(false)}
        mensagens={mensagens}
        setMensagens={setMensagens}
      />
    </Box>
  );
};