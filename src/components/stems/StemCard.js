import React, { useContext } from "react"
import { Link } from "react-router-dom"
import ReactAudioPlayer from 'react-audio-player';
import { StemContext } from './StemProvider'


export const StemCard = ({ stem }) => {
    const {deleteStem} = useContext(StemContext)

    return (

        <div className="audio__card">
        
        <h3 className="audio__title">
            {stem.chosen ? "FEATURED - " : ""}   
            {stem.name}
        </h3>

        {stem.userId === parseInt(localStorage.getItem("app_user_id"))
            ?   <button onClick={evt =>{
                evt.preventDefault()
                deleteStem(stem.id)}
            }>delete</button>
            
            :   <div className="audio__username">
                    <Link to={`/profile/incomplete/${stem.userId}`}>
                        {stem.user.name}
                    </Link>
                </div>
        }

        <div className="audio__description">
            description: {stem.description}
        </div>

        <ReactAudioPlayer
            key={stem.id}
            className={`audio__player ${stem.chosen ? 'featured' : ''}`}
            src={stem.url}
            controls
            />

        </div>
    )
}