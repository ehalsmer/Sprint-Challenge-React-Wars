import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Header, Input, Item, Divider, Card } from "semantic-ui-react";
import PersonCard from './PersonCard';
import {Grid} from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import './App.css';



const App = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState([]);

useEffect(()=>{
  // axios.get('https://swapi.co/api/people/?page=1')
  axios.get('https://henry-mock-swapi.herokuapp.com/api')
  .then(data=>{
    const peopleArray = data.data.results;
  //   console.log(peopleArray);
    setPeople(peopleArray);
    // peopleArray.forEach((person)=>{
    //   console.log(person.name)
    // })
  // return peopleArray;
  })
}, [])

  return (
    <Container style={{backgroundImage: "url('./sw-bg.jpg')"}} className="App">
      <h1 className="Header">React Wars</h1>
      <Card.Group centered itemsPerRow={3}>
      {people.map((person, index)=>{
        
        return <PersonCard key = {person.name} name={person.name} birthYear={person.birth_year} vehicles={person.vehicles} eyeColor={person.eye_color} hairColor={person.hair_color} imgSrc={`./img/${index}.jpg`}></PersonCard>
      })}
      </Card.Group>
    </Container>
  );
}

export default App;
