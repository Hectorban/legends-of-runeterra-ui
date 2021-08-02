import React from "react"
import { DDCardDatatype } from '~types/cardTypes'

const ddragonctx = React.createContext<DDCardDatatype[]>(undefined)
export const DDragonprovider = ddragonctx.Provider

export default ddragonctx