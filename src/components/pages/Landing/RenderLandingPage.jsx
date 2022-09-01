import React from 'react';
import WhiteLogo from '../../../styles/Images/WhiteLogo.png';
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/HRF2.png';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="main">
      <div className="header">
        <div className="hrf-logo-img-container">
          <a href="https://www.humanrightsfirst.org/">
            <img src={WhiteLogo} alt="Human Rights First white logo" />
          </a>
        </div>
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      <div className="graphs-section">
        <div className="grant-rates-by-office-graph-container">
          <img
            src={GrantRatesByOfficeImg}
            alt="Grant Rates By Office Graph"
            className="gr-office-img"
          />
          <p>Search Grant Rates By Office</p>
        </div>
        <div className="grant-rates-by-nationality-container">
          <img
            src={GrantRatesByNationalityImg}
            alt="Grant Rates By Nationality Graph"
            className="gr-nationality-img"
          />
          <p>Search Grant Rates By Nationality</p>
        </div>
        <div className="grant-rates-over-time-container">
          <img
            src={GrantRatesOverTimeImg}
            alt="Grant Rates Over Time Graph"
            className="gr-overtime-img"
          />
          <p>Search Grant Rates Over Time</p>
        </div>
      </div>
      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
        >
          View More Data
        </Button>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>

      <div className="bottom-section">
        <h1>Systemic Disparity Insights</h1>
        <div className="data-container">
          <div className="first-data-point-container">
            <h2>-16%</h2>
            <h3>
              By the end of the Trump administration, asylum office grant rates
              had fallen from 44 percent in fiscal year 2016 to 28 percent in
              fiscal year 2020
            </h3>
          </div>
          <div className="second-data-point-container">
            <h2>5%</h2>
            <h3>
              The New York asylum office grant rate dropped to 5 percent in
              fiscal year 2020
            </h3>
          </div>
          <div className="third-data-point-container">
            <h2>6x Lower</h2>
            <h3>
              Between fiscal year 2017 and 2020, the New York asylum office’s
              average grant rate was six times lower than the San Francisco
              asylum office
            </h3>
          </div>
        </div>
        <a href="https://www.humanrightsfirst.org/resource/uscis-records-reveal-systemic-disparities-asylum-decisions">
          <div className="read-more-btn">
            <Button
              type="default"
              style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            >
              Read More
            </Button>
          </div>
        </a>

        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
