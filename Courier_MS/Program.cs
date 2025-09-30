using Courier_MS.Controllers;
using Courier_MS.DataContext;
using Courier_MS.Interface;

using Courier_MS.MarcentRepository;
using Courier_MS.Repository;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
//JWT 
builder.Services.AddAuthentication("Bearer")
    .AddJwtBearer("Bearer", options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    });
// Add services to the container.
builder.Services.AddSingleton<DapperContext>();
builder.Services.AddScoped<IAdministrator, AdministratorService>();
builder.Services.AddScoped<IMarcent, ParcelService>();
builder.Services.AddScoped<ILocation, LocationService>();
builder.Services.AddScoped<IStore, StoreService>();
builder.Services.AddScoped<IMail, MailService>();
builder.Services.AddScoped<IPricingPlan, PricingPlanService>();
builder.Services.AddSignalR();
//builder.Services.AddScoped< PricingPlanService>();

// Register background service
builder.Services.AddHostedService<RBackgroundService>();


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    // Single Swagger doc, no versioning needed
    c.SwaggerDoc("default", new()
    {
        Title = "My API",
        Description = "API documentation without versioning"
    });

    // JWT Authentication in Swagger
    c.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.Models.OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = Microsoft.OpenApi.Models.SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = Microsoft.OpenApi.Models.ParameterLocation.Header,
        Description = "Enter JWT token like: Bearer {your token}"
    });

    c.AddSecurityRequirement(new Microsoft.OpenApi.Models.OpenApiSecurityRequirement
    {
        {
            new Microsoft.OpenApi.Models.OpenApiSecurityScheme
            {
                Reference = new Microsoft.OpenApi.Models.OpenApiReference
                {
                    Type = Microsoft.OpenApi.Models.ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });
});
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
    app.UseSwaggerUI(c =>
    {
        // এখানে custom swagger.json এর path set হবে
        c.SwaggerEndpoint("/swagger/default/swagger.json", "My API v1");
    });
}

app.UseHttpsRedirection();
app.UseCors("corsapp");
app.UseAuthentication();

app.UseAuthorization();
app.MapControllers();
app.MapHub<ChatHub>("/chathub");

app.Run();
