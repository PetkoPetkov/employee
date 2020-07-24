'use strict';
module.exports = function(app) {

  var employees = require('../repository/employeeRepository');

  app.route('/employee').get(employees.list_all_tasks);
  
  app.route('/employee').post(employees.create_a_task);

  app.route('/employee/:id').get(employees.read_a_task);
  
  app.route('/employee/:id').put(employees.update_a_task);
  
  app.route('/employee/:id').delete(employees.delete_a_task);

};

