import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import naruto_shippuden from '../assets/naruto_shippuden.jpg'
import one_piece from '../assets/one_piece.jpg'
import bleach from '../assets/bleach.jpg'
import dragon_ball from '../assets/dragon_ball.jpg'
import fairy_tail from '../assets/fairy_tail.jpg'
import city_hunter from '../assets/city_hunter.jpg'

export default class MostPopular extends Component {
  render() {
    return (
    <div>
      <div className='pt-10'></div>
      <h5 className='text-2xl md:text-3xl font-medium mt-3'>Most Popular</h5>
      <div className='flex items-center justify-center min-h screen container mx-auto'>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

        <div className='card'>
          <div className='=p-5 flex flex-col'>
            <div className='rounded xl overflow-hidden'>
              <img src={naruto_shippuden} alt='' />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3'>Naruto Shippuden</h5>
            <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <Link to='/NarutoShippuden' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
          </div>
        </div>

        <div className='card'>
          <div className='=p-5 flex flex-col'>
            <div className='rounded xl overflow-hidden'>
              <img src={one_piece} alt='' />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3'>One Piece</h5>
            <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <Link to='/OnePiece' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
          </div>
        </div>

        <div className='card'>
          <div className='=p-5 flex flex-col'>
            <div className='rounded xl overflow-hidden'>
              <img src={bleach} alt='' className=''/>
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3'>Bleach</h5>
            <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <Link to='/Bleach' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
          </div>
        </div>

        <div className='card'>
          <div className='=p-5 flex flex-col'>
            <div className='rounded xl overflow-hidden'>
              <img src={dragon_ball} alt='' />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3'>Dragon Ball</h5>
            <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <Link to='/DragonBall' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
          </div>
        </div>

        <div className='card'>
          <div className='=p-5 flex flex-col'>
            <div className='rounded xl overflow-hidden'>
              <img src={fairy_tail} alt='' />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3'>Fairy Tail</h5>
            <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <Link to='/FairyTail' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
          </div>
        </div>

        <div className='card'>
          <div className='=p-5 flex flex-col'>
            <div className='rounded xl overflow-hidden'>
              <img src={city_hunter} alt='' />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3'>City Hunter</h5>
            <p className='text-slate-500 text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <Link to='/CityHunter' className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Select</Link>
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
