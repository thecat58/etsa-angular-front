
import { UsuarioModel } from './usuario.model';

export interface ActivationCompanyUserModel {
  id?: number;
  user_id: number;
  user:UsuarioModel;
  state_id: number;
  estado:string;
  company_id: number;
  fechaInicio: string;
  fechaFin: string;
  created_at?: string;
  updated_at?: string;
  company?: string;
  roles: string;
  Roles: string;
}
