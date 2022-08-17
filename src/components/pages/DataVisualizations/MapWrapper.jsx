import React from 'react';
import { useParams } from 'react-router-dom';
import CitizenshipMapAll from './HeatMaps/CitizenshipMapAll';
import CitizenshipMapSingleOffice from './HeatMaps/CitizenshipMapSingleOffice';
import TimeSeriesAll from './HeatMaps/TimeSeriesAll';
import OfficeHeatMap from './HeatMaps/OfficeHeatMap';
import TimeSeriesSingleOffice from './HeatMaps/TimeSeriesSingleOffice';
import YearLimitsSelect from './YearLimitsSelect';
import ViewSelect from './ViewSelect';

function MapWrapper(props) {
  const { setView } = props;
  const { office, view } = useParams();
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
      {map_to_render()}
      <div className="user-input-sidebar-container">
        <ViewSelect setView={setView} />
        <YearLimitsSelect />
      </div>
    </div>
  );
}

export default MapWrapper;
