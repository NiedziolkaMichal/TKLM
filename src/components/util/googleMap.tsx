import styles from "../../../styles/util/googleMap.module.css";
import { RefObject, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { getRemInPx, isInViewport } from "../../util/common";
import HomeMapStyle from "../../../public/homeMapStyle.json";
import { requestIdleCallback as _requestIdleCallback } from "next/dist/client/request-idle-callback";

/* global google */

type MapRef = RefObject<HTMLDivElement> & { loaded?: boolean };

export function Map({ pinTitle }: { pinTitle: string }) {
  const mapRef = useRef(null) as MapRef;
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) return;

    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    lazyLoadMap(loader, mapRef, pinTitle);
  }, [mapRef, pinTitle]);
  return <div id="map" className={styles.googleMap} ref={mapRef} tabIndex={-1} />;
}

function lazyLoadMap(loader: Loader, mapRef: MapRef, pinTitle: string) {
  const element = mapRef.current;
  if (element && isInViewport(element)) {
    loadMap(loader, mapRef, pinTitle);
  } else {
    _requestIdleCallback(() => loadMap(loader, mapRef, pinTitle));
  }
}

function loadMap(loader: Loader, mapRef: MapRef, pinTitle: string) {
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
      title: pinTitle,
    });

    marker.setMap(map);
    mapRef.loaded = true;
  });
}

function getMapCenterLocation(): google.maps.LatLngLiteral {
  if (window.innerWidth >= getRemInPx() * 43 + 110) {
    return { lat: 50.05, lng: 20.1 };
  } else {
    return { lat: 49.96, lng: 19.95 };
  }
}

function getMarkerLocation(): google.maps.LatLngLiteral {
  return { lat: 50.01634, lng: 19.8885698 };
}
