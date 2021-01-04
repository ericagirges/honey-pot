import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledPage = styled.div `
    max-width: 80%;
    margin: 0 auto;
`

const StyledH3 = styled.h3 `
    text-transform: uppercase;
    font-family: "Lato";
    font-weight: 700;
    margin: 20px auto;
    font-size: 1.4em;
    color: #ffb50c;
    text-shadow: -1px 0 #b27e08, 0 1px #b27e08, 1px 0 #b27e08, 0 -1px #b27e08;
    @media(min-width: 600px) {
        font-size: 2.0em
    }
`

const StyledAd = styled.img `
    width: 100%;
    height: auto;
`

const FlexSection = styled.section `
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`
const StyledDiv = styled.div `
    width: 45%;
    font-family: "Lato";
    font-size: 1.2em;
    @media(min-width: 600px){
        font-size: 1.5em;
    }
`

const StyledImages = styled.img `
    width: 100%;
    height: auto;
`

const StyledH4 = styled.h4 `
    font-weight: 700;
    margin: 10px 0;
`


const LandingPage = () => {
    return (
        <StyledPage>
            <StyledH3>Ships out same day if order placed before 2PM PST</StyledH3>
            <section>
                <StyledAd src="./lp-ad.png" alt="Semi-Annual Sale 30% off sitewide"/>
            </section>
            <FlexSection>
                <StyledDiv>
                    <StyledImages src="./groot-pop-lp.jpg" alt="Funko POP Groot figure surrounded by potted plants"/>
                    <StyledH4>NEW Funko POP! Figures</StyledH4>
                    <NavLink to="/collectibles" style={{textTransform: "uppercase", color: "#5C3711"}}>Shop Collectibles</NavLink>
                </StyledDiv>
                <StyledDiv>
                    <StyledImages src="./makeup-lp.png" alt="Sailor Moon styled makeup brushes set on wooden background with floral decorations"/>
                    <StyledH4>NEW Sailor Moon Makeup Brush Set</StyledH4>
                    <NavLink to="/beauty" style={{textTransform: "uppercase", color: "#5C3711"}}>Shop Beauty</NavLink>
                </StyledDiv>
            </FlexSection>

        </StyledPage>
    )

};

export default LandingPage;