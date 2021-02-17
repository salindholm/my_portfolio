import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav id='navbar' className='ui fixed inverted menu'>
      <div className='ui container'>
        <Link id='header' className='header item' to='/'>
          Home
        </Link>
        <div className='right menu'>
          <NavLink
            id='about-tab'
            className='ui item'
            activeStyle={{ frontWeight: 'bold' }}
            to='/about'
          >
            About
          </NavLink>
          <NavLink
            id='projects-tab'
            className='ui item'
            activateStyle={{ frontWeight: 'bold' }}
            to='/projects'
          >
            Projects
          </NavLink>
          <a
            href='../data/cv.pdf'
            target='_blank'
            rel='noreferrer noopener'
            id='cv-tab'
            className='ui item'
            activateStyle={{ frontWeight: 'bold' }}
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
