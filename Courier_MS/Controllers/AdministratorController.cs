using Courier_MS.Interface;
using Courier_MS.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Courier_MS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdministratorController : ControllerBase
    {
        private readonly IAdministrator _administrator;
        public AdministratorController(IAdministrator administrator)
        {
            _administrator = administrator;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> Signup(SignupVM model)
        {
            try
            {
                var data = await _administrator.Signup(model);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginVM model)
        {
            var data = await _administrator.Login(model);
            return Ok(data);
        }

        [HttpGet("GetSignup")]
        public async Task<IActionResult> GetSignup(bool approve)
        {
            var data = await _administrator.GetSignup(approve);
            return Ok(data);
        }
        [HttpDelete("DeleteSignup")]
        public async Task<IActionResult> DeleteSignup(int id)
        {
            var data = await _administrator.DeleteSignup(id);
            return Ok(data);
        }

        [HttpGet("Updateapprove")]
        public async Task<IActionResult> Updateapprove(int id, bool approve)
        {
            var data = await _administrator.Updateapprove(id, approve);
            return Ok(data);
        }
        [HttpGet("GetSignupById")]
        public async Task<IActionResult> GetSignupById(int id)
        {
            var data = await _administrator.GetSignupById(id);
            return Ok(data);
        }
    }
}
