import React, {useEffect, useState} from "react";

import Tmdb from "./Tmdb";

import MovieRow from './components/MovieRow'
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

import './App.css'

// eslint-disable-next-line
export default () => {

  //States
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      // Lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Filme destaque
      let originals = list.filter(i => i.slug === 'originals')
      let random = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[random]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')

      setFeaturedData(chosenInfo);
    }

    loadAll()
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10 ) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (

    <div className="page">

      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item = {featuredData}/>
      }

      <section className="lists">

        {movieList.map((item, key)=>(
          // title e items são props da função importada em MovieRow.js
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}

      </section>
        
      <footer className="footer">

        Clone produzido por Filipe Henrique apenas para fins educativos!!!<br/>
        Direitos de Imagem: Netflix<br/>
        Database: <a href="themoviedb.org">Tmdb</a>

      </footer>
    </div>
  );
}

