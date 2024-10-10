import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function MUIAvatar() {
  return (
	<div>
	<Stack spacing={2}>
		<Avatar>B</Avatar>
		<Avatar>H</Avatar>
		<Avatar src='https://randomuser.me/api/portraits/men/60.jpg'/>
    </Stack>
	</div>
  )
}

export default MUIAvatar