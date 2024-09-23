using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.InteropServices.JavaScript;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Sample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {

        [HttpGet]
        public IActionResult Get([FromQuery]string name) 
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                return BadRequest("name not found");
            }
            return Ok($"Hello My Name is {name}");
        }

        [HttpGet("getImage")]
        public async Task<IActionResult> getImage()
        {
            using HttpClient client = new()
            {
                BaseAddress = new Uri("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            };


            var response = await client.GetAsync(client.BaseAddress);

            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var document = JsonDocument.Parse(content);
                var data = document.RootElement;

                string hdUrl = data.GetProperty("hdurl").GetString();

                return Ok(hdUrl);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
