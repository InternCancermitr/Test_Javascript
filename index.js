let QRCode = require('qrcode');

QRCode.toFile('./qrcode.png', 'Chal chal apna kaam kar', 
    {
    color: {
      dark: '#00F',  // Blue dots
      light: '#0000' // Transparent background
        }
    }, 
    
    function (err) {
    if (err) throw err
    console.log('done')
    }
    
);   