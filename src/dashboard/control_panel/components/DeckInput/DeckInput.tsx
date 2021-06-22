/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react'
import {useFormik} from 'formik'

const DeckInput:FC = () => {
    const formik = useFormik({
        initialValues: {
            deckCode: 'DeckCode'
        },
        onSubmit: (values: unknown) => {
            console.log(values)
        }
    })

	return (
    <form className='deckCode-form' onSubmit={formik.handleSubmit}>
        <label htmlFor='deckCode'>Deck Code</label>
        <input
        className='input'
        id='deckCode'
        name='deckCode'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.deckCode}
        />
        <button className='deckCode-form-submitbutton' type='submit'>Actualizar</button>
    </form>
	)
}

export default DeckInput
