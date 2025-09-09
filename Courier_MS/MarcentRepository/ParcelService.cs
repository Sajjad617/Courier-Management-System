using Courier_MS.DataContext;
using Courier_MS.Interface;
using Courier_MS.MarcentModel;
using Dapper;
using System.Data;
using System.Reflection;

namespace Courier_MS.MarcentRepository
{
    public class ParcelService : IMarcent
    {
        private readonly DapperContext _dapper;
        public ParcelService(DapperContext dapper)
        {
            _dapper = dapper;
        }
        public async Task<dynamic> ParcelSave(ParcelVM parcel)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 2);
                    parameters.Add("@ParcelId", parcel.ParcelId);
                    parameters.Add("@ReceiverName", parcel.ReceiverName);
                    parameters.Add("@Phone", parcel.Phone);
                    parameters.Add("@Weight", parcel.Weight);
                    parameters.Add("@Address", parcel.Address);
                    parameters.Add("@Price", parcel.Price);
                    parameters.Add("@COD", parcel.COD);
                    parameters.Add("@Notes", parcel.Notes);
                    parameters.Add("@Status", parcel.Status);



                    var data = connection.QueryFirstOrDefault<dynamic>(
                        "SP_Parcels",
                        parameters,
                        commandType: CommandType.StoredProcedure
                    );
                    return data;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public async Task<dynamic> ParcelGet()
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 3);

                    var data = connection.Query<dynamic>(
                        "SP_Parcels",
                        parameters,
                        commandType: CommandType.StoredProcedure
                    );
                    return data;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public async Task<dynamic> RemoveParcel(int id)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 4);
                    parameters.Add("@ParcelId", id);

                    var data = connection.QueryFirstOrDefault<dynamic>(
                        "SP_Parcels",
                        parameters,
                        commandType: CommandType.StoredProcedure
                    );
                    return data;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public async Task<dynamic> GetParcelById(int id)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 5);
                    parameters.Add("@ParcelId", id);

                    var data = connection.QueryFirstOrDefault<dynamic>(
                        "SP_Parcels",
                        parameters,
                        commandType: CommandType.StoredProcedure
                    );
                    return data;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public async Task<dynamic> ParcelStatus(int id)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 6);
                    parameters.Add("@Status", id);

                    var data = await connection.QueryAsync<dynamic>(
                        "SP_Parcels",
                        parameters,
                        commandType: CommandType.StoredProcedure
                    );
                    return data;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<dynamic> IncreaseStatus(int id, int statusId)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 7);
                    parameters.Add("@ParcelId", id);
                    parameters.Add("@Status", statusId);

                    var data = connection.QueryFirstOrDefault<dynamic>(
                        "SP_Parcels",
                        parameters,
                        commandType: CommandType.StoredProcedure
                    );
                    return data;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
