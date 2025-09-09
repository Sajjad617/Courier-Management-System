
using Courier_MS.ViewModel;

namespace Courier_MS.Interface
{
    public interface ILocation
    {
        Task<dynamic> citysave(commonVM model);
        Task<dynamic> getAllCity();
        Task<dynamic> getCityById(int id);
        Task<dynamic> DeleteCity(int id);

        Task<dynamic> zoneSave(zoneVM model);
        Task<dynamic> getAllZone();
        Task<dynamic> getZoneById(int id);
        Task<dynamic> DeleteZone(int id);
        Task<dynamic> getZoneByCityId(int cityId);


        Task<dynamic> areaSave(areaVM model);
        Task<dynamic> getAllArea();
        Task<dynamic> getAreaById(int id);
        Task<dynamic> DeleteArea(int id);
        Task<dynamic> getAreaByZoneId(int zoneId);


        Task<dynamic> status(int id, bool status);
        Task<dynamic> GetAllLocation();



    }
}
