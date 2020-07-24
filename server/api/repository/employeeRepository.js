'use strict';

var users = [];
var counter = 0;

exports.list_all_tasks = function (req, res) {
    console.log('list_all_tasks', users);
    res.json(users);
};

exports.create_a_task = function (req, res) {
    var employee = req.body;
    employee.id = ++counter;
    console.log('create_a_task', employee);
    if (employee) {
        users.push(employee);
    }
    res.json(counter);
};

exports.read_a_task = function (req, res) {
    var id = req.params.id;
    id = parseInt(id);
    var elem = findElementById(id);
    console.log('read_a_task', elem);
    res.json(elem[0]);
};

exports.update_a_task = function (req, res) {
    var employee = req.body;
    console.log('update_a_task', employee);
    updateElement(employee);
};

exports.delete_a_task = function (req, res) {
    console.log('delete_a_task');
    removeElement(parseInt(req.params.id));
    res.json(users);
};

function removeElement(remId) {
    users = users.filter(function (obj) {
        return obj.id !== remId;
    });
}

function findElementById(readId) {
    return users.filter(function (obj) {
        return obj.id === readId;
    });
}

function updateElement(employee) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === employee.id) {
            users[i] = employee;
        }
    }
}

function clearData() {
    console.log(counter);
    users = [];
}

setInterval(clearData, 5 * 60 * 1000);

