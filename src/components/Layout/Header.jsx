import React from 'react';
import { Button, Space, Typography, Layout, Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';

const { background_color, primary_accent_color, secondary_accent_color } = colors;

function HeaderContent() {
  return (
    <div className="header-content" 
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
      </div>
      <Link to="/" style={{ color: '#E2F0F7' }}>Home</Link>
      <Link to="/graphs" style={{ color: '#E2F0F7' }}>Graphs</Link>
    </div>
  );
}

export { HeaderContent };
