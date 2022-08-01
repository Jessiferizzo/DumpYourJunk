import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia';


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

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
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
        </div>
    );
}