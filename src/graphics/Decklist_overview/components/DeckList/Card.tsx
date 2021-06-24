import React, { FC, useState, useEffect } from 'react'
import { CardType } from '~types/cardTypes'

interface Props extends CardType {
    cardNumber: number
}

const cardDataRep = nodecg.Replicant<any>('ddCardData')
const Card:FC<Props> = ({cardNumber, code, count, set, id, faction}:Props) => {
    const [ddCardData, setddCardData] = useState({})

    useEffect(() => {
        const fetcddInfo = async () => {
            await NodeCG.waitForReplicants(cardDataRep)
            setddCardData(cardDataRep.value)
        }
        fetcddInfo()
    }, [])

    if(!ddCardData) {
        return (
            <div>
                Loading...
            </div>
        )
    } 

	return (
		<div>
			a
		</div>
	)
}

export default Card
