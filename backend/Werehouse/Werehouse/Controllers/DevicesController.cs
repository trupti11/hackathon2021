using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Werehouse.Models;
using Werehouse.Repositories;

namespace Werehouse.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DevicesController : ControllerBase
    {
        private readonly DeviceRepository deviceRepository;

        public DevicesController()
        {
            deviceRepository = DeviceRepository.Instance;
        }

        [HttpGet]
        public List<Device> GetAllDevices()
        {
            return deviceRepository.GetAllDevices();
        }

        [HttpPost]
        public Device AddDevice(DeviceRequest request)
        {
            return deviceRepository.AddDevice(request.AssetTag);
        }
    }
}
