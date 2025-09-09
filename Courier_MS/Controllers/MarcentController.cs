using Courier_MS.Interface;
using Courier_MS.MarcentModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Courier_MS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MarcentController : ControllerBase
    {
        private readonly IMarcent _marcent;
        public MarcentController(IMarcent marcent)
        {
            _marcent = marcent;
        }

        [HttpPost("ParcelSave")]
        public async Task<IActionResult> ParcelSave(ParcelVM parcel)
        {
            try
            {
                var data = await _marcent.ParcelSave(parcel);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpGet("ParcelGet")]
        public async Task<IActionResult> ParcelGet()
        {
            try
            {
                var data = await _marcent.ParcelGet();
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveParcel(int id)
        {
            try
            {
                var data = await _marcent.RemoveParcel(id);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpGet("GetParcelById")]
        public async Task<IActionResult> GetParcelById(int id)
        {
            try
            {
                var data = await _marcent.GetParcelById(id);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet("ParcelStatus")]
        public async Task<IActionResult> ParcelStatus(int id)
        {
            try
            {
                var data = await _marcent.ParcelStatus(id);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpGet("IncreaseStatus")]
        public async Task<IActionResult> IncreaseStatus(int id, int statusId)
        {
            try
            {
                var data = await _marcent.IncreaseStatus(id, statusId);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
