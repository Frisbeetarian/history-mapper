import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import turkeyCitiesBorders from '@/geojsons/turkey/tr-cities.json'
import syriaJSON from '@/geojsons/syria/syria-adm1.json'
import egyptJSON from '@/geojsons/egypt/egypt-adm1.json'
import senegalJSON from '@/geojsons/senegal/senegal-adm3.json'

export default function MapComponent() {
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name)
    }
  }

  const turkeyCitiesStyle = {
    fillColor: 'blue',
    weight: 2,
    opacity: 1,
    color: 'blue',
    fillOpacity: 0.4,
  }

  const syriaStyle = {
    fillColor: 'red',
    weight: 2,
    opacity: 1,
    color: 'red',
    fillOpacity: 0.4,
  }

  const egyptStyle = {
    fillColor: 'green',
    weight: 2,
    opacity: 1,
    color: 'green',
    fillOpacity: 0.4,
  }

  const senegalStyle = {
    fillColor: 'orange',
    weight: 2,
    opacity: 1,
    color: 'orange',
    fillOpacity: 0.4,
  }

  return (
    <MapContainer
      center={[39, 35]}
      zoom={6}
      scrollWheelZoom={true}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
      />
      <GeoJSON
        style={turkeyCitiesStyle}
        data={turkeyCitiesBorders}
        onEachFeature={onEachFeature}
      />
      <GeoJSON
        style={syriaStyle}
        data={syriaJSON}
        onEachFeature={onEachFeature}
      />

      <GeoJSON
        style={egyptStyle}
        data={egyptJSON}
        onEachFeature={onEachFeature}
      />

      <GeoJSON
        style={senegalStyle}
        data={senegalJSON}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  )
}
