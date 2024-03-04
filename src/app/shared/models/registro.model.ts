import { ActivationCompanyUserModel } from './activation-company-user.model';
import { PersonaModel } from './persona.model';

export interface registro {
  id:               number;
  password:         string;
  last_login:       Date;
  is_superuser:     boolean;
  primer_nombre:    string;
  segundo_nombre:   string;
  primer_apellido:  string;
  segundo_apellido: string;
  correo:           string;
  telefono?:         number;
  genero?:           string;
  fechanacimiento?:  Date;
  foto:             null;
  n_identificacion: number;
  email:            string;
  tipodocumento:    number;
  municipio:        number;
  groups:           any[];
  user_permissions: any[];
}
