import React, { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: '',
  dotsOptions: {
    color: "#000",
    type: "square"
  },
  backgroundOptions: {
    color: "#ffffff",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 10,
  },
});

function FancyQR({ data, fgColor, bgColor, pattern }) {
  const ref = useRef(null);

  useEffect(() => {
    qrCode.update({
      data,
      dotsOptions: { color: fgColor, type: pattern },
      backgroundOptions: { color: bgColor },
    });

    if (ref.current) {
      ref.current.innerHTML = '';
      qrCode.append(ref.current);
    }
  }, [data, fgColor, bgColor, pattern]);

  return <div ref={ref} />;
}

export { FancyQR, qrCode };
