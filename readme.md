<!-- Logo aqui -->

# CNotes - App

Neste repositório será gerenciado o desenvolvimento da aplicação móvel do sistema CNotes. Aqui serão armazenado o código, documentação e afins durante todo o desenvolvimento da aplicação.

---

Essa é uma aplicação desenvolvida por meio do [React-Native](https://reactnative.dev). Sendo inicialmente gerada pelo `expo init`.

## Build

Para construir, executar e testar o projeto é necessário que as etapas a seguir sejam executadas (dentro da pasta `app/`):

1. Verificar que o [ambiente de desenvolvimento (Expo Quickstart)](https://reactnative.dev/docs/environment-setup) está configurado
   1. Node.js 12
   2. Yarn
   3. Expo
   4. Simulador instalado ou o app do Expo instalado em um dispositivo
2. Instalar as dependências do projeto, executando `yarn` (dentro da pasta `app/`)
3. Executar a aplicação usando `yarn start` ou `yarn run ios/android`

Feito isso, o projeto estará, idealmente, funcionando.

## Documentações

O projeto deve ser documentado no diretório `docs` do repositório, em formato _Markdown_. Lá estarão documentações diversas, desde problemas frequentes até detalhamentos do funcionamento da aplicação e telas.

Documentações dentro do código **não** devem ser substituídas por essas.

## Colaboração

Para colaborar na aplicação será necessário seguir os seguintes requisitos:

### Git

É necessário conhecimento básico sobre o funcionamento do Git e como utilizá-lo. Além disso, o uso de boas práticas de Git é necessário, dentre elas ressalta-se:

1. Commits frequentes e sucintos
2. Uso de branches para qualquer mudança na aplicação
3. Evitar _rebases_ e _force pushes_

### Estilo de código

É recomendado o uso do [Prettier](https://prettier.io) para formatação dos códigos. Alguns editores e IDEs possuem extensões para realizar essa formatação de maneira automática: [guia para integração do Prettier com seu editor](https://prettier.io/docs/en/editors.html)

- [VSCode - Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [WebStorm - Prettier](https://plugins.jetbrains.com/plugin/10456-prettier)
- [Atom - Prettier](https://github.com/prettier/prettier-atom)
- [ViM - Prettier](https://prettier.io/docs/en/vim.html)

Além do Prettier, será usado o [ESLint](https://eslint.org) para garantir a qualidade do código da aplicação. _A fazer_

### Code review

Todo código a ser adicionado na aplicação deve ser antes revisado por ume colega de equipe, a fim de evitar entrada de código defeituoso na aplicação, a colaboração de todos nesse processo de revisão é extremamente importante. Para realizar essa revisão é necessário que toda feature que venha a ser adiciona esteja em uma branch a parte (de preferência com um nome descritivo como: `feature/login`, `fix/validacaoEmail`), que então será mesclada à branch de desenvolvimento por meio de uma _Pull Request_, onde o código será validado e revisado antes de ser enviado.

[Guia: Code-review](https://lontras-e-preguicas.github.io/guides/code-review/)

### Estrutura do projeto

A estrutura do projeto está descrita em [structure](docs/structure.md)
