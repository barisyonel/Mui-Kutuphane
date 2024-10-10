import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button  from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import Araba from '../araba.png';

function MUICard() {

  return (

<Card>
		<CardMedia sx ={{maxWidth :350}}
		component="img"
		alt='Aragba '
		height='170'
        image = {Araba}  />

	<CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Honda Civic
        </Typography>
        <Typography width={350} variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
    </CardContent>
	<CardActions>
        <Button size="small">Fiyat</Button>
        <Button size="small">İletişime Geç </Button>
      </CardActions>
</Card>
  )
}

export default MUICard