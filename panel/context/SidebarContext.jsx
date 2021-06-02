import { createContext, useState, useReducer } from 'react'

export const SidebarContext = createContext()

const initialState = {sidebarOpen: true}

export const SidebarReducer = (state, action) => {
    switch (action.type){
        case "OPEN":
            return {
                sidebarOpen: true
            }
        
        case "CLOSE":
            return { 
                sidebarOpen: false
            }

        default:
            return state
    }
}


export function SidebarProvider({ children }) {
    const [state, dispatch] = useReducer(SidebarReducer, initialState)

    const open = payload => {
        console.log('OPEN', state)
        dispatch({type: 'OPEN', payload})
    }

    const close = payload => {
        console.log('CLOSE', state)
        dispatch({type: 'CLOSE', payload})
    }

    const contextValues = {
        open,
        close
    }

    return (
        <SidebarContext.Provider value={contextValues}>
            {children}
        </SidebarContext.Provider>
    )

}