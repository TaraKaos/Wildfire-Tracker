import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom}) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBmENs0n3cikSPI6dGbiON7_TpLJ0jYWDs'}}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 46.8721,
        lng: -113.9940
    },
    zoom: 7
}
export default Map