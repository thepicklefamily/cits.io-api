#INTRODUCTION:

We are using the jest testing platform with the supertest module.
jest documentation: https://facebook.github.io/jest/
supertest documentation: https://www.npmjs.com/package/supertest


#WHEN TO TEST:

Whenever you think you might've broken something
Whenever you commit
Whenever you submit a pull request


#HOW TO TEST:

Go to the rest-server directory in your terminal and run npm test. This will run all tests in the __tests__ directory.

npm test points to "jest --coverage --silent --forceExit"
-jest is our testing platform
-coverage makes it show a chart of our testing coverage - we want at least 70%
-silent blocks all console logs from showing in the terminal for testing
-forceExit ends the connection - otherwise you'd have to manually end it each time you test


#DROPPING TABLES:

The databases must be dropped and re-created before testing. Currently, this is done with the "beforeAll" statement in auth-tests.js
*If you add a new table, make sure to add the dropping and creation here as well
*The "beforeAll" should always run first even if there additional files added to the __tests__ folder, but that isn't fully confirmed yet.


#TIPS:

-You can have multiple expect statements after each other in 1 test, eg:
expect(response.statusCode).toBe(200);
expect(response.body.username).toBe('avimeowington');
-Refer to auth-tests.js, offical jest and supertest documentation, or stackoverflow for additional examples