import React,{useState} from "react";
import Login from "./Login";

function ManageLoginData () {
    const [login,setLogin] = useState({
        username : "",
        password : "",
    });

    function onLoginChange (event){
        const updateDetails = {...login, [event.target.name]: event.target.value};
        setLogin(updateDetails);
    }

    return (
            <Login login={login} onLoginChange={onLoginChange} />
    )
}
export default ManageLoginData;