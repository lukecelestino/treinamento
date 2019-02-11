## POST /authenticate/new

Utilize este método para obter os tokens de acesso utilizando e-mail e senha fornecidos

Payload: 
```javascript
{
	"email": string,
	"password": string
}
```
Response:
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
{
	"username": string,
	"access_token": string
}

## GET /auctions

Utilize este método para pesquisar leilões

Query Parameters: 
- name: Nome do leilão para filtro
- startCreatedAt: Data início em que o leilão foi criado
- endCreatedAt: Data fim em que o leilão foi criado
- startExpiredAt: Data início em que o leilão foi finalizado
- endExpiredAt: Data fim em que o leilão foi finalizado
- status: Status atual do leilão (0=rascunho, 1=ativo, 2=finalizado)
- owner: Dono do leilão

Response: 
{
	"hasNext" : boolean,
	"items": [
		{
			"_id": string,
			"photo_url": string (Image URI),
			"base_price": number,
			"bid_type": number (1 = free, 2 = fixed),
			"bid_step": number (Only if bid_type = 2),
			"status": number (0=rascunho, 1=ativo, 2=finalizado),
			"owner": string,
			"expirationDate": Date,
			"bids": [
				{
					"email": string,
					"value": number,
					"timestamp": Date
				}
			]
		}
	]
}

## POST /auctions

Utilize este método para criar um leilão

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
	"owner": string,
	"name": string,
	"photo_url": string (Image URI),
	"base_price": number,
	"bid_type": number (1 = free, 2 = fixed),
	"bid_step": number (Only if bid_type = 2),
	"_id": string,
	"status": number (0=rascunho, 1=ativo, 2=finalizado)
}

## PUT /auctions/:auctionId

Utilize este método para atualizar os dados de um leilão em rascunho

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
	"owner": string,
	"name": string,
	"photo_url": string (Image URI),
	"base_price": number,
	"bid_type": number (1 = free, 2 = fixed),
	"bid_step": number (Only if bid_type = 2),
	"_id": string,
	"status": number (0=rascunho, 1=ativo, 2=finalizado)
}

## DELETE /auctions/:auctionId

Utilize este método para excluir um leilão em rascunho

Path Parameters:

- auctionId: ID do leilão que será excluído

## PUT /auctions/:auctionId/status

Utilize este método para mudar ativar um leilão

Path Parameters:

- auctionId: ID do leilão que será ativado

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

## POST /auctions/:auctionId/bids

Utilize este método para inserir um lance em um leilão

Payload: 
{
	"bid_value": number
}

Response: 
{
	"bidResult": string
}
