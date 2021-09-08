# API Consume - Steps

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
