import React, {useEffect} from 'react'
import {Formik, Form, Field, FormikHelpers} from 'formik'

interface Values {
  player1: string,
  player2: string
}

function PlayerSelect({allPlayerData}) {
  return (
    <div>
      <Formik
        initialValues={{
          player1: allPlayerData[0].puuid,
          player2: allPlayerData[1].puuid
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          nodecg.sendMessage('playerSelection', values)
          setSubmitting(false);
        }}
      >
        <Form>
          <Field as="select" name="player1">
            {allPlayerData && allPlayerData.map(player => {
              const {game_name, puuid} = player 
              return (
                <option value={puuid}> {game_name} </option>
              )
            })}
          </Field>
          <Field as="select" name="player2">
            {allPlayerData && allPlayerData.map(player => {
              const {game_name, puuid} = player 
              return (
                <option value={puuid}> {game_name} </option>
              )
            })}
          </Field>
          
          <button className='deckCode-form-submitbutton' type='submit'>Actualizar</button>
        </Form>
      </Formik>
    </div>
  )
}

export default PlayerSelect