const SingleItem = ({item, removeItem}) =>{
    const {name, id} = item;
    return (
        <div >
            <p className="single-item"><span className="red-line"></span>{name}</p>
            <button onClick={()=>removeItem(id)}>Delete</button>
            <div className="blue-line"></div>
        </div>
    )
}
export default SingleItem;