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

  const imageArray = ['http://img3.wikia.nocookie.net/__cb20100714163116/playhouse/images/thumb/4/45/Luke-Skywalker.jpg/180px-Luke-Skywalker.jpg', 'http://vignette3.wikia.nocookie.net/p__/images/6/68/220px-C3PO.jpg/revision/latest?cb=20120122165220&path-prefix=protagonist', 'https://pbs.twimg.com/profile_images/682669284271722497/gc4rUuyL.jpg', 'https://pbs.twimg.com/profile_images/3103894633/e0d179fc5739a20308331b432e4f3a51_400x400.jpeg', 'https://vafloc02.s3.amazonaws.com/isyn/images/f057/img-2009057-f.jpg', 'https://lumiere-a.akamaihd.net/v1/images/databank_owenlars_01_169_effce0f8.jpeg?region=230%2C0%2C878%2C878&width=320', 'https://i.pinimg.com/564x/f5/b8/ca/f5b8ca268a10a6d32c8e27631f69800f.jpg', 'https://vignette.wikia.nocookie.net/moviedatabase/images/9/9b/R5-D4_001.jpg/revision/latest?cb=20141007184734', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Biggsdarklighter.jpg/220px-Biggsdarklighter.jpg', 'https://pbs.twimg.com/profile_images/715970083432968192/gXiw8lys_400x400.jpg']

  return (
    <Container style={{backgroundImage: "url('./sw-bg.jpg')"}} className="App">
      <h1 className="Header">React Wars</h1>
      <Card.Group centered itemsPerRow={3}>
      {people.map((person, index)=>{
        
        return <PersonCard key = {person.name} name={person.name} birthYear={person.birth_year} vehicles={person.vehicles} eyeColor={person.eye_color} hairColor={person.hair_color} imgSrc={`${imageArray[index]}`}></PersonCard>
      })}
      </Card.Group>
    </Container>
  );
}

export default App;
