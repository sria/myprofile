import React from 'react'

export default function Info(){
    return (
        <header>
            <img src="../images/myprofile1.jpg"/>
            <div className="name-buttons">
                <p className="full-name">Srivalli Akkavajhula</p>
                <p className="role-name">IT Developer</p>
                <p className="web-site">Sria website</p>
                <section className="buttons-sec">
                    <button>✉ Email</button>
                    <button id="btn-linkedin">🔥Linkedin</button>
                </section>
              
            </div>
        </header>
    )
}