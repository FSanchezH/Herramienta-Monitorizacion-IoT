export interface ISensor {
    id: number;
    latitude: number;
    longitude: number;
    temperatura?: string;
    humedad?: string;
    bateria: string;
    cobertura: string;
    incidencias: string[];
}