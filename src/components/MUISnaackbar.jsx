import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function MUISnackbar() {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
  };

  // Snackbar'ı kapatma fonksiyonu
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return; // Snackbar tıklamayla kapanmasın
    }
    setOpenSnackbar(false);
  };

  const action = (
    <>
      <Button size="small" color="info" onClick={handleClose}>
        Kapat
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </>
  );

  return (
    <div>
      <Button onClick={handleClick}>Snackbar'ı Aç</Button>
      <Snackbar
        open={openSnackbar}
        onClose={handleClose}
        message="Hata oluştu"
        action={action}
        autoHideDuration={6000}
		 // Snackbar 6 saniye sonra otomatik kapanacak
      />
    </div>
  );
}

export default MUISnackbar;