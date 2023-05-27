export function UserGreeting({name}){
    return <h1>Welcome back, {name}</h1>
}
export function GuestGreeting(){
    return <h1>Please Sign up</h1>
}


export default function Greeting({isLoggedIn, name}){
    const element = isLoggedIn ? <UserGreeting name={name}/> : <GuestGreeting/>;
    return element;
}