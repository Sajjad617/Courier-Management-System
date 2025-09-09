using Courier_MS.ViewModel;

namespace Courier_MS.Interface
{
    public interface IAdministrator
    {
        Task<dynamic> Signup(SignupVM model);
        Task<dynamic> Login(LoginVM model);
        Task<dynamic> GetSignup(bool approve);
        Task<dynamic> DeleteSignup(int id);
        Task<dynamic> Updateapprove(int id, bool approve);
        Task<dynamic> GetSignupById(int id);

    }
}
