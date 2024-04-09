export interface RoomData {
    name: RoomName;
    roomClass: RoomClass;
    description: string;
    price: number;
    additionalServices?: AdditionalServices;
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
export interface AdditionalServices {
    shortServices: Array<ShortService>;
    longServices: Array<LongService>;
}

export interface ShortService {
    name: string;
    description: string;
}
export interface LongService {
    name: string;
    iconUrl: string;
}

export interface Images {
    url: string;
}
