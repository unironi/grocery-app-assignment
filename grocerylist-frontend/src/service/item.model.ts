export interface Item {
    id?: number;
    name: string;
    purchased: boolean;
    quantity: number;
    price: number;
    editing?: boolean;
    _backup: { id?: number; name: string; quantity: number; price: number; };
}