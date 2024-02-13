import { PersonaModel } from './persona.model';

export interface UsuarioModel {
  id: number;
  email: string;
  contrasena: string;
  idPersona?:number;
  company_id?: number;
  roles?: string;
  persona?:PersonaModel;
}
