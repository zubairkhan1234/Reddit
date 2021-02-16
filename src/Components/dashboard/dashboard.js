import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './dashboard.css'

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

                <div className="App_all_posts">
                    {state.map((posts, index) => {
                        return (
                            // <li key={index}>{posts.title}</li>
                            <div className="App_posts" key={index}>
                                <div className="post_child">
                                    <div className="post_left">
                                        <p><b>{posts.score}</b></p>
                                    </div>
                                    <div className="post_right">
                                        <p><span><a href={posts.url}>{posts.author}</a> </span> <br /> <span><a href={posts.url}>{posts.title}</a> </span></p>
                                        <div>{posts.selftext}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )

}

export default Dashboard;