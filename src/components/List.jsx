import {testArray} from '../data.js'
import {shoppingList} from "../data.js";

import {useState} from "react";
const List = () => {
    const [items, setItem] = useState(testArray);
    const [items2, setItem2] = useState(shoppingList);
    console.log(shoppingList)
    const addItem = (id) =>{
        console.log(id)

    }



    return(
        <>
            {items2.map((item2)=>{
                const [id, name] = item2
                return (
                    <>
                        <div key={id}>
                            <h4>{name}</h4>
                        </div>
                    </>
                )

            })}



            {items.map((item)=>{
                const {id , name} = item
                return(
                    <h1 key={id}>{name}</h1>
                )
            })}
        </>
    )
}

export default List;