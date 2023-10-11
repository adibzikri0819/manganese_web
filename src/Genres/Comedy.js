import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import naruto_shippuden from '../assets/naruto_shippuden.jpg'
import one_piece from '../assets/one_piece.jpg'
import demon_slayer from '../assets/demon_slayer.jpg'
import bleach from '../assets/bleach.jpg'
import sakamoto_days from '../assets/sakamoto_days.jpg'
import spy_x_family from '../assets/spy_x_family.jpg'
export default class Comedy extends Component {
  render() {
    return (
      <div>
      <div className='pt-10'></div>
      <h5 className='text-2xl md:text-3xl font-medium mt-3'>Comedy</h5>
      <div className='flex items-center justify-center min-h screen container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='card'>
            <div className='=p-5 flex flex-col'>
              <div className='rounded xl overflow-hidden'>
                <img src={naruto_shippuden} alt='' />
              </div>
              <h5 className='text-2xl md:text-3xl font-medium mt-3'>Naruto Shippuden</h5>
              <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <Link to='/BokuNoHero' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
            </div>
          </div>

          

          <div className='card'>
            <div className='=p-5 flex flex-col'>
              <div className='rounded xl overflow-hidden'>
                <img src={one_piece} alt='' className=''/>
              </div>
              <h5 className='text-2xl md:text-3xl font-medium mt-3'>One Piece</h5>
              <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <Link to='/JujutsuKaisen' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
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

     <footer className='pt-10'>

     </footer>
      
    </div>
    )
  }
}
