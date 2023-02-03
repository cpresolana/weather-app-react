import React from 'react'
import styled from 'styled-components'
import Item from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SimpleTimeline from './partials/SimpleTimeline';

const StyledContainer = styled(Item)`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const StyledItem = styled(Item)`
    background: radial-gradient(circle, #5374E7 0%, #77B9F5 100%);
    border-radius: 25px;
    overflow: auto;
    height: 100%;
    display: flex;
`;

function today({ data }) {
    return (
        <>
            <StyledContainer>
                <Typography variant="searchTitle">
                    Today
                </Typography>
                <StyledItem>
                    <SimpleTimeline data={data} />
                </StyledItem>
            </StyledContainer>
        </>
    )
}

export default today