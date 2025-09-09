using Courier_MS.DataContext;
using Courier_MS.Interface;
using Courier_MS.ViewModel;
using Dapper;
using System.Data;
using System.Reflection;

namespace Courier_MS.Repository
{
    public class AdministratorService : IAdministrator
    {
        private readonly DapperContext _dapper;
        private readonly IMail _mail;
        public AdministratorService(DapperContext dapper, IMail mail)
        {
            _dapper = dapper;
            _mail = mail;
        }
        public async Task<dynamic> Signup(SignupVM model)
        {
            try
            {
                var check = false;
                model.Approve = false;
                if (model.Password == null || model.Password == "")
                {
                    model.Password = GeneratePassword(8);
                    check = true;
                    model.Approve = true;
                }
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 2);
                    parameters.Add("@Id", model.Id);
                    parameters.Add("@CompanyName", model.CompanyName);
                    parameters.Add("@OwnerName", model.OwnerName);
                    parameters.Add("@MobileNumber", model.Mobile);
                    parameters.Add("@Email", model.Email);
                    parameters.Add("@Type", model.Type);
                    parameters.Add("@Approve", model.Approve);
                    parameters.Add("@Password", model.Password);


                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "SP_Courier_MS",
                        parameters,
                        commandType: CommandType.StoredProcedure
                    );
                    if(check == true)
                    {
                      await _mail.SendEmailAsync(model.Email, "Signup Successful", $"Your account has been created successfully. Your UserName : {model.Email} And password is: {model.Password}");

                    }
                    return data;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        private string GeneratePassword(int length = 12)
        {
            const string validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
            Random random = new Random();
            char[] chars = new char[length];

            for (int i = 0; i < length; i++)
            {
                chars[i] = validChars[random.Next(validChars.Length)];
            }

            return new string(chars);
        }
        public async Task<dynamic> Login(LoginVM model)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 3);
                    parameters.Add("@Email", model.Email);
                    parameters.Add("@Password", model.Password);


                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "SP_Courier_MS",
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

        public async Task<dynamic> GetSignup(bool approve)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 1);
                    parameters.Add("@Approve", approve);


                    var data =await connection.QueryAsync<dynamic>(
                        "SP_Courier_MS",
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

        public async Task<dynamic> DeleteSignup(int id)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 4);
                    parameters.Add("@Id", id);

                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "SP_Courier_MS",
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
        public async Task<dynamic> Updateapprove(int id, bool approve)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 5);
                    parameters.Add("@Id", id);
                    parameters.Add("@Approve", approve);

                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "SP_Courier_MS",
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
        public async Task<dynamic> GetSignupById(int id)
        {
            try
            {
                using (var connection = _dapper.CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@flag", 6);
                    parameters.Add("@Id", id);

                    var data = await connection.QueryFirstOrDefaultAsync<dynamic>(
                        "SP_Courier_MS",
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
