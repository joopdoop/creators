import React from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import { Jumbotron, Col, Row } from 'react-bootstrap';


const Input = ({ money, setMoney }) => {

    return (
        
            <Jumbotron style={{padding: '1rem 1rem'}}>
                <Row>
                    <Col xs={5} sm={4} md={3}>
                        <h2 className="text-center">${new Intl.NumberFormat().format(money)}</h2>
                    </Col>
            
                    <Col xs={7} sm={8} md={9}>
                    <RangeSlider
                    value={money}
                    onChange={e => setMoney(e.target.value)}
                    min={1}
                    max={12000}
                    />
                    </Col>
                </Row>
               
            </Jumbotron>
        
    );
}
 
export default Input;