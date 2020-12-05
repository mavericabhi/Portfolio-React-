import React from 'react'
import styles from './header.module.css';




const Header = () => {
    return (
        <div>
            <div className={styles.container}>
                <ul className={styles.ul}>
                    <li className={styles.li}>Home</li>
                    <li className={styles.li}>Contact</li>
                    <li className={styles.li}> About Me</li>
                    <li className={styles.li}>Resume</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
