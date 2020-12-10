const Audio = require('../model/audio');

const newAudio = async (req,res) =>{
    console.log(req.body);
    let currentAudio = new Audio(req.body);
    try {
        await currentAudio.save(function (err, audio) {
            if (err) {
                console.log(err);
                return err;
            }
            res.json({status: 201, audio:currentAudio});
        });
    } catch (error) {
        res.json({status: 400, message:err.message});
    }
}

const getAudios = async (req, res)=>{
    let audios;
    try {
        console.log('getAudios function');
        audios = await Audio.find();
        console.log(`audios: ${audios}`);
        if(audios == null){
            res.send('could not find audios list');
        }   
       return res.json({status: 201, audiosData:audios});

        //  res.send({audiosData:audios});

    } catch (error) {
        res.status(404).json({message:error.message});
        
    }
}

const updateAudios = async (req, res)=>{
    console.log(req);
    var updateAudio = req.body;
    console.log(updateAudio);
    try {
      await Audio.findOneAndUpdate(
        { _id: req.body._id },
        updateAudio
      );
      res.json({ updateAudio });
    } catch (error) {
      res.json({ error: error });
    }
}

const deleteAudio = async (req, res) => {
    try {
        await Audio.findByIdAndDelete(req.body.id);
        console.log(`req.body.id: ${req.body.id}`)
        res.status(200).json(req.body.id)
    } catch (error) {
        res.status(401).json({ error })
    }
}


module.exports = {newAudio, getAudios, updateAudios, deleteAudio};