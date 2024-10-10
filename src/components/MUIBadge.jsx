import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import { Badge } from '@mui/material';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
function MUIBadge() {
  return (
	<div style={{marginTop:'100px', marginLeft:'100px'}}>
		<Badge badgeContent={15} color='primary' max={9} >
			<AttachEmailIcon/>
		</Badge>
	</div>
  )
}

export default MUIBadge