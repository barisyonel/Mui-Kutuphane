import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, Stack } from '@mui/material';

function MUIAppbar() {

		const [anchorEl , setAnchorEl] = useState(null);

		const openMenu = (e)=> {
			setAnchorEl(e.currentTarget);
		}
		const openControl = anchorEl ? true : false ;

  return (
	<AppBar position='static'>
		<Toolbar>
			<IconButton>
				<MenuIcon sx={{color:'orange'}} />
			</IconButton>
			<Typography variant='h6'>MUI</Typography>

			<Stack direction="row" sx={{marginLeft :'auto'}} >
				<Button sx={{color: '#fff'}} >ANASAYAFA</Button>
				<Button sx={{color: '#fff'}} >HAKKIMIZDA</Button>
				<Button sx={{color: '#fff'}} onClick={openMenu}  >ÜRÜNLER</Button>
				<Button sx={{color: '#fff'}} >İLETİŞİM</Button>
			</Stack>
			
			<Menu anchorEl={anchorEl} open={openControl} >
				<MenuItem>Lastik</MenuItem>
				<MenuItem>Bijon</MenuItem>
				<MenuItem>Lastik</MenuItem>
			</Menu>

		</Toolbar>
	</AppBar>
  )
}

export default MUIAppbar