import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p> For Better Experience Download <br/> FoodAur App </p>
        <div className="app-download-platforms">
            <img src={assets.apple_icon} alt="" />
            <img src={assets.playstore_icon} alt="" />
        </div>
    </div>
  )
}

export default AppDownload
