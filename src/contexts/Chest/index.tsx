import React from 'react';


interface IProps {
    children: React.ReactNode
}

export const ChestContext = React.createContext({
    totalChest: 0,
    openedChests: {
        total: 0,
        positions: []
    },
    updateOpenedChests: () => null
})


function ChestProvider(props: IProps) {

    const [chestState, updateChestState] = React.useState({
        totalChest: 2,
        openedChests: {
            total: 0,
            positions: []
        },
        updateOpenedChests: () => {
            console.log('chest')
        }
    })

    return (
        <ChestContext.Provider value={chestState}>{props.children}</ChestContext.Provider>
    )
}

export default ChestProvider;