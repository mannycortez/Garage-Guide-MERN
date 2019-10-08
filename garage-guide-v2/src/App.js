import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Modal } from './Modal/Modal'
import { Gallery } from './Gallery/Gallery'


class ModalSwitch extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    let { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render

    return (
      <div>
        <Switch location={ isModal ? this.previousLocation : location }>
          <Route exact path="/" component={ Home } />
          <Route path="/gallery" component={ Gallery } />
          <Route path="/img/:id" component={ Modal } />
        </Switch>
        {isModal ? <Route path="/img/:id" component={ Modal } /> : null}
      </div>
    );
  }
}

export const Image = styled.div `
  width: 305px;
  height: 305px;

  @media (max-width: 990px) {
    width: 100%;
  }
  
  background: no-repeat center/150% url(/img/${({ index }) => index}.jpg);
  ${({ inModal }) => !inModal && css `
      :hover {
      opacity: .7;
    }
 `}
`

function Home() {
  return (
    <div>
      <Link to="/gallery">Garage Guide Version 2</Link>
      <h2>Paintings</h2>
      <ul>
        <li>
          <Link to="/img/2">Tomato</Link>
        </li>
        <li>
          <Link to="/img/4">Crimson</Link>
        </li>
      </ul>
    </div>
  );
}

function ModalGallery() {
  return (
    <Router>
      <Route component={ ModalSwitch } />
    </Router>
  );
}

export default ModalGallery;

