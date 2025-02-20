# DockMatesStackDemo
Demonstration of DockMates stack and integration

Step 1: Clone the repo
Step 2: Make sure you have docker installed
Step 3: In the repo folder run the command: docker compose up -d --build
  - This will take a minute or two depending on your internet speed the first time you run it as it downloads things
  - if the backend fails to launch (idk why but sometimes it does the first time) run the command again
Step 4: Check that each system is up in running in docker desktop
Step 5: To access the frontend in a browser go to http://localhost:3000/
  - You should see a message on the screen and in the inspect window console you can see where it fetched the user data from the backend.
Step 6: To shut in the repo folder run: docker compose down
