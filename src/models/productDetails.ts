export interface Details {
    status: string;
    request_id: string;
    data: ProductData;
  }
  
  export interface ProductData {
    asin: string;
    product_title: string;
    product_price: string;
    product_original_price: string;
    currency: string;
    country: string;
    product_star_rating: string;
    product_num_ratings: number;
    product_url: string;
    product_photo: string;
    product_num_offers: number | null;
    product_availability: string;
    is_best_seller: boolean;
    is_amazon_choice: boolean;
    climate_pledge_friendly: boolean;
    sales_volume: string;
    about_product: string[];
    product_description: string;
    product_information: {
      [key: string]: string;
    };
    rating_distribution: {
      [key: string]: string;
    };
    product_photos: string[];
    product_details: {
      [key: string]: string;
    };
    customers_say: string;
    review_aspects: {
      [key: string]: string;
    };
    category_path: Category[];
    product_variations: any[]; // Define type if known
    is_prime: boolean;
  }
  
  export interface Category {
    id: string;
    name: string;
    link: string;
  }
  