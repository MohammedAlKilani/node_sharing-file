const filedata =require("./data file")


async function handledownload(req, res){
    
    const fileip = await filedata.findById(req.params.id)
    res.download(fileip.path,fileip.filename)
    console.log(fileip.path) 
    console.log(fileip.filename) 
    
}


module.exports = handledownload