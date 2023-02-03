import React from 'react'
import styled from 'styled-components'

import Item from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { convertKToC, getCurrentDate } from '../helpers'


const StyledItemA = styled(Item)`
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% + 24px));
    left: 0;
    height: 280px;
    width: 140px;
    background: radial-gradient(circle, #5374E7 0%, #77B9F5 100%);
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
`;

const StyledItemB = styled(Item)`
    background-color: #AFD0EB;
    height: 100%;
    border-radius: 25px;
    padding: 80px 146px;
    box-shadow: 5px 10px 20px 0 rgba(0,0,0,0.17);
    display: flex;
    flex-direction: column;
`;


function Highlight({ data }) {
    return (
        <>
            <StyledItemA>
                <Typography variant="temperature">
                    {data.list ? convertKToC(data.list[0].main.temp) + '°' : '0°'}
                </Typography>
                <img
                    src={`http://openweathermap.org/img/wn/${data.list ? data.list[0].weather[0].icon : '10d'}@2x.png`}
                />
            </StyledItemA>
            <StyledItemB>
                <Typography variant="highlightTitle">
                    {data.city ? data.city.name : 'City'}
                </Typography>
                <Typography variant="highlightDate">
                    {getCurrentDate()}
                </Typography>
                <Typography variant="highlightWeather">
                    {data.list ? data.list[0].weather[0].main : 'Sunny'}
                </Typography>
            </StyledItemB>
        </>
    )
}

export default Highlight