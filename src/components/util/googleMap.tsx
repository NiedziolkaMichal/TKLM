import styles from "../../../styles/Home.module.css";
import { RefObject, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { isInViewport } from "../../util/common";
import HomeMapStyle from "../../../public/homeMapStyle.json";

type MapRef = RefObject<HTMLDivElement> & { loaded?: boolean };

export function Map() {
  const mapRef = useRef(null) as MapRef;
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) return;

    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    lazyLoadMap(loader, mapRef);
  }, [mapRef]);
  return <div id="map" className={styles.googleMap} ref={mapRef} />;
}

function lazyLoadMap(loader: Loader, mapRef: MapRef) {
  const element = mapRef.current;
  if (element && isInViewport(element)) {
    loadMap(loader, mapRef);
  } else {
    requestIdleCallback(() => loadMap(loader, mapRef));
  }
}

function loadMap(loader: Loader, mapRef: MapRef) {
  if (mapRef.loaded) return;

  loader.load().then(() => {
    if (!mapRef.current) return;

    const map = new google.maps.Map(mapRef.current, {
      center: getMapCenterLocation(),
      zoom: 11,
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      zoomControl: false,
      styles: HomeMapStyle,
      backgroundColor: "transparent",
    });
    const marker = new google.maps.Marker({
      position: getMarkerLocation(),
      title: "TKLM",
    });

    marker.setMap(map);
    mapRef.loaded = true;
  });
}

function getMapCenterLocation(): google.maps.LatLngLiteral {
  if (window.innerWidth >= 750) {
    return { lat: 50.05, lng: 20.1 };
  } else {
    return { lat: 49.96, lng: 19.95 };
  }
}

function getMarkerLocation(): google.maps.LatLngLiteral {
  return { lat: 50.01634, lng: 19.8885698 };
}
