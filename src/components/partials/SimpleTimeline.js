import * as React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';

import TimelineRepeater from './TimelineRepeater';

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
    height: 1;
    margin-top: auto;
    margin-bottom: 0;
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
    return (
        <StyledTimeline>
            <NowTypography>Now</NowTypography>
            <TimelineItem>
                <StyledTimelineOppositeContent>
                    <FirstTemperatureTypography>
                        {data.list ? convertKToC(data.list[0].main.temp) + '°' : '0°'}
                    </FirstTemperatureTypography>
                </StyledTimelineOppositeContent>
                <TimelineSeparator>
                    <FirstTimelineDot />
                    <StyledTimelineConnector />
                </TimelineSeparator>
                <StyledTimelineContent />
            </TimelineItem>
            <TimelineRepeater data={data}></TimelineRepeater>
        </StyledTimeline >
    )
}