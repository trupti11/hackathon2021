using System;
using System.Collections.Generic;
using Werehouse.Models;

namespace Werehouse.Repositories
{
    public class TenantRepository
    {
        private static TenantRepository instance;
        private List<Tenant> tenants = new List<Tenant>();

        private TenantRepository() {
            tenants.Add(new Tenant() { Id = Guid.NewGuid(), Name = "Walmart" });
            tenants.Add(new Tenant() { Id = Guid.NewGuid(), Name = "Home Depot" });
            tenants.Add(new Tenant() { Id = Guid.NewGuid(), Name = "Sprouts" });
        }

        public static TenantRepository Instance
        {
            get {
                if(instance == null)
                {
                    instance = new TenantRepository();
                }

                return instance;
            }
        }


        public List<Tenant> GetAllTenants()
        {
            return tenants;
        } 
    }
}
