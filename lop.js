const pdf = new window.jspdf.jsPDF();
let ib = document.getElementById('ib')
let ib1 = document.getElementById('ib1')

function pdfimg(id){  
    ib.setAttribute('contenteditable','false')
    ib1.setAttribute('contenteditable','false')
    const element = document.getElementById("my-textarea");
    if (!element) {
        console.error("Textarea not found");
        return;
    }
    
    html2canvas(element, {
        scale: 3, 
        dpi: 600,
        letterRendering: 3, // زيادة جودة الحروف
        useCORS: true, 
        logging: false,
        allowTaint: true,
        scrollY: -window.scrollY, // تجاهل التمرير العمودي للصفحة
        scrollX: -window.scrollX // تجاهل التمرير الأفقي للصفحة
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg', 1);
        if(id == 'img_D'){

            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'image.jpg'; // اسم الملف الذي سيتم تنزيله
            link.click(); // تنزيل الصورة
        }
        else{
            pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
            pdf.save('document.pdf');
        }
    });      
    ib.setAttribute('contenteditable','true')
    ib1.setAttribute('contenteditable','true')
}

// function pdfimg1(id){  
//     const element = document.getElementById("my-textarea");
//     if (!element) {
//         console.error("Textarea not found");
//         return;
//     }
    
//     html2canvas(element, {
//         scale: 3, 
//         dpi: 600,
//         letterRendering: 3, // زيادة جودة الحروف
//         useCORS: true, 
//         logging: false,
//         allowTaint: true,
//         scrollY: -window.scrollY, // تجاهل التمرير العمودي للصفحة
//         scrollX: -window.scrollX // تجاهل التمرير الأفقي للصفحة
//     }).then(canvas => {
//         const imgData = canvas.toDataURL('image/jpeg', 1);
//         if(id == 'img_D'){

//             const link = document.createElement('a');
//             link.href = imgData;
//             link.download = 'image.jpg'; // اسم الملف الذي سيتم تنزيله
//             link.click(); // تنزيل الصورة
//         }
//         else{
//             pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
//             pdf.save('document.pdf');
//         }
//     });      
// }
function wats(){

// // تعريف البيانات المطلوبة
// const phoneNumber = '+201140057739';
// const image = 'http://example.com/image.jpg';
// const message = image;

// // تشكيل عنوان الرابط
// const url = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}&image=${encodeURIComponent(image)}`;

// // فتح الواتساب في المتصفح
// window.open(url);












}
function sendFile() {
    const input = document.getElementById('fileInput');
    const file = input.files[0];
    if (!file) {
      console.error('لم يتم اختيار ملف');
      return;
    }
  
    const reader = new FileReader();
    reader.onload = function(e) {
      const base64Data = e.target.result.split(',')[1];
      const chatId = '00201140057739';
      const message = `data:${file.type};base64,${base64Data}`;
  
      const url = `whatsapp://send?text=${encodeURIComponent(message)}&phone=${chatId}`;
      window.location.href = url;
    }
    reader.readAsDataURL(file);
  }
  
  
  
  
  
  
  