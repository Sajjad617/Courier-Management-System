using Courier_MS.DataContext;
using Courier_MS.Interface;
using Courier_MS.ViewModel;
using Dapper;
using System.Data;

namespace Courier_MS.Repository
{
    public class PricingPlanService : IPricingPlan
    {
        private readonly DapperContext _dapper;
        public PricingPlanService(DapperContext dapper)
        {
            _dapper = dapper;
        }

        public async Task<dynamic> GetPricingPlanArea()
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 1);

                    var data = await connection.QueryAsync<dynamic>(
                        "SP_PricingPlan",
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

        public async Task<dynamic> SavePricingPlan(PricingPlanVM pricee)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 2);
                    parameters.Add("@Id", pricee.Id);
                    parameters.Add("@PickUpLocation", pricee.pickupLocation);
                    parameters.Add("@DeliveryLocation", pricee.deliveryLocation);
                    parameters.Add("@Weight", pricee.Weight);
                    parameters.Add("@Price", pricee.Price);


                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "SP_PricingPlan",
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
        public async Task<dynamic> GetPricingPlan()
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 3);
 

                    var data = await connection.QueryAsync<dynamic>(
                        "SP_PricingPlan",
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
        public async Task<dynamic> DeletePricingPlan(int id)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 4);
                    parameters.Add("@Id", id);
 

                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "SP_PricingPlan",
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
        }public async Task<dynamic> GetPricingPlanbyID(int id)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 5);
                    parameters.Add("@Id", id);
 

                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "SP_PricingPlan",
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
