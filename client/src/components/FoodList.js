import React from "react";
import FoodToAdd from "./FoodToAdd";

const FoodList = (props)=>{
    const {foods} = props;
    return(
        <div>
            {foods.map(food=>{
                return <FoodToAdd key={foods.indexOf(food)} 
                name={food} 
                />
            })}
        </div>
    )
}

export default FoodList;