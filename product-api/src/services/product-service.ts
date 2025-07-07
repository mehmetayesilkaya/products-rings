import axios from "axios";
import {products} from "../data/product-data";

class ProductService {

    async fetchGoldPricePerGram() {

        const pricePerGram = 107.31

        return pricePerGram;
    }

    async calculateProductPrices(popularityScore: number, weight: number) {
        const goldPricePerGram = await this.fetchGoldPricePerGram()
        const rawPrice = (popularityScore + 1) * weight * goldPricePerGram;
        const price = Number(rawPrice.toFixed(2));

        return price

    }

    calculateRating(popularityScore: number) {
        return Number((popularityScore * 5).toFixed(1));
    }

    async listProducts() {
        const result = await Promise.all(
            products.map(async (p) => {
                const price = await this.calculateProductPrices(p.popularityScore, p.weight)
                const rating = this.calculateRating(p.popularityScore)
                return {
                    name: p.name,
                    weight: p.weight,
                    priceFormatted: `$${price} USD`,
                    ratingFormatted: `${rating}/5`,
                    images: p.images
                };
            })
        );
        return result
    }

}

export const productService = new ProductService()