import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanel from './CustomTabPanel'; // Doğru bileşen ismiyle

function MUITabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue); // Sekme değişikliği burada güncellenir
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="KİŞİSEL BİLGİLER" />
          <Tab label="EĞİTİM BİLGİSİ" />
          <Tab label="İLETİŞİM" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Barış Can Yönel
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Gazi Osman Paşa Üni.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        takasan97@gmail.com
      </CustomTabPanel>
    </Box>
  );
}

export default MUITabs;