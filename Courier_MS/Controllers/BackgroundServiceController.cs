using Courier_MS.DataContext;
using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Courier_MS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BackgroundServiceController : ControllerBase
    {
        private readonly DapperContext _dapper;
        public BackgroundServiceController(DapperContext dapper)
        {
            _dapper = dapper;
        }

        [HttpGet("latest")]
        public async Task<IActionResult> GetLatest()
        {
            using var connection = _dapper.CreateConnection();
            var sql = "SELECT TOP 1 * FROM RandomNumbers ORDER BY CreatedAt DESC";
            var latest = await connection.QueryFirstOrDefaultAsync(sql);
            if (latest == null) return NotFound("No random numbers yet.");
            return Ok(latest);
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
            using var connection = _dapper.CreateConnection();
            var sql = "SELECT * FROM RandomNumbers ORDER BY CreatedAt DESC";
            var all = await connection.QueryAsync(sql);
            return Ok(all);
        }

    }
}
