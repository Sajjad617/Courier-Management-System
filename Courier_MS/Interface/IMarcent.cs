using Courier_MS.MarcentModel;

namespace Courier_MS.Interface
{
    public interface IMarcent
    {
        Task<dynamic> ParcelSave(ParcelVM parcel);
        Task<dynamic> ParcelGet();
        Task<dynamic> RemoveParcel(int id);
        Task<dynamic> GetParcelById(int id);
        Task<dynamic> ParcelStatus(int id);
        Task<dynamic> IncreaseStatus(int id,int statusId);
        Task<dynamic> GetPrice(int dPickupLocationl, int DeliveryLocation, int Weight);
    }
}
