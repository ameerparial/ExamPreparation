import { useContext } from "react";
import { StdConsumer, StdContext, StdProvider } from "./StudentContext";
import { TeacherContext } from "./TeacherContext";


export default function C(){
    const stdValue = useContext(StdContext);
    const teacherValue = useContext(TeacherContext);
    console.log(stdValue);
    console.log(teacherValue);
    return(
        <>
            {/* <h1>Hi</h1>
            <StdConsumer>
                {value=>(<h1>{value}</h1>)}
            </StdConsumer> */}
            
            {/* <h1>C Component</h1> 
            <StdConsumer>
                {value=>(<div>
                    <h3>Hello, {value}</h3>
                    <TeacherConsumer>
                        {value=><h6>Hello, {value.name} age:{value.age}</h6>}
                    </TeacherConsumer>
                </div>)}
            </StdConsumer> */}

            <h1>C Component</h1>

        </>
    )
}

