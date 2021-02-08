import { render } from '@testing-library/react';
import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, images, rating}){
  return <div>
    <h1>I LIKE {name}</h1>
    <h3>{rating} / 5.0</h3>
    <img src={images} />
  </div> 
  
}

const mcdonalds = [
  {
    id: 1,
    name : "빅맥",
    images : "http://www.startuptoday.co.kr/news/photo/202007/49365_28228_4247.jpg",
    rating : 1.2
  },
  {
    id: 2,
    name : "상하이스파이시",
    images : "http://www.wikileaks-kr.org/news/photo/202004/83852_63003_3223.jpg",
    rating : 3.2
  },
  {
    id: 3,
    name : "쿼터파운드",
    images : "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile9.uf.tistory.com%2Fimage%2F194158114CD01B5508FED0",
    rating : 4.2
  }
]

Food.propTypes  = {
  name : PropTypes.string.isRequired,
  images : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

function renderFood(menu){
  console.log(menu)
  return <Food key={menu.id} name={menu.name} images={menu.images} /> 
}

function App() {
  return (
    <div >
      {mcdonalds.map(menu => (
        <Food key={menu.id} name={menu.name} images={menu.images} rating={menu.rating}/> 
      ))}
    </div>
    
  );
}


export default App;
