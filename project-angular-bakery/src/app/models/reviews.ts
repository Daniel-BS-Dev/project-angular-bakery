
export interface Review{
    id: string,
    name: string,
    date: string,
    rating: number,
    comments: string
    restaurantId: string,
    hours: string
}

export interface Reviews extends Array<Review>{}



    