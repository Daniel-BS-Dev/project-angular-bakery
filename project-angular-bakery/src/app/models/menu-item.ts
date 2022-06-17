export interface MenuItem{
    id: string,
    name: string,
    description: string,
    price: number,
    imagePath: string

}

export interface MenuItems extends Array<MenuItem>{}