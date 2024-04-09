export interface RoomData {
    name: RoomName;
    roomClass: RoomClass;
    description: string;
    price: number;
    additionalServices?: Array<AdditionalServices>;
    images: Array<Images>;
}

export interface RoomName {
    name: string;
    size: number;
    floor: number;
    maxFloor: number;
}

export interface RoomClass {
    stars: number;
    maxStars?: number;
    roomType: string;
}
export interface AdditionalServices { }


export interface Images {
    url: string;
}
