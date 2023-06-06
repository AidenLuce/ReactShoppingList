// import {items} from "../data.js"

const Input = () => {
    const handleSubmit =(e)=>{
        // Handles data ourselves
        e.preventDefault()

        let enteredItem = e.target.item.value
        // Checks to see if empty
        if (enteredItem === ''){
            alert("Invalid item")
        }else{
            // Sanity check
            console.log('submitted ' + "\"" + enteredItem + "\"")

            // attempt

            // const newItem={
            //     id: 1,
            //     name: enteredItem
            // }
            // console.log(newItem)

            // Clears the searchbar
            e.target.item.value = ''
        }
    }

    return (
        <>
            <div className='nav-buffer'></div>
                <form className='input-container' onSubmit={handleSubmit}>
                    <input type='text' name='item'  placeholder="Bananas"></input>
                    <button type="submit">ADD</button>
                </form>
        </>
    )
}
export default Input