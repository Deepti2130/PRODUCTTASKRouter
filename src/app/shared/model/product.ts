import { Observable } from "rxjs";

export interface Iproduct{

    id: string;
    name: string;
    brand: string;
    price: number;
    offerprice: number;
    image: string;
    isAvailable: boolean;
    rating: number;
    noofitem: number;
    pstatus: pstatus;
    canreturn:number
}

export type pstatus = "Inprogress" | "Dispatched" | "Delivered"



export interface IcanDeactivateComp{

  canDeactivate :() => boolean | Promise<boolean> | Observable<boolean>

}
