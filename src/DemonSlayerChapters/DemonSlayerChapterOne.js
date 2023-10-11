import React from 'react'
import demon_slayer_chapter_1_page1 from '../DemonSlayerPages/Chapter1/demonslayerpage1.jpg'
import demon_slayer_chapter_1_page2 from '../DemonSlayerPages/Chapter1/demonslayerpage2.jpg'
import demon_slayer_chapter_1_page3 from '../DemonSlayerPages/Chapter1/demonslayerpage3.jpg'
import demon_slayer_chapter_1_page4 from '../DemonSlayerPages/Chapter1/demonslayerpage4.jpg'
import demon_slayer_chapter_1_page5 from '../DemonSlayerPages/Chapter1/demonslayerpage5.jpg'
import demon_slayer_chapter_1_page6 from '../DemonSlayerPages/Chapter1/demonslayerpage6.jpg'
import demon_slayer_chapter_1_page7 from '../DemonSlayerPages/Chapter1/demonslayerpage7.jpg'
import { Link } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function DemonSlayerChapterOne() {

  const [chapter, setChapter] = React.useState('');

  const handleChange = (event) => {
    setChapter(event.target.value);
  };

  return (
    <div className='pt-10'>
    <h5 className='text-2xl md:text-3xl font-medium mt-3 pb-5'>Demon Slayer</h5>
    <div class="flex flex-col justify-center items-center gap-2">
    <img src={demon_slayer_chapter_1_page1} alt="page 1" width="480" height="620" />
    <img src={demon_slayer_chapter_1_page2} alt="page 2" width="480" height="620" />
    <img src={demon_slayer_chapter_1_page3} alt="page 3" width="480" height="620" />
    <img src={demon_slayer_chapter_1_page4} alt="page 4" width="480" height="620" />
    <img src={demon_slayer_chapter_1_page5} alt="page 5" width="480" height="620" />
    <img src={demon_slayer_chapter_1_page6} alt="page 6" width="480" height="620" />
    <img src={demon_slayer_chapter_1_page7} alt="page 7" width="480" height="620" />
    <div>
    <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Chapter</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={chapter}
          label="Chapter"
          onChange={handleChange}
        >
          
          <Link to={'/DemonSlayerChapterOne'}> <MenuItem value={1}>One</MenuItem></Link>
          <Link to={'/DemonSlayerChapterTwo'}> <MenuItem value={2}>Two</MenuItem></Link>
          <MenuItem value={3}>Three</MenuItem>
        </Select>
        
      </FormControl>
      
    </div>
    </div>
  </div>
  )
}