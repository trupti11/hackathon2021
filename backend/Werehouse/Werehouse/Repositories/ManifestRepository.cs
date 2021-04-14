using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Werehouse.Repositories
{
    public class ManifestRepository
    {
        private static ManifestRepository instance;
        private readonly List<JObject> manifests = new List<JObject>();

        private ManifestRepository()
        {
            manifests.Add(JObject.Parse(File.ReadAllText(@"Manifests\walmart.json")));
        }

        public static ManifestRepository Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new ManifestRepository();
                }

                return instance;
            }
        }

        public List<JObject> GetAllManifests()
        {
            return manifests;
        }
    }
}
