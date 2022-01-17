# Labe-Food
<img src="https://user-images.githubusercontent.com/86332847/149687073-2138eeef-bff6-4924-b16e-290f8ece9315.png" width="250" height="200">

### Link do website
[Labe-food](carverlabe-food12.surge.sh)

### Sobre o site
O principal objetivo desse projeto é estimular o uso de várias ferramentas do react, assim como reproduzir o layout feito por uma designer, a Camila Mizutani.
Esse projeto é integrado com uma API fornecida pela Labenu. Esse projeto só tem layout mobile, e foi testado em celular com dimensões de 375 x 812. 

### Instruções
Se ocorrer erro ao tentar se cadastrar, utilize o seguinte login:
- e-mail: teste@teste.com
- senha: 123456

### Telas do website

#### Login
<img src="https://user-images.githubusercontent.com/86332847/149686588-15fbdc35-ac4c-457a-81ae-0ec795582b0e.png" width="300" height="550">
Se o usuário já é cadastrado, pode utilizar o e-mail e senha já cadastrados para acessar outras áreas do site. Se o usuário não estiver cadastrado, basta clicar no link para acessar a área de cadastro.

#### Cadastro
<img src="https://user-images.githubusercontent.com/86332847/149687095-c7187164-b82f-4593-97aa-9129d387a3a2.png" width="300" height="550">
Se o usuário não possuir e-mail e senhas cadastrados, ele pode se cadastrar nessa área. Deve-se cadastrar nome, e-mail, cpf e uma senha para ter acesso ao site.

#### Adicionar e editar endereço
<img src="https://user-images.githubusercontent.com/86332847/149686904-91356f26-f8d2-4ec5-a10c-c12e185437f4.png" width="300" height="550">
Ao terminar o cadastro pela primeira vez, o usuário é levado a essa página. É possível editar o enedereço pela tela de perfil de usuário. Nessa tela, o usuário vai fornecer nomes de rua/avenida, número da residência, complemento (se tiver), bairro, cidade e estado. Não é possível realizar pedidos ou acessar outras áreas do site sem um endereço cadastrado.
     
#### Perfil
<img src="https://user-images.githubusercontent.com/86332847/149686833-68ce2318-2b46-4bf2-b9b5-4d59bb5a2f96.png" width="300" height="550"> 
Nessa área é possível visualizar nome, e-mail e cpf cadastrados, além do endereço. O usuário também tem acesso ao histórico de pedidos. Na parte de baixo da tela, o usuário tem acesso direto ao feed de restaurantes e ao carrinho.

#### Editar perfil
<img src="https://user-images.githubusercontent.com/86332847/149686864-a3c23aea-e124-4b3c-9b0e-736eb9a3c952.png" width="300" height="550">
O usuário pode alterar Nome, e-mail e cpf fornecidos no cadastro. O login passa a ser feito com o novo e-mail cadastrado.

#### Home
<img src="https://user-images.githubusercontent.com/86332847/149686802-954666a1-ccb8-4e9e-8992-e0623e9dc9d0.png" width="300" height="550">
O usuário cadastrado tem acesso a essa área após fazer o login. Nela ele pode ver todos os restaurantes em que pode pedir comidas e bebidas. existe uma barra de busca e também pode ser feita uma busca por categoria de comidas servidas pelo restaurante. Na parte de baixo da tela, o usuário pode acessar o perfil cadastrado e também acessar o carrinho.

#### Detalhes do restaurante
<img src="https://user-images.githubusercontent.com/86332847/149686947-b53ec649-d0fb-4bf2-b724-871b50d1fd19.png" width="300" height="550"> 
Ao clicar em algum dos restaurantes da página Home, o usuário é levado a essa página. A página possui uma breve descrição dos serviços e mostra todos os produtos que são vendidos por ela. Ao clicar em adicionar, na caixa do produto, um item é adicionado ao carrinho.

#### Carrinho
<img src="https://user-images.githubusercontent.com/86332847/149687007-798b78aa-1fce-4425-8730-eba630d63d19.png" width="300" height="550">
No carrinho estarão todos os itens adicionados na página detalhes do restaurante. Os produtos são somados automaticamente. É possível remover produtos que o usuário não queira ao clicar em remover. O usuário deve escolher a opção de pagamento antes de clicar em confirmar o pedido.

### Ferramentas utilizadas
- React
- Integração com API
- styled-components
- javascript
- React router
- Hooks

