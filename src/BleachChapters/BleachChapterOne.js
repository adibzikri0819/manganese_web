import React from 'react'

import bleach_chapter_1_page1 from '../BleachPages/Chapter1/bleach_chap1_page1.jpg'
import bleach_chapter_1_page2 from '../BleachPages/Chapter1/bleach_chap1_page2.jpg'
import bleach_chapter_1_page3 from '../BleachPages/Chapter1/bleach_chap1_page3.jpg'
import { Link } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function BleachChapterOne() {

  const [chapter, setChapter] = React.useState('');

  const handleChange = (event) => {
    setChapter(event.target.value);
  };

  return (
    <div className='pt-10'>
    <h5 className='text-2xl md:text-3xl font-medium mt-3 pb-5'>Bleach</h5>
    <div class="flex flex-col justify-center items-center gap-2">
    <img src={bleach_chapter_1_page1} alt="page 1" width="480" height="620" />
    <img src={bleach_chapter_1_page2} alt="page 2" width="480" height="620" />
    <img src={bleach_chapter_1_page3} alt="page 3" width="480" height="620" />
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
          
          <Link to={'/BleachChapterOne'}> <MenuItem value={1}>One</MenuItem></Link>
          <Link to={'/BleachChapterTwo'}> <MenuItem value={2}>Two</MenuItem></Link>
          <Link to={'/BleachChapterThree'}> <MenuItem value={3}>Three</MenuItem></Link>
        </Select>
        
      </FormControl>
      
    </div>
    </div>
  </div>
  )
}
