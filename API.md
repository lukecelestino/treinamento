## Autenticando na API

O primeiro passo é fazer uma chamada para obter os tokens de acesso (POST /authenticate/new).
Depois disso, todos os endpoints chamados devem incluir um header com os dados de autenticação:

Header: { "Authorization": "Bearer {{access_token}}" }

Onde {{access_token}} é o token recebido na autenticação.

Um access_token tem validade de 15 minutos, então você deverá utilizar a chamada para atualizar o token (POST /authenticate/refresh) para solicitar um novo token de acesso a partir do seu token de refresh.

## POST /authenticate/new

Utilize este método para obter os tokens de acesso utilizando e-mail e senha fornecidos

Payload: 
{
	"email": string,
	"password": string
}

Response:

200 OK
{
	"username": string,
	"access_token": string,
	"refresh_token": string
}

## POST /authenticate/refresh

Utilize este método para renovar um token de acesso expirado

Payload: 
{
	"email": string,
	"refresh_token": string
}

Response:

200 OK
{
	"username": string,
	"access_token": string
}

## POST /auctions

Utilize este método para criar um leilão

Query Parameters:

Payload: 
{
	"name": string,
	"photo": string (Image Base64 Encoded),
	"base_price": number,
	"bid_type" : number (1 = free, 2 = fixed),
	"bid_step" : number (Required if bid_type = 2)
}

Response: 
{
	"name": string,
	"photo_url": string (Image URI),
	"base_price": number,
	"bid_type": number (1 = free, 2 = fixed),
	"bid_step": number (Only if bid_type = 2),
	"_id": string,
	"status": number (0=rascunho, 1=ativo, 2=finalizado)
}


## POST /auctions/:auctionId/status

Utilize este método para mudar ativar um leilão

Path Parameters:

auctionId: ID do leilão que será ativado

Payload: 
{
	"status": 1
}

Response: 
{
	"_id": string,
	"status": number (0=rascunho, 1=ativo, 2=finalizado),
	"expirationDate": Date
}
