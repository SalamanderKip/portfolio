import React, { useState } from "react";
import '../../assets/contact.scss'
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
            <div className="container">
                <form action="#" onSubmit={handleSubmit}>

                    <input type="text" id="fname" name="Voornaam" placeholder="Jou naam"
                        onChange={(e) => setVoornaam(e.target.value)} />

                    <input type="text" id="lname" name="Achternaam" placeholder="Jou achternaam"
                        onChange={(e) => setAchternaam(e.target.value)} />

                    <input type="text" id="lname" name="Email" placeholder="Jou email"
                        onChange={(e) => setEmail(e.target.value)} />

                    <textarea id="subject" name="messages" placeholder="Typ hier je bericht" style={{ height: "200px" }}
                        onChange={(e) => setMessage(e.target.value)} />

                    <input className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' type="submit" value={status} />
                </form>
            </div>
        </div>
    )
}
export default ContactScreen
