using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDoApi.Models
{
    public class ToDo
    {
        public string Id { get; set; }

        public string Title { get; set; }

        public DateTime dueDate { get; set; }

    }
}