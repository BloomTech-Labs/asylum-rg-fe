import React from 'react';
import { Button} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function DownloadButton(props){

    return(

        <Button
        icon={<DownloadOutlined />}
        type="primary"
        size="large"
        /* href="https://www.humanrightsfirst.org/about" */
        /* style={{ color: '#E2F0F7' }} */
      >Download
      </Button>
    )

}

export  {DownloadButton};
