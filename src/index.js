const mongoose = require('mongoose');
const model = require('./database/models/users');
const modelRoles = require('./database/models/roles');
const actionsInsert = require('./database/actions/insert');
const actionsGet = require('./database/actions/get');

mongoose.connect('mongodb://localhost:27017/acamicatale3');

async function start() {
    await actionsInsert.insert(model.userModel, {
        name: 'Jean',
        lastName: 'Alexander',
        email: 'jalexander@gmail.com',
        age: 22,
    });

    const users = await actionsGet.get(model.userModel, { name: 'Jean'});

    await actionsInsert.insert(modelRoles.rolesModel, {
        name: 'Admin'
    });
    await actionsInsert.insert(modelRoles.rolesModel, {
        name: 'Client'
    });
    const roles = await actionsGet.get(modelRoles.rolesModel, {});

    console.log(roles);
}

start();







