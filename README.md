# ClimateLens

**ClimateLens** is a web-based platform designed to raise awareness about climate change by presenting interactive content such as articles, videos, charts, and global warming statistics. The project incorporates a variety of components to deliver an engaging and educational user experience.

## Features

- **Interactive Articles:** Informative articles to educate users about climate change and its impact.
- **Global Warming Charts and Maps:** Visual representations of data for better understanding.
- **Videos and Media Content:** Engaging videos showcasing climate-related phenomena.
- **Discussion Boards:** A platform for users to share ideas and engage in meaningful conversations.
- **Localized Content:** Support for English and French through localized JSON files.
- **FAQs and Events:** Frequently asked questions and an events page to keep users informed.

## Project Structure

The project follows a modular React structure for scalable and reusable components:

- **Public Assets:**
  - Images, videos, and static JSON data files located in the `public` folder.
- **Source Code:**
  - Main application logic in `src/App.js` and `src/index.js`.
  - Reusable components in `src/components/`.
  - Component-specific styles in `src/components/styles/`.

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn package manager

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/mharis337/ClimateLens.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ClimateLens
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`.

## Scripts

- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm test`: Runs tests if applicable.
- `npm run eject`: Ejects the app configuration (use with caution).

## Folder Structure

- **public/**: Contains static assets and JSON data for dynamic content.
- **src/**: Core React application files, organized into:
  - **components/**: React components for various UI features.
  - **components/styles/**: CSS styles for components.
- **package.json**: Configuration file for the project dependencies and scripts.

## Contribution

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or feedback, please reach out to the maintainer.

