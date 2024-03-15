import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import turkeyCitiesBorders from '../geojsons/turkey/tr-cities.json'
export default function MapComponent() {
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name)
    }
  }

  return (
    <MapContainer
      center={[39, 35]}
      zoom={6}
      scrollWheelZoom={true}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={turkeyCitiesBorders} onEachFeature={onEachFeature} />
    </MapContainer>
  )
}
