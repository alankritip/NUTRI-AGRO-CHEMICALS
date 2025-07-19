document.addEventListener("DOMContentLoaded", function () {
    // Shop Now Button
    let shopNowBtn = document.getElementById("shopNowBtn");
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', function (event) {
            event.preventDefault();
            Swal.fire({
                html: `<strong>Customer Care No. :</strong><br>
                      <a href="tel:+919369697234" style="color: #000000; text-decoration: none;">+91 9369697234</a><br><br>
                      <strong>E-mail:</strong>
                      <a href="mailto:nutritionagro4@gmail.com" style="color: #000000; text-decoration: none;">nutritionagro4@gmail.com</a>`,
                imageUrl: 'https://cdn-icons-png.flaticon.com/512/724/724664.png',
                imageWidth: 80,
                imageHeight: 80,
                showCancelButton: true,
                cancelButtonText: 'Close',
                confirmButtonText: 'Call Now',
                customClass: {
                    popup: 'swal2-popup',
                    htmlContainer: 'swal2-html-container',
                    confirmButton: 'swal2-confirm'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "tel:+919369697234";
                }
            });
        });
    }

    // Testimonial Carousel
    (function () {
        const testimonialsSection = document.querySelector('.testimonials__content');
        if (!testimonialsSection) {
            console.error('Testimonials section not found');
            return;
        }
        console.log('Testimonials section found:', testimonialsSection);

        const testimonialContainer = testimonialsSection.querySelector('.testimonials__list');
        const nextBtn = testimonialsSection.querySelector('.btn__testimonials__next');
        const prevBtn = testimonialsSection.querySelector('.btn__testimonials__prev');

        if (!testimonialContainer || !nextBtn || !prevBtn) {
            console.error('Carousel elements missing:', { testimonialContainer, nextBtn, prevBtn });
            return;
        }
        console.log('Buttons found:', { nextBtn, prevBtn });

        const testimonials = testimonialContainer.querySelectorAll('.testimonial');
        let testimonialsWidth, testimonialWidth;
        let testimonialIndex = 0;
        const gridGap = 25;
        let limit = getLimit();

        nextBtn.addEventListener('click', () => {
            console.log('Next button clicked, index:', testimonialIndex);
            moveToNextSlide();
        });
        prevBtn.addEventListener('click', () => {
            console.log('Prev button clicked, index:', testimonialIndex);
            moveToPrevSlide();
        });

        window.addEventListener("resize", () => {
            limit = getLimit();
            testimonialIndex = 0;
            testimonialContainer.style.transform = `translateX(0px)`;
            checkLimitForBtnStatus();
        });

        function moveToNextSlide() {
            if (!isContinue({ direction: true })) return;
            testimonialIndex++;
            console.log('Moving to index:', testimonialIndex, 'Transform:', `- ${testimonialWidth * testimonialIndex}px`);
            testimonialContainer.style.transform = `translateX(${-testimonialWidth * testimonialIndex}px)`;
            testimonialContainer.style.transition = ".7s";
        }

        function moveToPrevSlide() {
            if (!isContinue({ direction: false })) return;
            testimonialIndex--;
            console.log('Moving to index:', testimonialIndex, 'Transform:', `- ${testimonialWidth * testimonialIndex}px`);
            testimonialContainer.style.transform = `translateX(${-testimonialWidth * testimonialIndex}px)`;
            testimonialContainer.style.transition = ".7s";
        }

        function isContinue(args) {
            if (args.direction) {
                if (testimonialIndex < limit) {
                    checkTestimonialFinish(args.direction, nextBtn, prevBtn);
                    return true;
                } else {
                    updateBtnStatus(nextBtn, true);
                    updateBtnStatusByLimit(prevBtn);
                    return false;
                }
            } else {
                if (testimonialIndex > 0) {
                    checkTestimonialFinish(args.direction, prevBtn, nextBtn);
                    return true;
                } else {
                    updateBtnStatus(prevBtn, true);
                    updateBtnStatusByLimit(nextBtn);
                    return false;
                }
            }
        }

        function getElementsWidth() {
            return [
                testimonialContainer.clientWidth,
                testimonials[0].clientWidth + gridGap
            ];
        }

        function getLimit() {
            [testimonialsWidth, testimonialWidth] = getElementsWidth();
            let testimonialCountPerWrap = testimonialsWidth / testimonialWidth;
            return Math.floor(testimonials.length - testimonialCountPerWrap);
        }

        function checkLimitForBtnStatus() {
            if (limit <= 0) {
                nextBtn.classList.add('disable');
            } else {
                nextBtn.classList.remove('disable');
            }
        }

        function updateBtnStatus(btn, status) {
            if (status) {
                btn.classList.add('disable');
            } else {
                btn.classList.remove('disable');
            }
        }

        function checkTestimonialFinish(direction, btn1, btn2) {
            const status = direction ? (testimonialIndex + 1 < limit) : (testimonialIndex - 1 > 0);
            updateBtnStatus(btn1, !status);
            updateBtnStatus(btn2, false);
        }

        function updateBtnStatusByLimit(btn) {
            if (limit != 0) {
                updateBtnStatus(btn, false);
            }
        }
    })();
});