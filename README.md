# cocktail-wp

Cocktail + Webpack. No create-react-app. React, typescript, webpack, babel. Includes linter and prettier baked in. Bootstrap too.

## Setup

Create a `.env` file at root and provide a color value `COLOR=green`

## Quick start

- yarn install
- yarn start
- http://localhost:8080/

## Production build

Build `bundle.js` for deployment. Test it locally. Build in root, and start in `build` folder.

- yarn build
- cd build
- npx serve
- http://localhost:5000/

## Tests

After `yarn install`, simply run `yarn test`
