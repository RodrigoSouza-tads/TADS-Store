# TADS Store 

## Sobre o Projeto 
TADS Store é uma aplicação de e-commerce desenvolvida em React com foco em boas práticas de componentização, gerenciamento de estado através de Context API, responsividade e experiência do usuário. 
O projeto simula uma loja virtual de produtos de tecnologia, permitindo: 
- Navegação por categorias 
- Visualização de produtos 
- Página de detalhes do produto 
- Carrinho de compras 
- Favoritos 
- Login e cadastro de usuários 
- Checkout - Confirmação de pedido 
- Alternância de tema claro/escuro 
- Notificações Toast 
- Persistência local de dados


# Tecnologias Utilizadas 
- React 
- React Router DOM 
- Context API 
- CSS Modules / CSS Global 
- LocalStorage 
- DummyJSON API

# Como Executar o Projeto 
Instalar as dependências:
 ```bash npm install ``` 
 Executar o projeto: ```bash npm run dev ``` 
 
 # Usuário de Teste 
 Utilize as credenciais abaixo para acessar o sistema: 
 **E-mail** ```text demo@tadsstore.com ``` 
 **Senha** ```text 123456 ``` 
 Arquivo responsável: ```text src/data/usuarioDemo.js ```
 
 # Estrutura do Projeto 
 ```text src │ ├── components ├── contexts ├── data ├── pages ├── services ├── utils │ ├── App.jsx ├── App.css ├── index.css └── main.jsx ``` 
 
 # Contextos (Contexts) 
 
 Os Contexts são responsáveis pelo gerenciamento global de estados da aplicação. 
 ## AuthContext Responsável pela autenticação do usuário.
  ### Funções - login() - logout() ### Estados - usuario - autenticado ### Finalidade Controlar acesso às rotas privadas e armazenar sessão do usuário. --- 
  ## CarrinhoContext Responsável pelo gerenciamento completo do carrinho. ### Funções - adicionarProduto() - removerProduto() - atualizarQuantidade() - limparCarrinho() 
  ### Estados - itens ### Finalidade Centralizar todas as operações relacionadas ao carrinho de compras. --- 
  ## FavoritosContext Responsável pelo gerenciamento da lista de favoritos. ### Funções - adicionarFavorito() - removerFavorito() - alternarFavorito() 
  ### Estados - favoritos ### Finalidade Permitir que produtos sejam salvos para consulta posterior. --- ## TemaContext Responsável pelo tema da aplicação. 
  ### Funções - alternarTema() 
  ### Estados - tema 
  ### Finalidade Controlar modo claro e escuro em toda a aplicação. --- 
  
  ## ToastContext Responsável pelas notificações da aplicação. ### Funções - mostrarToast() ### Estados - mensagem - visivel ### Finalidade Exibir mensagens temporárias ao usuário. Exemplos: - Produto adicionado ao carrinho - Produto adicionado aos favoritos - Pedido realizado --- 
  
  # Serviços 
  ## apiProdutos.js 
  Responsável pela integração com a API DummyJSON. 
  
  ### Funções 
  - buscarProdutos() 
  - buscarProdutosPorCategoria() 
  - buscarProdutoPorId() 
  - buscarCategorias() 
  
  ### Categorias Utilizadas 
  - laptops 
  - smartphones 
  - tablets 
  - mobile-accessories 
  
  ### Estrutura ```javascript { laptops: [], smartphones: [], tablets: [], "mobile-accessories": [] } ``` --- 
  
  # Utilitários 
  ## formatarPreco.js 
  Formata valores monetários para Real Brasileiro. Exemplo: ```text R$ 1.299,90 ``` --- 
  ## formatarDesconto.js 
  Formata percentuais de desconto. Exemplo: ```text 15% OFF ``` --- 
  ## formatarPeso.js 
  Converte e ajusta pesos para apresentação conforme categoria. --- 
  ## formatarDimensao.js 
  Converte e ajusta dimensões conforme categoria do produto. Exemplo: ```text Largura Altura Profundidade ``` --- 
  
  # Páginas 
  ## Home 
  Página inicial da aplicação. 
  ### Funcionalidades 
  - Banner promocional 
  - Categorias 
  - Carrosséis de produtos por categoria --- 

  ## Detalhe 
  Página de visualização individual do produto. 
  ### Funcionalidades 
  - Galeria de imagens 
  - Informações detalhadas 
  - Avaliações 
  - Especificações técnicas 
  - Adicionar ao carrinho 
  - Adicionar aos favoritos --- 
  
  ## Carrinho 
  Página responsável pelo carrinho de compras. 
  ### Funcionalidades 
  - Alterar quantidade 
  - Remover produtos 
  - Resumo do pedido 
  - Navegação para checkout --- 
  
  ## Checkout 
  Página de finalização da compra. 
  ### Funcionalidades 
  - Dados do comprador 
  - Endereço de entrega 
  - Resumo dos produtos 
  - Confirmação do pedido --- 
  
  ## ConfirmacaoPedido 
  Exibida após a conclusão do checkout. 
  ### Funcionalidades 
  - Mensagem de sucesso - Resumo do pedido --- 

  ## Login 
  Página de autenticação.
   ### Funcionalidades 
   - Validação de usuário 
   - Integração com AuthContext --- 
   ## Cadastro 
   Página de cadastro de novos usuários. 
   ### Funcionalidades 
   - Coleta de dados 
   - Validação de formulário --- 
   
   ## Favoritos 
   Página responsável por listar os produtos favoritados. 
   ### Funcionalidades 
   - Exibição dos produtos salvos 
   - Remoção de favoritos --- 
   
   ## MinhaConta 
   Área destinada às informações do usuário autenticado. --- 
   ## ResultadosBusca 
   Página de exibição dos resultados da pesquisa. 
   ### Funcionalidades 
   - Filtragem por termo digitado --- 
   
   ## NaoEncontrado 
   Página de erro 404. --- 
   
   # Componentes Principais 
   ## Layout 
   Estrutura base utilizada em todas as páginas. 
   Contém: 
   - Cabecalho 
   - Conteúdo principal 
   - Rodape --- 
   
   ## Cabecalho 
   Responsável pela navegação principal. 
   ### Componentes Utilizados 
   - Logo 
   - BarraBusca 
   - BotaoCarrinho 
   - BotaoUsuario 
   - BotaoTema --- 
   
   ## ProdutoCard 
   Card de produto utilizado na Home e Favoritos. 
   ### Funcionalidades 
   - Exibir produto 
   - Favoritar 
   - Adicionar ao carrinho 
   - Navegação para detalhe --- 
   
   ## ProdutoInfo 
   Exibe informações completas do produto. 
   ### Utiliza 
   - GaleriaProduto 
   - ProdutoCaracteristicas 
   - ProdutoAvaliacao --- 
   
   ## GaleriaProduto 
   Galeria de imagens do produto. 
   ### Funcionalidades 
   - Imagem principal 
   - Miniaturas selecionáveis --- 
   
   ## CarrinhoItem 
   Item individual do carrinho. 
   ### Funcionalidades 
   - Alterar quantidade 
   - Remover produto --- 

   ## CarrinhoResumo 
   Resumo financeiro do pedido.
    ### Informações 
    - Subtotal 
    - Total --- 

    ## CheckoutFormulario 
    Formulário principal do checkout. 
    ### Campos 
    - Nome 
    - E-mail 
    - Telefone 
    - CPF 
    - Endereço
     - Número 
     - CEP --- 

     ## FormularioCampo 
     Componente reutilizável para formulários. 
     ### Recursos 
     - Label automática 
     - Mensagem de erro 
     - Acessibilidade 
     - Validação 
     - AutoComplete --- 
     
     ## Breadcrumb 
     Componente de navegação hierárquica. 
     Exemplo: ```text Home > Carrinho > Checkout ``` --- 

     ## Toast 
     Componente de notificação temporária. --- 
     # Funcionalidades Implementadas 
     
     ## Catálogo
      - Listagem por categoria 
      - Carrosséis horizontais 
      - Página de detalhes 
      
      ## Favoritos 
      - Adicionar favorito 
      - Remover favorito 
      - Página dedicada 
      
      ## Carrinho 
      - Adicionar produto 
      - Alterar quantidade 
      - Remover produto 
      - Persistência local 
      
      ## Checkout 
      - Formulário completo 
      - Resumo do pedido 
      - Confirmação 
      
      ## Autenticação 
      - Login 
      - Cadastro 
      - Rotas protegidas
      
       ## Interface
        - Tema claro/escuro 
        
        - Responsividade 
        - Toasts 
        - Breadcrumbs --- 
        



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
