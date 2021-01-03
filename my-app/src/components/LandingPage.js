import React from 'react';
import styled from "styled-components";

const StyledAd = styled.img `
    width: 80%;
    height: auto;
`

const LandingPage = () => {
    return (
        <div>
            <section>
                <StyledAd src="./lp-ad.png" alt="Semi-Annual Sale 30% off sitewide"/>
            </section>

        </div>
    )

};

export default LandingPage;