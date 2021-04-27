import React from 'react';
import QRCode from 'qrcode.react'

import "./DeckCode.scss"

const DeckCode = () => {
    return (
        <div className="code-container">
            <QRCode
            className="QrCode"
            value={"CECAEBAHDIXQGAIFEIYDCAQEAUBRAAICAUCAEBABAUFRSKBUAQCAOAR3KF4QA"}
            size={130}
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