# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Step-by-step - API Consume

- Criar aplicação:  
  `npx create-react-app app-name --template typescript`

- Manter somente `index.html` na pasta `public`

- Limpar links e meta tags do `index.html`

- Manter somente `App.tsx`, `index.tsx`, `react-app-env.d.ts` e `setupTest.ts` na pasta `src`

- Limpar imports dos arquivos `App.tsx` e `index.tsx`

- Instalar pacote `axios`:  
  `yarn add axios`

- Criar pasta `service` para receber os arquivos que armazenarão as funções que consumirão a api.

- Criar arquivo `NomeService.ts`

- Criar `interface` com todas as funções que a sua função service retornará

- Criar função service retornando um objeto com as funções que você implementou na `interface`

Exemplo de função de retorno do service function:

`loadData: async () => {`  
`const response = await axios.get<type>('apiLink')`
`return response.data`  
`}`

- Criar estado, (`useState`), que receberá o array de dados que a `API` retornará:

`const [state, setState] = useState<type[]>([])`

- Criar função responsável por chamar o service e executar a função do service para receber os dados da `API` e salvar os dados no `state`.  
  (Recomendo a utilização do hook `useCallback`), exemplo:

`const loadData = useCallback(async () => {`  
`const data = await NomeService().loadData()`
`setState(data)`  
`}, [])`

- Criar observador, (`useEffect`), que executará método responsável por carregar os dados da `API`, exemplo:

`useEffect(() => {`  
`loadData()`  
`}, [loadData])`

- Imprimir os dados na tela através de um

`array.map(({title}) => (<div>{title}</div>))`
