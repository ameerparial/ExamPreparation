import { useState } from "react";


const UpdateComponent = (OrginalComponent, incrementBy)=>{
    const NewComponent = (props)=>{
        const [count, setCount] = useState(0);
        console.log(props);

        function handleIncrement(){
            setCount(count+incrementBy);
        }

        return(
            <>
                <OrginalComponent count={count} handleIncrement={handleIncrement} {...props}/>
            </>
        )

    }

    return NewComponent;
}

export default UpdateComponent;