const lightbox = document.getElementById('lightbox');
const galleryItems = document.querySelectorAll('.imageContainer img');
const lightbox__img = document.getElementById('lightboxImg');

function openLightbox(index){
    lightbox.style.display = 'flex';
    const img = galleryItems[index];
    lightbox__img.src = img.src;
}
    
galleryItems.forEach((img, index)=>{
    galleryItems[index].addEventListener('click', ()=> openLightbox(index));
});
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const caption = document.getElementById('caption');
function closeLightbox(){
    lightbox.style.display = 'none';
}
function showImage(index) {
    const img = galleryItems[index];
    lightbox__img.src = img.src;
    caption.textContent = img.alt || '';
}
function showPrevImage() {
    let currentIndex = Array.from(galleryItems).findIndex(img => img.src === lightbox__img.src);
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showImage(currentIndex);
}
function showNextImage() {
    let currentIndex = Array.from(galleryItems).findIndex(img => img.src === lightbox__img.src);
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showImage(currentIndex);
}
// Event listeners for lightbox controls
closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
// Show the lightbox when an image is clicked
galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
        openLightbox(index);
        showImage(index);
    });
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    }
});
