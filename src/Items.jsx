import SingleItem from "./SingleItem.jsx";

// grabbing items array  and removeItem function from App.jsx
const Items = ({items}) =>{
    // console.log(items)
    return(
    <div className="items">

        {/* THIS IS THE PROBLEM*/}
        {/* trying to iterate over items array but it messes up the whole application*/}
        {items.map((item)=>{
            console.log({item})
            return <SingleItem key={item.id}/*iterator*/ item={item}/*Passes Item object*//>
        })}
    </div>
    )

}
export default Items