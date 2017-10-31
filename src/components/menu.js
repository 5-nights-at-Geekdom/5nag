import React from 'react'
import { Link } from 'react-router-dom'

const menu = () => {
  return (
    <div>
      <div className="menu__box">
        <ul>
          <li>
            <Link to={'/game'}>Start Game</Link>
            <Link to={'/tutorial'}>Start Game</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

// Start game, Options, Load game from cookies

export default menu
