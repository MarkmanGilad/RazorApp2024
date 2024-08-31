using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Antiforgery;

namespace RazorApp.Pages.Content
{

    [IgnoreAntiforgeryToken(Order = 1001)] // This disables antiforgery validation
    public class FormPostModel : PageModel
    {
        //[BindProperty]
        //public string userName { get; set; }
        //[BindProperty]
        //public string pass { get; set; }
        
        public IActionResult OnGet(string userName, string pass)
        {
            //UserName = Request.Query["userName"];
            //Pass = Request.Query["pass"];

            string txt = $"{userName} {pass}";
            return Content(txt, "text/plain");
        }
        public IActionResult OnPost (string userName, string pass) 
        {
            //UserName = Request.Form["userName"];
            //Pass = Request.Form["pass"];

            string txt = $"{userName} {pass}";
            return Content(txt, "text/plain");
        }
    }
}
