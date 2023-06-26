import React, { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext';
import { Link, useNavigate } from 'react-router-dom';
import { CardTitle, Row , Col , Card , Container } from 'react-materialize';
import { Icon } from 'react-materialize';
import '../css/FilmsPresentation.css';import { LargeScreenContext } from './LargeScreenContext';


export default function FilmsPresentation({Films}) {
const [film,setFilms] = useState([]);
const navigate = useNavigate();
const {theme , toggle , dark} = useContext(ThemeContext)
    return (

            <Row style={{margin:"0" ,backgroundColor : theme.darkbackGroundColor}}>
                {Films.map((film) => (
                     <Col s={12} m={6} l={3} key={film.id}>
                         <Card className="filmcard"  
                         style={{ padding:"0px",backgroundColor : theme.backdropBackgroundColor, color: theme.contentTextColor}}
                             header={<CardTitle image={film.img} reveal waves="light"/>}
                             closeIcon={<Icon style={{backgroundColor : theme.backdropBackgroundColor, color: theme.contentTextColor}}>close</Icon>}                         
                             reveal={  

                             <div>
                                <p>Name:{film.title}</p>
                                <p>Author:{film.author}</p>
                                <p>Sroce:{film.Score_IMDb}</p>
                                <p>Info:<br/>{film.info}</p>
                             </div>
                            }
                             revealIcon={<Icon>more_vert</Icon>}
                             title={<h5>{film.title}</h5>}
                         
                         
                         >
                               
                                 {/* <CardTitle  className="cardsimage" image={film.img}></CardTitle>  */}
                                
                                  {/* <h5 className="filmtitle">{film.title}</h5>    */}
                                 <p className='year' style={{color: theme.focusedTextColor }} > Date : {film.year} </p>  
                                 <p className='nation' style={{color: theme.focusedTextColor }}>Nation: {film.Country}</p>
                                 
                            <p className = "btn-more-detail">                          
                               <button onClick={() => navigate(`/detail/${film.id}`) }
                              style={{ color: theme.focusedTextColor }} >
                                   Detail
                                </button>
                            </p>       
                         </Card>
                     </Col>
                ))}
         
            </Row>
        
  );
}
