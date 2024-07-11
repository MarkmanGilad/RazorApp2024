using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Antiforgery;

namespace RazorApp.Pages.Content
{
    [IgnoreAntiforgeryToken(Order = 1001)] // This disables antiforgery validation
    public class FormPostModel : PageModel
    {
        
        public string userName { get; set; }
        public string pass { get; set; }

        public void OnGet()
        {
        }
        public void OnPost () 
        { 
            
        }
    }
}
