import {Button} from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function MUIButton() {
  return (
	<div>
		<div style={{marginBottom : '50px'}}>
			<Button variant='text'>KAYDOL</Button>
			<Button variant='contained'>KAYDOL</Button>
			<Button variant='outlined'>KAYDOL</Button>
		</div>
		<div style={{marginBottom : '50px'}}>
			<Button size='small' color='primary' variant='text'>KAYDOL</Button>
			<Button size='medium' color='secondary' variant='contained'>KAYDOL</Button>
			<Button size='large' color='danger' variant='outlined'>KAYDOL</Button>
			<Button color='success' variant='outlined'>Giriş yap</Button>
		</div>
			<div>
			<Button 
			color='success' 
			variant='outlined'
			startIcon={<AddCircleIcon/>}
			>Geri Dön</Button>
			<Button 
			color='danger' 
			variant='outlined'
			endIcon={<AddCircleIcon/>}
			>Geri Dön</Button>
			</div>
	</div>
	


  )
}

export default MUIButton