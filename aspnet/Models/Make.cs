using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace aspnet.Models
{
    public class Make
    {
        public int ID{ get; set;}
        public string name { get; set; }

        public ICollection<Model> models { get; set; }

        public Make()
        {
            models = new Collection<Model>();
        }
    }
}