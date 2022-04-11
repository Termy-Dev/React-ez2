import React, {FC} from "react";
import {Characters} from "../model/interface"

type CardProps = {
      charachter: Characters, 
      handleFavorite: (char: Characters) => void,
      favorite: boolean;
}

 const Card: FC<CardProps>  = (props: CardProps) => {

    const {charachter, handleFavorite, favorite} = props;

    return(
    <div className='card'>
            <button onClick={() => handleFavorite(charachter)}> 
                  {favorite ? "Remove Favorite" : "Add Favorite"}
            </button>
            <h3>{charachter.name}</h3>
            <img src={charachter.image} alt={charachter.name} />
    </div>
    )
    
}

export {Card}