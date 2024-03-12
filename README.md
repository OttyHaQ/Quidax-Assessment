This guide provides steps to execute tests for the Cypress project. 

Prerequisites:
•	A GitHub account (if forking)
•	Node.js and npm installed on your machine (check with node -v, and npm -v commands)

Steps:
1.	Fork or Clone the Repository to your local machine:
If you haven't already, fork this repository on GitHub or clone it using HTTPS.

           https://github.com/OttyHaQ/Quidax-Assessment.git

 If familiar with git, you can use

       git clone https://github.com/OttyHaQ/Quidax-Assessment.git


2.	Open the Project in an IDE (VSCode preferably):

3.	Install Dependencies:
Open a terminal window and navigate to your local copy of the repository.
Run the following command to install the project's dependencies:

  	              npm install

5.	Update Cypress Configuration (if applicable):

6.	Run Cypress Tests:
Once the dependencies are installed, you can run the Cypress tests using:

  	        npm run cy-chrome-headless

This will launch the Cypress Test Runner and execute all tests in the project in headless mode.
You can also use the commands to run in the Cypress test runner GUI
	  
            npx cypress open ( to open cypress test runner GUI)
	          Click on E2E testing
	          Select a browser
	          Click the “Start E2E Testing in <browser>” button
            Click “Run 4 specs” to run all spec files or click the spec each spec file to run the individually.

8.	Viewing Test Results
After test execution is completed, Cypress Test Runner will display the results in an interactive interface.

Issues:
The test for selecting multiple options from the dropdown list and displaying all selected will fail because of a bug in the system. It returns only one selected item instead of all selected.
