import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import './Team.scss'

const Team = (props) => {
    const { player, position } = props
    const [listPlayer, setListPlayer] = useState([])
    const [listPosition, setListPosition] = useState([])
    const [updatedListPlayer, setUpdatedListPlayer] = useState(player)
    const [updatedListPosition, setUpdatedListPosition] = useState(position)
    const [selectedPlayer, setSelectedPlayer] = useState([])
    const [selectedPosition, setSelectedPosition] = useState([])

    useEffect(() => {
        setListPlayer(player)
        setListPosition(position)
        setUpdatedListPlayer(player)
        setUpdatedListPosition(position)
    }, [player, position])

    const handlePlayer = (value, index) => {

        const play = selectedPlayer
        play[index] = value
        setSelectedPlayer(play)
        const filteredPlayers = play.filter(item => item !== null)
        const players = []
        for (let i = 0; i < updatedListPlayer.length; i++) {
            var isavailable = false
            for (let j = 0; j < filteredPlayers.length; j++) {
                if (updatedListPlayer[i].label === filteredPlayers[j].label) {
                    isavailable = true
                }
            }
            if (isavailable === false) {
                players.push(updatedListPlayer[i])
            }
        }
        setListPlayer(players)
    }
    const handlePosition = (value, index) => {
        const pos = selectedPosition
        pos[index] = value
        setSelectedPosition(pos)
        const filteredPositions = pos.filter(item => item !== null)
        const positions = []
        for (let i = 0; i < updatedListPosition.length; i++) {
            var isavailable = false
            for (let j = 0; j < filteredPositions.length; j++) {
                if (updatedListPosition[i].label === filteredPositions[j].label) {
                    isavailable = true
                }
            }
            if (isavailable === false) {
                positions.push(updatedListPosition[i])
            }
        }
        setListPosition(positions)
    }

    const dropdownlist = () => {
        const list = [1, 2, 3, 4, 5]
        return (
            <>
                {list.map((value, index) => (
                    <>
                        <Select
                            className='select'
                            value={selectedPlayer[index]}
                            onChange={(value) => handlePlayer(value, index)}
                            placeholder='Name'
                            options={listPlayer}
                        />
                        <Select
                            className='select'
                            value={selectedPosition[index]}
                            onChange={(value) => handlePosition(value, index)}
                            placeholder='Position'
                            options={listPosition}
                        />
                    </>
                ))}
            </>
        )
    }
    return (
        <div>
            <div className='select-container'>
                {dropdownlist()}
            </div>
            <button className='button'>Save</button>
        </div>
    )
}
export default Team