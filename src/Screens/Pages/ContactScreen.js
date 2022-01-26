import React from 'react'
import '../../assets/contact.css'
// import '../../components/Navbar.js'

const ContactScreen = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <h1>Contact</h1>
            <div className="container">
                <form action="action_page.php">

                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label htmlFor="country">Country</label>
                    <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>


                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default ContactScreen
