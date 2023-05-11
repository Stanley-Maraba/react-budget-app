import React,{useState} from "react";
import Login from "./Login";

const ManageLoginData = () => {
    const [loginDetails,setLoginDetails] = useState({
        username : "",
        password : "",
    });

    const onLoginChange = (newState) => {
        setLoginDetails({ ...loginDetails, ...newState });
    }

    return (
            <Login login={loginDetails} onLoginChange={onLoginChange} />
    )
}
export default ManageLoginData;