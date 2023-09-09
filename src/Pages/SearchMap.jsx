import React, { useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import { Wrapper } from '../Components';
import { useParams } from 'react-router-dom';

const SearchMap = () => {

    const {state , city} = useParams();

    const fetchaddress = async () => {
        const sendstate = state?.replace(/\s/g , "");
        const res = await fetch(`https://ewfl-backend-hemant2335.vercel.app/ewaste/${sendstate}/city/${city}`)
        const data = await res.json();
        console.log(data);
    }
    const addressToGeocode = 'M/s. Green Waves Environmental Solution, Sy. No. 43/1, Mindi (V), Gajuwaka (M), Visakhapatnam District.';

    //   Geocoding the Address to coordinates and adding marker to the map
    
  useEffect(() => {
    fetchaddress();
    mapboxgl.accessToken = 'pk.eyJ1IjoibmlzaGFudDc0MTIiLCJhIjoiY2xtYm42NHI5MWN0ZTNkbzVsdzhkNnl0bSJ9.FXHqQifsNwqwWW3g4qEZgw';
    const geocodingApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(addressToGeocode)}.json?access_token=${mapboxgl.accessToken}`;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // style: 'mapbox://styles/nishant7412/clmbmd73n019f01qxd6pw1jg0', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 12, // Set the zoom level
        pitch: 50, // Set the pitch angle in degrees
        bearing: 0, // Set the bearing (rotation) angle in degrees
    });

    fetch(geocodingApiUrl).then((response) => {
        return response.json();
    })
    .then((data) => {
        const coordinates = data.features[0].center;

        // create a marker 

        new mapboxgl.Marker().setLngLat(coordinates).addTo(map);

        // Add popup to the marker
        new mapboxgl.Popup().setLngLat(coordinates).setHTML(`<div>hllo</div>`).addTo(map);

        map.setCenter(coordinates);

    })

    // Clean up the map when the component unmounts

    return () => map.remove();
  }, []); 



  const Geocoding = async () => {
        
  }

  return (
    <Wrapper>
        <div id='map' className='h-screen w-full rounded-xl'/>
    </Wrapper>
    
  );
};

export default SearchMap;
