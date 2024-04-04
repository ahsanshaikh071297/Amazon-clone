export interface BestSellers {
    status : string;
    request_id : string;
    data : {
        country: string;
        domain : string;
        best_sellers : Data []
    }
}

export interface Data {
    rank : number;
    asin : string ;
    product_title : string;
    product_price : string;
    product_star_rating : string;
    product_num_ratings : number;
    product_url : string;
    product_photo : string;
    rank_change_label : string | null;
}