import React from "react";
import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapDefaultMarker,
} from "ymap3-components";

interface Location {
  coordinates: [number, number];
  zoom: number;
}

export const LOCATION: Location = {
  coordinates: [33.609361, 44.964037],
  zoom: 15,
};

const apiKey = process.env.REACT_APP_YANDEX_MAP;

const Map: React.FC = () => {
  if (!apiKey) {
    throw new Error("API ключ для Яндекс.Карт не задан");
  }

  return (
    <YMapComponentsProvider apiKey={apiKey}>
      <YMap location={{ center: LOCATION.coordinates, zoom: LOCATION.zoom }}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        <YMapDefaultMarker coordinates={LOCATION.coordinates} color="#009142" />
      </YMap>
    </YMapComponentsProvider>
  );
};

export default Map;
