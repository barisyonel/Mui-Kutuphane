import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';



function MUISelect() {

const [curreny , setCurrency ] = useState ('');

  return (
	<div>
		{/* <FormControl sx={{width :'150px'}}>
			<InputLabel>PARA BİRİMİ </InputLabel> <br/> 
			<Select  value={curreny} onChange={(e) => setCurrency (e.target.value)} >
				<MenuItem value="TRY">Türk Lirası</MenuItem>
				<MenuItem value="USD"> DOLAR</MenuItem>
				<MenuItem value="EUR"> EURO</MenuItem>
			</Select>
		</FormControl> */}

		{/* <TextField value={curreny} onChange={(e) =>  setCurrency(e.target.value)} sx={{width:'150px'}}
		label ="Para Birimi" select>
		<MenuItem value="TRY">Türk Lirası</MenuItem>
		<MenuItem value="USD">DOLAR</MenuItem>
		<MenuItem value="EURO">EURO</MenuItem>
		</TextField> <br /><br /> <br />

		<Box sx={{width:'100px', height:'100px', backgroundColor:'orange'}}> </Box> */}

	

	</div>
  )
}

export default MUISelect