module.exports.get = async (model, data) => {
    return await model.find(data);
}