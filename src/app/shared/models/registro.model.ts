
export interface registroModel {
  id?:               number;
  password:          string;
  primer_nombre:     string;
  primer_apellido:   string;
  telefono?:         number;
  genero?:           string;
  fechanacimiento?:  Date;
  foto:              File;
  n_identificacion:  number;
  email:             string;
  tipodocumento:     number;
  municipio:         number;
  is_active: boolean;

}
