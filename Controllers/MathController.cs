using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class MathController : ControllerBase
{
    [HttpPost("sqrt")]
    [Produces("application/json")]
    public IActionResult GetSquareRoot()
    {
        var result = Math.Sqrt(9);
        return Ok(result);
    }
} // </^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json)$)([^.]+$)/>