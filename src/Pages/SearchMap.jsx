import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import polyline from "@mapbox/polyline";
import { Wrapper } from "../Components";
import { useParams } from "react-router-dom";
import { set } from "mongoose";

const SearchMap = () => {
  const { state, city } = useParams();
  const [map, setmap] = useState(null);
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState([]);
  const [pathCoordinates, setPathCoordinates] = useState([]);

  // ...

  // Create a function to initialize the map
  const initializeMap = (coordinates1) => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibmlzaGFudDc0MTIiLCJhIjoiY2xtYm42NHI5MWN0ZTNkbzVsdzhkNnl0bSJ9.FXHqQifsNwqwWW3g4qEZgw";

    const map = new mapboxgl.Map({
      container: "map", // Use the provided coordinates as the initial center
      style: "mapbox://styles/nishant7412/clmd5l4yi01bz01r71roa6h2m",
      zoom: 18,
      pitch: 50,
      bearing: 0,
    });

    return map;
    // Rest of your map initialization code...
  };

  const fetchaddress = async () => {
    const sendstate = state?.replace(/\s/g, "");
    const res = await fetch(
      `https://ewfl-backend-hemant2335.vercel.app/ewaste/${sendstate}/city/${city}`
    );
    const data = await res.json();
    console.log(data);
  };

  const Geocodeaddress = async (address) => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibmlzaGFudDc0MTIiLCJhIjoiY2xtYm42NHI5MWN0ZTNkbzVsdzhkNnl0bSJ9.FXHqQifsNwqwWW3g4qEZgw";
    const geocodingApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?access_token=${mapboxgl.accessToken}`;
    const response = await fetch(geocodingApiUrl);
    const data = await response.json();
    const coordinates = data.features[0].center;

    console.log(coordinates);

    return coordinates;
  };

  // Handle the search button click
  const handleSearch = async () => {
    try {
      const searchCoordinates = await Geocodeaddress(address);
      const [lng, lat] = searchCoordinates;
      const [lng1, lat1] = coordinates;
  
      const searchApi = `https://api.mapbox.com/directions/v5/mapbox/driving/${lng},${lat};${lng1},${lat1}.json?access_token=${mapboxgl.accessToken}`;
  
      const response = await fetch(searchApi);
      const data = await response.json();
      console.log("Response Data:", data);
  
      const decodedCoordinates = polyline.decode(data.routes[0].geometry);
      console.log("Decoded Coordinates:", decodedCoordinates);
  
      // Debugging: Check if map is defined
      if (!map) {
        console.error("Map is not defined");
        return;
      }
  
      // Add a marker to the map
      new mapboxgl.Marker({ color: "red" })
        .setLngLat(searchCoordinates)
        .addTo(map);
      map.setCenter(searchCoordinates);
      map.setZoom(14);
  
      // Create a GeoJSON source for the path
      map.addSource("path", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: decodedCoordinates,
          },
        },
      });
  
      // Check if the "path" layer already exists and remove it before adding a new one
      if (map.getLayer("path")) {
        map.removeLayer("path");
      }
  
      // Add a line layer to display the path
      map.addLayer({
        id: "path",
        type: "line",
        source: "path",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "red", // Color of the path
          "line-width": 5, // Width of the path
        },
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  

  useEffect(() => {
    fetchaddress();

    const addressToGeocode =
      "M/s. Green Waves Environmental Solution, Sy. No. 43/1, Mindi (V), Gajuwaka (M), Visakhapatnam District.";

    // Geocode the initial address and set the initial coordinates
    Geocodeaddress(addressToGeocode)
      .then((initialCoordinates) => {
        setCoordinates(initialCoordinates);
        const map1 = initializeMap();
        map1.setCenter(initialCoordinates);
        setmap(map1);

        new mapboxgl.Marker().setLngLat(initialCoordinates).addTo(map1);
        // Add popup to the marker
        new mapboxgl.Popup()
          .setLngLat(initialCoordinates)
          .setHTML(
            `
         <div style="background-color: #ffffff; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
         <p style="color: black; font-size: 14px; font: montserrat, font-weight: bold">${addressToGeocode}</p>
         </div>
                 `
          )
          .addTo(map1);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    return () => {
      // Clean up the map when the component unmounts
      mapboxgl.accessToken = null;
    };
  }, []);

  return (
    <Wrapper>
      <div className="relative">
        <div id="map" className="h-screen w-full rounded-xl" />
        <div className="absolute top-0 flex gap-[1vh] justify-between items-center p-4">
          <input
            type="text"
            className="w-full mt-2 mx-[2vh] rounded-lg text-[#F9F6EE] p-4 font-montserrat border-2 font-medium bg-[#222222]"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder="Enter Your Location"
          />
          <button
            className="hover:bg-[#ff5757] h-fit mt-2 hover:scale-105 shadow-3xl transition-transform  font-montserrat font-semibold p-4 rounded-lg  w-fit"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchMap;
