import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CitizenshipMapAll from './HeatMaps/CitizenshipMapAll';
import CitizenshipMapSingleOffice from './HeatMaps/CitizenshipMapSingleOffice';
import TimeSeriesAll from './HeatMaps/TimeSeriesAll';
import OfficeHeatMap from './HeatMaps/OfficeHeatMap';
import TimeSeriesSingleOffice from './HeatMaps/TimeSeriesSingleOffice';
import YearLimitsSelect from './YearLimitsSelect';
import ViewSelect from './ViewSelect';
import { dummy_data } from './dummy_data';
import axios from 'axios';

function MapWrapper(props) {
  const { set_view } = props;
  const { office, view } = useParams();
  const [query_received_data, set_query_received_data] = useState([]);
  let map_to_render;
  if (!office) {
    switch (view) {
      case 'time-series':
        map_to_render = TimeSeriesAll;
        break;
      case 'office-heat-map':
        map_to_render = OfficeHeatMap;
        break;
      case 'citizenship':
        map_to_render = CitizenshipMapAll;
        break;
      default:
        break;
    }
  } else {
    switch (view) {
      case 'time-series':
        map_to_render = TimeSeriesSingleOffice;
        break;
      case 'office-heat-map':
        map_to_render = OfficeHeatMap;
        break;
      case 'citizenship':
        map_to_render = CitizenshipMapSingleOffice;
        break;
      default:
        break;
    }
  }
  function update_query() {
    axios
      .get('localhost:3002/')
      .then(result => {
        set_query_received_data(result.data);
      })
      .catch(err => {
        console.error(err);
      });
  }
  useEffect(() => {
    update_query();
  }, []);
  return (
    <div
      className="map-wrapper-container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        minHeight: '50px',
        backgroundColor: 'white',
        border: '1px solid red',
      }}
    >
      {map_to_render({ query_received_data })}
      <div className="user-input-sidebar-container">
        <ViewSelect set_view={set_view} />
        <YearLimitsSelect update_query={update_query} />
      </div>
    </div>
  );
}

export default MapWrapper;
