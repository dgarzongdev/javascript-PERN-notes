import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>

            <Typography variant="h6" sx={{ flexGrow:1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "#DFC1B7" }}> PERN stack </Link>
            </Typography>

            <Button variant="outlined" color="inherit" onClick={() => navigate('/notes/new')}>
              New note
            </Button>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
