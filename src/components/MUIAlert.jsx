import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function MUIAlert() {
  return (
	<div style={{margin:'150px'}}>
		<Alert sx={{width:'250px'}} severity='info'>Bilgilendirme Mesajı</Alert>
		<Alert sx={{width:'250px',marginTop:'5px'}} severity='error'>Hata!</Alert>
		<Alert sx={{width:'250px',marginTop:'5px'}} severity='warning' variant='standard'> Uyarı Mesajı </Alert>

		<Alert variant='standard' severity='success'
		sx={{width:'250px', marginTop:'5px'}}>  <AlertTitle> Başarılı </AlertTitle> Bilgilendirme Mesajı 

		</Alert>
	</div>
  )
}

export default MUIAlert