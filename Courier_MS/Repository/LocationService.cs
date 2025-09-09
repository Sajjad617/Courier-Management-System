using Courier_MS.DataContext;
using Courier_MS.Interface;
using Courier_MS.ViewModel;
using Dapper;
using System.Data;
using System.Reflection;

namespace Courier_MS.Repository
{
    public class LocationService : ILocation
    {
        private readonly DapperContext _dapper;
        public LocationService(DapperContext dapper)
        {
            _dapper = dapper;
        }


        #region CITY
        public async Task<dynamic> getAllCity()
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 1);

                    var data =await connection.QueryAsync<dynamic>(
                        "sp_location",
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
        public async Task<dynamic> citysave(commonVM model)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 2);
                    parameters.Add("@id", model.id);
                    parameters.Add("@name", model.name);

                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "sp_location",
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
        public async Task<dynamic> DeleteCity(int id)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 3);
                    parameters.Add("@id", id);

                    var data =await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "sp_location",
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

        public async Task<dynamic> getCityById(int id)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 4);
                    parameters.Add("@id", id);

                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "sp_location",
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
        #endregion


        #region Zone
        public async Task<dynamic> getAllZone()
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 5);

                    var data = await connection.QueryAsync<dynamic>(
                        "sp_location",
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
        public async Task<dynamic> zoneSave(zoneVM model)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 6);
                    parameters.Add("@id", model.id);
                    parameters.Add("@cityId", model.cityId);
                    parameters.Add("@name", model.name);

                    var data = await  connection.QueryFirstOrDefaultAsync<dynamic>(
                        "sp_location",
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
        public async Task<dynamic> DeleteZone(int id)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 7);
                    parameters.Add("@id", id);

                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "sp_location",
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
        public async Task<dynamic> getZoneById(int id)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 8);
                    parameters.Add("@id", id);

                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "sp_location",
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
        #endregion

        #region Area
        public async Task<dynamic> areaSave(areaVM model)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 10);
                    parameters.Add("@name", model.name);
                    parameters.Add("@zoneId", model.zoneId);
                    parameters.Add("@Location", model.Location);

                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "sp_location",
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
        public async Task<dynamic> DeleteArea(int id)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 11);
                    parameters.Add("@id", id);

                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "sp_location",
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
        public async Task<dynamic> getAllArea()
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 9);

                    var data = await connection.QueryAsync<dynamic>(
                        "sp_location",
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
        public async Task<dynamic> getAreaById(int id)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 4);
                    parameters.Add("@id", id);

                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "sp_location",
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
        #endregion

        public async Task<dynamic> status(int id, bool status)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 12);
                    parameters.Add("@id", id);
                    parameters.Add("@status", status);

                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "sp_location",
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
        public async Task<dynamic> GetAllLocation()
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 13);


                    var data = await connection.QueryAsync<dynamic>(
                        "sp_location",
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

        public async Task<dynamic> getZoneByCityId(int cityId)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 14);
                    parameters.Add("@cityId", cityId);


                    var data = await connection.QueryAsync<dynamic>(
                        "sp_location",
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
        public async Task<dynamic> getAreaByZoneId(int zoneID)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 15);
                    parameters.Add("@zoneId", zoneID);


                    var data = await connection.QueryAsync<dynamic>(
                        "sp_location",
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
