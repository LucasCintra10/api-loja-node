import { UUID } from "crypto";

export interface Product {
    id: number;
    name: string;
    description: string;
    color: string;
    weight: number;
    type: string;
    price: number;
    created_at: Date;
}