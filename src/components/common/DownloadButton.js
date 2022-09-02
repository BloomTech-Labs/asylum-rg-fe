import React, { useState } from 'react'
import { Button, message} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar'
import fileDownload from 'js-file-download';
import '../../styles/nprogress.css'
import 'antd/dist/antd.css';

const defaultInfo = {
  DOWNLOAD_URL:'http://localhost:3000/test-raw-data.zip',
  BTN_TXT:'Download Report .csv',
  MSG_LOADING:'Downloading data...',
  DOWNLOAD_TXT:'downloading CSV file',
  MSG_DOWNLOAD_FINISHED:'Downloading finished',
  CSV_FILENAME:'Asylum_Report.zip'
}

function DownloadButton(props){
  const info = props.downloadBtnInfo || defaultInfo;
  const { DOWNLOAD_URL, BTN_TXT, MSG_LOADING, DOWNLOAD_TXT, MSG_DOWNLOAD_FINISHED, CSV_FILENAME } = info;
  const [txt, setTxt] = useState(BTN_TXT);
  const url = process.env.REACT_APP_DOWNLOAD_RAW_CSV_DATA_URL || DOWNLOAD_URL

  loadProgressBar({showSpinner:false})
   
  const downloadCsv = () => {
    setTxt(DOWNLOAD_TXT)
    message.loading(MSG_LOADING, 0);
    
      Axios.get(url, {
        responseType: 'blob'
      }).then(res => {
        message.destroy()
        message.success(MSG_DOWNLOAD_FINISHED);
        setTxt(BTN_TXT)
        fileDownload(res.data, CSV_FILENAME);
      });
     
  }


    return(
      <div className='download-btn-container'>
        <Button className='download-btn'
        icon={<DownloadOutlined />}
        type="primary"
        size="large"
        onClick={() => downloadCsv()}
        style={{ background: '#FD8960', color:'#404C4A' , borderColor:'#FD8960'}}
      >{txt}
      </Button>
      </div>
    )

}

export  {DownloadButton};
