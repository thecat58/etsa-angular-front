
export interface PersonaModel {
    id?: number;
    identificacion: string;
    nombre1: string;
    nombre2: string;
    apellido1: string;
    apellido2: string;
    fechaNac?: Date;
    direccion?: string;
    email?: string;
    telefonoFijo?: string;
    celular?: string;
    vededor: boolean;
    rutaFotoUrl?: any;
    perfil?: string;
    idCiudadNac?: number;
    idCiudad?: number;
    idTipoIdentificacion?: number;
    idCiudadUbicacion?: number;
}
