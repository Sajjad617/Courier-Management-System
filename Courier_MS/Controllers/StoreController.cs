using Courier_MS.Interface;
using Courier_MS.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Courier_MS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoreController : ControllerBase
    {
        private readonly IStore _store;
        public StoreController(IStore store)
        {
            _store = store;
        }


        [HttpPost("SaveStore")]
        public async Task<IActionResult> SaveStore(StoreVM store)
        {
            try
            {
                var data =await _store.SaveStore(store);
                return Ok(data);
            }
            catch (Exception)
            {
                throw;
            }
        }
        
        [HttpGet("GetStore")]
        public async Task<IActionResult> GetStore()
        {
            try
            {
                var data = await _store.GetStore();
                return Ok(data);
            }
            catch (Exception)
            {
                throw;
            }
        }
        
        [HttpGet("GetbyIdStore")]
        public async Task<IActionResult> GetbyIdStore(int id)
        {
            try
            {
                var data = await _store.GetbyIdStore(id);
                return Ok(data);
            }
            catch (Exception)
            {
                throw;
            }
        }
        
        [HttpDelete("DeleteStore")]
        public async Task<IActionResult> DeleteStore(int id)
        {
            try
            {
                var data = await _store.DeleteStore(id);
                return Ok(data);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
