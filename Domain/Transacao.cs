using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Funcional.TFTA.Domain
{
    public class Transacao
    {
        [JSInvokable]
        public Task<string> FileName()
        {
            return Task.FromResult("012345.env");
        }

    }
}
