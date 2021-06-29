

export default class servicesget {

    getTableListBy(userid:String){
        
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
        
          ]
          return data;
    }

    getCardListBy(userid:String) {
        let cards =[
          {
            title:"title",
            rows: [{
              data: "jua 5",
              amount: 5,
              schema: "ETH",
            }, {
              title: "title2",
              data: "jua 2",
              amount: 2,
              schema: "ETH",
            }]
          },        
          {
            title:"title2",
            rows: [{
              data: "jua 2",
              amount: 2,
              schema: "ETH",
            }, {
              title: "title2",
              data: "jua 2",
              amount: 2,
              schema: "ETH",
            }]
          }
        ]
        return cards;
    }

}