import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import '../css/ModalCase.css'
export default function ModalCase({setIsOpen, film} ){
    const {theme} = useContext(ThemeContext)
    
    return (
        <div className='modal-show'
            onClick={ () => {setIsOpen(false)} }>
                <div id='modal1' className='modal' style={{ display: 'block', backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}>
                <div className="modal-content">
                    <h5>Trailer  <span style={{ fontStyle: 'italic', fontWeight: '500' }}>{film.title}</span>  </h5>
                     <p>
                        <iframe width="100%" height="100%" src={film.trailer} title={film.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </p>
                </div>
                    
                <span className='modal-close'>&#10006;</span>

                        
             </div>
        </div>
  )
}
