export function initCoverflowCarousel() {
  const track = document.getElementById('carousel-track');
  const cards = Array.from(track.querySelectorAll('.carousel-card'));
  let currentIndex = 0;
  const total = cards.length;

  function updatePositions() {
  const totalCards = cards.length;

  cards.forEach((card, index) => {
    let offset = index - currentIndex;

    if (offset > totalCards / 2) offset -= totalCards;
    if (offset < -totalCards / 2) offset += totalCards;

    card.classList.remove('glow-central'); // limpiamos siempre
    card.style.zIndex = totalCards - Math.abs(offset);

    card.style.display = 'flex';
    
    if (offset === 0) {
      card.classList.add('glow-central');
      card.style.transform = `translateX(0) scale(1)`;
      card.style.opacity = '1';
      card.style.filter = 'blur(0)';
    } else if (offset === -1 || offset === 1) {
      const direction = offset < 0 ? -1 : 1;
      card.style.transform = `translateX(${220 * direction}px) scale(0.85)`;
      card.style.opacity = '0.7';
      card.style.filter = 'blur(1.2px)';
    } else if (offset === -2 || offset === 2) {
      const direction = offset < 0 ? -1 : 1;
      card.style.transform = `translateX(${400 * direction}px) scale(0.7)`;
      card.style.opacity = '0';
      card.style.filter = 'blur(4px)';
    } else {
      card.style.transform = 'translateX(0) scale(0.5)';
      card.style.opacity = '0';
      card.style.filter = 'blur(6px)';
      card.style.display = 'none';
    }
  });
}

  function showInitialState() {
    track.style.opacity = '1';
    updatePositions();
  }

  function goToNext() {
    currentIndex = (currentIndex + 1) % total;
    updatePositions();
  }

  function goToPrev() {
    currentIndex = (currentIndex - 1 + total) % total;
    updatePositions();
  }

  let startX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  track.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    if (endX < startX - 40) {
      goToNext();
    } else if (endX > startX + 40) {
      goToPrev();
    }
    isDragging = false;
  });

  track.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
  });

  track.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    const endX = e.clientX;
    if (endX < startX - 40) {
      goToNext();
    } else if (endX > startX + 40) {
      goToPrev();
    }
    isDragging = false;
  });

  // Iniciar animación al cargar
  setTimeout(showInitialState, 50);

  // Flechas (solo desktop si están presentes)
  const prevBtn = document.getElementById('prev-button');
  const nextBtn = document.getElementById('next-button');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);
  }
}
