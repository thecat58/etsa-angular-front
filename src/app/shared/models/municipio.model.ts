import { departamentoModel } from "./departamento.model";

export interface municipionModel {
  id?: number;
  nombre: string;
  departamneto:departamentoModel;
 
}
