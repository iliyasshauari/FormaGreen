import { Byte } from "@angular/compiler/src/util";

export interface Member{
  id: number;
  name: string;
  email: string;
  password: string;
  subscription: Date;
  phone : string;
  codeQr: Byte[];
  donation: number;

}
