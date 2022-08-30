import { Button, Space, Typography, Layout, Image } from 'antd';
import React from 'react';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';

const { Text } = Typography;
const { background_color, primary_accent_color, secondary_accent_color } = colors;

function FooterContent() {

  const downloadBtnInfo = {
    BTN_TXT:'Download all data',
    MSG_LOADING:'Downloading all data...',
    DOWNLOAD_TXT:'downloading CSV file',
    MSG_DOWNLOAD_FINISHED:'Downloading finished',
    STYLING:{background: '#404C4A', color:'#FFFFFF' , borderColor:'#8D8D99'}
  }

  return (
    <div>
      <div className='download-btn-container'>
        <DownloadButton className='download-btn' downloadBtnInfo={downloadBtnInfo} />
      </div>
      {/*logo*/}
      <div>
        <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
      </div>
      <Space className="footer-container" direction="horizontal">
        <Space direction="vertical" align="start">
          {/*contact info*/}
          <Text style={{ color: 'white' }}>
            Human Rights First
            <br />
            75 Broad St, 31st Floor, New York,
            <br />
            New York, New York 10004 US
          </Text>
          {/*media contact*/}
          <Text style={{ color: 'white' }}>
            For Media Inquiries call 202-370-3323
          </Text>
        </Space>
      </Space>
    </div>
  );
}

function SubFooter() {
  const { Footer } = Layout;
  return (
    <Footer style={{ 
      backgroundColor: primary_accent_color, 
    }}>
      <Space direction="horizontal">
        <Button
          type="text"
          size="small"
          href="https://www.humanrightsfirst.org/about"
          style={{ color: 'white' }}
        >
          About Us
        </Button>
        <Button
          type="text"
          size="small"
          href="https://www.humanrightsfirst.org/about/contact"
          style={{ color: 'white' }}
        >
          Contact Us
        </Button>
        <Button
          type="text"
          size="small"
          href="https://www.humanrightsfirst.org/press"
          style={{ color: 'white' }}
        >
          Press
        </Button>
        <Button
          type="text"
          size="small"
          href="https://www.humanrightsfirst.org/about/privacy-policy"
          style={{ color: 'white' }}
        >
          Terms & Privacy
        </Button>
        <Button
          type="text"
          size="small"
          href="https://www.humanrightsfirst.org/sign-up"
          style={{ color: 'white' }}
        >
          Sign Up
        </Button>
        <Button
          type="text"
          size="small"
          href="http://www.humanrightsfirst.org/careers"
          style={{ color: 'white' }}
        >
          Careers
        </Button>
      </Space>
    </Footer>
  );
}

export { FooterContent, SubFooter };
