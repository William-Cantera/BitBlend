using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class MathController : ControllerBase
{
    [HttpGet("sqrt")]
    public IActionResult GetSquareRoot()
    {
        var result = Math.Sqrt(9);
        return Ok(result);
    }
}