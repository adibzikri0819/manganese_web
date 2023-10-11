import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import juujika_no_rokunin from '../assets/juujika_no_rokunin.jpg'
import naruto_shippuden from '../assets/naruto_shippuden.jpg'
import one_piece from '../assets/one_piece.jpg'
import demon_slayer from '../assets/demon_slayer.jpg'
import bleach from '../assets/bleach.jpg'
import sakamoto_days from '../assets/sakamoto_days.jpg'
import spy_x_family from '../assets/spy_x_family.jpg'
export default class Horror extends Component {
  render() {
    return (
      <div>
      <div className='pt-10'></div>
      <h5 className='text-2xl md:text-3xl font-medium mt-3'>Thriller</h5>
      <div className='flex items-center justify-center min-h screen container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='card'>
            <div className='=p-5 flex flex-col'>
              <div className='rounded xl overflow-hidden'>
                <img src={juujika_no_rokunin} alt='' />
              </div>
              <h5 className='text-2xl md:text-3xl font-medium mt-3'>Juujika no Rokunin</h5>
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
                <img src={bleach} alt='' />
              </div>
              <h5 className='text-2xl md:text-3xl font-medium mt-3'>Bleach</h5>
              <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <Link to='/JuujikaNoRokunin' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
            </div>
          </div>

          
        </div>

      </div>

     <footer className='pt-10'>

     </footer>
      
    </div>
    )
  }
}
