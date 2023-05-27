import { useState } from "react"

export default function Form(){
    const [data, setData] = useState({firstname:'', email:''});

    function onChange(e){
        e.preventDefault();
        const key= e.target.name;
        const value = e.target.value;
        setData({...data, [key]:value});
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(data);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={data.firstname} name="firstname" onChange={onChange} placeholder="Firstname" required/>
                <input type="text" value={data.email} name="email" onChange={onChange} placeholder="Your email" required/>
                <input type="submit"/>
            </form>
        </>
    )
}