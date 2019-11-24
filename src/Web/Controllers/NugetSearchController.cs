using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NugetSearchController : ControllerBase
    {
        private readonly ILogger<FrameworksController> _logger;

        public NugetSearchController(ILogger<FrameworksController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Package> Get(string search)
        {
            using(var client = new HttpClient())
            {
                
            }

            return null;
        }
    }
}
