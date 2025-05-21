import React from 'react'
import Theme from '../images/Theme.jpg'
import Border from '../images/Border/Border.png'
import lights from '../images/Decors/light1.png'

const Intro = () => {
  return (
    <div className="Intro_Container">
        <div className="Intro_Page">
        <div className="lights">
                <img src={lights} alt="" />
            </div>
            <div className="Border">
            <img src={Border} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default Intro