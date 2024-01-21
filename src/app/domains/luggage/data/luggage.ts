export interface Luggage {
    id: number;
    weight: number;
    checkinId: boolean;
    remarks: string;
}

export const initialLuggage: Luggage = {
    id: 0,
    weight: 0,
    checkinId: false,
    remarks: ''
}