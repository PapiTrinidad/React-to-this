    import './Login.css'

        // Same goes for this css file and this function

    function Login() {
        return( 
            <div className="border">

                <h3>Login</h3>

        <form >
            <div>
            <label for="username" id='username'>
                Username
            </label>
            <input type="text"></input>
            </div>

            <br></br>

            <div>
            <label for="password" id='password'>
                Password
            </label>
            <input type="password"></input>
            </div>

                <br></br>

            <button type="submit">Login</button>
        </form>

        <br></br>

            </div>
            

        )
    };

    export default Login