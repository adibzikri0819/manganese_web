import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import LatestManga from './Components/LatestManga';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import MostPopular from './Components/MostPopular';
import Genre from './Components/Genre';
import Home from './Components/Home';

import BokuNoHero from './Manga/BokuNoHero';
import DemonSlayer from './Manga/DemonSlayer';
import JujutsuKaisen from './Manga/JujutsuKaisen';
import JuujikaNoRokunin from './Manga/JuujikaNoRokunin';
import SakamotoDays from './Manga/SakamotoDays';
import SpyXFamily from './Manga/SpyXFamily';

import NarutoShippuden from './Manga/NarutoShippuden';
import OnePiece from './Manga/OnePiece';
import Bleach from './Manga/Bleach';
import DragonBall from './Manga/DragonBall';
import FairyTail from './Manga/FairyTail';
import CityHunter from './Manga/CityHunter';

import Action from './Genres/Action';
import Adventure from './Genres/Adventure';
import Comedy from './Genres/Comedy';
import Romance from './Genres/Romance';
import Horror from './Genres/Horror';
import Thriller from './Genres/Thriller';

import DemonSlayerChapterTwo from './MangaPageTwo/DemonSlayerChapterTwo';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/latest' element={<LatestManga/>} />
          <Route path='/popular' element={<MostPopular/>} />
          <Route path='/genre' element={<Genre/>} />

          <Route path='/BokuNoHero' element={<BokuNoHero/>}/>
          <Route path='/DemonSlayer' element={<DemonSlayer/>}/>
          <Route path='/JujutsuKaisen' element={<JujutsuKaisen/>}/>
          <Route path='/JuujikaNoRokunin' element={<JuujikaNoRokunin/>}/>
          <Route path='/SakamotoDays' element={<SakamotoDays/>}/>
          <Route path='/SpyXFamily' element={<SpyXFamily/>}/>

          <Route path='/NarutoShippuden' element={<NarutoShippuden/>}/>
          <Route path='/OnePiece' element={<OnePiece/>}/>
          <Route path='/Bleach' element={<Bleach/>}/>
          <Route path='/DragonBall' element={<DragonBall/>}/>
          <Route path='/FairyTail' element={<FairyTail/>}/>
          <Route path='/CityHunter' element={<CityHunter/>}/>

          <Route path='/Action' element={<Action/>}/>
          <Route path='/Adventure' element={<Adventure/>}/>
          <Route path='/Comedy' element={<Comedy/>}/>
          <Route path='/Romance' element={<Romance/>}/>
          <Route path='/Horror' element={<Horror/>}/>
          <Route path='/Thriller' element={<Thriller/>}/>

          <Route path='/DemonSlayerChapterTwo' element={<DemonSlayerChapterTwo/>}/>
        </Routes>
      
      
    </div>
  );
}

export default App;
