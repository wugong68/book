import { Table,Row,Col,Card,Input } from 'antd';
import {FileAddOutlined} from '@ant-design/icons'
import React, { useEffect, useState } from 'react';
import servicesget from '../services/serviceget'

const columns = [
    {
      title: 'Time',
      dataIndex: 'Time',
    },
    {
      title: 'Fucntion',
      dataIndex: 'Fucntion',
      sorter: {
        compare: (a:any, b:any) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Sent',
      dataIndex: 'Sent',
      sorter: {
        compare: (a:any, b:any) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'Received',
      dataIndex: 'Received',
      sorter: {
        compare: (a:any, b:any) => a.english - b.english,
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
  
  function onChange(pagination:any, filters:any, sorter:any, extra:any) {
    console.log('params', pagination, filters, sorter, extra);
  }

export default function (){

  let newserver = new servicesget();

  const clickit = ()=>{
    alert("addnew")
  };

  return (
    <div style={{width:'80%',margin:'auto'}}>
     <Row>
        <Col flex={3}>
        <TableContent service={newserver} />
        </Col>
        <Col flex={2}>
          <div>
            <h2 style={{ textAlign: 'right' }}>Play</h2>
          </div>
          {newserver.getCardListBy("userid").map((m)=>{
               return(<InputCard title={m.title} data={m.rows} />);
          })}
          <div style={{ clear: 'both' }}></div>
          <AddCard title="add new" click={()=>{clickit()}} />
        </Col>
      </Row> 

      </div>
  );
}



const TableContent: React.FC<{
  service : servicesget
}> = ({ service }) => {

    return (
      <div>
        <h2>Transaction</h2>
        <Table columns={columns} dataSource={service.getTableListBy("userid")} onChange={onChange} />
      </div>
    );
  }
  
const InputCard :React.FC<{
  title : string,
  data  : Array<any>,
}>=({ title,data })=>{

  const[val] = useState(true);

  return (
    <div  style={{float:'right',paddingLeft:'20px'}}>
      
    <Card title={title} bordered={true} style={{ width: '200px' }}>
      {data.map(m=>{
          return (
            <p>
              <Input.Group compact>
                <Input style={{textAlign:'right'}} value={m.amount} prefix={m.data} suffix={m.schema}/>
              </Input.Group>
            </p>
           )
        })}
    </Card>

  </div>
  );
}

const AddCard :React.FC<{
  title : string,
  click : () => void,
}>=({ title,click })=>{
  return (
    <div>
      <div style={{ float: 'right', paddingLeft: '20px', paddingTop: '20px' }}>
        <Card bordered={false} style={{ width: '200px' }}>
        </Card>
      </div>
      <div style={{ float: 'right', paddingLeft: '20px', paddingTop: '20px' }}>
        <Card bordered={true} style={{ width: '200px' }} onClick={()=>{click();}} >
          <div style={{ textAlign: 'center', fontSize: '40' }}>
            <FileAddOutlined style={{ fontSize: '48px', }} />
          </div>
        </Card>
      </div>
    </div>
  );
}