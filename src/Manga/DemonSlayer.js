import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import demon_slayer_cover from '../assets/demonslayercover.jpg'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function DemonSlayer() {

  const buttons = [
    <Link to={'/DemonSlayerChapterOne'}><Button key="one">One</Button></Link>,
    <Link to={'/DemonSlayerChapterTwo'}><Button key="two">Two</Button></Link>,
    <Link to={'/DemonSlayerChapterThree'}><Button key="three">Three</Button></Link>,
  ];

  return (
    <div className='pt-10'>
    <h5 className='text-2xl md:text-3xl font-medium mt-3 pb-5'>Demon Slayer</h5>
    <div class="flex flex-col justify-center items-center gap-2">
    <div>
    <img src={demon_slayer_cover} alt="demon slayer cover" width="480" height="600" />
    </div>
    <div>
      <h2 className='text-2xl md:text-2xl font-medium mt-3 pb-5'>List of Chapters</h2>
    </div>

    <div>
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
     
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/DemonSlayerChapterOne">
              <ListItemText primary="Chapter 1" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/DemonSlayerChapterTwo">
              <ListItemText primary="Chapter 2" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/DemonSlayerChapterThree">
              <ListItemText primary="Chapter 3" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
    </div>


   
    </div>
  </div>
  )
}

