import React, { FC } from 'react'
import QRCode from 'qrcode.react'

interface Props {
	deckCode: string
}
const DeckCode:FC<Props> = ({deckCode}: Props) => (
	<div id='deckcode-container'>
		<QRCode
			className='deckcode-qr'
			value={deckCode}
			size={200}
			bgColor="#ffffff"
    	    fgColor="#000000"
    	    level="L"
    	    includeMargin={false}
    	    renderAs="svg"
		/>
	</div>
)

export default DeckCode
