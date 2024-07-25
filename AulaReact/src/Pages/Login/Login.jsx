import './Login.css'

function Login() {
    return(
        <>
        <body>
            <form className="Loginform">
                <div>
                    <div className='LoginTitle'>
                        <p>LOGIN</p>
                    </div>
                    <p>Login</p>
                    <input type="text" />
                    <p>Senha</p>
                    <input type="text" />
                    <div>
                        <button className='buttonLogin'>Entrar</button>
                    </div>
                </div>
            </form>   
        </body>
        </>
    )
}

export default Login;