# 4140S21_Group1

CSCI 4140 Summer 2021 Group 1

Instructor: Chris Liu @gang

Group TA: Yuganthi Krishnamurthy @yuganthi

Team members:
Adama Camara @acamara 
Arup Paul @apaul
Clarizze France Santos @csantos
Sijia Han @sijia 

# How to run SQL script

1. Download the G1-Assignment1.sql from our zip file or from our GitLab repository: https://git.cs.dal.ca/apaul/4140s21_group1.git
2. Open your MySQL Workbench. 
3. Connect your MySQL Workbench to a local database server.
4. Create a new schema in the connected server and give it a name say “4140a1g1”.
5. Go to File>Open SQL Script>Select G1-Assignment.sql
6. At line 1, Enter the SQL command: use 4140a1g1; 
7. Execute the script.
8. Once the scripts shows executed successfully, right-click on the schema name “4140a1g1” on the right Navigator>Schemas panel and select “Refresh All”.
9. The database is ready and its tables and columns are visible by expanding the arrows under the Navigator panel.

# Running the Application's API (A2)

1. Clone the repository onto local machine.
2. Connect to Dalhousie server with Cisco VPN Networks.
3. Open a command-line tool.
4. Change to A2 folder using the command ‘cd A2’
5. Install Node.js if your computer doesn't have it using ‘npm install’ to install new dependencies.
6. Enter ‘npm start’ to start the application process
7. Server will be running on http://localhost:9001/ 
8. To access a specific route, type in http://localhost:9001/ in the link + your desired endpoint. The list of endpoints can be found in the assignment documentation submitted on Brightspace.

# Running the Application's API (A3)

1. Clone the repository onto local machine (https://git.cs.dal.ca/apaul/4140s21_group1.git). 
2. Connect to Dalhousie server with Cisco VPN Networks.
3. Open a command-line tool. 
4. Change to A3 folder using the command ‘cd A3’.
5. Install Node.js if your computer doesn't have it using ‘npm install’ to install new dependencies. 
6. Enter ‘npm start’ to start the application process.
7. Server will be running on http://localhost:3000/  
8. Type in http://localhost:3000/ in the link + your desired endpoint.

# Running the Application's API (A4)

Requirements: 
-  Node.js 
-  Cisco VPN Networks.
-  The app requires running the server first (which is A3), then the Front-end.
-  The server uses port 3000, and the Front-end will be automatically set t0 port 3001.

1. Clone the repository onto the local machine (https://git.cs.dal.ca/apaul/4140s21_group1.git).
2. Connect to Dalhousie server with Cisco VPN Networks. 
3. Open a command-line tool. 
4. Change to A3 folder using the command ‘cd A3’.
5. Install Node.js if your computer doesn't have it, using ‘npm install’ to install new dependencies. 
6. Enter ‘npm start’ to start the application process.
7. Server will be running on http://localhost:3000/. 
8. Open a new terminal and cd to Front-end/app.
9. Install the dependencies using “npm install”. 
10. Then do "npm start” to start the front-end application.  