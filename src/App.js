
import './App.css';
import Navbar from './Components/Navbar';
import LatestManga from './Components/LatestManga';
import { Routes, Route} from "react-router-dom";

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

import BokuNoHeroAcademiaChapterOne from './BokuNoHeroAcademiaChapters/BokuNoHeroAcademiaChapterOne';
import BokuNoHeroAcademiaChapterTwo from './BokuNoHeroAcademiaChapters/BokuNoHeroAcademiaChapterTwo';
import BokuNoHeroAcademiaChapterThree from './BokuNoHeroAcademiaChapters/BokuNoHeroAcademiaChapterThree';

import DemonSlayerChapterOne from './DemonSlayerChapters/DemonSlayerChapterOne';
import DemonSlayerChapterTwo from './DemonSlayerChapters/DemonSlayerChapterTwo';
import DemonSlayerChapterThree from './DemonSlayerChapters/DemonSlayerChapterThree';


import BleachChapterOne from './BleachChapters/BleachChapterOne';
import BleachChapterTwo from './BleachChapters/BleachChapterTwo';
import BleachChapterThree from './BleachChapters/BleachChapterThree';

import CityHunterChapterOne from './CityHunterChapters/CityHunterChapterOne';
import CityHunterChapterTwo from './CityHunterChapters/CityHunterChapterTwo';
import CityHunterChapterThree from './CityHunterChapters/CityHunterChapterThree';

import DragonBallChapterOne from './DragonBallChapters/DragonBallChapterOne';
import DragonBallChapterTwo from './DragonBallChapters/DragonBallChapterTwo';
import DragonBallChapterThree from './DragonBallChapters/DragonBallChapterThree';

import FairyTailChapterOne from './FairyTailChapters/FairyTailChapterOne';
import FairyTailChapterTwo from './FairyTailChapters/FairyTailChapterTwo';
import FairyTailChapterThree from './FairyTailChapters/FairyTailChapterThree';

import JujutsuKaisenChapterOne from './JujutsuKaisenChapters/JujutsuKaisenChapterOne';
import JujutsuKaisenChapterTwo from './JujutsuKaisenChapters/JujutsuKaisenChapterTwo';
import JujutsuKaisenChapterThree from './JujutsuKaisenChapters/JujutsuKaisenChapterThree';

import JuujikaNoRokuninChapterOne from './JuujikaNoRokuninChapters/JuujikaNoRokuninChapterOne';
import JuujikaNoRokuninChapterTwo from './JuujikaNoRokuninChapters/JuujikaNoRokuninChapterTwo';
import JuujikaNoRokuninChapterThree from './JuujikaNoRokuninChapters/JuujikaNoRokuninChapterThree';

import NarutoShippudenChapterOne from './NarutoShippudenChapters/NarutoShippudenChapterOne';
import NarutoShippudenChapterTwo from './NarutoShippudenChapters/NarutoShippudenChapterTwo';
import NarutoShippudenChapterThree from './NarutoShippudenChapters/NarutoShippudenChapterThree';

import OnePieceChapterOne from './OnePieceChapters/OnePieceChapterOne';
import OnePieceChapterTwo from './OnePieceChapters/OnePieceChapterTwo';
import OnePieceChapterThree from './OnePieceChapters/OnePieceChapterThree';

import SakamotoDaysChapterOne from './SakamotoDaysChapters/SakamotoDaysChapterOne';
import SakamotoDaysChapterTwo from './SakamotoDaysChapters/SakamotoDaysChapterTwo';
import SakamotoDaysChapterThree from './SakamotoDaysChapters/SakamotoDaysChapterThree';

import SpyXFamilyChapterOne from './SpyXFamilyChapters/SpyXFamilyChapterOne';
import SpyXFamilyChapterTwo from './SpyXFamilyChapters/SpyXFamilyChapterTwo';
import SpyXFamilyChapterThree from './SpyXFamilyChapters/SpyXFamilyChapterThree';

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

          <Route path='/BokuNoHeroAcademiaChapterOne' element={<BokuNoHeroAcademiaChapterOne/>}/>
          <Route path='/BokuNoHeroAcademiaChapterTwo' element={<BokuNoHeroAcademiaChapterTwo/>}/>
          <Route path='/BokuNoHeroAcademiaChapterThree' element={<BokuNoHeroAcademiaChapterThree/>}/>

          <Route path='/DemonSlayerChapterOne' element={<DemonSlayerChapterOne/>}/>
          <Route path='/DemonSlayerChapterTwo' element={<DemonSlayerChapterTwo/>}/>
          <Route path='/DemonSlayerChapterThree' element={<DemonSlayerChapterThree/>}/>

          <Route path='/BleachChapterOne' element={<BleachChapterOne/>}/>
          <Route path='/BleachChapterTwo' element={<BleachChapterTwo/>}/>
          <Route path='/BleachChapterThree' element={<BleachChapterThree/>}/>

          <Route path='/CityHunterChapterOne' element={<CityHunterChapterOne/>}/>
          <Route path='/CityHunterChapterTwo' element={<CityHunterChapterTwo/>}/>
          <Route path='/CityHunterChapterThree' element={<CityHunterChapterThree/>}/>

          <Route path='/DragonBallChapterOne' element={<DragonBallChapterOne/>}/>
          <Route path='/DragonBallChapterTwo' element={<DragonBallChapterTwo/>}/>
          <Route path='/DragonBallChapterThree' element={<DragonBallChapterThree/>}/>

          <Route path='/JujutsuKaisenChapterOne' element={<JujutsuKaisenChapterOne/>}/>
          <Route path='/JujutsuKaisenChapterTwo' element={<JujutsuKaisenChapterTwo/>}/>
          <Route path='/JujutsuKaisenChapterThree' element={<JujutsuKaisenChapterThree/>}/>

          <Route path='/JuujikaNoRokuninChapterOne' element={<JuujikaNoRokuninChapterOne/>}/>
          <Route path='/JuujikaNoRokuninChapterTwo' element={<JuujikaNoRokuninChapterTwo/>}/>
          <Route path='/JuujikaNoRokuninChapterThree' element={<JuujikaNoRokuninChapterThree/>}/>

          <Route path='/SpyXFamilyChapterOne' element={<SpyXFamilyChapterOne/>}/>
          <Route path='/SpyXFamilyChapterTwo' element={<SpyXFamilyChapterTwo/>}/>
          <Route path='/SpyXFamilyChapterThree' element={<SpyXFamilyChapterThree/>}/>

          <Route path='/CityHunterChapterOne' element={<CityHunterChapterOne/>}/>
          <Route path='/CityHunterChapterTwo' element={<CityHunterChapterTwo/>}/>
          <Route path='/CityHunterChapterThree' element={<CityHunterChapterThree/>}/>

          <Route path='/NarutoShippudenChapterOne' element={<NarutoShippudenChapterOne/>}/>
          <Route path='/NarutoShippudenChapterTwo' element={<NarutoShippudenChapterTwo/>}/>
          <Route path='/NarutoShippudenChapterThree' element={<NarutoShippudenChapterThree/>}/>

          <Route path='/FairyTailChapterOne' element={<FairyTailChapterOne/>}/>
          <Route path='/FairyTailChapterTwo' element={<FairyTailChapterTwo/>}/>
          <Route path='/FairyTailChapterThree' element={<FairyTailChapterThree/>}/>

          <Route path='/OnePieceChapterOne' element={<OnePieceChapterOne/>}/>
          <Route path='/OnePieceChapterTwo' element={<OnePieceChapterTwo/>}/>
          <Route path='/OnePieceChapterThree' element={<OnePieceChapterThree/>}/>

          <Route path='/SakamotoDaysChapterOne' element={<SakamotoDaysChapterOne/>}/>
          <Route path='/SakamotoDaysChapterTwo' element={<SakamotoDaysChapterTwo/>}/>
          <Route path='/SakamotoDaysChapterThree' element={<SakamotoDaysChapterThree/>}/>
        </Routes>
      
      
    </div>
  );
}

export default App;
