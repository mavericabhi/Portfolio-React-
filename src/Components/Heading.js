import React from 'react'
import headingstyle from './heading.module.css'
import Button from './Button.js'

const Heading = () => {
    return (
        <div className={headingstyle.container}>
            <h1 className={headingstyle.heading}>Hey there!</h1>
            <h2 className={headingstyle.about}>My name is <span className={headingstyle.name}>Abhishek</span> and i am a full stack cock sucker, I can make you cum under 5 min.</h2>
        <Button />
        </div>
    )
}

export default Heading
