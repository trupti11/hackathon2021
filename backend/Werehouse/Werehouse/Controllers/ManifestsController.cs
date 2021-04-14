using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using Werehouse.Repositories;

namespace Werehouse.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ManifestsController : ControllerBase
    {
        private readonly ManifestRepository manifestRepository;

        public ManifestsController()
        {
            manifestRepository = ManifestRepository.Instance;
        }

        [HttpGet]
        public List<JObject> GetManifests()
        {
            return manifestRepository.GetAllManifests();
        }
    }
}
