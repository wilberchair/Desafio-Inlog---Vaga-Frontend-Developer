import { FC } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngTuple } from "leaflet";

import 'leaflet/dist/leaflet.css';

const ComponentResize = () => {
    const map = useMap()

    setTimeout(() => {
        map.invalidateSize()
    }, 0)

    return null
}

interface IMapProps {

}

const Map: FC<IMapProps> = () => {
    const position: LatLngTuple = [-23.5489, -46.6388];

    return (
        <MapContainer
            style={{
                height: "100%",
                width: "100%",
            }}
            center={position}
            zoom={13}
            scrollWheelZoom={true}
        >
            <ComponentResize />
            <TileLayer
                className={'ion-hide'}
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map