import React from 'react'
import { Link } from 'react-router-dom'

const menu = () => {
  return (
    <div>
      <div className="menu__box">
        <h2> Five Nights at Geekdom </h2>
        <ul>
          <li>
            <Link to={'/game'}>Start Game</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

// Start game, Options, Load game from cookies

export default menu
