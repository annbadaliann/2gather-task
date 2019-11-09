import React from "react";
import Autocomplete from "react-google-autocomplete";
import GoogleMapReact from "google-map-react";
import { Dropdown } from "primereact/dropdown";
import location from "../../../assets/images/location.png";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

class LocationAndCategory extends React.Component {
  state = {
    lat: 40.1872023,
    lng: 44.55820900000003,
    address: ""
  };

  icon = {
    url: location, // url
    scaledSize: new google.maps.Size(30, 40), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: { lat: this.state.lat, lng: this.state.lng },
      map,
      icon: this.icon
    });
  }

  placeSelectHandler = address => {
    const { lat, lng } = this.state;
    this.setState({
      lat: address.geometry.location.lat(),
      lng: address.geometry.location.lng(),
      address: address.formatted_address
    });

    this.props.getAddress(lat, lng, this.state.address);
  };

  render() {
    const {
      categories,
      address,
      submitted,
      category,
      onCategoryChange
    } = this.props;

    return (
      <div className="location-category">
        <h2 className="title">Location and category</h2>
        <p className="paragraph">
          Please select your project category and choose location of your
          <br />
          proposed project
        </p>
        <div className="tab-label">
          <label>
            <span>Category</span>
            <Dropdown
              optionLabel="name"
              value={category}
              options={categories}
              onChange={onCategoryChange}
              placeholder="Choose category"
              className={submitted && !category ? "G-invalid-input" : ""}
            />
          </label>
        </div>
        <div className="tab-label">
          <label>
            <span>Location</span>
          </label>
          <Autocomplete
            style={{ width: "100%" }}
            onPlaceSelected={this.placeSelectHandler}
            types={["establishment", "geocode"]}
            placeholder="Choose location"
            className={submitted && !address ? "G-invalid-input" : ""}
          />
          <div
            style={{
              height: "450px",
              width: "100%",
              marginTop: "30px"
            }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyBpKF69rgtgYwZWCPeqYhdmD-ARYWMBdQE"
              }}
              center={{
                lat: this.state.lat,
                lng: this.state.lng
              }}
              defaultZoom={16}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) =>
                this.renderMarkers(map, maps)
              }
            />
          </div>
        </div>
        <div className="map" />
        <button className="G-button" onClick={this.props.moveNextPage}>
          Continue
        </button>
      </div>
    );
  }
}

export default LocationAndCategory;
