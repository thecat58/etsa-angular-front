import { tallerModel } from "./taller.model";
import { UserModel } from "./user.model";

export interface ComentarioModel {
  id?: number;
  descripcion: string;
  puntuacion: string;
  reptor_taller: tallerModel[];
  ahutor: UserModel[];
}
