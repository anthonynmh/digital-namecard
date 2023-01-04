import React from "react";

export default function Information() {
    return (
        <main className="mainContent">
            <div className="info--main">
                <p className="name">Laura Smith</p>
                <p className="role">Frontend Developer</p>
                <p className="website">laurasmith.com</p>
            </div>
            <div className="email">
                <img src="../images/Email-icon.png" />
                <p>Email</p>
            </div>
            <div className="info--extra">
                <div className="about">
                    <h3>About</h3>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className="interests">
                    <h3>Interests</h3>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
        </main>
    )
}