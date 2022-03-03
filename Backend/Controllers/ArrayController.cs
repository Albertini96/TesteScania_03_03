using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back_end.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace back_end.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ArrayController : ControllerBase
    {
        
        [HttpGet]
        public IActionResult Get()
        {
            db _db = new db();
            
            return Ok(_db.getValues());
        }
    }
}