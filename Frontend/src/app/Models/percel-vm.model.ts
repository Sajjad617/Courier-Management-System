export class PercelVM {
  ParcelId: number = 0;
  // parcelId?: number | null;       // Optional ও null-Allow করা হয়েছে
  ReceiverName?: string | null;
  Phone?: number | null;
  Weight?: string | null;
  Address?: string | null;
  Price?: number | null;
  COD: boolean = false;
  Notes?: string | null;
  // parcelId:number = 0
  Status: number = 0;
  PickupLocation: number | null = null;
  DeliveryLocation: number | null = null;
  DeliveyCharge: number | null = null;
}
// export class PercelrcvVM {
//   // parcelId?: number | null;       // Optional ও null-Allow করা হয়েছে
//   ReceiverName?: string | null;
//   Phone?: number | null;
//   Weight?: string | null;
//   Address?: string | null;
//   Price?: number | null;
//   COD: boolean = false;
//   Notes?: string | null;
//   percelTrackingId?: string | null;
// }
