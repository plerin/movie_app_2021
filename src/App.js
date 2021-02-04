import React from 'react';
import PropTypes from "prop-types";

const outback_menu = [
  {
    id :1,
    name : "스테이크",
    image: "https://www.hotelrestaurant.co.kr/data/photos/20150418/art_1430373255.jpg",
    rating : 4
  },
  {
    id :2,
    name : "파스타",
    image: "https://i.pinimg.com/564x/3e/8c/30/3e8c30a47411453cbb57301025482538.jpg",
    rating : 3.7
  },
  {
    id :3,
    name : "샐러드",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/09/a6/27/0e/caption.jpg",
    rating : 1.3
  },
  {
    id :4,
    name : "음료",
    image: "https://mblogthumb-phinf.pstatic.net/MjAxODA3MjlfMTk3/MDAxNTMyODQ3NzMxMDU0._pdWipiZ8Tl7csfbApBw0zDcjqMw9ki0u9FdywBDBBkg.Gi7Pui__HJiF9mwDY6N4OHKyX5p3rlvYuzHMmNsYwvgg.JPEG.goodfortunes/%EC%95%84%EC%9B%83%EB%B0%B1IMG_6488.JPG?type=w800",
    rating : 4.1
  }
]

function Food({ name, image, rating }){
  return <div>
      <h1>I LIKE {name}</h1>
      <h3>{rating} / 5.0</h3>
      <img src={image} />
    </div>
  
}

function renderFood(menu){
  console.log(menu)

  return <Food key={menu.id} name={menu.name} image={menu.image} />
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div >
      {/* {outback_menu.map(menu => (
        <Food name={menu.name} image={menu.image} />
      ))} */}
      {/* {outback_menu.map(renderFood)} */}
      {outback_menu.map(menu => (
        <Food key={menu.id} name={menu.name} image={menu.image} rating={menu.rating} />
      ))}
    </div>
    
  );
}

export default App;
