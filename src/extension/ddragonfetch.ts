import fetch from 'node-fetch'
import * as nodecgApiContext from './utils/nodecg-api-context'
import { GlobalDatatypes } from '~types/ddragon_globalTypes'
import { DDcardTypes } from '~types/ddragon_cardTypes'

const nodecg = nodecgApiContext.get()
const cardDataRep = nodecg.Replicant('ddCardData')

export default async function ddragonFetch():Promise<void> {
	const globalsFetch = await fetch("https://dd.b.pvp.net/latest/core/es_mx/data/globals-es_mx.json")
	const globalsData:GlobalDatatypes = await globalsFetch.json()
	const cardData = {}
	await Promise.all(
		globalsData.sets.map(async (set, i) => {
			try {
				nodecg.log.info(`Fetching ${set.name} data`)
				const setFetch = await fetch(`http://dd.b.pvp.net/latest/set${i+1}/es_mx/data/set${i+1}-es_mx.json`)
				const setData:[DDcardTypes] = await setFetch.json()
				setData.forEach((card) => {
					cardData[card.cardCode] = {
						"name": card.name,
						"cost": card.cost,
						"type": card.type,
						"supertype": card.supertype
					}
				}) 
			} catch(error){nodecg.log.error(`Set ${set.name} doesn't exists`)}
		})
	)
	cardDataRep.value = cardData
    nodecg.listenFor("ddcardData", (value, ack) => {
        if(ack && !ack.handled) {
            ack(null, cardData[value])
        }
    })
}
ddragonFetch()