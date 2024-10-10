import React, { useEffect, useState } from 'react'
import CircularProgress  from '@mui/material/CircularProgress';
import { LinearProgress } from '@mui/material';


function MUIProgress() {

	const [progress,setProgress]=useState(0);


	useEffect(() => {
		const timer = setInterval(()=>{
			setProgress((oldProgress)=>{
				const plusValue = Math.floor(Math.random()*10)
				return Math.min (oldProgress +plusValue,100);
			})
		}, 500 )


		return () =>{
			clearInterval(timer);
		}
	}, [] )

  return (

	<div>
		<div>
		<LinearProgress variant='determinate' value={progress}/>
		</div>
	</div>

  )
}

export default MUIProgress