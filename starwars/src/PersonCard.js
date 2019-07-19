import React, {useState, useEffect} from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";




const PersonCard = (props) => {
    return (
    <Card style={{background: 'rgba(76, 175, 80, 0.3)', width: '300px'}}>
        <Card.Content>
            {/* <Image src={props.imgSrc} wrapped ui={false}/> */}
            <Icon name='rocket' color='teal' size='large' style={{margin: '20px'}}/>
            <Card.Header>{props.name}</Card.Header>
            <Card.Description>{props.name} was born in {props.birthYear}, has {props.hairColor || 'no'} hair and {props.eyeColor} eyes.</Card.Description>
        </Card.Content>
    </Card>
)}

export default PersonCard;