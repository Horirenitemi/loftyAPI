const model = require(`./model`);

exports.getAllEntry = async (req, res) => {

    const newData = await model.find()
    res.status(200).json({
        result: true,
        totalEntry: model.lenght,
        data: newData,
    });
};

exports.createEntry = async(req, res) =>{
    const  newData = await  model.create(req, res)
    res.status(201).json("created")
};

exports.getSingleEntry = async(req, res) =>{
    const  newData = await  model.findById(req, params.id)
    res.status(200).json("modify")
};
exports.updateSingleEntry = async(req, res) =>{
    const  newData = await  model.findIdandUpdate(req.params.id, req.body)
    res.status(200).json("updated")
};
exports.deleteSingleEntry = async(req, res) =>{
    const  newData = await  model.findIdAndDelete(req.params.id, req.body)
    res.status(201).json("Delete");
};


