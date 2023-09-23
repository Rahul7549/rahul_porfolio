import './ProjectCardStyles.css'
import projectCardData from '../../assets/ProjectData'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProjectCard() {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Project</h1>
        <div className='project-container'>
            {
                projectCardData.map((value,ind)=>{
                    return (
                        <div key={value.view} className='project-card'>
                        <div className='project-card-in'>
                        <img src={value.imgsrc} alt='projectImg'/>
                        <h2 className='project-title'>{value.title}</h2>
                        <div className='project-detail'>
                            <p>{value.about}</p>
                            <div className='pro-btns'>
                                <NavLink className='btn' to={value.view}>View</NavLink>
                                <NavLink className='btn' to={value.source}>Source</NavLink>

                            </div>
                        </div>
                        </div>
                        </div>
                    )
                })
            }
        

            {/* <div className='project-card'>
                <img src={proj1} alt='projectImg'/>
                <h2 className='project-title'>Title</h2>
                <div className='project-detail'>
                    <p>this is text</p>
                    <div className='pro-btns'>
                        <NavLink className='btn' to='url.com'>View</NavLink>
                        <NavLink className='btn' to='url.com'>Source</NavLink>

                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}
