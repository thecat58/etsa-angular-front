import { identificacionModel } from "./Identifica.model";
import { municipionModel } from "./municipio.model";

export interface UserModel {
  id: number;
  tipodocumento: identificacionModel;
  municipio: municipionModel;
  password: string;
  last_login: string | null;
  is_superuser: boolean;
  primer_nombre: string;
  segundo_nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  correo: string;
  telefono: number;
  genero: string;
  fechanacimiento: string;
  foto: File
  n_identificacion: number;
  email: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  is_staff: boolean;
  vendedor: boolean;
  groups: any[];
  user_permissions: any[];
}
