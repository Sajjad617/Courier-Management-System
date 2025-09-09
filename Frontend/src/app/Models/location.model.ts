import { commonVM } from "./commonVM.model";

export class zoneVM extends commonVM {

  cityId: number = 0;
}

export class areaVM extends commonVM {
  Location: number = 0;
  zoneId: number = 0;
}