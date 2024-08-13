/*
! using iText.Kernel.Pdf;
! using iText.Kernel.Pdf.Canvas.Parser;
! using Microsoft.AspNetCore.Mvc;
* PDF dosyalarını okumak ve işlemek için iText7 kütüphanesinin sınıflarını kullanıyoruz.
*/


/*
namespace PdfReaderApp.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class PdfController : ControllerBase {}
}

! PdfReaderApp.Controllers: 
* Proje için namespace.

! [Route("api/[controller]")]:
* Controller'ın URL'sini belirler. `[controller]` controller adını temsil eder.

! [ApiController]:
* Bu sınıfın bir API controller'ı olduğunu belirtir.
*/

/*
[HttpPost("upload")]
public IActionResult UploadPdf([FromForm] IFormFile file) {}

! [HttpPost("upload")]:
* Bu metodun HTTP POST isteklerini "upload" rotasında işleyeceğini belirtir.

!UploadPdf([FromForm] IFormFile file):
* PDF dosyasını almak için kullanılan metot. IFormFile, dosya içeriğini temsil eder.
*/

/*
if (file == null) {
    return BadRequest("Please upload a valid PDF file.");
}

* Dosyanın geçerli olup olmadığını kontrol eder. Geçerli değilse, 400 Bad Request hatası döndürür.
*/

/*
string text;

using (var reader = new PdfReader(file.OpenReadStream())) {
    using (var pdfDoc = new PdfDocument(reader)) {
        text = PdfTextExtractor.GetTextFromPage(pdfDoc.GetPage(1));
    }
}

! PdfReader:
* PDF dosyasını okumak için bir akış açar.

! PdfDocument:
* PDF dosyasını yükler.

! PdfTextExtractor.GetTextFromPage(pdfDoc.GetPage(1)):
* PDF'nin ilk sayfasından metin çıkarır.
*/

/*
return Ok(new { Content = text });

* Okunan metni JSON formatında döndürür.
*/