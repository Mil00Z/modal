# My React Modal Plugin : milooz-modal-ts-rc

A simple Modal Plugin for React applications.

## 1.Installation

```bash
npm install milooz-modal-ts-rc
  OR
pnpm install milooz-modal-ts-rc
```

## 2.Settings

### Scripts, PeerDependencies
```json
{
  "name": "milooz-modal-ts-rc",
  "version": "0.0.3",
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

### Import Modal Component in JSX/TSX files
```jsx
//App.tsx
import { useState } from 'react';

import {Modal} from './components/Modal';

function App() {

  const  [visibleModal, setVisibleModal] = useState<boolean>(true);

  function closeModal() {
    setVisibleModal(false);
  }

  return (
    <>
        <Modal 
          success={visibleModal} 
          closeModal={() => {closeModal()}} 
          newUser={{firstName:"John",lastName:"Doe"}}
        />
    </>
  )
}
export default App
```

## 4.Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| success | boolean | true | Switch display or hidden modal |
| closeModal | function | closeModal | Setter function for display Modal |
| newUser | object | {firstName:"John",lastName:"Doe"}  | Exemple of datas to display |


##### You can create a special Data file like `mock.json` & use in place of `newUser={mock[0]}` Props (or get some Datas from API)

#### Exemple
```bash
touch mock.json
```

```jsx
  import mock from './mock.json';

  return (
    <Modal 
      success={visibleModal} 
      closeModal={() => {closeModal()}} 
      newUser={mock[0]}
    />
  )
```

## License
MIT
