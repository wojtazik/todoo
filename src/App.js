import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import AppName from './components/AppName'
import ToDoContainer from './containers/ToDoContainer'


export function App() {
  return (
          <div data-testid="app-container" className="App">
              <Container >
                  <Row>
                      <Col>
                          <AppName />
                      </Col>
                  </Row>
                  <Row>
                      <ToDoContainer/>
                  </Row>
              </Container>
          </div>
  );
}

export default App;
