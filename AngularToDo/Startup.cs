using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularToDo.Startup))]
namespace AngularToDo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
