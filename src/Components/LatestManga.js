import * as React from 'react';
import { Link } from 'react-router-dom';
import boku_no_hero from '../assets/boku_no_hero_academia.jpg'
import demon_slayer from '../assets/demon_slayer.jpg'
import jujutsu_kaisen from '../assets/jujutsu_kaisen.jpg'
import juujika_no_rokunin from '../assets/juujika_no_rokunin.jpg'
import sakamoto_days from '../assets/sakamoto_days.jpg'
import spy_x_family from '../assets/spy_x_family.jpg'



export default function LatestManga() {
  return (
    <div>
      <div className='pt-10'></div>
      <h5 className='text-2xl md:text-3xl font-medium mt-3'>Latest Manga</h5>
      <div className='flex items-center justify-center min-h screen container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='card'>
            <div className='=p-5 flex flex-col'>
              <div className='rounded xl overflow-hidden'>
                <img src={boku_no_hero} alt='' />
              </div>
              <h5 className='text-2xl md:text-3xl font-medium mt-3'>Boku no Hero Academia</h5>
              <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <Link to='/BokuNoHero' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
            </div>
          </div>

          

          <div className='card'>
            <div className='=p-5 flex flex-col'>
              <div className='rounded xl overflow-hidden'>
                <img src={demon_slayer} alt='' />
              </div>
              <h5 className='text-2xl md:text-3xl font-medium mt-3'>Demon Slayer</h5>
              <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <Link to='/DemonSlayer' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
            </div>
          </div>

          <div className='card'>
            <div className='=p-5 flex flex-col'>
              <div className='rounded xl overflow-hidden'>
                <img src={jujutsu_kaisen} alt='' className=''/>
              </div>
              <h5 className='text-2xl md:text-3xl font-medium mt-3'>Jujutsu Kaisen</h5>
              <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <Link to='/JujutsuKaisen' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
            </div>
          </div>

          <div className='card'>
            <div className='=p-5 flex flex-col'>
              <div className='rounded xl overflow-hidden'>
                <img src={juujika_no_rokunin} alt='' />
              </div>
              <h5 className='text-2xl md:text-3xl font-medium mt-3'>Juujika no Rokunin</h5>
              <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <Link to='/JuujikaNoRokunin' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
            </div>
          </div>

          <div className='card'>
            <div className='=p-5 flex flex-col'>
              <div className='rounded xl overflow-hidden'>
                <img src={sakamoto_days} alt='' />
              </div>
              <h5 className='text-2xl md:text-3xl font-medium mt-3'>Sakamoto Days</h5>
              <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <Link to='/SakamotoDays' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
            </div>
          </div>

          <div className='card'>
            <div className='=p-5 flex flex-col'>
              <div className='rounded xl overflow-hidden'>
                <img src={spy_x_family} alt='' />
              </div>
              <h5 className='text-2xl md:text-3xl font-medium mt-3'>Spy X Family</h5>
              <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <Link to='/SpyXFamily' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}