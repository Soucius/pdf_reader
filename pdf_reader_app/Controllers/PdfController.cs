using iText.Kernel.Pdf;
using iText.Kernel.Pdf.Canvas.Parser;
using Microsoft.AspNetCore.Mvc;

namespace PdfController.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PdfController : ControllerBase {
        [HttpPost("upload")]
        public IActionResult UploadPdf([FromForm] IFormFile file) {
            // checking if file is empty
            if (file == null) {
                return BadRequest("Please upload a valid PDF file.");
            }

            string text;

            // use PdfReader for reading PDF file
            using (var reader = new PdfReader(file.OpenReadStream())) {
                using (var pdfDoc = new PdfDocument(reader)) {
                    // getting text from PDF's first page
                    text = PdfTextExtractor.GetTextFromPage(pdfDoc.GetPage(1));
                }
            }

            // returns the formatted(JSON) text
            return Ok(new { Content = text });
        }
    }   
}