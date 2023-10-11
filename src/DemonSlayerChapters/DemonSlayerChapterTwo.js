import React from 'react'

import demon_slayer_chapter_2_page1 from '../DemonSlayerPages/Chapter2/demon_slayer_chap2_page1.jpg'
import demon_slayer_chapter_2_page2 from '../DemonSlayerPages/Chapter2/demon_slayer_chap2_page2.jpg'
import demon_slayer_chapter_2_page3 from '../DemonSlayerPages/Chapter2/demon_slayer_chap2_page3.jpg'
import demon_slayer_chapter_2_page4 from '../DemonSlayerPages/Chapter2/demon_slayer_chap2_page4.jpg'
import { Link } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function DemonSlayerChapterTwo() {

  const [chapter, setChapter] = React.useState('');

  const handleChange = (event) => {
    setChapter(event.target.value);
  };

  return (
    <div className='pt-10'>
    <h5 className='text-2xl md:text-3xl font-medium mt-3 pb-5'>Demon Slayer</h5>
    <div class="flex flex-col justify-center items-center gap-2">
    <img src={demon_slayer_chapter_2_page1} alt="page 1" width="480" height="620" />
    <img src={demon_slayer_chapter_2_page2} alt="page 2" width="480" height="620" />
    <img src={demon_slayer_chapter_2_page3} alt="page 3" width="480" height="620" />
    <img src={demon_slayer_chapter_2_page4} alt="page 4" width="480" height="620" />
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
          <Link to={'/DemonSlayerChapterThree'}> <MenuItem value={3}>Three</MenuItem></Link>
        </Select>
        
      </FormControl>
      
    </div>
    </div>
  </div>
  )
}
