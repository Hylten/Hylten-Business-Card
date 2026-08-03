window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if(loader) {
      loader.classList.add('hidden');
    }
  }, 2100);
  setTimeout(() => {
    const container = document.getElementById('mainContainer');
    if(container) {
      container.classList.add('animate-active');
    }
  }, 2150);
});

function toggleModal(modalId, show) {
  const modal = document.getElementById(modalId);
  if (show) {
    modal.style.display = 'flex';
  } else {
    modal.style.display = 'none';
  }
}

function copyLink() {
  const url = 'https://hylten.github.io/Hylten-Business-Card/';
  navigator.clipboard.writeText(url).then(() => {
    const btn = document.querySelector('.copy-link-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg> Copied!';
    btn.style.backgroundColor = '#4CAF50';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.backgroundColor = '#ffffff';
      btn.style.color = '#000000';
    }, 2000);
  });
}

let pendingLink = null;
function handleLinkClick(element, delay) {
  const url = element.href;
  const overlay = document.getElementById('linkOverlay');
  overlay.classList.add('active');

  setTimeout(() => {
    overlay.classList.remove('active');
    window.open(url, '_blank');
  }, delay);

  return false;
}

document.querySelector('.share-btn').addEventListener('click', (e) => {
  toggleModal('shareModal', true);
});

document.querySelectorAll('[data-modal-open]').forEach(el => {
  el.addEventListener('click', (e) => {
    toggleModal(el.dataset.modalOpen, true);
  });
});

document.querySelectorAll('[data-modal-close]').forEach(el => {
  el.addEventListener('click', (e) => {
    toggleModal(el.dataset.modalClose, false);
  });
});

document.querySelectorAll('.modal-overlay').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      toggleModal(modal.id, false);
    }
  });
});

document.querySelectorAll('[data-link-click]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    return handleLinkClick(el, 1400);
  });
});

document.querySelector('.copy-link-btn').addEventListener('click', copyLink);
