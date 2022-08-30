import { Button, Space, Typography, Layout, Image } from 'antd';
import React from 'react';
import Logo from '../../styles/Images/WhiteLogo.png';
import { DownloadOutlined } from '@ant-design/icons';
const { Text } = Typography;
function FooterContent() {
  return (
    <div>
        <Button
          icon={<DownloadOutlined />}
          type="primary"
          size="large"
          /* href="https://www.humanrightsfirst.org/about" */
          /* style={{ color: '#E2F0F7' }} */
        >Download
        </Button>



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
    <Footer style={{ backgroundColor: '#403737' }}>
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
