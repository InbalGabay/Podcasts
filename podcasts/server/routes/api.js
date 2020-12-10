const router = require('express').Router();
const {newAudio, getAudios, updateAudios, deleteAudio} = require('../controller/audio');


router.post('/addNewAudio', newAudio);
router.get('/getAudios', getAudios);
router.post('/updateAudio', updateAudios);
router.post('/deleteAudio', deleteAudio)

module.exports = router;