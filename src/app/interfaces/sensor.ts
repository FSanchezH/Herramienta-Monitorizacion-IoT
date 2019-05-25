export interface ISensor {
    id: number;
    type?: string;
    TimeInstant?: string;
    latitude: string;
    longitude: string;
    temperatura?: string;
    humedad?: string;
    bateria: string;
    cobertura: string;
    incidencias: string[];
}