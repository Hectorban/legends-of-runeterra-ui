import fetch from 'node-fetch'
import * as nodecgApiContext from './utils/nodecg-api-context'
import { GlobalDatatypes } from '~types/ddragon_globalTypes'
import { DDcardTypes } from '~types/ddragon_cardTypes'

const nodecg = nodecgApiContext.get()

// This algo is a tower of doom, i hate it, but it's the best way i found to consume and parse the colossal ammount of cards that LoR provides
fetch("https://dd.b.pvp.net/latest/core/es_mx/data/globals-es_mx.json")
.then(res => res.json())
.then(async (response: GlobalDatatypes) => {
	const cardData = {}
	await Promise.all(
		response.sets.map(async (set, i) => {
			nodecg.log.info(`Fetching ${set.name} data...`)
			await fetch(`http://dd.b.pvp.net/latest/set${i+1}/es_mx/data/set${i+1}-es_mx.json`)
			.then(res => res.json())
			.then((response: [DDcardTypes]) => {
				response.map((card) => {
					cardData[card.cardCode] = {
						"name": card.name,
						"cost": card.cost,
						"type": card.type,
						"supertype": card.supertype
					}	
				})
			})
		})
	)
    nodecg.listenFor("ddcardData", (value, ack) => {
        if(ack && !ack.handled) {
            ack(null, cardData[value])
        }
    })
})