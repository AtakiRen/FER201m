import React, { useContext } from 'react';
import '../css/movie.css';
import { ThemeContext } from './ThemeContext';
import {Collapsible ,Icon , Slider , Caption , Slide, Container, CollapsibleItem , }from 'react-materialize';
import { Row } from 'react-materialize';
export default function Movie() {
  const {theme, dark , toogle } = useContext(ThemeContext)
  return (

<Collapsible accordion>
    <CollapsibleItem style={{backgroundColor : theme.darkbackGroundColor , color: theme.aboutColor}}
         expanded={true}
        header="New features and anime "
        icon={<Icon>apartment</Icon>}
        node="div"
    >
        <div>
      <Icon left style={{color:'red'}}>new_releases</Icon><h5 className='news' left>New features and anime</h5>
      </div>
      <Slider >
             <Slide image={<img className='opa' alt="" src="assets/images/peakpx.jpg"/>}>
                  <Caption placement="left">
                      <h3>
                          Suzume no Tojiamri
                      </h3>

                  </Caption>
              </Slide>
              <Slide image={<img className='opa' alt="" src="https://ecdn.game4v.com/g4v-content/uploads/2020/06/Shokugeki-no-Souma-2-game4v.png"/>}>
                  <Caption placement="left">
                      <h3>
                          Shokugeki Souma
                      </h3>

                  </Caption>
              </Slide>
              <Slide image={<img className='opa' alt="" src="https://cdn.popsww.com/blog/sites/2/2023/03/luc-do-toi-da-chuyen-sinh-thanh-slime-moi-lien-ket-do-tham.jpg"/>}>
                  <Caption placement="left">
                      <h3>
                          Smile
                      </h3>

                  </Caption>
              </Slide>
              <Slide image={<img className='opa' alt="" src="https://hosonhanvat.vn/wp-content/uploads/2021/06/thum2-2.png"/>}>
                  <Caption placement="left">
                      <h3>
                          Record of Ragnarok
                      </h3>
                  </Caption>
              </Slide>
              <Slide image={<img alt="" className='opa' src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/11/Bungou-Stray-Dogs-social.jpg"/>}>
                  <Caption placement="left">
                      <h3>
                        Bungou-Stray-Dogs
                      </h3>
                  </Caption>
              </Slide>
              <Slide image={<img alt="" className='opa' src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/03/black-clover-sword-of-the-wizard-king-poster.png"/>}>
                  <Caption placement="left">
                      <h3>
                          Black Clover
                      </h3>
                  </Caption>
              </Slide>
              
          </Slider>


    </CollapsibleItem>


    <CollapsibleItem style={{backgroundColor : theme.darkbackGroundColor , color: theme.aboutColor}}
         expanded={true}
        header="Top best Anime At All Time"
        icon={<Icon>movie</Icon>}
        node="div"
    >
                 <div>
      <Icon left style={{color:'red'}}>new_releases</Icon><h5 className='news' left>Best Anime Movie at all time</h5>
      </div>
      <Slider>
             <Slide image={<img className='opa' alt="" src="assets/images/peakpx.jpg"/>}>
                  <Caption placement="left">
                      <h3>
                          Suzume no Tojiamri
                      </h3>

                  </Caption>
              </Slide>
              <Slide image={<img className='opa' alt="" src="https://ecdn.game4v.com/g4v-content/uploads/2020/06/Shokugeki-no-Souma-2-game4v.png"/>}>
                  <Caption placement="left">
                      <h3>
                          Shokugeki Souma
                      </h3>

                  </Caption>
              </Slide>
              <Slide image={<img className='opa' alt="" src="https://cdn.popsww.com/blog/sites/2/2023/03/luc-do-toi-da-chuyen-sinh-thanh-slime-moi-lien-ket-do-tham.jpg"/>}>
                  <Caption placement="left">
                      <h3>
                          Smile
                      </h3>

                  </Caption>
              </Slide>
              <Slide image={<img className='opa' alt="" src="https://hosonhanvat.vn/wp-content/uploads/2021/06/thum2-2.png"/>}>
                  <Caption placement="left">
                      <h3>
                          Record of Ragnarok
                      </h3>
                  </Caption>
              </Slide>
              <Slide image={<img alt="" className='opa' src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/11/Bungou-Stray-Dogs-social.jpg"/>}>
                  <Caption placement="left">
                      <h3>
                        Bungou-Stray-Dogs
                      </h3>
                  </Caption>
              </Slide>
              <Slide image={<img alt="" className='opa' src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/03/black-clover-sword-of-the-wizard-king-poster.png"/>}>
                  <Caption placement="left">
                      <h3>
                          Black Clover
                      </h3>
                  </Caption>
              </Slide>
              
          </Slider>

    </CollapsibleItem>
</Collapsible>










    
    
  )
}
