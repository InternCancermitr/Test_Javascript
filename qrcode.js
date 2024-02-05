let QRCode = require('qrcode');

QRCode.toFile('./qrcode.png', 'https://www.cancermitr.com/', 
    {
        color: {
            dark: '#000',   // Black dots
            light: '#FFF'   // White background
            }
    }, 
    
    function (err) {
    if (err) throw err
    console.log('done')
    }
    
);    