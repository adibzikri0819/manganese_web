import React from 'react'
import { Link } from 'react-router-dom'
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import sakamotodays_cover from '../assets/sakamotodayscover.jpg'

export default function SakamotoDays() {
  const buttons = [
    <Link to={'/BokuNoHeroAcademiaChapterOne'}><Button key="one">One</Button></Link>,
    <Link to={'/BokuNoHeroAcademiaChapterTwo'}><Button key="two">Two</Button></Link>,
    <Link to={'/BokuNoHeroAcademiaChapterThree'}><Button key="three">Three</Button></Link>,
  ];

  return (
    <div className='pt-10'>
    <h5 className='text-2xl md:text-3xl font-medium mt-3 pb-5'>Boku No Hero Academia</h5>
    <div class="flex flex-col justify-center items-center gap-2">
    <div>
    <img src={sakamotodays_cover} alt="bleach cover" width="480" height="600" />
    </div>
    <div>
      <h2 className='text-2xl md:text-2xl font-medium mt-3 pb-5'>List of Chapters</h2>
    </div>

    <div>
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
     
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/SakamotoDaysChapterOne">
              <ListItemText primary="Chapter 1" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/SakamotoDaysChapterTwo">
              <ListItemText primary="Chapter 2" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/SakamotoDaysChapterThree">
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
