import React from 'react'
import './Signup.css'

function Signup({pokemon}) {

    const dragonite = pokemon.filter(item => {
        if(item.name == 'dragonite') {
            return item
        }
    })

    console.log(dragonite);

    return (
        <div className="signup-page">
            <div className="account-div">
                <div className="signup-div">
                <h1>SIGN UP</h1>
                <p>Create your new account.</p>
                <hr />
                <form action="/signup" method="POST" className="login-form">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="Submit" className="btn-login">Sign Up</button>
                </form>
                </div>
                <div className="signup-div">
                <h1>LOG IN</h1>
                <p>Enter your credentials.</p>
                <hr />
                <form action="/login" method="POST" className="login-form">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="Submit" className="btn-login">Log In</button>
                </form>
           </div>
           </div>
           
           <img src={dragonite[0].sprites.other.dream_world.front_default} alt="" />
        </div>
    )
}

export default Signup
