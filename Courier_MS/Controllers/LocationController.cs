using Courier_MS.Interface;
using Courier_MS.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Courier_MS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly ILocation _interf;
        public LocationController(ILocation location)
        {
            _interf = location;
        }

        [HttpGet("getAllCity")]
        public async Task<IActionResult> getAllCity()
        {
            try
            {
                var data = await _interf.getAllCity();
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpGet("getCityById")]
        public async Task<IActionResult> getCityById(int id)
        {
            try
            {
                var data = await _interf.getCityById(id);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpDelete("DeleteCity")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            try
            {
                var data = await _interf.DeleteCity(id);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPost("citysave")]
        public async Task<IActionResult> citysave(commonVM model)
        {
            try
            {
                var data = await _interf.citysave(model);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }


        [HttpGet("getAllZone")]
        public async Task<IActionResult> getAllZone()
        {
            try
            {
                var data = await _interf.getAllZone();
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpGet("getZoneById")]
        public async Task<IActionResult> getZoneById(int id)
        {
            try
            {
                var data = await _interf.getZoneById(id);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }
         [HttpGet("getZoneByCityId")]
        public async Task<IActionResult> getZoneByCityId(int id)
        {
            try
            {
                var data = await _interf.getZoneByCityId(id);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpDelete("DeleteZone")]
        public async Task<IActionResult> DeleteZone(int id)
        {
            try
            {
                var data = await _interf.DeleteZone(id);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPost("Zonesave")]
        public async Task<IActionResult> Zonesave(zoneVM model)
        {
            try
            {
                var data = await _interf.zoneSave(model);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }





        [HttpGet("getAllArea")]
        public async Task<IActionResult> getAllArea()
        {
            try
            {
                var data = await _interf.getAllArea();
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpGet("getAreaById")]
        public async Task<IActionResult> getAreaById(int id)
        {
            try
            {
                var data = await _interf.getAreaById(id);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet("getAreaByZoneId")]
        public async Task<IActionResult> getAreaByZoneId(int id)
        {
            try
            {
                var data = await _interf.getAreaByZoneId(id);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }


        [HttpDelete("DeleteArea")]
        public async Task<IActionResult> DeleteArea(int id)
        {
            try
            {
                var data = await _interf.DeleteArea(id);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPost("Areasave")]
        public async Task<IActionResult> Areasave(areaVM model)
        {
            try
            {
                var data = await _interf.areaSave(model);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }
        
        
        [HttpGet("status")]
        public async Task<IActionResult> status(int id, bool status)
        {
            try
            {
                var data = await _interf.status(id, status);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }
        
        [HttpGet("GetAllLocation")]
        public async Task<IActionResult> GetAllLocation()
        {
            try
            {
                var data = await _interf.GetAllLocation();
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
