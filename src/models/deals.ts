export interface Deals {
    status : string;
    request_id : string;
    data : {
        total_deals : number ;
        country : string ;
        domain : string;
        deals : DealsData []
    }
}

export interface DealsData {
    deal_type : string
    deal_id : string
    deal_title : string
    deal_photo : string
    deal_state : string
    deal_url : string
    deal_starts_at : string
    deal_ends_at : string
    deal_price_min : {
        amount : string
        currency : string
    }
    deal_price_max : {
        amount : string
        currency : string
    }
    deal_badge : string
    type : string
    product_asin : string | null
    is_prime : boolean
}