import React from 'react'
import TextField from '@mui/material/TextField';

function MUITextField() {
  return (
	<div>
		<div>
		<TextField label="isim" variant='outlined' />
		<TextField label="isim" variant='filled' />
		</div>
		<div>
		<TextField label="isim" variant='standard' color='warning' />
		</div>
	</div>
  )
}

export default MUITextField