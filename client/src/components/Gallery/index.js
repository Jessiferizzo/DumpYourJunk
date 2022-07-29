import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';
import About from '../About/index';

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import SearchBar from '../SearchBar';
import Nav from '../Nav'



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

const theme = createTheme();

export default function Album() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:'flex'
};

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        <SearchBar></SearchBar>
        <Nav></Nav>
        </Toolbar>
      </AppBar>
      <About></About>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Placeholder for categories
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
             Like a garage sale but online!
            </Typography>

          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <link></link>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardActionArea>
                  <CardMedia
                    onClick={handleOpen}
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Placeholder for items name
                    </Typography>
                    <Typography>
                      Placeholder for type and $
                    </Typography>
                  </CardContent>
                  <CardContent></CardContent>
                  <Button size="large">Add to cart</Button>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Dump Your Junk
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Shop Local, Shop Smart.
        </Typography>
      </Box>
      {/* End footer */}

      <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Placeholder for items name
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Placeholder for type and $
                    </Typography>
                    <grid>
                    <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                    </grid>
                    </div></Box>
            </Modal>
    </ThemeProvider>

    
  );
}