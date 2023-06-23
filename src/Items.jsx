import SingleItem from "./SingleItem.jsx";

// grabbing items array  and removeItem function from App.jsx
const Items = ({items , removeItem, clearItems}) =>{
    return(
    <div className="items">
        {/* Iterating over items array (contains item objects) */}
        {items.map((item)=>{
            return <SingleItem key={item.id}/*iterator*/ item={item}/*Passes Item object*/ removeItem={removeItem}/>
        })}
        <button onClick={clearItems} className="btn clearItems"><h6>Clear Items</h6></button>
    </div>
    )
}
export default Items