# My React Modal Plugin : milooz-modal-ts-rc

A simple Modal Plugin for React applications.

## 1.Installation

```bash
npm install milooz-modal-ts-rc
  OR
pnpm install milooz-modal-ts-rc
```

## 2.Settings

#### package.json

```json
{
  "name": "milooz-modal-ts-rc",
  "version": "0.0.6",
  "description": "A React component library built with TypeScript",
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "files": [
    "dist"
  ],
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "rollup -c",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "react",
    "typescript",
    "component",
    "ui"
  ],
  "author": "",
  "license": "MIT",
  "type": "module",
  "devDependencies": {
    "@rollup/plugin-commonjs": "^25.0.0",
    "@rollup/plugin-node-resolve": "^15.0.0",
    "@rollup/plugin-typescript": "^11.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "rollup": "^3.0.0",
    "rollup-plugin-dts": "^5.0.0",
    "typescript": "^5.0.0",
    "tslib": "^2.3.1"
  },
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  }
}
```

## 3.Usage

##### You can Create a Datas special folder in `myProject\src\` and put in some `.json` file to fetch (or use API to remplace current data Flow)

#### Exemple
```bash
mkdir datas
touch mock.json
```

#### Import Modal Component & Datas File if needed

```jsx
//App.tsx
import { useState } from 'react';

import {Modal} from './components/Modal';

import mock from './datas/mock.json';


function App() {

  const  [visibleModal, setVisibleModal] = useState<boolean>(true);

  function closeModal() {
    setVisibleModal(false);
  }

  return (
    <>
      <Modal success={visibleModal} closeModal={() => {closeModal()}} newUser={mock[0]}/>
    </>
  )
}
export default App
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| success | boolean | true | Switch display or hidden modal |
| closeModal | function | closeModal | Setter function for success |
| newUser | array | mock[0] | First block of datas to display for example |


## License
MIT
