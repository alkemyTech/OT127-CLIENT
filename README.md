# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Componente Progress

Muestra una barra que da un feedback al usuario mientras se esté cargando un recurso.

El componente ya viene con valores por defecto y se puede utilizar solo.

```
<Progress />
```

Si se de sea personalizar se puede hacer mediante props. Se puede modificar el color principal con primaryColor, el color de fondo con backgroundColor, la altura de la barra con height y redondear los bordes con borderRadius

Ejemplo de uso:

```
<Progress primaryColor= "#dc2626" backgroundColor= "#808080" height={10} borderRadius={5} />
```

primaryColor y backgroundColor reciben valores hexadecimales y rgb en formato string.

height y borderRadius reciben valores numericos que se representan en px. height={10} borderRadius={5} representa 10px y 5px respectivamente.
