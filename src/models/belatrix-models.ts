export class DeptoModel {
    codigo: number;
    nombre: string;
}

export class ProvinciaModel {
    codigo: number;
    nombre: string;
    depto: DeptoModel;
}

export class DistritoModel {
    codigo: number;
    nombre: string;
    provincia: ProvinciaModel;
}