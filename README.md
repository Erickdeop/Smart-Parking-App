# Smart Parking Webapp

## This is the repository of the smart parking app, a project of the Projeto Integrado subject @ UFRJ.

![smart-parking-logo](https://github.com/Erickdeop/Smart-Parking-App/blob/main/src/assets/smart-parking-logo.png 'Smart Parking')

## Install steps:

### Download and install Node.js:

- Windows: https://nodejs.org/en/download
- Linux: Execute the following commands in a terminal window:

  ```
  sudo apt update
  sudo apt install nodejs
  ```

### Clone this repository with the command

```
git clone
```

### Execute the project

#### FrontEnd
- To install node dependencies, open the cloned directory and, at the root,
  execute in a terminal window:
  ```
  npm install
  ```
- Also at the root, to see it in localhost:
  ```
  npm run dev
  ```

#### BackEnd
- Also install the node dependencies in the server directory using the same comand:
  ```
  npm install
  ```
- Install the pyserial lib to run the sync-write.py script:
  ```
  pip install pyserial
  ```
- Install the [MFRC522.h lib](https://github.com/miguelbalboa/rfid) to upload the arduino program to the arduino board.

### Run ./run at the root
