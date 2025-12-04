npm init -y
npm install @google/dscc
npm install webpack webpack-cli --save-dev
npx webpack --entry ./index.js --output-path ./dist --mode production
