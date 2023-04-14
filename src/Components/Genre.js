import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import action_anime from '../assets/action_anime.jpg'
import adventure_anime from '../assets/adventure_anime.jpg'
import comedy_anime from '../assets/comedy_anime.jpg'
import romance_anime from '../assets/romance_anime.jpg'
import thriller_anime from '../assets/thriller_anime.jpg'
import horror_anime from '../assets/horror_anime.jpg'

export default class Genre extends Component {
  render() {
    return (
    <div>
      <div className='pt-10'></div>
      <h5 className='text-2xl md:text-3xl font-medium mt-3'>Genre</h5>
      <div className='flex items-center justify-center min-h screen container mx-auto'>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

        <div className='card'>
          <div className='=p-5 flex flex-col'>
            <div className='rounded xl overflow-hidden'>
              <img src={action_anime} alt='' />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3'>Action</h5>
            <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <Link to='/Action' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
          </div>
        </div>

        <div className='card'>
          <div className='=p-5 flex flex-col'>
            <div className='rounded xl overflow-hidden'>
              <img src={adventure_anime} alt='' />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3'>Adventure</h5>
            <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <Link to='/Adventure' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
          </div>
        </div>

        <div className='card'>
          <div className='=p-5 flex flex-col'>
            <div className='rounded xl overflow-hidden'>
              <img src={comedy_anime} alt='' className=''/>
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3'>Comedy</h5>
            <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <Link to='/Comedy' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
          </div>
        </div>

        <div className='card'>
          <div className='=p-5 flex flex-col'>
            <div className='rounded xl overflow-hidden'>
              <img src={romance_anime} alt='' />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3'>Romance</h5>
            <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <Link to='/Romance' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
          </div>
        </div>

        <div className='card'>
          <div className='=p-5 flex flex-col'>
            <div className='rounded xl overflow-hidden'>
              <img src={horror_anime} alt='' />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3'>Horror</h5>
            <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <Link to='/Horror' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
          </div>
        </div>

        <div className='card'>
          <div className='=p-5 flex flex-col'>
            <div className='rounded xl overflow-hidden'>
              <img src={thriller_anime} alt='' />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3'>Thriller</h5>
            <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <Link to='/Thriller' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
          </div>
        </div>
        
      </div>

    </div>
  </div>
    )
  }
}
