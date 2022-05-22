/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react'
import {useFormik} from 'formik'

const deckCodeRep = nodecg.Replicant("deckCodeRep")

const DeckInput:FC = () => {
    const formik = useFormik({
        initialValues: {
            deckCode: 'CECAEBAHDIXQGAIFEIYDCAQEAUBRAAICAUCAEBABAUFRSKBUAQCAOAR3KF4QA',
            name: "Alysanne"
        },
        onSubmit: (values: unknown) => {
            deckCodeRep.value = values
        }
    })

	return (
    <form className='deckCode-form' onSubmit={formik.handleSubmit}>
        <label className='deck-code-label' htmlFor='deckCode'>Manual deck code and name</label>
        <input
        className='input'
        id='deckCode'
        name='deckCode'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.deckCode}
        />
        <label id='deck-code-label' htmlFor='name'>Nombre</label>
        <input
        className='input'
        id='name'
        name='name'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.name}
        />
        <button className='deckCode-form-submitbutton' type='submit'>Actualizar</button>
    </form>
	)
}

export default DeckInput
