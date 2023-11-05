import React from 'react'
import QRCode from "react-qr-code";

function QrGenerator({link}: {link: string}) {
  return (
    
    <QRCode
    id='QRcode'
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={link}
    viewBox={`0 0 256 256`}
    />

  )
}

export default QrGenerator