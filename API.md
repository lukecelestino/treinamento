## POST /api/v1/auth/new

Utilize este método para obter os tokens de acesso utilizando e-mail e senha fornecidos

Payload: 
```javascript
{
	"email": string,
	"password": string
}
```
Response:
```javascript
{
	"access_token": string,
	"refresh_token": string
}
```

## POST /api/v1/auth/refresh

Utilize este método para renovar um token de acesso expirado

Payload: 
```javascript
{
	"refresh_token": string
}
```

Response:
```javascript
{
	"access_token": string
}
```

## GET /auctions

Utilize este método para pesquisar leilões

Query Parameters: 
- page: Página que deve retornar (default: 1)
- pageSize: Quantidade de leilões que deve ser retornado (default: 5, max: 10)
- name: Nome do leilão para filtro
- status: Status atual do leilão (0=rascunho, 1=ativo)
- owner: Dono do leilão

Response: 
```javascript
{
	"hasNext" : boolean,
	"items": [
		{
			"_id": string,
			"name": string,
			"photo_url": string (Image URI),
			"base_price": number,
			"bid_type": number (1 = free, 2 = fixed),
			"bid_step": number (Only if bid_type = 2),
			"status": number (0=rascunho, 1=ativo),
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
```

## POST /auctions

Utilize este método para criar um leilão

Payload: 
```javascript
{
	"name": string,
	"photo": string (Image Base64 Encoded),
	"base_price": number,
	"bid_type" : number (1 = free, 2 = fixed),
	"bid_step" : number (Required if bid_type = 2)
}
```

Response: 
```javascript
{
	"owner": string,
	"name": string,
	"photo_url": string (Image URI),
	"base_price": number,
	"bid_type": number (1 = free, 2 = fixed),
	"bid_step": number (Only if bid_type = 2),
	"expirationDate": Date,
	"_id": string,
	"status": number (0=rascunho, 1=ativo)
}
```

## PUT /auctions/:auctionId

Utilize este método para atualizar os dados de um leilão em rascunho

Payload: 
```javascript
{
	"name": string,
	"photo": string (Image Base64 Encoded),
	"base_price": number,
	"bid_type" : number (1 = free, 2 = fixed),
	"bid_step" : number (Required if bid_type = 2)
}
```

Response: 
```javascript
{
	"owner": string,
	"name": string,
	"photo_url": string (Image URI),
	"base_price": number,
	"bid_type": number (1 = free, 2 = fixed),
	"bid_step": number (Only if bid_type = 2),
	"_id": string,
	"status": number (0=rascunho, 1=ativo),
	"expirationDate": Date,
}
```

## DELETE /auctions/:auctionId

Utilize este método para excluir um leilão em rascunho

Path Parameters:

- auctionId: ID do leilão que será excluído

## PUT /auctions/:auctionId/status

Utilize este método para mudar ativar um leilão

Path Parameters:

- auctionId: ID do leilão que será ativado

Payload: 
```javascript
{
	"status": 1
}
```

Response: 
```javascript
{
	"_id": string,
	"status": number (0=rascunho, 1=ativo),
	"expirationDate": Date
}
```

## POST /auctions/:auctionId/bids

Utilize este método para inserir um lance em um leilão

Payload: 
```javascript
{
	"bid_value": number
}
```

Response: 
```javascript
{
	"bidResult": string
}
```
