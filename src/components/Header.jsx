import React from 'react';
import { Button, Space, Typography, Layout, Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../styles/Images/WhiteLogo.png';

function HeaderContent() {
  return (
    <div className="header-content" 
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
      }}
    >
      <div className="hrf-logo">
        <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
      </div>
      <Link to="/">Landing</Link>
      <Link to="/graphs">Graphs</Link>
    </div>
  );
}

export { HeaderContent };
