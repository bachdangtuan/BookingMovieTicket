import { Tabs } from 'antd';
import React, { useState } from 'react';
import './HomeCSS/Home.css'



const { TabPane } = Tabs;
const App = () => {
  const [tabPosition] = useState('left');


  return (
    <>

      <div class="gs-special-event-en home-title">
        <h2></h2>
      </div>

      <Tabs tabPosition={tabPosition}>
        <TabPane tab={<img src="https://picsum.photos/200" alt="" className='rounded-full' width={50} />} key="1">
          Content of Tab 1
        </TabPane>
        <TabPane tab={<img src="https://picsum.photos/200" alt="" className='rounded-full' width={50} />} key="2">
          Content of Tab 2
        </TabPane>
        <TabPane tab={<img src="https://picsum.photos/200" alt="" className='rounded-full' width={50} />} key="3">
          Content of Tab 3
        </TabPane>
      </Tabs>

    </>
  );
};

export default App;