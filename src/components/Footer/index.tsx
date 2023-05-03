import { Box, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';

export function Footer() {
  return (
    <Box sx={{ bgcolor: '#606060', p: 6 }} component="footer">
      <Typography data-testid="text-footer" variant="h6" align="center" gutterBottom>
        Teste inLog
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p" data-testid="subtext-footer">
        Desenvolvido por: <strong><i>Wilber Alves de Lima!</i></strong>
      </Typography>
      <Link 
        data-testid="visit" 
        sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }} 
        color="inherit" 
        target={'_blank'} 
        href="https://www.linkedin.com/in/wilberchair/"
      >
        Visite meu LinkedIn <LinkedInIcon />
      </Link>
    </Box>
  )
}