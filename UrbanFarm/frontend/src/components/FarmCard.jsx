import React from 'react';
import Card from 'react-bootstrap/Card';

const FarmCard = ({ title, imageSrc, description}) => {
  const cardStyle = {
    width: '17rem',
    margin: '1rem', 
    backgroundColor: '#334B35',
    border: '0',

  };
  const textStyle = {
    color:'#ffff'
  }
  

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageSrc} alt={`${title} Image`} />
      <Card.Body classNama="border-0">
        <Card.Title>{title}</Card.Title>
        <Card.Text style={textStyle}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FarmCard;