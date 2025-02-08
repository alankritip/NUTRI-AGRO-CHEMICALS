// shopnowbtn
document.addEventListener("DOMContentLoaded", function () {
    let shopNowBtn = document.getElementById("shopNowBtn");
    shopNowBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor action
        Swal.fire({
            // title: 'Contact Us',
            html: `<strong>Customer Care No. :</strong> 
                <br>
                <a href="tel:+919369697234" style="color:rgb(0, 0, 0); text-decoration: none;">+91 9369697234</a> 
                <br> <br>
                <strong>E-mail:</strong> 
                <a href="mailto:nutritionagro4@gmail.com" style="color: #rgb(0,0,0); text-decoration: none;">
                    nutritionagro4@gmail.com
                </a>`,
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/724/724664.png',  /* Contact Icon */
            imageWidth: 80,  /* Adjust icon size */
            imageHeight: 80,
            showCancelButton: true,
            cancelButtonText: 'Close',
            confirmButtonText: 'Call Now',
            customClass: {
                popup: 'swal2-popup',
                title: 'swal2-title',
                htmlContainer: 'swal2-html-container',
                confirmButton: 'swal2-confirm'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "tel:+919369697234"; // Redirect to call
            }
        });
    });
 });

import testimonials from './testimonials.js'
testimonials();