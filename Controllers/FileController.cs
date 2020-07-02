using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Funcional.TFTA.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Funcional.TFTA.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
       [HttpGet]
       public File GetFile()
        {
            return new File()
            {
                Id = Guid.NewGuid(),
                Path = @"C:\Files\Entrada",
                Name = "3892826.env"
            };
        }

    }
}
