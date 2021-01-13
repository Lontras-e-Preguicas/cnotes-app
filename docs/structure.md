# Estrutura do projeto

A estrutura do projeto é algo volátil, uma vez que, ao dificuldades de organização aparecerem, ela será alterada. Em vista disso, sinta-se livre para sugerir mudanças na organização da estrutura do projeto. Segue, inicialmente, uma sugestão estrutural e a estrutura atual do projeto.

## Sugestão

```
...
- index.js # Ponto de entrada
- src/
  - App.js # Componente principal da aplicação
  - routes.js # Definição das rotas da aplicação
  - assets/ # Recursos como fontes e imagens a serem usados na aplicação
    - fonts/
    - images/
  - components/ # Componentes da aplicação (ex: botões, tiles e representações completas)
    - containers/ # Containers gerenciam a parte lógica de uma tela, posicionando outros componentes e encaminhando callbacks para ações
    - presentational/ # Componentes presentacionais tem maior potencial de reuso, geralmente apresentam menor carga lógica e são mais reusáveis
  - config/ # Arquivos de configuração e padronização
    - strings.js # Textos da interface e aplicação
    - colors.js # Definição de cores comuns da aplicação
    - typography.js # Definição dos padrões de tipografia da aplicação
    - spacings.js # Definição de escalas de espaçamento
    - constants.js # Definição de demais constantes usadas na aplicação
  - database/ # Gerenciamento de bancos de dados da aplicação
  - screens/ # Definição das telas da aplicação
  - store/ # Gerenciamento de estado pelo Redux (ou semelhante)
    - actions/
    - reducers/
    - middlewares/ # Se for necessário criar middlewares
    - sagas/ # Ou semelhante, para gerenciamento de estado
  - utils/ # Utilitários utilizados pela aplicação, geralmente trechos de código que se repetem muito frequentemente
```

### Organização atual

```
...
- index.js # Ponto de entrada
- src/
  - App.js # Componente principal da aplicação
  - routes.js # Definição das rotas da aplicação
  - assets/ # Recursos como fontes e imagens a serem usados na aplicação
    - fonts/
    - images/
  - components/ # Componentes da aplicação (ex: botões, tiles e representações completas)
    - containers/ # Containers gerenciam a parte lógica de uma tela, posicionando outros componentes e encaminhando callbacks para ações
    - presentational/ # Componentes presentacionais tem maior potencial de reuso, geralmente apresentam menor carga lógica e são mais reusáveis
  - config/ # Arquivos de configuração e padronização
    - strings.js # Textos da interface e aplicação
    - colors.js # Definição de cores comuns da aplicação
    - typography.js # Definição dos padrões de tipografia da aplicação
    - spacings.js # Definição de escalas de espaçamento
    - constants.js # Definição de demais constantes usadas na aplicação
  - screens/ # Definição das telas da aplicação
```

No momento, essa é a organização vigente, nem tudo está implementado ainda, mas assim deve ir seguindo.
