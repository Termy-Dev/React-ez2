import React, { useEffect, useState } from 'react';
import './App.css';
import {Characters, RootObject} from "./model/interface"
import {Card} from "./componets/Card"


function App() {

  const [characters, setCharacters] = useState([] as Characters[]);
  const [page, setPage] = useState(1);
  const [arrayFavorite, setArrayFavorite] = useState([] as Characters[])

  const loadData = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const {results} = await response.json() as RootObject;
    setCharacters(results)
  }

  useEffect(() => {
    loadData()
    console.log(page)
  },[page] )

  const nextPage = () => {
    setPage(page + 1);
  }

  const previousPage = () => {
    if(page > 1 ){
      setPage(page - 1 );
    }
  }


  const addFavorite = (char: Characters) =>{
    const indexChar = arrayFavorite.indexOf(char)

    indexChar === -1
      ? arrayFavorite.push(char)
      : arrayFavorite.splice(indexChar,1) 
  
    setArrayFavorite([...arrayFavorite]);
  }


    return (
      <>
        <div className='btn' >
          <button onClick={previousPage}>Indietro </button>
          <button  onClick={nextPage}> Avanti</button>
        </div>
          
        <h2>You add to favorite {arrayFavorite.length} characters</h2>

        {characters.map(item => 
          <Card 
            charachter={item} 
            handleFavorite={addFavorite} 
            favorite={arrayFavorite.includes(item)}
          />)}
      
      </>
     
    )

}

export default App;
