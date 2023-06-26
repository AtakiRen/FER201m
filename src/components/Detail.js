import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ThemeContext } from './ThemeContext';
import { Films } from '../shared/ListOfFilms';
import { Collection,Container , Card , CardTitle , Section , Button, Icon ,  } from 'react-materialize';
import '../css/FilmDetails.css'
import { LargeScreenContext } from './LargeScreenContext';
import ModalCase from './ModalCase';



export default function Detail() {
    const userName = useParams();
    const {theme}  = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false)
    const largeScreen = useContext(LargeScreenContext)
    const Film = Films.find((obj)  => {
       return obj.id == userName.id;
    });
        return (
            <div style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.contentTextColor }}>
   <Container id='film-details' >
   <Section>
         <Card
         className="film-box"
         style={{ backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}
         horizontal={largeScreen ? true : false}
         header={<CardTitle image={`../${Film.img}`} className="poster hoverable" reveal></CardTitle>}
         >
               <div
               className="info"
               style={{ backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}
               
               >
                  {/** Title */}
                  <Section>
                         <div className='title'>
                            <h3>{Film.title}</h3>
                         </div>
                  </Section>
                   <p>IMDb: {Film.Score_IMDb}</p>
                   <p>Date: {Film.year}</p>
                   <p>Nation:  {Film.Country}</p>        
                   <p>Author: {Film.author}</p>
                   <p>Type: {Film.Type}</p>
                   <p>Studio :{Film.manufacturer}</p>
                  <p>Duration: {Film.duration}</p>
                 
                 <Section   style={{ backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}
                 >
                    
                  <p className="sypnosis" style={{ textAlign: 'left' }}>Information <br/>{Film.info}</p>

                 </Section>
                
                {/** video */}
                  <Section>
                      <Button 
                      node="button"
                      style={{
                        backgroundColor: theme.focusedBackgroundColor,
                        color: theme.focusedTextColor,
                        display: "inline-flex",
                        alignItems: "center"
                    }}
                    waves="light"
                    onClick={() => { setIsOpen(true) }}
                      >
                   Watch trailer <Icon>play_circle_filled</Icon>

                      </Button>
                  </Section>

   



               </div>

         </Card>
    </Section>
    {isOpen && <ModalCase setIsOpen={setIsOpen} film={Film} />}

   </Container>
            
            
            </div>
    );

}
