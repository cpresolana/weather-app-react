import React, { useState } from 'react'

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';

//helper functions
import { convertKToC, getCurrentDate, formatAMPM } from '../../helpers'


import styled from 'styled-components'

const NowTypography = styled(Typography)`
    margin: 0 auto;
    color: #FFFFFF;
    font-family: Poppins;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 27px;
    text-align: center;
    margin-bottom: 10px;
`;

const FirstTemperatureTypography = styled(Typography)`
    color: #FFFFFF;
    font-family: Poppins;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 40px;
    text-align: center;
    transform: translateY(-5px);
`;

const FirstTimelineDot = styled(TimelineDot)`
  background-color: white;
  width: 30px;
  height: 30px;
  margin: 0;
  margin-bottom: -1px;
  margin-top: -1px;
`;

const StyledTimeline = styled(Timeline)`
    padding-top: 25px;
    padding-bottom: 0;
    height: 1,
`;

const StyledTimelineDot = styled(TimelineDot)`
  background-color: white;
  width: 20px;
  height: 20px;
  margin: 0;
  margin-bottom: -1px;
  margin-top: -1px;
`;

const StyledTimelineConnector = styled(TimelineConnector)`
    width: 8px;
    height: 67px;
    background-color: white;
`;

const StyledTimelineOppositeContent = styled(TimelineOppositeContent)`
    font-family: 'poppins';
    font-size: 30px;
    line-height: 20px;
    color: white;
    padding: 0;
    text-align: center;
`;

const StyledTimelineContent = styled(TimelineContent)`
    font-family: 'poppins';
    font-size: 20px;
    line-height: 15px;
    color: white;
    padding: 0;
    text-align: center;
`;

export default function SimpleTimeline({ data }) {

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    if (data.list) {
        var dataArr = data.list
        var newArr = dataArr.filter(element => element.dt_txt.split(' ')[0] === formatDate(new Date()))

        return (
            <>
                {newArr.map((el, key) => (
                    <TimelineItem key={key}>
                        <StyledTimelineOppositeContent>
                            {el ? convertKToC(el.main.temp) + '°' : '0°'}
                        </StyledTimelineOppositeContent>
                        <TimelineSeparator>
                            <StyledTimelineDot />
                            <StyledTimelineConnector />
                        </TimelineSeparator>
                        <StyledTimelineContent>
                            {el ? formatAMPM(el.dt_txt.split(' ')[1].split(':')[0]) : '0'}
                        </StyledTimelineContent>
                    </TimelineItem>
                ))}
            </>
        )
    } else return (
        <div></div>
    )


}


