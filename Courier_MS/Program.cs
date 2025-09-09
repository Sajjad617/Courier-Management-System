using Courier_MS.Controllers;
using Courier_MS.DataContext;
using Courier_MS.Interface;

using Courier_MS.MarcentRepository;
using Courier_MS.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSingleton<DapperContext>();
builder.Services.AddScoped<IAdministrator, AdministratorService>();
builder.Services.AddScoped<IMarcent, ParcelService>();
builder.Services.AddScoped<ILocation, LocationService>();
builder.Services.AddScoped<IStore, StoreService>();
builder.Services.AddScoped<IMail, MailService>();
builder.Services.AddScoped<IPricingPlan, PricingPlanService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
string[] allowedOrigins = new string[]
{
    "http://localhost:4200"
};

builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins(allowedOrigins.ToArray())
           .AllowAnyMethod()
           .AllowAnyHeader()
           .AllowCredentials();
}));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("corsapp");
app.UseAuthorization();

app.MapControllers();

app.Run();
