import React, { useState } from 'react';
import { Button, message, message} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar'
import { loadProgressBar } from 'axios-progress-bar';
import fileDownload from 'js-file-download';
import '../../styles/nprogress.css'
import 'antd/dist/antd.css';
import '../../styles/nprogress.css';
import 'antd/dist/antd.css';

const CSV_FILENAME = 'USCIS_Asylum_Data.zip';
const DEFAULT_DOWNLOAD_URL= 'http://localhost:3000/test-raw-data.zip';
  
const defaultInfo = {
  BTN_TXT:'Download Report .csv',
  MSG_LOADING:'Downloading data...',
  DOWNLOAD_TXT:'downloading CSV file',
  MSG_DOWNLOAD_FINISHED:'Downloading finished',
  STYLING:{background: '#FD8960', color:'#FFFFFF' , borderColor:'#8D8D99'}
};

function DownloadButton(props){
  const { DOWNLOAD_URL, BTN_TXT, MSG_LOADING, DOWNLOAD_TXT, MSG_DOWNLOAD_FINISHED, CSV_FILENAME } = downloadInfo
  const [txt, setTxt] = useState(BTN_TXT);
  const url = process.env.REACT_APP_DOWNLOAD_RAW_CSV_DATA_URL || DOWNLOAD_URL
  const info = props.downloadBtnInfo || defaultInfo;
  const { BTN_TXT, MSG_LOADING, DOWNLOAD_TXT, MSG_DOWNLOAD_FINISHED, STYLING } = info;
  const [txt, setTxt] = useState(BTN_TXT);
  const url = process.env.REACT_APP_DOWNLOAD_RAW_CSV_DATA_URL || DEFAULT_DOWNLOAD_URL;
  const STYLE = STYLING || defaultInfo.STYLING;

  loadProgressBar({showSpinner:false});
   
  const downloadCsv = () => {
    setTxt(DOWNLOAD_TXT);
    message.loading(MSG_LOADING, 0);
    
      Axios.get(url, {
        responseType: 'blob'
      }).then(res => {
        message.destroy();
        message.success(MSG_DOWNLOAD_FINISHED);
        setTxt(BTN_TXT);
        fileDownload(res.data, CSV_FILENAME);
      });
     
  }


    return(
        <Button 
          icon={<DownloadOutlined />}
          type="ghost"
          size="large"
          onClick={() => downloadCsv()}
          style={STYLE}
      >{txt}
      </Button>
    )

}

export  {DownloadButton};
