import React from 'react'
import { Container, Image } from 'semantic-ui-react'

const About = () => {
  return (
    <>
        <h1 id='about-header'>About me</h1>
      <Container>
        <Image
          src='/images/coder.gif'
          size='medium'
          circular
          floated='left'
        />
        <Container className='about-content'>
          <p>
            I'm a 26 y/o girl from the Northern parts of Sweden who is
            passionate about traveling and exploring the world.{' '}
          </p>
          <p>
            Newly graduated from Craft Academy where I have been working in a
            fast-paced environment, learning how to work in real-life projects
            and situations. I got a solid knowledge of working with both
            frontend and backend to build complete full-stack applications, all
            based on the Agile methodology, Test-Driven Development process and
            pair programming.{' '}
          </p>
        </Container>
      </Container>
    </>
  )
}

export default About
