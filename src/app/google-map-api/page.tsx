"use client"
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import React, { useEffect, useState, useRef } from 'react'

const initialCenter = {
    lat: 31.4805,
    lng: 74.2652
};

const astp = {
    lat: 31.4758,
    lng: 74.3426
}

// Define the type for currentPosition
interface Position {
    lat: number;
    lng: number;
}

const page = () => {
    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API || '';
    const [currentPosition, setCurrentPosition] = useState<Position | null>(null); // Specify the type
    const [originalCenter, setOriginalCenter] = useState(initialCenter);
    const mapRef = useRef<google.maps.Map | null>(null); // Define the type for mapRef

    useEffect(() => {
        // Fetch current geolocation
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setCurrentPosition({ lat: latitude, lng: longitude });
                    console.log('Latitude:', latitude, 'Longitude:', longitude);
                },
                error => {
                    console.error('Error getting geolocation:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, [currentPosition]); // Include currentPosition as a dependency

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: googleMapsApiKey
    })

    const handleReCenter = () => {
        if (mapRef.current) {
            const map = mapRef.current;
            map.panTo(originalCenter);
        }
    };

    // Loader
    if (!isLoaded) {
        return (
            <>
                <h1>Loading ...</h1>
            </>
        )
    }

    return (
        <>
            <div>
                Google Maps Api
                {/* Re-center button */}
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleReCenter}
                >
                    Re Center
                </button>
                {/* Google map box */}
                <GoogleMap
                    center={initialCenter}
                    mapContainerStyle={{ width: '100%', height: '600px' }}
                    zoom={10}
                    onLoad={(map) => {
                        const center = map.getCenter();
                        if (center) {
                            setOriginalCenter({ lat: center.lat(), lng: center.lng() });
                        }
                        mapRef.current = map;
                    }}
                >
                    {/* marker */}
                    <Marker position={initialCenter} />
                    <Marker position={astp} />
                    {/* Add marker for current geolocation */}
                    {currentPosition && <Marker position={currentPosition} />}
                </GoogleMap>
            </div>
        </>
    )
}

export default page
