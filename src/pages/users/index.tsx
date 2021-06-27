import { Table,Row,Col,Card } from 'antd';
import React from 'react';

const columns = [
    {
      title: 'Time',
      dataIndex: 'Time',
    },
    {
      title: 'Fucntion',
      dataIndex: 'Fucntion',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Sent',
      dataIndex: 'Sent',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'Received',
      dataIndex: 'Received',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
  ];
  
  const data = [
    {
      key: '1',
      Time: '2021-06-01 00:00:00',
      Fucntion: "function1",
      Sent: "0x03030303030300303x030303",
      Received: "0x03030303030300303x030303",
    },
    {
      key: '2',
      Time: '2021-06-01 00:00:00',
      Fucntion: "function1",
      Sent: "0x03030303030300303x030303",
      Received: "0x03030303030300303x030303",
    },
    {
      key: '3',
      Time: '2021-06-01 00:00:00',
      Fucntion: "function1",
      Sent: "0x03030303030300303x030303",
      Received: "0x03030303030300303x030303",
    },
    {
      key: '4',
      Time: '2021-06-01 00:00:00',
      Fucntion: "function1",
      Sent: "0x03030303030300303x030303",
      Received: "0x03030303030300303x030303",
    },
    {
      key: '5',
      Time: '2021-06-01 00:00:00',
      Fucntion: "function1",
      Sent: "0x03030303030300303x030303",
      Received: "0x03030303030300303x030303",
    },
    {
      key: '6',
      Time: '2021-06-01 00:00:00',
      Fucntion: "function1",
      Sent: "0x03030303030300303x030303",
      Received: "0x03030303030300303x030303",
    },

  ];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

export default function (){
  return (
    <div style={{width:'80%',margin:'auto'}}>
      {/* <Row>
        <Col span={18} push={6}>
          <TableContent />
        </Col>
        <Col span={6} pull={18}>
          right
        </Col>
      </Row> */}
      <Row>
      <Col flex={3}><TableContent /></Col>
      <Col flex={2}><InputCard title="ETH Scalp"/></Col>
    </Row>
    </div>
  );
}


const TableContent: React.FC<{
}> = ({  }) => {
    return (
      <div>
        <h2>Transaction</h2>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    );
  }
  
const InputCard :React.FC<{
  title : string
}>=({ title })=>{
  return (
    <div className="site-card-border-less-wrapper">
    <Card title={title} bordered={false} style={{ width: 260 }}>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
  );
}