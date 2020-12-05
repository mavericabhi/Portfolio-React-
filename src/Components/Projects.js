import React from 'react'
import projectstyle from './projects.module.css'

const Projects = () => {
    return (
        <div className={projectstyle.container}>
            <h1 className={projectstyle.heading}>
                My Recent Projects Are 
            </h1>
            <ul className={projectstyle.ul}>
                <li className={projectstyle.li}>
                    Nipple pressing
                </li>
                <li className={projectstyle.li}>
                    Chut ka pani nikalna
                </li>
                <li className={projectstyle.li}> 
                    Gand m lund daal kr chut geeli krna
                </li>
            </ul>
        </div>
    )
}

export default Projects
