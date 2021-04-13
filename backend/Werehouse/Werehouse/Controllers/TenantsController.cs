using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Werehouse.Models;
using Werehouse.Repositories;

namespace Werehouse.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TenantsController : ControllerBase
    {
        private TenantRepository tenantRepository;

        public TenantsController()
        {
            tenantRepository = TenantRepository.Instance;
        }

        [HttpGet]
        public List<Tenant> Get()
        {
            return tenantRepository.GetAllTenants();
        }
    }
}
