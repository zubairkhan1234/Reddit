
import './login.css'


function Login() {
    return (
        <div className="main">
            <div className="App_login_form">
                <div className="App_login_image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1YFVgS6_gqIz3MkLNBgcNhi4_gGs23EYg-Q&usqp=CAU" />
                </div>
                <form className="from"  >
                    <h2>Login Form</h2>
                    <label>Email : <br />
                        <input type="text" placeholder="UserName" />
                    </label><br />
                    <label>Password : <br />
                        <input type="Password" placeholder="Password" />
                    </label> <br />

                    <button className="log_form_button">Login</button>
                </form>
            </div>
        </div>
    )
}


export default Login;