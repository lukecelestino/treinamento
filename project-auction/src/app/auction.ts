export class Auction {
    public _id: string;
    public name: string;
    public photo: string;
    public base_price: number;
    public bid_type: number;
    public bid_step: number;
    public status: number;
    public owner: string;
    public bids: Array<Bids>;
}

export class Bids {
    public timestamp: string;
    public email: string;
    public value: string;
}

export class AuctionsResponse {
    auctions: Array<Auction>;
}