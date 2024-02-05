let QRCode = require('qrcode');

QRCode.toFile('./qrcode.png', 'Chal chal apna kaam kar', 
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