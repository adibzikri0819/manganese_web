import React from 'react'
import { Link } from 'react-router-dom'
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import jujutsukaisen_cover from '../assets/jujutsukaisencover.jpg'

export default function JujutsuKaisen() {
  const buttons = [
    <Link to={'/JujutsuKaisenChapterOne'}><Button key="one">One</Button></Link>,
    <Link to={'/JujutsuKaisenChapterTwo'}><Button key="two">Two</Button></Link>,
    <Link to={'/JujutsuKaisenChapterThree'}><Button key="three">Three</Button></Link>,
  ];

  return (
    <div className='pt-10'>
    <h5 className='text-2xl md:text-3xl font-medium mt-3 pb-5'>Jujutsu Kaisen</h5>
    <div class="flex flex-col justify-center items-center gap-2">
    <div>
    <img src={jujutsukaisen_cover} alt="bleach cover" width="480" height="600" />
    </div>
    <div>
      <h2 className='text-2xl md:text-2xl font-medium mt-3 pb-5'>List of Chapters</h2>
    </div>

    <div>
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
     
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/JujutsuKaisenChapterOne">
              <ListItemText primary="Chapter 1" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/JujutsuKaisenChapterTwo">
              <ListItemText primary="Chapter 2" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/JujutsuKaisenChapterThree">
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