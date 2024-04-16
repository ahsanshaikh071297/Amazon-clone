// product.model.ts

export class Product {
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
  product_availability: string;
  is_best_seller: boolean;
  is_amazon_choice: boolean;
  climate_pledge_friendly: boolean;
  sales_volume: string;
  about_product: string[];
  product_description: string;
  product_information: any;
  rating_distribution: {[key: string]: string};
  product_photos: string[];
  product_details: any;
  customers_say: string;
  review_aspects: {[key: string]: string};
  category_path: string[];
  product_variations: {
    color: { asin: string, value: string, photo: string, is_available: boolean }[],
    size: { asin: string, value: string, is_available: boolean }[]
  };
  is_prime: boolean;
}

  