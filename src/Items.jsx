import SingleItem from "./SingleItem.jsx";

// grabbing items array  and removeItem function from App.jsx
const Items = (items) =>{
    // console.log(items)
    return<div className="items">

        {/* THIS IS THE PROBLEM*/}
        {/* trying to iterate over items array but it messes up the whole application*/}
        {items.map((item)=>{
            const [id , name] = item
            return <SingleItem key={id}/*iterator*/ itemName={name}/*Passes name(userInput)*//>
        })}
    </div>

}
export default Items