import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MUIDialog() {
  // Dialog'un açık/kapalı durumunu kontrol eden state
  const [open, setOpen] = useState(false);

  // Dialog'u açmak için fonksiyon
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Dialog'u kapatmak için fonksiyon
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Butona tıklandığında dialog açılır */}
      <Button onClick={handleClickOpen}>Hazır Mısın </Button>

      {/* Dialog bileşeni */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Soru</DialogTitle>
        <DialogContent>
          <DialogContentText>Barış Can Yönel'i işe alır mısın?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Evet</Button>
          <Button onClick={handleClose}>Hayır</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MUIDialog;