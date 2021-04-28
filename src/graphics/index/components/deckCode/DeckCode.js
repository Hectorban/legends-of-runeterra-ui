import React from 'react';
import QRCode from 'qrcode.react'

import "./DeckCode.scss"

const DeckCode = ({deckCode}) => {
    return (
        <div className="code-container">
            <QRCode
            className="qr-code"
            value={deckCode}
            size={160}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"L"}
            includeMargin={false}
            renderAs={"svg"}
            />
        </div>
    );
};

export default DeckCode;