using Courier_MS.ViewModel;

namespace Courier_MS.Interface
{
    public interface IStore
    {
        Task<dynamic> SaveStore(StoreVM store);
        Task<dynamic> GetStore();
        Task<dynamic> GetbyIdStore(int id);
        Task<dynamic> DeleteStore(int id);
    }
}
