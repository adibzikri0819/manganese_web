import React from 'react'

import juujikanorokunin_chapter_1_page1 from '../JuujikaNoRokuninPages/Chapter1/juujikanorokunin_chap1_page1.jpg'
import juujikanorokunin_chapter_1_page2 from '../JuujikaNoRokuninPages/Chapter1/juujikanorokunin_chap1_page2.jpg'
import juujikanorokunin_chapter_1_page3 from '../JuujikaNoRokuninPages/Chapter1/juujikanorokunin_chap1_page3.jpg'
import { Link } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function JujutsuKaisenChapterOne() {

  const [chapter, setChapter] = React.useState('');

  const handleChange = (event) => {
    setChapter(event.target.value);
  };

  return (
    <div className='pt-10'>
    <h5 className='text-2xl md:text-3xl font-medium mt-3 pb-5'>Jujutsu Kaisen</h5>
    <div class="flex flex-col justify-center items-center gap-2">
    <img src={juujikanorokunin_chapter_1_page1} alt="page 1" width="480" height="620" />
    <img src={juujikanorokunin_chapter_1_page2} alt="page 2" width="480" height="620" />
    <img src={juujikanorokunin_chapter_1_page3} alt="page 3" width="480" height="620" />
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
          
          <Link to={'/JuujikaNoRokuninChapterOne'}> <MenuItem value={1}>One</MenuItem></Link>
          <Link to={'/JuujikaNoRokuninChapterTwo'}> <MenuItem value={2}>Two</MenuItem></Link>
          <Link to={'/JuujikaNoRokuninChapterThree'}> <MenuItem value={3}>Three</MenuItem></Link>
        </Select>
        
      </FormControl>
      
    </div>
    </div>
  </div>
  )
}
