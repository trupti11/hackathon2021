using System;

namespace Werehouse.Models
{
    public class Device
    {
        public Guid Id { get; set; }

        public string AssetTag { get; set; }

        public Guid TenantId { get; set; }

        public DeviceProvisioningStatus Status { get; set; }

        public DeviceType Type { get; set; }
    }
}
