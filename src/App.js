
import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//helper functions
import { convertKToC, getCurrentDate, formatAMPM, getLocation } from './helpers'

//components
import Highlight from './components/Highlight';
import Today from './components/Today';
import Weekly from './components/Weekly';
import Bookmark from './components/Bookmark';


const StyledGrid = styled(Grid)`
  height: 50%;
`;

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=3d5a4fd84ac24670136858034648551c`

  const getCoordinatesUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=3d5a4fd84ac24670136858034648551c`

  const getWeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=3d5a4fd84ac24670136858034648551c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(getCoordinatesUrl).then((response) => {
        setLat(response.data[0].lat)
        setLon(response.data[0].lon)
        //console.log('coordinates:', response.data)
      })
    }
  }

  const getWeather = () => {
    axios.get(getWeatherUrl).then((response) => {
      setData(response.data)
      //console.log('data:', response.data)
      setLocation('')
    })
  }

  if (lat && lon) {
    getWeather()
    setLat(false)
    setLon(false)
  }

  const getLocation = (event) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setLatLon);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function setLatLon(position) {
    setLat(position.coords.latitude)
    setLon(position.coords.longitude)
  }

  return (

    <div className="app">

      <Box sx={{
        height: '100vh',
      }}>

        <Grid
          container
          spacing={6}
          sx={{
            height: '100%',
            padding: {
              xs: '16px 16px 0 16px',
              md: '48px 48px 0 48px',
            },
          }}
        >

          <Grid
            item
            xs={12}
            md={8}
            order={{ xs: 2, md: 1 }}
            sx={{
              position: 'relative',
              height: 1 / 2,
            }}
          >
            <Highlight data={data}></Highlight>
          </Grid>

          <Grid item
            xs={12}
            md={4}
            order={{ xs: 3, md: 2 }}
            sx={{
              height: 1 / 2,
            }}>
            <Bookmark data={data}></Bookmark>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            order={{ xs: 4, md: 3 }}
            sx={{
              height: 1 / 2,
            }}>
            <Today data={data}></Today>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            order={{ xs: 5, md: 4 }}
            sx={{
              height: 1 / 2,
            }}>
            <Weekly data={data}></Weekly>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            order={{ xs: 1, md: 5 }}
            sx={{
              height: 1 / 2,
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
            }}

          >
            {/* Search Component Start */}
            <Item
              sx={{
                height: 1 / 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <Typography variant="searchTitle">
                Search
              </Typography>
              <input
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder='Ex: Miami'
                type="text" />
            </Item>
            {/* Search Component End */}
            {/* Geolocation component Start */}
            <Item
              sx={{
                height: 1 / 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <Typography variant="searchTitle">
                Localization
              </Typography>
              <button className="geolocationButton" onClick={event => getLocation(event.target.value)}>
                Add localization
              </button>
            </Item>
            {/* Geolocation component End */}
          </Grid>
        </Grid>
      </Box>

    </div >
  );
}

export default App;
