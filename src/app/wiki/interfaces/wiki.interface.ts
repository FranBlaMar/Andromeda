export interface apartado {
    nombreApartado: string;
    informacion:    Informacion[];
    idApartado:     number;
}

export interface Informacion {
    nombreInfo:  string;
    imagen:      string;
    informacion: string;
}