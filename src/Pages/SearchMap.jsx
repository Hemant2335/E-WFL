import React, { useEffect, useState } from "react";
import mapboxgl, { Marker } from "mapbox-gl";
import polyline from "@mapbox/polyline";
import { useContext } from "react";
import Context from "../context/Context";
import { Wrapper  , Facilites} from "../Components";
import { useParams } from "react-router-dom";
import { set } from "mongoose";

const SearchMap = () => {
  const { Location , Locationstate , facdata , fetcheddata} = useContext(Context);
  const [map, setmap] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const [marker, setmarker] = useState(null)
  const [searchaddress, setsearchaddress] = useState("");
  const [initaddress, setinitaddress] = useState("");

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

  const Geocodeaddress = async (address) => {
    console.log(address)
    mapboxgl.accessToken =
      "pk.eyJ1IjoibmlzaGFudDc0MTIiLCJhIjoiY2xtYm42NHI5MWN0ZTNkbzVsdzhkNnl0bSJ9.FXHqQifsNwqwWW3g4qEZgw";
    const geocodingApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapboxgl.accessToken}`;
    const response = await fetch(geocodingApiUrl);
    const data = await response.json();

    const coordinates = data.features[0].center;

    console.log(coordinates);

    return coordinates;
  };

    // Handle the search button click
    const handleSearch = async (unitaddress) => {
      try {
        // Remove the previous marker, if it exists
        if(marker){
           marker.remove();        
        }
  
        const searchCoordinates = await Geocodeaddress(searchaddress ? (searchaddress) : (unitaddress));
        const [lng, lat] = searchCoordinates;
  
        // Create a directions request
        const directionsApiUrl = `https://api.mapbox.com/directions/v5/mapbox/cycling/${lng},${lat};${coordinates[0]},${coordinates[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`;
  
        const response = await fetch(directionsApiUrl);
        const data = await response.json();
  
        // Get the route coordinates from the directions response
        const routeCoordinates = data.routes[0].geometry.coordinates;
  
        // Create a GeoJSON object for the route
        const geojson = {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: routeCoordinates,
          },
        };
  
        // Check if the route layer already exists, and update it if it does
        if (map.getSource("route")) {
          map.getSource("route").setData(geojson);
        } else {
          // Add the route layer to the map
          map.addLayer({
            id: "route",
            type: "line",
            source: {
              type: "geojson",
              data: geojson,
            },
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#3887be",
              "line-width": 5,
              "line-opacity": 0.75,
            },
          });
        }
  
        // Add starting and ending points to the map
        const startingPoint = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: coordinates,
              },
            },
          ],
        };
  
        if (map.getLayer("start")) {
          map.getSource("start").setData(startingPoint);
        } else {
          map.addLayer({
            id: "start",
            type: "circle",
            source: {
              type: "geojson",
              data: startingPoint,
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#3887be",
            },
          });
        }
  
        const endingPoint = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: routeCoordinates[routeCoordinates.length - 1],
              },
            },
          ],
        };
  
        if (map.getLayer("end")) {
          map.getSource("end").setData(endingPoint);
        } else {
          map.addLayer({
            id: "end",
            type: "circle",
            source: {
              type: "geojson",
              data: endingPoint,
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#f30",
            },
          });
        }
        const Newmarker = await new mapboxgl.Marker({ color: "red" })
          .setLngLat(searchCoordinates)
          
        Newmarker.addTo(map);
  
        setmarker(Newmarker);
        // Calculate the bounds of the route and set the map's zoom to fit the route
        const bounds = routeCoordinates.reduce((bounds, coord) => {
          return bounds.extend(coord);
        }, new mapboxgl.LngLatBounds(routeCoordinates[0], routeCoordinates[0]));
  
        map.fitBounds(bounds, {
          padding: 50, // You can adjust the padding as needed
          duration: 1000, // Animation duration in milliseconds
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };

  const SetAddressMarker = (Location)=>{
    
    const addressToGeocode = decodeURIComponent(Location);
    console.log(Location.length > 100 ? address.slice(0, 100).length : Location.length );
    
    
    // Geocode the initial address and set the initial coordinates
    Geocodeaddress(Location.length > 120 ? Location.slice(0, 120) : Location )
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
  }

  useEffect(() => {

      SetAddressMarker(Location ? Location : ("Bhopal"))
      
  }, []);

  return (
    <Wrapper>
      
      <div className="relative mt-[2vh]">

      

        <div id="map" className="h-[70vh] w-full rounded-xl" />
        <div className="absolute top-0 flex gap-[1vh] justify-between items-center p-4">
          <input
            type="text"
            className="w-full mt-2 mx-[2vh] rounded-lg text-[#F9F6EE] p-4 font-montserrat border-2 font-medium bg-[#222222]"
            onChange={(e) => {
              setsearchaddress(e.target.value);
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
      {fetcheddata.length > 0 && <div>
      <div className="w-full h-fit mt-[2vh]">
        <h1 className="mb-[5vh] font-montserrat font-bold text-2xl ">
          Search Results
        </h1>
        <div className="flex flex-col md:flex-row gap-4">
        {fetcheddata?.map((item) => (
            <div className="h-fit items-center gap-[2vw] shadow-3xl p-4 rounded-lg bg-[#ff5757] md:max-w-[60vh]">
              <p className="font-montserrat font-semibold ">{item?.Name_Address}</p>
              <h2 className="font-montserrat font-bold mt-2 ">Capacity : {item?.Installed_Capacity_Metric_Tons_per_Annum_MTA}</h2>
              <button
              className="hover:bg-[#ff5757] mt-[2vh] hover:scale-105 shadow-3xl transition-transform  font-montserrat font-semibold p-2 rounded-lg  w-fit"
              onClick={()=>{handleSearch(item?.Name_Address)}}
            >
              Go
            </button>
            </div>))}
        </div>
      </div>
    </div>}
    </Wrapper>
  );
};

export default SearchMap;
