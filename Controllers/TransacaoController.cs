using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Funcional.TFTA.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class TransacaoController : Controller
    {
        [HttpGet]        
        public Transaction GetTransaction()
        {
            return new Transaction() { Codigo = 1, Nome = "Marcio" };
        }
    }

    public class Transaction
    {
        public int Codigo { get; set; }
        public string Nome { get; set; }
    }
}
