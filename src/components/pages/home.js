import React from 'react';
import { Card } from 'react-bootstrap';

export default function Home() {
    return (
      <div>
        <Card className='mx-auto mb-3 bg-primary text-white h-100 d-flex align-items-center justify-content-center col-6' style={{color: "#0c3f63" }}>
          <Card.Img src='' /> 
          <Card.Body>
            <Card.Title className='text-center'>Home Page</Card.Title>
            <Card.Text>Welcome to Patrick Dismore's portfolio! Please select from the above options to view my projects or contact me!</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }