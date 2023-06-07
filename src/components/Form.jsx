import {useState} from "react";

const Form = () =>{

    const [newItem, setNewItem] = useState('')

    const handleSubmit= (e) =>{
        e.preventDefault()
        console.log(newItem)
    }


    return(
        <>
            <div className='nav-buffer'></div>
            <form className='input-container' onSubmit={handleSubmit} onChange={(event)=>setNewItem(event.target.value)}>
                <input type='text' name='item' value={newItem}  placeholder="Bananas"></input>
                <button type="submit">ADD</button>
            </form>
            <section className='form-container'>
                <div className='form'>Form</div>
            </section>
        </>
    )
}
export default Form