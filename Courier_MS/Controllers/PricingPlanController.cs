using Courier_MS.Interface;
using Courier_MS.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Org.BouncyCastle.Utilities.Collections;

namespace Courier_MS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PricingPlanController : ControllerBase
    {
        private readonly IPricingPlan _pricingPlan;
        public PricingPlanController(IPricingPlan pricingPlan)
        {
            _pricingPlan = pricingPlan;
        }

        [HttpGet("GetPricingPlanArea")]

        public async Task<IActionResult> GetPricingPlanArea()
        {
            try
            {
                var data = await _pricingPlan.GetPricingPlanArea();
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPost("SavePricingPlan")]

        public async Task<IActionResult> SavePricingPlan(PricingPlanVM price)
        {
            try
            {
                var data = await _pricingPlan.SavePricingPlan(price);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }
        
        [HttpGet("GetPricingPlan")]

        public async Task<IActionResult> GetPricingPlan()
        {
            try
            {
                var data = await _pricingPlan.GetPricingPlan();
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }
        
        [HttpDelete("DeletePricingPlan")]

        public async Task<IActionResult> DeletePricingPlan(int id)
        {
            try
            {
                var data = await _pricingPlan.DeletePricingPlan(id);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }
        
        [HttpGet("GetPricingPlanbyID")]

        public async Task<IActionResult> GetPricingPlanbyID(int id)
        {
            try
            {
                var data = await _pricingPlan.GetPricingPlanbyID(id);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }


    }
}
