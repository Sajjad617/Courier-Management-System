using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using Dapper;
using System.Data.SqlClient;
using Courier_MS.DataContext;

public class RBackgroundService : BackgroundService
{
    private readonly ILogger<RBackgroundService> _logger;
    //private readonly string _connectionString;
    private readonly DapperContext _dapper;
    private readonly Random _random = new Random();

    public RBackgroundService(ILogger<RBackgroundService> logger, IConfiguration configuration, DapperContext dapper)
    {
        _logger = logger;
        _dapper = dapper;
        //_connectionString = configuration.GetConnectionString("DefaultConnection");
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        _logger.LogInformation("Random Number Dapper Service started.");

        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                var value = _random.Next(1, 1000);

                // DapperContext থেকে connection নেওয়া
                using var connection = _dapper.CreateConnection();

                var sql = "INSERT INTO RandomNumbers (Value, CreatedAt) VALUES (@Value, @CreatedAt)";
                await connection.ExecuteAsync(sql, new { Value = value, CreatedAt = DateTime.Now });

                _logger.LogInformation("🎲 Inserted random number {value} at {time}", value, DateTime.Now);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "❌ Error inserting random number");
            }

            // Wait 5 minutes
            await Task.Delay(TimeSpan.FromDays(1), stoppingToken);
        }
    }
}
