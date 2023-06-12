const SingleItem = ({item, removeItem}) =>{
    const {name, id} = item;
    return (
        <div >
            <p className="single-item">
                <span className="red-line"></span>
                {name}
                <button onClick={()=>removeItem(id)} className="btn">Delete</button>
            </p>
            <div className="blue-line"></div>
        </div>
    )
}
export default SingleItem;