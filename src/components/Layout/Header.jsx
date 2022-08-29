import React from 'react';
import { Button, Space, Typography, Layout, Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';

function HeaderContent() {
  return (
    <div className="header-content" 
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#403737' 
      }}
    >
      <div className="hrf-logo">
        <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
      </div>
      <Link to="/" style={{ color: '#E2F0F7' }}>Landing</Link>
      <Link to="/graphs" style={{ color: '#E2F0F7' }}>Graphs</Link>
    </div>
  );
}

export { HeaderContent };
