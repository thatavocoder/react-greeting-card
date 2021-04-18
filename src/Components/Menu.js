import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { feelingsData } from '../feelings.json'
import Content from './Content'

export default function Menu() {
    const [feeling, setFeeling] = useState(0)
    return (
        <div>
            <ul id="slide-out" className="sidenav" style={{ 'backgroundColor': 'rgba(255, 255, 255, 0.8)' }}>
                <li><Link to="/Home" className="waves-effect sidenav-close" onClick={() => { return setFeeling(0) }}><i className="em em-house"></i>Home</Link></li>
                <li><div className="divider black"></div></li>
                <li><a className="subheader black-text">How are you feeling today?</a></li>
                {feelingsData.map((data, key) => {
                    return (
                        <li><Link to='/Content' className="waves-effect sidenav-close" onClick={() => { return (setFeeling(data.id)) }}><i className={data.emoticon}></i>{data.text}</Link></li>
                    )
                })}
            </ul>
            <a data-target="slide-out" className="sidenav-trigger"><i className="material-icons" style={{ 'margin': '1vmin', 'fontSize': '7vmin', 'fontWeight':'bolder' }}>menu</i></a>
            {Content(feeling)}
        </div>
    )
}