'use strict'

const nodecg = require("./utils/nodecg-api-context").get()
const fetch = require("node-fetch");
const cardDataReplicant = nodecg.Replicant("allCardData", {defaultValue: "Esperando datos de las cartas"})

fetch("https://dd.b.pvp.net/latest/core/es_mx/data/globals-es_mx.json")
.then(res => res.json())
.then(async (response) => {
    const cardData = new Object
    const allCardFetch = await Promise.all(
        response.sets.map(async (set, i) => {
            nodecg.log.info(`Fetching ${set.name} data...`)
            await fetch(`http://dd.b.pvp.net/latest/set${i+1}/es_mx/data/set${i+1}-es_mx.json`)
            .then(res => res.json())
            .then((response) =>{
                response.map((card) => {
                cardData[card.cardCode] = {"name": card.name, "cost": card.cost}
                })
            })
        })
    )
    cardDataReplicant.value = cardData
})
