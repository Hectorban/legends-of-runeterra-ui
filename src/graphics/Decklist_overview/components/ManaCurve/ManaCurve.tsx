/* eslint-disable no-param-reassign */
import React, { FC, useState, useEffect } from 'react'
import { BarChart, Bar, XAxis } from 'recharts'
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
    	"name": "",
    	"cost": 0
		}, 
		{
    	"name": "",
    	"cost": 0
		}, 
		{
    	"name": "",
    	"cost": 0
		}, 
		{
    	"name": "",
    	"cost": 0
		}, 
		{
    	"name": "",
    	"cost": 0
		}, 
		{
    	"name": "",
    	"cost": 0
		}, 
		{
    	"name": "",
    	"cost": 0
		}, 
		{
    	"name": "",
    	"cost": 0
		}, 
		{
    	"name": "",
    	"cost": 0
		},
		{
    	"name": "",
    	"cost": 0
		}, 
		{
    	"name": "",
    	"cost": 0
		} 
	]
	deck.map((card) => {
		const {code, count} = card
		const cardCost = ddCardInfo[code].cost
		manaCurveData[cardCost].cost += count
	})
	manaCurveData.map((datakey) => {
		datakey.name = `x${datakey.cost}` 
	})
	return (
		<div id='manacurve-containter'>
			<img className='manacurve-container-background' src='https://i.imgur.com/Gaf3TJp.png' alt='' />
			<BarChart width={425} height={330} data={manaCurveData}>
				<XAxis dataKey="name" tick={{stroke: '#aa8f61'}}/>
				<Bar dataKey="cost" 
					fill="#00D4D5"
					animationDuration={5000}
					shape={<ManaPylon />} />
  			</BarChart>
		</div>
	)
}

export default ManaCurve
