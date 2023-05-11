import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import ReactMapGL from "react-map-gl";

function ClusterMap() {
  const [turfs, setTurfs] = useState([]);
  const [lat, setLat] = useState(10.45);
  const [lng, setLng] = useState(76.6);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let { data } = await axios.get("/venues");
      console.log(data);
      setTurfs(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen">
      <ReactMapGL   mapboxAccessToken={import.meta.env.VITE_MAP_TOKEN}
                  initialViewState={{
                    longitude: lng,
                    latitude: lat,
                    zoom: 7,
                  }}
                  mapStyle="mapbox://styles/mapbox/streets-v11"></ReactMapGL>;
    </div>
  );
}

export default ClusterMap;
