import React, { useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Input from './components/Input';
import Product from './components/Product';
import Footer from './components/Footer'

import logo from './assets/Logo.svg'
import ReactGA from 'react-ga';

import './App.css';
import * as data from './database.json';

// Google Analytics
ReactGA.initialize('G-49WTS3XHX1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  console.log(data.default);
  const [money, setMoney] = useState(1);

  return (
    <>
      <Container className="p-4">

      <Row className="justify-content-center mb-4">
          <Col xs={12} md={8}>
            <center><Image src={logo} width="60px"/></center>
          </Col>
      </Row>

      <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h1 className="text-center">How much do you want to earn monthly?</h1>
          </Col>
      </Row>
      

      <Row className="justify-content-center mt-4">
          <Col xs={12} md={8}>
            <center><Input money={money} setMoney={setMoney}/></center>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {data.default.map((product, idx) => 
        
            <Col key={idx} xs={12} sm={12} md={6} lg={4}>
              <Product product={product} money={money} />
            </Col>
            
          )}
        </Row>

        <Row className="justify-content-center mt-4">
          <Col xs={12} md={8}>
            <h2 className="text-center">Are you a creator and want to discover new ways of income?</h2>
          </Col>
      </Row>

      <Row className="justify-content-center mt-4 mb-4">
          <Col xs={12} md={8}>
            <center>
          <Button href="https://creators.substack.com/welcome" target="_blank" variant="warning" size="lg" block>
            Subscribe
          </Button>
          </center>
          </Col>
      </Row>

      <Row className="justify-content-center mt-4">
          <Col xs={12} md={8}>
          <center>
          <a href="https://www.producthunt.com/posts/creators-calculator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-creators-calculator" target="_blank" rel="noopener noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=232737&theme=dark" alt="Creators Calculator - How much money do you want to earn monthly? 💵 | Product Hunt Embed" style={{width: "250px", height: "54px"}} width="250px" height="54px" /></a>
          </center>
          </Col>
      </Row>

      </Container>

  
      <Footer />
      </>
  );
}

export default App;
