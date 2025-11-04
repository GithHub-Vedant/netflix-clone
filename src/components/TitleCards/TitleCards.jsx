import React, { useRef, useEffect, useState } from 'react'
import './TitleCards.css'
// import cards_data from '../../assets/cards/Cards_data';
import {Link} from 'react-router-dom'

function TitleCards({ title, category }) {

  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWY0OWZhOGU1ZjQ2ZjgwNWFiNjZjZDBjMGMzMWFlZSIsIm5iZiI6MTc2MjI0MjgyNy4zMjgsInN1YiI6IjY5MDliMTBiYTkwZjczYWQxN2RiOGQ4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MX3pedvzdxgyAh06oPqALT7EivTMrfTnOAxO-zuUdw8'
    }
  };



  const handleWheel = (event) => {
    event.preventDefult();
    cardsRef.current.scrollLeft += event.deltaY
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])

  return (
    <div className='title-crads'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
