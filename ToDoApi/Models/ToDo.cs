using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDoApi.Models
{
    public class ToDo
    {
        public string id { get; set; }

        public string title { get; set; }

        public DateTime dueDate { get; set; }

    }
}