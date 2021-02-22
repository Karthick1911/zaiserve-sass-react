# ZAISERVE SASS

### ⚡️Breakdown
- Built with React
- `Only functional components using hooks`
- Entry point - app.tsx
- Folder structure:
 - Modular - each folder contains all the relevant files needed to make up a particular feature (components, tests, etc).
 - Components directory houses all shared components, reusable both ui and business components
- pages - Include-all typescript route pages
- styles - Include commonly used colors and fonts throughout the app
- utils - Includes all utility files for the app

### 💿 Installation
- Run these commands in the terminal:
- `git clone https://github.com/Karthick1911/zaiserve-sass-react.git`
- `cd zaiserve-sass-react`
- `npm install`
- `npm start`
- The app should open automatically in your browser usually at
- https://localhost:3000/

### Style Guide
- All the component file names and directory names should start with capital letter. Example: `NavItems.tsx` ( component file ) and src/NavBar ( component folder )
- For a route under under `src/pages` it should be a hyphenated-folder like forgot-password with a index.tsx file. All the supporting components for index.tsx should begin with capital letter.
- All the `variables` in the file should be camel cased, except for the constants.
- `Constants` should be in all caps (please note that by constants, we do not refer to the variable defined by const keyword.
- `Function` name of the component should start with capital letter. example: `export const NavItems = () => ...`
- All the function names should be camel cased.
