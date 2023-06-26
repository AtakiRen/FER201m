import { useContext } from "react";
import { Link } from "react-router-dom";
import { Caption , Icon,CardTitle, Row, Col, Card, Container, Section, Tabs, Tab,Collapsible , CollapsibleItem } from 'react-materialize'

import '../css/New.css'
import { ThemeContext } from "./ThemeContext";
import { LargeScreenContext } from "./LargeScreenContext";
export default function News() {
    const { theme } = useContext(ThemeContext)
    const largeScreen = useContext(LargeScreenContext)

    const post = (
        <Card 
            className="z-depth-5"
            actions={[
                <Link style={{ border:'2px solid ' ,backgroundColor: theme.backdropBackgroundColor, color: theme.focusedBackgroundColor }}>Read more...</Link>
            ]}
            header={<CardTitle image="https://rare-gallery.com/uploads/posts/405573-animegirl-wallpaper.png">Anime Life</CardTitle>}
        >
            <div className="news-content" style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.contentTextColor }}>
            Anime is a Japanese animation style that is produced or influenced by it. It is the Japanese term for cartoon or animation where the Japanese use the word to describe all cartoons irrespective of the nation. However, outside Japan, anime denotes animation movies that come exclusively from Japan, distinguished by blazing graphics, energetic characters, and attractive themes such as sci-fi, romance, and supernatural forces
           
            </div>
        </Card>
    )
    let firstSectionDrop = largeScreen ? { transform: 'translateY(50%)' } : {};

    const tab1 = (
        <Section>
            <Section className="col s12 l4" style={firstSectionDrop}   >
                {post}
            </Section>
            <Section className="col s12 l8">
                <Row>
                    <Col s={12} l={6}>{post}</Col>
                    <Col s={12} l={6}>{post}</Col>
                </Row>
                <Row>
                    <Col s={12} l={4}>{post}</Col>
                    <Col s={12} l={4}>{post}</Col>
                    <Col s={12} l={4}>{post}</Col>
                </Row>
            </Section>
        </Section>
        
    )

    return (
        <div  style={{ marigin:'5px', backgroundColor: theme.darkbackGroundColor, color: theme.contentTextColor }}>
            <Container id='news' >
             
    
                <Section
                    className="z-depth-4"
                    style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.contentTextColor }}
                >
                    <Tabs
                        className="z-depth-2"
                    >
                        <Tab
                            active
                            options={{
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="PREMIERES"
                        >
                            {tab1}
                        </Tab>
                        <Tab

                            options={{
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="UPCOMING"
                        >
                            {tab1}
                        </Tab>
                        <Tab
                            options={{
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="RE-CALLS"
                        >
                            {tab1}
                        </Tab>
                        <Tab
                            options={{
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="REVIEWS"
                        >
                            {tab1}
                        </Tab>
                    </Tabs>
                </Section>
            </Container>
        </div>
    )
}
