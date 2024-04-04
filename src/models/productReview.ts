export interface Reviews {
    status : string;
    request_id : string;
    data : {
        asin : string
        total_reviews : number
        total_ratings : number
        country : string;
        domain : string ;
        reviews : Reviewsdata[]
    }

} 

export interface Reviewsdata {
        review_id: string;
        review_title: string;
        review_comment: string;
        review_star_rating: string;
        review_link: string;
        review_author: string;
        review_author_avatar: string;
        review_images: string[];
        review_video: string | null;
        review_date: string;
        is_verified_purchase: boolean;
        helpful_vote_statement?: string; // Optional
        reviewed_product_asin: string;
}