using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class MathController : ControllerBase
{
    [HttpGet("sqrt")]
    [Produces("application/json")]
    public IActionResult GetSquareRoot()
    {
        var result = Math.Sqrt(9);
        return Ok(result);
    }
}