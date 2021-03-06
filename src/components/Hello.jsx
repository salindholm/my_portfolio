import React from 'react'
import { Container, Button, Icon } from 'semantic-ui-react'

const Hello = () => {
  return (
    <Container>
      <h1 id='hello-header'>Hello!</h1>
      <p id='hello-text'>
        My name is Sanne Lindholm, a junior full stack web developer based in
        Stockholm.
        <br />
        This is my portfolio to showcase previous projects and some info about
        who I am.
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
            <Button.Content visible>GitHub</Button.Content>
          </Button>
        </a>
        <a href='../data/Resume.pdf' target='_blank' rel='noreferrer noopener'>
          <Button animated='vertical' basic color='grey'>
            <Button.Content hidden>
              <Icon name='file code' />
            </Button.Content>
            <Button.Content visible>Resume</Button.Content>
          </Button>
        </a>
        <a href='mailto:sannelindholm@hotmail.com'>
          <Button animated='vertical' basic color='grey'>
            <Button.Content hidden>
              <Icon name='paper plane outline' />
            </Button.Content>
            <Button.Content visible>Email Me</Button.Content>
          </Button>
        </a>
      </div>
    </Container>
  )
}

export default Hello
