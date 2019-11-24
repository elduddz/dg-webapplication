using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FrameworksController : ControllerBase
    {
        private static readonly string[] Frameworks = new[]
        {
            "net35","net40","net46","net461","netstandard1.1","netstandard2.0","netcoreapp2.0","netcoreapp2.2","netcoreapp3.0"
        };

        private readonly ILogger<FrameworksController> _logger;

        public FrameworksController(ILogger<FrameworksController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Framework> Get()
        {
            foreach(var framework in Frameworks)
            {
                yield return new Framework { Name = framework };
            }
        }
    }
}
