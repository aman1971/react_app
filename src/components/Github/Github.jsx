import React, { useEffect, useState } from "react";
// import { useLoaderData } from 'react-router-dom'

function GitHub() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/aman1971')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])

    return(
       <div className="text-center b-grey-600 m-4 p-4 rounded flex justify-center items-center">
        <img src={data.avatar_url} alt="git_profile" width={300} />
        Github followers: {data.followers}
       </div>
    )
}

export default GitHub

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     return response.json()
//     debugger
// }
