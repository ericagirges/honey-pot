import React from 'react';
import styled from "styled-components";

const StyledH4 = styled.h4 `
    text-transform: uppercase;
    font-family: "Lato";
    font-weight: 700;
    margin: 20px auto;
    font-size: 2.0em;
    color: #ffb50c;
    text-shadow: -1px 0 #b27e08, 0 1px #b27e08, 1px 0 #b27e08, 0 -1px #b27e08;
`

const StyledAd = styled.img `
    width: 80%;
    height: auto;
`

const LandingPage = () => {
    return (
        <div>
            <StyledH4>Ships out same day if order placed before 2PM PST</StyledH4>
            <section>
                <StyledAd src="./lp-ad.png" alt="Semi-Annual Sale 30% off sitewide"/>
            </section>

        </div>
    )

};

export default LandingPage;