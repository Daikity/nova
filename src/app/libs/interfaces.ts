export interface RoomData {
    name: RoomName;
    roomClass: RoomClass;
    description: string;
    price: number;
    additionalServices?: Array<AdditionalServices>;
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
