# Book Summariser

The **Book Summariser** app is designed to provide quick and efficient summaries of any book. It allows users to input the title or key information about a book, and returns a concise, well-structured summary.

## Features
- **Fast Summaries**: Using the **Gemini 1.5 turbo API**, the app provides summaries in a matter of seconds, optimized for speed and accuracy.
- **User-Friendly Interface**: The app features a clean and intuitive interface with dynamic content rendering using **EJS** and responsive design powered by **CSS** and **Bootstrap**.
- **Seamless Integration**: The backend, built with **NodeJS**, efficiently handles API requests and manages server-side logic.

## Tech Stack
- **Frontend**:
  - **EJS (Embedded JavaScript)**: Used for dynamic rendering of templates and content.
  - **CSS & Bootstrap**: Used to style the app and ensure it is fully responsive on any device.
  - **JavaScript**: Used for client-side logic and dynamic interactions.
  
- **Backend**:
  - **NodeJS**: Powers the backend, handling API requests and response logic.

## API Integration
The app integrates with the **Gemini 1.5 turbo API**, which is known for providing fast yet efficient results. This API helps process and summarize large amounts of text quickly, delivering high-quality summaries.

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/book-summariser.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the Gemini API:
   - Obtain an API key from Gemini's official site.
   - Add the key to your environment variables as `API_KEY`.

4. Start the application:
   ```bash
   node index.js
   ```


## Future Improvements
- Additional language support
- User accounts and history tracking
- Bookmark and download summary options


## Feel free to use the app deployed on Render
Please note that it requires some time to load as the app is in its initial phase, hence has been deployed with minimum CPU memory on server side.
https://book-summariser.onrender.com/summary


---

Feel free to modify or expand on this based on your specific needs!
