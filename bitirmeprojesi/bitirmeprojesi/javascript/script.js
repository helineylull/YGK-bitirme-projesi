   
   
   document.getElementById("emailButton").addEventListener("click", function() {
        window.location.href = "mailto:eylull.helin@gmail.com";
    });



    document.getElementById("linkedinButton").addEventListener("click", function() {
       window.open("https://www.linkedin.com/in/helin-eylül-tekin-898703278", "_blank");
    });



    document.getElementById("githubButton").addEventListener("click", function() {
        window.open("https://github.com/helineylull","_blank");
    });


    document.getElementById("cvButton").addEventListener("click", function() {
        window.location.href = "cv/CV.docx";
    });


    document.addEventListener('DOMContentLoaded', function() {
        const accordionItems = document.querySelectorAll('.accordion-item');
    
        accordionItems.forEach(item => {
            const button = item.querySelector('.accordion-button');
            const collapse = item.querySelector('.accordion-collapse');
            const icon = item.querySelector('.toggle-icon');
    
            button.addEventListener('click', function() {
                const isActive = collapse.classList.contains('show');
                
                // İkonu güncelle: + veya -
                if (isActive) {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                } else {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                }
            });
        });
    });
    

