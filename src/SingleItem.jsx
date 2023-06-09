const SingleItem = ({item}) =>{
    return (
        <div >
            <p className="single-item"><span className="red-line"></span>{item.name}</p>
            <div className="blue-line"></div>
        </div>
    )
}
export default SingleItem;