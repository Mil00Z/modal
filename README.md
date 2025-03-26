# My Simple React Modal Plugin : milooz-modal-ts-rc

A simple Modal Plugin for React applications.

[![forthebadge](https://forthebadge.com/images/badges/made-with-react.svg)](https://forthebadge.com) 

[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)




## 🛒 1.Installation

```bash
#Use your favorite package manager (pnpm,npm,...)
npm install milooz-modal-ts-rc
  OR
pnpm install milooz-modal-ts-rc
```

## 🎯 2.Settings

### Global Settings
[package.json](https://github.com/Mil00Z/modal/blob/main/package.json)

## 📚 3.Usage

### Import `Modal` Component in JSX/TSX file
```tsx
//App.tsx
import { useState } from 'react';

import {Modal} from 'milooz-modal-ts-rc';

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

## 💡 4.Props
| Prop | Type | Default | Description | Required |
|------|------|---------|-------------|----------|
| success | boolean | true | Switch display or hidden modal | yes
| closeModal | function | closeModal | Setter function for display Modal | yes
| newUser | object | {firstName:"John",lastName:"Doe"}  | Exemple of data to display | yes


You can create a special Data file like `mock.json` & use in React component like `newUser={mock[index]}`(or get some Data from APIs, DBs...)

#### Exemple
```bash
# create a local json data file
touch mock.json
```

```jsx
  import mock from './mock.json';

  // Display First row of data (mock[0])
  return (
    <Modal 
      success={visibleModal} 
      closeModal={() => {closeModal()}} 
      newUser={mock[0]}
    />
  )
```

## 📖 License
[MIT](https://github.com/Mil00Z/modal/blob/main/LICENSE)

