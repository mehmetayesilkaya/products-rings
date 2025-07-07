export interface Product {
    name: string,
    popularityScore: number,
    weight: number,
    images: ImageColors
}

export interface ImageColors {
    yellow: string,
    rose: string,
    white: string
}