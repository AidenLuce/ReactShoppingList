import {shoppingList} from '../data.js'
import {useState} from "react";
const List = () => {
    const [items, setItem] = useState(shoppingList);
    return(
        <>
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