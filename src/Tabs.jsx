import React, { useState } from 'react'
import './App.css';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import Player from './Player'
import Team from './Team'

const Tab = () => {
    const { TabPane } = Tabs;
    const [player, setPlayer] = useState([])
    const [position, setPosition] = useState([])
    const playerList = (values) => {
        const list1 = position
        const positionData = {
            label: values.position.label, value: values.position.value
        }
        list1.push(positionData)
        setPosition(list1)
        const list = player
        const data = {
            label: values.firstName + values.lastName, value: values.firstName + values.lastName
        }
        list.push(data)
        setPlayer(list)
    }
    return (
        <div className='tab-container'>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Compose Team" key="1">
                    <Player onClick={(values) => playerList(values)} />
                </TabPane>
                <TabPane tab="First Quarter" key="2">
                    <Team player={player}
                        position={position}
                    />
                </TabPane>
            </Tabs>
        </div>
    )
}
export default Tab