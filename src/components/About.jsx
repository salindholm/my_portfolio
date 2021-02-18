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
        <p>I'm a 26 y/o girl from the Northern parts of Sweden who enjoys traveling and exploring the world when I have some time off. I’ve up to this point been in 38 countries and after High School I went to live in Australia and England for a year each. Back in Sweden I started to work in the travel industry, but due to Covid-19 I lost my job.</p>
      <p>So my focus switched to programming, I’m a really creative person who enjoys problem solving, therefore I think it's a really good match. I’ve just finished a 12-week Full Stack Web Developer Boot Camp and I'm very excited to start my journey in this new innovating industry.</p>
        </Container>
      </Container>
    </>
  )
}

export default About
