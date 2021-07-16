module.exports.insert = async (model, data) => {
    const modelsaved = new model(data);
    
    await modelsaved.save();
}