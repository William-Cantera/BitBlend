var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

// Add CORS configuration
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder.WithOrigins(
        "https://master.d12yk2hn6rz66e.amplifyapp.com	",
        "https://www.wfcantera.link")
            .AllowAnyMethod()
            .AllowAnyHeader());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (!app.Environment.IsDevelopment())
//{
app.UseHsts();
//}

app.UseHttpsRedirection();
app.UseRouting();
app.UseStaticFiles();

#pragma warning disable ASP0014 // Suggest using top level route registrations
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.MapControllerRoute(
        name: "api",
        pattern: "api/{controller}/{action}");

    endpoints.MapFallbackToFile("index.html");
});
#pragma warning restore ASP0014 // Suggest using top level route registrations

app.Run();