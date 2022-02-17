import React, { useState } from "react";
import '../../assets/contact.css'
// import '../../components/Navbar.js'

const ContactScreen = () => {
    const [voornaam, setVoornaam] = useState('');
    const [achternaam, setAchternaam] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [status, setStatus] = useState('Verstuur');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Versturen...');
        let details = {
            voornaam: voornaam,
            achternaam: achternaam,
            email: email,
            bericht: message,
        }
        await fetch('https://bosmaarten.nl/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            },
            body: JSON.stringify(details),
        });
        setStatus('Verstuur');
    };

    return (
        <div>
            {/* <header>
                    <Navbar />
                </header> */}
            <h1>Contact</h1>
            <div className="container">
                <form action="#" onSubmit={handleSubmit}>

                    <label htmlFor="fname">Voornaam</label>
                    <input type="text" id="fname" name="Voornaam" placeholder="Jou naam"
                        onChange={(e) => setVoornaam(e.target.value)} />

                    <label htmlFor="lname">Achternaam</label>
                    <input type="text" id="lname" name="Achternaam" placeholder="Jou achternaam"
                        onChange={(e) => setAchternaam(e.target.value)} />

                    <label htmlFor="lname">Email</label>
                    <input type="text" id="lname" name="Email" placeholder="Jou email"
                        onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="subject">messages</label>
                    <textarea id="subject" name="messages" placeholder="Typ hier je bericht" style={{ height: "200px" }}
                        onChange={(e) => setMessage(e.target.value)} />

                    <input type="submit" value={status} />
                </form>
            </div>
        </div>
    )
}
export default ContactScreen
