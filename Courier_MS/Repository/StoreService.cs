using Courier_MS.DataContext;
using Courier_MS.Interface;
using Courier_MS.ViewModel;
using Dapper;
using System.Data;
using System.Reflection;

namespace Courier_MS.Repository
{
    public class StoreService : IStore
    {
        private readonly DapperContext _dapper;
        public StoreService(DapperContext dapper)
        {
            _dapper = dapper;

        }
        public async Task<dynamic> SaveStore(StoreVM store)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 1);
                    parameters.Add("@id", store.id);
                    parameters.Add("@name", store.name);
                    parameters.Add("@StoreName", store.StoreName);
                    parameters.Add("@Mobile1", store.mobile1);
                    parameters.Add("@Mobile2", store.mobile2);
                    parameters.Add("@Address", store.Address);
                    parameters.Add("@AreaId", store.AreaId);

                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "sp_StoreTbl",
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

        public async Task<dynamic> GetStore()
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 2);


                    var data = await connection.QueryAsync<dynamic>(
                        "sp_StoreTbl",
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

        public async Task<dynamic> GetbyIdStore(int id)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 3);
                    parameters.Add("@id", id);


                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "sp_StoreTbl",
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
        public async Task<dynamic> DeleteStore(int id)
        {
            throw new NotImplementedException();
        }




    }
}
