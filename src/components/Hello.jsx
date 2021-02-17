import React from 'react'
import { Container, Button, Icon } from 'semantic-ui-react'

const Hello = () => {
  return (
    <Container>
      <h1 id='hello-header'>Hello!</h1>
      <p id='hello-text'>
        My name is Sanne Lindholm, a fullstack developer based in Stockholm.
        <br />
        This is a portfolio to showcase my work and some info about me.
        <br />
        Enjoy!
      </p>
      <div id='buttons'>
        <a href='https://www.linkedin.com/in/sanne-lindholm/'>
          <Button animated='vertical' basic color='grey'>
            <Button.Content hidden>
              <Icon name='linkedin' />
            </Button.Content>
            <Button.Content visible>LinkedIn</Button.Content>
          </Button>
        </a>
        <a href='https://github.com/salindholm'>
          <Button animated='vertical' basic color='grey'>
            <Button.Content hidden>
              <Icon name='github' />
            </Button.Content>
            <Button.Content visible>Github</Button.Content>
          </Button>
        </a>
        <a href='mailto:sannelindholm@hotmail.com'>
          <Button animated='vertical' basic color='grey'>
            <Button.Content hidden>
              <Icon name='mail' />
            </Button.Content>
            <Button.Content visible>Email me</Button.Content>
          </Button>
        </a>
      </div>
    </Container>
  )
}

export default Hello
