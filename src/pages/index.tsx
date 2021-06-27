import './index.less';
import { Button, Row,Col } from 'antd';
import { history } from 'umi';
// import { DownloadOutlined } from '@ant-design/icons';

export default function IndexPage() {
  let size = "large"

  function click(){
    history.push("/users/index")
  }

  return (
    <div className='center'>
      <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col>
          <Button type="primary" shape="round" onClick={click} size={size}>
            Login
          </Button>
        </Col>
      </Row>
    </div>
  );
}
