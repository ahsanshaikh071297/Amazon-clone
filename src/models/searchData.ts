export interface ApiResponse {
    status: string;
    request_id: string;
    data: {
      total_products: number;
      country: string;
      domain: string;
      products: Product[];
    };
  }

  export interface Product {
    asin: string;
    product_title: string;
    product_price: string;
    product_original_price: string;
    currency: string;
    product_star_rating: number;
    product_num_ratings: number;
    product_url: string;
    product_photo: string;
    product_num_offers: number | null;
    product_minimum_offer_price: string;
    is_best_seller: boolean;
    is_amazon_choice: boolean;
    is_prime: boolean;
    climate_pledge_friendly: boolean;
    sales_volume: string;
    delivery: string;
  }
  