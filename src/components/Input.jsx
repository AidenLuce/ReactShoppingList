import {shoppingList} from "../data.js"
// import List from "./List.jsx";
const Input = () => {

     // const shoppingList= []


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

            const newItem={
                id: shoppingList.length + 1,
                name: enteredItem
            }
            shoppingList.push(newItem)
            // console.log(newItem)

            console.log(shoppingList)
            // const {items, setItem} = useState(shoppingList);


            // Clears the searchbar
            e.target.item.value = ''
            return (
                <h2>{shoppingList}</h2>
            )

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