import SingleItem from "./SingleItem.jsx";

// grabbing items array  and removeItem function from App.jsx
const Items = ({items}) =>{
    return(
    <div className="items">
        {/* Iterating over items array (contains item objects) */}
        {items.map((item)=>{
            return <SingleItem key={item.id}/*iterator*/ item={item}/*Passes Item object*//>
        })}
    </div>
    )
}
export default Items