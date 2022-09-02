import React from 'react';
import { Button, Space, Typography, Layout, Image } from 'antd';
import Logo from '../../styles/Images/WhiteLogo.png';
<<<<<<< HEAD
import { colors } from '../../styles/data_vis_colors';

import '../../styles/RenderLandingPage.less';
import { DownloadOutlined } from '@ant-design/icons';
=======
import { DownloadButton } from '../common/DownloadButton'
>>>>>>> 42a7cab (addedd Downloadbutton as component)
const { Text } = Typography;
const { primary_accent_color } = colors;

function FooterContent() {

  const downloadBtnInfo = {
    DOWNLOAD_URL:'http://localhost:3000/test-raw-data.zip',
    BTN_TXT:'poipoi Report .csv',
    MSG_LOADING:'Downloading data...',
    DOWNLOAD_TXT:'downloading CSV file',
    MSG_DOWNLOAD_FINISHED:'Downloading finished',
    CSV_FILENAME:'Asylum_Report.zip'
  }

  return (
    <div>
        <DownloadButton downloadBtnInfo={downloadBtnInfo} />
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
  const base_url = 'https://www.humanrightsfirst.org';
  const button_links_by_text = {
    'About Us': `${base_url}/about`,
    'Contact Us': `${base_url}/about/contact`,
    Press: `${base_url}/press`,
    'Terms & Privacy': `${base_url}/about/privacy-policy`,
    'Sign Up': `${base_url}/sign-up`,
    Careers: `${base_url}/careers`,
  };
  return (
    <Footer style={{ backgroundColor: '#404C4A' }}>
      <Space direction="horizontal">
        {Object.entries(button_links_by_text).map(text_link_pair => {
          return (
            <Button
              type="text"
              size="small"
              href={text_link_pair[1]}
              style={{ color: 'white' }}
            >
              {text_link_pair[0]}
            </Button>
          );
        })}
      </Space>
    </Footer>
  );
}

export { FooterContent, SubFooter };
