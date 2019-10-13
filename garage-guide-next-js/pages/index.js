import React from 'react'
import Typed from 'react-typed'
import BaseLayout from '../components/layouts/BaseLayout'
import { Button, Container, Row, Col } from 'reactstrap'
import ReactDOM from 'react-dom'
import { FaGitSquare, FaLinkedin, FaFacebookSquare, FaInstagram } from 'react-icons/fa'


class Index extends React.Component {
    constructor(props) {
        super(props);

        this.selfTypingText = ['artist', 'designer', 'fullstack developer']
    }
    render() {
        return (
            <BaseLayout className="cover">
  <div className="main-section">
    <div className="background-image">
      <img src="/static/images/background-index.png" />
    </div>

    <Container>
      <Row>
        <Col md="6">
          <div className="hero-section">
            <div className={`flipper`}>
              <div className="back">
                <div className="hero-section-content">
                  <h2> </h2>
                  <div className="hero-section-content-intro"></div>
                </div>
                <img className="image" src="/static/images/studio-hero-1.jpg"/>
                <div className="shadow-custom">
                  <div className="shadow-inner"> </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md="6" className="hero-welcome-wrapper">
          <div className="hero-welcome-text">
            <h1>
              Manny Cortez
            </h1>
          </div> 
          <Typed
                loop
                typeSpeed={ 80 }
                backSpeed={ 80 }
                strings={ this.selfTypingText }
                smartBackspace
                shuffle={ false }
                backDelay={ 500 }
                loopCount={ 0 }
                showCursor
                className="self-typed"
                cursorChar="|"
          />

          <div className="hero-welcome-bio">
            <h2>
              MongoDB | Express | React | Node | SASS | Firebase | Next.js | Webflow | Adobe Illustrator | XD
            </h2>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  <div className = "icon-header">
    <h4>Follow me</h4>
  </div>
  <div className = "social-icons">
  <FaGitSquare />
  <FaLinkedin />
  <FaFacebookSquare />
  <FaInstagram  />
  </div>
</BaseLayout>
        )
    }
}


export default Index;