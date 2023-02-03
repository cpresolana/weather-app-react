import React, { useState } from 'react'
import styled from 'styled-components'

import Item from '@mui/material/Grid';
import Button from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { convertKToC } from '../helpers'

const StyledContainer = styled(Item)`
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow: auto;
    height: 100%;    
`;

const StyledItem = styled(Item)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background: radial-gradient(circle, #011354 0%, #5B9FE3 100%);
    box-shadow: 5px 10px 20px 0 rgba(0,0,0,0.17);
    padding: 20px;
`;

const StyledButton = styled(Button)`
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
`;


function Bookmark({ data }) {
    let [bookmark, setBookmark] = useState([]);
    let [bookmarkCount, setBookmarkCount] = useState(0);



    const addBookmark = () => {
        if (bookmark.some(e => e.name === data.city.name)) {
            /* vendors contains the element we're looking for */
            return
        }
        if (data.list) {
            setBookmarkCount(bookmarkCount + 1)
            setBookmark([...bookmark,
            {
                'name': data.city.name,
                'temp': data.list[0].main.temp,
                'icon': data.list[0].weather[0].icon,
            },
            ])
        }
    }

    return (
        <>
            <StyledContainer>

                {
                    bookmarkCount < 3 ? (
                        <StyledButton onClick={addBookmark}>Aggiungi città</StyledButton>
                    ) : (
                        <></>
                    )
                }
                {
                    bookmark.map((el, key) => (
                        <StyledItem key={key}>
                            <Typography variant="bookmarkName">
                                {el.name}
                            </Typography>
                            <img src={`http://openweathermap.org/img/wn/${el.icon ? el.icon : '10d'}@2x.png`}></img>
                            <Typography variant="bookmarkTemp">
                                {convertKToC(el.temp) + '°'}
                            </Typography>
                        </StyledItem>
                    ))
                }
            </StyledContainer>
        </>
    )
}

export default Bookmark