using System;
using System.Collections.Generic;
using System.Linq;
using Werehouse.Models;

namespace Werehouse.Repositories
{
    public class DeviceRepository
    {
        private static DeviceRepository instance;
        private readonly List<Device> devices = new List<Device>();

        private DeviceRepository()
        {

        }

        public static DeviceRepository Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new DeviceRepository();
                }

                return instance;
            }
        }

        public List<Device> GetAllDevices()
        {
            return devices;
        }

        public Device AddDevice(string assetTag)
        {
            var device = new Device()
            {
                Id = Guid.NewGuid(),
                AssetTag = assetTag,
                Status = DeviceProvisioningStatus.Unprovisioned,
                Type = DeviceType.Pico
            };

            devices.Add(device);

            return device;
        }

        public void AssignDeviceToTenant(Guid deviceId, Guid tenantId)
        {
            var device = devices.FirstOrDefault(x => x.Id.Equals(deviceId));
            device.TenantId = tenantId;
        }
    }
}
