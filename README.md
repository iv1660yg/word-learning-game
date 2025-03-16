# Word Learning Game

A React-based web game to help a 4-year-old learn to read.

## Prerequisites

- Docker installed on your machine

## How to Build and Run

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd word-learning-game

2. **Build the Docker Image**  
   ```bash
    docker build -t word-learning-game .

3. **Run the Docker Container**
    ```bash
    docker run -p 8080:80 word-learning-game

4. **Access the Game**
    Open your browser and go to http://localhost:8080.

## Notes
Ensure your browser supports the Web Speech API (e.g., Chrome, Firefox).
Use a desktop or tablet with a modern browser for the best experience.


---

## Additional Setup Notes

- **Folder Structure**:
  - `src/`: Contains `App.js`, `App.css`, and a `components/` folder.
  - `src/components/`: Contains `WordDisplay.js`, `LetterButton.js`, `SentenceDisplay.js`, and their respective CSS files.
  - `Dockerfile` and `README.md` are in the project root.

- **Running Without Docker**:
  If you prefer not to use Docker, ensure you have Node.js installed, then:
  ```bash
  npm install
  npm start