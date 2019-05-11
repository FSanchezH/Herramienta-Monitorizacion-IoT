export interface ISensor {
    id: number;
    latitude: number;
    longitude: number;
    temperatura?: number;
    humedad?: number;
    bateria: number;
    cobertura: number;
    incidencias: string[];
}