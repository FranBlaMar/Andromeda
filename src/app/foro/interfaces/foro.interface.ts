import { userCompleto } from "src/app/login/interfaces/login.interface";

export interface post {
    postNuevo: any;
    id: number,
    title: String,
    body: String,
    date: Date,
    author: userCompleto,
}