import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Player({el}) {
   const{name,imageURL,jurseyNumber,nationality}=el
  return (
    <Card style={{ width: '18rem' }}>
    <img  src={imageURL} style={{width:"200px",height:"200px"}} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
       {jurseyNumber}
      </Card.Text>
      <Button variant="primary">{nationality}</Button>
    </Card.Body>
  </Card>
  )
}
Player.defaultProps={
    name:"imen",
   
}

export default Player
