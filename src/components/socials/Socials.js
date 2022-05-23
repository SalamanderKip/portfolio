import React from 'react'
import '../../assets/socials.scss'

export const Socials = () => {
    return (
        <div className='socials'>
            <ul className='socials-ul'>
                <li><a href='https://github.com/SalamanderKip/' title='GitHub' aria-label="GitHub" target="_blank" rel="noreferrer"><i className="fab fa-github socials-general"></i></a></li>
                <li><a href='https://www.linkedin.com/in/maarten-bos-7370b71bb/' title='Linkedin' aria-label="Linkedin" target="_blank" rel="noreferrer"><i className="fab fa-linkedin socials-general"></i></a></li>
                <li><a href='https://codepen.io/SalamanderKip/' title='Codepen' aria-label="Codepen" target="_blank" rel="noreferrer"><i className="fab fa-codepen socials-general"></i></a></li>
            </ul>
        </div>
    )
}
