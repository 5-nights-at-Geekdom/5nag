import React from 'react'
import { Link } from 'react-router-dom'

const menu = () => {
  return (
    <div>
      <div className="menu__box">
        <ul>
          <li>
            <Link to={'/game'}>Start Game</Link>
            <Link to={'/tutorial'}>Tutorial</Link>
            <Link to={'/credits'}>Credits</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

// Start game, Options, Load game from cookies

export default menu
