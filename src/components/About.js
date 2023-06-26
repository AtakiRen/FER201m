import React, { useContext } from 'react';
import '../css/About.css'
import { ThemeContext } from './ThemeContext';
import { Row, Collapsible  , CollapsibleItem , Icon , Slider , Slide , Caption} from 'react-materialize'
export default function About() {
  const {theme , toggle , dark} = useContext(ThemeContext)
  return (
    <Row>
<div className="about" >
    <Collapsible accordion>
      <CollapsibleItem  style={{backgroundColor : theme.darkbackGroundColor , color: theme.aboutColor}}
        expanded={false}    
        header="OUR WEBSITE?"
        icon={<Icon>groups</Icon>}
        node="div"
      ><div style={{backgroundColor : theme.darkbackGroundColor , color: theme.contentTextColor}}>
         Our website "Anime Love" is a pretty girl of yours that every one can watch together .
        <br/>Our website contain: 
        <ul >
          <li><Icon left>local_movies</Icon>There are more than 10000000 movies and anime films </li>
          <li><Icon left>hd</Icon>High quaility of all flims in 1080p or 4K</li>
          <li><Icon left>group</Icon>A comunity with more than 1 milion members in around the world </li>
          <li><Icon left>tablet_android</Icon>Compatible on all mobile devices and laptops </li>
          <li><Icon left>thumb_up</Icon>loved by millions of people around the world</li>

        </ul>
      </div> 
     


      </CollapsibleItem>
      <CollapsibleItem style={{backgroundColor : theme.darkbackGroundColor , color: theme.aboutColor}}
        expanded={false}
        header="Movie"
        icon={<Icon>movie</Icon>}
        node="div"
      ><div style={{backgroundColor : theme.darkbackGroundColor , color: theme.contentTextColor}}>
More than 10 milion movies in play list and every one can Enjoy
       

      </div>
      </CollapsibleItem>
      <CollapsibleItem style={{backgroundColor : theme.darkbackGroundColor , color: theme.aboutColor}}
        expanded={false}
        header="Our Mission"
        icon={<Icon>flag</Icon>}
        node="div"
      ><div style={{backgroundColor : theme.darkbackGroundColor , color: theme.contentTextColor}}>
                  We are committed to providing the best entertainment experience to our customers. We are passionate about the movies and shows we offer and we are dedicated to providing a superior customer experience.


      </div>
      </CollapsibleItem>
      <CollapsibleItem style={{backgroundColor : theme.darkbackGroundColor , color: theme.aboutColor}}
         expanded={true}
        header="Film  Studios Anime in Japan "
        icon={<Icon>apartment</Icon>}
        node="div"
      >
          <Slider>
             <Slide image={<img className='opa' alt="" src="assets/images/Kyotoanimation.jpg"/>}>
                  <Caption placement="left">
                      <h3>
                          Kyoto Animation Studios
                      </h3>
                      <h5 className="light grey-text text-lighten-3">
                      Starting from a modest beginning in 1981, Kyoto Animation was built by the hands of the couple Hideaki and Yoko Hatta and has now become one of the most popular animation production studios.
                      </h5>
                  </Caption>
              </Slide>
              <Slide image={<img className='opa' alt="" src="assets/images/ufortableStudio.jpg"/>}>
                  <Caption placement="left">
                      <h3>
                          Ufortable Studio
                      </h3>
                      <h5 className="light grey-text text-lighten-3">
                      Some of ufotable's famous works include Fate/Zero, Fate/stay night: Unlimited Blade Works and Kimetsu no Yaiba.
                      </h5>
                  </Caption>
              </Slide>
              <Slide image={<img className='opa' alt="" src="assets/images/ToeiStudio.jpg"/>}>
                  <Caption placement="left">
                      <h3>
                          Toei Studio
                      </h3>
                      <h5 className="light grey-text text-lighten-3">
                          Paramount Pictures Corporation is an American film studio based in Hollywood, California.
                      </h5>
                  </Caption>
              </Slide>
              <Slide image={<img className='opa' alt="" src="assets/images/studioZYourname.jpg"/>}>
                  <Caption placement="left">
                      <h3>
                          Anime Studio
                      </h3>
                      <h5 className="light grey-text text-lighten-3">
                          Universal Pictures is an American film studio owned by Comcast through the Universal Filmed Entertainment Group division of its wholly owned subsidiary NBCUniversal.
                      </h5>
                  </Caption>
              </Slide>
              <Slide image={<img alt="" className='opa' src="assets/images/StudioGhibli.jpg"/>}>
                  <Caption placement="left">
                      <h3>
                          Ghibli Studio
                      </h3>
                      <h5 className="light grey-text text-lighten-3">
                          Warner Bros. Pictures is an American film production and distribution studio, a division of Warner Bros. Entertainment.
                      </h5>
                  </Caption>
              </Slide>
              <Slide image={<img alt="" className='opa' src="assets/images/StudioMappa.jpg"/>}>
                  <Caption placement="left">
                      <h3>
                          Mappa Studio
                      </h3>
                      <h5 className="light grey-text text-lighten-3">
                          Warner Bros. Pictures is an American film production and distribution studio, a division of Warner Bros. Entertainment.
                      </h5>
                  </Caption>
              </Slide>
              
          </Slider>
      </CollapsibleItem>
    </Collapsible>
    </div>
    </Row>
    
    
  )
}
