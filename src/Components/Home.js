import React, { Component } from 'react'
import Navbar from './Navbar'
import LatestManga from './LatestManga'
import MostPopular from './MostPopular'
import Genre from './Genre'
import { Typography } from '@material-tailwind/react'

export default class Home extends Component {
  render() {
    return (
      <div>
       
       <LatestManga/>

       
       <MostPopular/>

       
       <Genre/>

       <footer className="justify-center border-t border-blue-gray-50 py-6 text-center md:justify-between">
        <ul>
          <li><a>Made by Adib Zikri</a></li>
        </ul>
    </footer>
      </div>
    )
  }
}
