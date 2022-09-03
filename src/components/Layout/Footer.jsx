import React from 'react';
import { Button, Space, Typography, Layout, Image } from 'antd';
import Logo from '../../styles/Images/WhiteLogo.png';
import { DownloadButton } from '../common/DownloadButton'
import '../../styles/styles.css'

const { Text } = Typography;
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
          <Text style={{ color: '#E2F0F7' }}>
            Human Rights First
            <br />
            75 Broad St, 31st Floor, New York,
            <br />
            New York, New York 10004 US
          </Text>
          {/*media contact*/}
          <Text style={{ color: '#E2F0F7' }}>
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
    <Footer style={{ backgroundColor: '#404C4A' }}>
      <Space direction="horizontal">
        <Button
          type="text"
          size="small"
          href="https://www.humanrightsfirst.org/about"
          style={{ color: '#E2F0F7' }}
        >
          About Us
        </Button>
        <Button
          type="text"
          size="small"
          href="https://www.humanrightsfirst.org/about/contact"
          style={{ color: '#E2F0F7' }}
        >
          Contact Us
        </Button>
        <Button
          type="text"
          size="small"
          href="https://www.humanrightsfirst.org/press"
          style={{ color: '#E2F0F7' }}
        >
          Press
        </Button>
        <Button
          type="text"
          size="small"
          href="https://www.humanrightsfirst.org/about/privacy-policy"
          style={{ color: '#E2F0F7' }}
        >
          Terms & Privacy
        </Button>
        <Button
          type="text"
          size="small"
          href="https://www.humanrightsfirst.org/sign-up"
          style={{ color: '#E2F0F7' }}
        >
          Sign Up
        </Button>
        <Button
          type="text"
          size="small"
          href="http://www.humanrightsfirst.org/careers"
          style={{ color: '#E2F0F7' }}
        >
          Careers
        </Button>
      </Space>
    </Footer>
  );
}

export { FooterContent, SubFooter };
