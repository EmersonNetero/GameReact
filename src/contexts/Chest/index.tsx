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
    updateOpenedChests: (position) => null
})


function ChestProvider(props: IProps) {

    const [chestState, updateChestState] = React.useState({
        totalChest: 2,
        openedChests: {
            total: 0,
            positions: []
        },
        updateOpenedChests: (position) => {
            updateChestState( (prevState) => {
                return {
                    totalChest: prevState.totalChest,
                    openedChests: {
                        total: prevState.openedChests.total + 1,
                        positions: prevState.openedChests.positions.concat(position),
                    },
                    updateOpenedChests: prevState.updateOpenedChests,
                }
            })
        }
    })

    return (
        <ChestContext.Provider value={chestState}>{props.children}</ChestContext.Provider>
    )
}

export default ChestProvider;