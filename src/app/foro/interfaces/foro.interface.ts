import { userCompleto } from "src/app/login/interfaces/login.interface";

export interface post {
    id: number,
    title: String,
    body: String,
    date: Date,
    author: userCompleto,
    comments: comentario[]
}

export interface comentario{
    idComment: number,
    comment: String,
    author: userCompleto,
    esAutor: boolean
}