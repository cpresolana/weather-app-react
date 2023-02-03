import React from 'react'
import styled from 'styled-components'
import { convertKToC } from '../helpers'

// Import MUI 
import Item from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Manipulation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
// Import Swiper Pagination module
import 'swiper/css/pagination';


const StyledContainer = styled(Item)`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const StyledSwiper = styled(Swiper)`
    width: 100%;
    height: 100%;
    padding: 30px;
    padding-bottom: 50px;
    background: radial-gradient(circle, #5374E7 0%, #77B9F5 100%);
    border-radius: 35px;
`;

const StyledSlide = styled(SwiperSlide)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(255,255,255,0.1);
    box-shadow: 5px 10px 20px 0 rgba(0,0,0,0.17);
    border-radius: 35px;
    padding: 20px 28px;
`;

function Weekly({ data }) {

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
        let dataArr = data.list

        // excluding today from the array
        var tmpArr = dataArr.filter(element => element.dt_txt.split(' ')[0].split('-')[2] !== formatDate(new Date()).split('-')[2])
        // removing the first 4 elements to start at 12:00
        tmpArr.splice(0, 4)
        // getting data every 24 hours for 7 days
        var arr = tmpArr.filter((element, index) => index % 8 === 0)
    }

    // getting name of day
    let daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let newDate = new Date()
    let day = daysArr[newDate.getDay()];
    let start = daysArr.indexOf(day) + 1;
    let deleteCount = 7 - start;
    let deletedElements = daysArr.splice(start, deleteCount)
    daysArr.splice(0, 0, ...deletedElements)


    return (
        <>
            <StyledContainer>
                <Typography variant="searchTitle">
                    Weekly
                </Typography>
                <StyledSwiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={3}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    pagination={true}
                >
                    {arr && arr.map((el, key) => (
                        <StyledSlide key={key} >
                            <Typography variant="weeklyday">
                                {daysArr[key]}
                            </Typography>
                            <Typography variant="weeklytemperature">
                                {el ? convertKToC(el.main.temp) + '°' : '0°'}
                            </Typography>
                            <img
                                src={`http://openweathermap.org/img/wn/${el ? el.weather[0].icon : '10d'}@2x.png`}
                            />
                        </StyledSlide>
                    ))}
                </StyledSwiper>
            </StyledContainer>
        </>
    )

}

export default Weekly