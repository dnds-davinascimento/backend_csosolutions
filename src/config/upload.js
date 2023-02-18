const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage ({
        destination : path.resolve(__dirname,'..','..','uploads'),
        filename : (req, file, cb ) => {

            const originalName = file.originalname;
            const nameWithoutSpaces = originalName.replace(/ /g, '_'); // substitui espaços por sublinhados
            const ext = path.extname(nameWithoutSpaces);
            const timestamp = Date.now();
            const finalName = `${nameWithoutSpaces}-${timestamp}${ext}`;
            cb(null, finalName);
        },
    }),
};