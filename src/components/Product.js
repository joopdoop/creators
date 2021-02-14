import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({product, money}) => {

    const min = new Intl.NumberFormat().format((product.min_metric * money).toFixed(0));
    const max = new Intl.NumberFormat().format((product.max_metric * money).toFixed(0));

    return ( 
        
        <a style={{textDecoration:"none"}} href={product.link} target="_blank" rel="noopener noreferrer">
        <Card
            //bg={product.name}
            text={product.text_color === 'light' ? 'white' : 'dark'}
            style={{ width: '18rem' }}
            className="mb-4"
            style={{backgroundColor: product.background}}
        >
            <Card.Header>
               
                    <Image src={product.logo} height="30 px" className="mr-2" />{' '}{product.name}
                    
            </Card.Header>
            <Card.Body>
            <Card.Title><b>{min} - {max}</b> {product.metric} </Card.Title>
            <Card.Text>
                {product.text}
            </Card.Text>
            </Card.Body>
        </Card>
        </a>
    
    );
}
 
export default Product;