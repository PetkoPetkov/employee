Application consumes Rest api. Angular for frontend and nodejs for backend

Methods:
method	endpoint	     description
GET	   /employee	     list all employees
GET    /employee/:id	 return a single employee object
POST   /employee	     create new employee object with new ID (send JSON object containing all properties)
PUT    /employee/:id	 update employee information (send JSON object containing all properties)
DELETE /employee/:id	 delete employee

Note: The data in the API resets every 5 minutes.
Note: Sorting functionality by 'age' 

Frontend 
  start server:
    ng serve
    port: 4200
 

Backend 
  nodejs with expressjs
  start server:
    npm run start
	port: 3000
	