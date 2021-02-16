import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Dashboard() {

const [state, setstate] = useState([])
// console.log("ljfsldkjflaskjdlajsf" + state)
useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
    .then(res => {
        console.log(res)
        const AllPost = res.data.data.children
        .map(Obj => Obj.data)

        setstate(AllPost)
    })
    
}, [])

    return (
        <>
            <div>

                    <div>
                        {state.map((posts,  index) =>{
                            return(
                                // <li key={index}>{posts.title}</li>
                                <div key={index}>
                                <p><span><a href={posts.url}>{posts.author}</a> </span> <br /> <span><a href={posts.url}>{posts.title}</a> </span></p>
                                <h2><b>{posts.score}</b></h2>
                                {/* <h2><b>{posts.}</b></h2> */}
                                <div>{posts.selftext}</div>
                                </div>
                            )
                        })}
                    </div>

            </div>
        </>
    )

}

export default Dashboard;