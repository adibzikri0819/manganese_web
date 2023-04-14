import React, { Component } from 'react'
import Navbar from './Navbar'
import LatestManga from './LatestManga'
import MostPopular from './MostPopular'
import Genre from './Genre'

export default class Home extends Component {
  render() {
    return (
      <div>
       
       <LatestManga/>

       
       <MostPopular/>

       
       <Genre/>
      </div>
    )
  }
}
