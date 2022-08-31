import React, { useState } from 'react'
import { Button} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Axios from 'axios';
import fileDownload from 'js-file-download';





const test = () => {
  console.log('pio')
}

function DownloadButton(props){

  const [info, setInfo] = useState('Download');
  const testUrl = 'http://localhost:3000/test-raw-data.csv'


  const downloadCsv = (csvUrl) => {
    setInfo('downloading CSV file ')
    function download(url: string, filename: string) {
      Axios.get(url, {
        responseType: 'blob',
        onDownloadProgress: (progressEvent) => {
          // const total = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
          // const current = progressEvent.currentTarget.response.length
      
          // let percentCompleted = Math.floor(current / total * 100)
          let loaded = ProgressEvent.loaded 
          // console.log(loaded)
        }
      }).then(res => {
        setInfo('file downloaded')
        fileDownload(res.data, filename);
      });
    }
   
    download(testUrl, 'testfilename.csv')
  
  }


    return(
      <div>
        <Button
        icon={<DownloadOutlined />}
        type="primary"
        size="large"
        onClick={() => downloadCsv(testUrl)}
        /* style={{ color: '#E2F0F7' }} */
      >{info}
      </Button>
      </div>
    )

}

export  {DownloadButton};
