const Input = () => {


    // updates and logs value after every change
    const handleFormInput = (e) => {

        console.log(e.target.value)
    }
    const handleSubmit =(e)=>{
        // Handles data ourselves
        e.preventDefault()
        // Sanity check
        console.log('submitted ' + "\"" + e.target.item.value + "\"")

        // Clears the searchbar
        e.target.item.value = ''
    }

    return (
        <>
            <div className='nav-buffer'></div>
                <form className='input-container' onSubmit={handleSubmit}>
                    <input type='text' name='item' onChange={handleFormInput} placeholder="Bananas"></input>
                    <button type="submit">ADD</button>
                </form>
        </>
    )
}
export default Input