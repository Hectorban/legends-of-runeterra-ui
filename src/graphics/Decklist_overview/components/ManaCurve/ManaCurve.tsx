import React, { FC, useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis } from 'recharts'
import { CardType, DDCardDatatype } from '~types/cardTypes'

import ManaPylon from './svg/ManaPylon'

interface Props {
	deck: CardType[]
}

const cardDataRep = nodecg.Replicant<DDCardDatatype[]>('ddCardData')
const ManaCurve:FC<Props> = ({deck}: Props) => {
	const [ddCardInfo, setddCardInfo] = useState<DDCardDatatype[]>()
	useEffect(() => {
		const fetchddCardInfo = () =>{
			NodeCG.waitForReplicants(cardDataRep)
			setddCardInfo(cardDataRep.value)
		}
		fetchddCardInfo()
	}, [])
	if(!ddCardInfo) {
		return (
			<div>
				loading...
			</div>
		)
	}
	const manaCurveData = [
		{
    	"name": "x0",
    	"cost": 0
		}, 
		{
    	"name": "x1",
    	"cost": 0
		}, 
		{
    	"name": "x2",
    	"cost": 0
		}, 
		{
    	"name": "x3",
    	"cost": 0
		}, 
		{
    	"name": "x4",
    	"cost": 0
		}, 
		{
    	"name": "x5",
    	"cost": 0
		}, 
		{
    	"name": "x6",
    	"cost": 0
		}, 
		{
    	"name": "x7",
    	"cost": 0
		}, 
		{
    	"name": "x8",
    	"cost": 0
		},
		{
    	"name": "x9",
    	"cost": 0
		} 
	]
	deck.map((card) => {
		const {code, count} = card
		const cardCost = ddCardInfo[code].cost
		manaCurveData[cardCost].cost += count
	})
	console.log(manaCurveData)
	return (
		<div id='manacurve-containter'>
			<img className='image' src='https://i.imgur.com/CBIJyse.png' alt='' />
			<img className='image' src='https://i.imgur.com/cfcnMJM.png' alt='' />
		</div>
	)
}

export default ManaCurve
