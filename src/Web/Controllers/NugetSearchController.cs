using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

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
            var query = $"https://azuresearch-usnc.nuget.org/query?q={search}";

            using (var client = new HttpClient())
            {
                var request = new HttpRequestMessage()
                {
                    Method = HttpMethod.Get,
                    RequestUri = new Uri(query)  
                };

                request.Headers.Add("Content-Type", "application/json");
                var response = client.GetAsync(query);
                var content = response.Result.Content.ReadAsStringAsync().Result;
                var results = JsonConvert.DeserializeObject<query>(content);

                foreach(var data in results.data)
                {
                    yield return new Package { Id = data.id, Version = data.version};
                }
            }
        }
    }
}
