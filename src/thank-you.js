const ratingParagraph = document.getElementById('thank-you-rating');
ratingParagraph.textContent = `You selected ${sessionStorage.getItem('rating')} out of 5`;