import { departamentoModel } from "./departamento.model";

export interface AgendaModel {
  id?: number;
  lugar: string;
  hora: Date;
  asunto: string;
  taller_reseptor: number;
  usuario_author: number
 
}

