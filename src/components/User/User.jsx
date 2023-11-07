import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userid} = useParams()
    return(
        <>
            <h1 className="bg-gray-600 text-center m-auto w-6/12 text-white text-3xl rounded p-4 ">User: {userid}</h1>
        </>
    )
}

export default User