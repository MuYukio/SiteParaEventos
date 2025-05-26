document.addEventListener('DOMContentLoaded', () => {
  // --- 1) FORMULÁRIO DE INSCRIÇÃO COM VERIFICAÇÃO ---
  const form = document.getElementById('inscricao-form');
  const cpfInput = document.getElementById('cpf');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const nome = form.querySelector('#nome')?.value.trim();
      const email = form.querySelector('#email')?.value.trim();
      const cpf = cpfInput?.value.trim();

      if (!nome || !email || !cpf) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      if (!validarCPF(cpf)) {
        alert('CPF inválido!');
        return;
      }

      mostrarModalSucesso();
      form.reset();
    });
  }

  if (cpfInput) {
    cpfInput.addEventListener('input', () => {
      let cpf = cpfInput.value.replace(/\D/g, ''); // Remove não-números
      cpf = cpf.slice(0, 11); 
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      cpfInput.value = cpf;
    });
  }

  function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
    let dig1 = 11 - (soma % 11);
    if (dig1 > 9) dig1 = 0;
    if (dig1 !== parseInt(cpf[9])) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
    let dig2 = 11 - (soma % 11);
    if (dig2 > 9) dig2 = 0;
    return dig2 === parseInt(cpf[10]);
  }

  function mostrarModalSucesso() {
    const modal = document.getElementById('success-modal');
    modal.classList.remove('hidden');
  }
  
  document.getElementById('close-modal')?.addEventListener('click', () => {
    document.getElementById('success-modal')?.classList.add('hidden');
  });
  
  window.addEventListener('click', e => {
    const modal = document.getElementById('success-modal');
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // --- 2) CAROUSEL ---
  const slideContainer = document.querySelector('.carousel-slide');
  const items = Array.from(document.querySelectorAll('.carousel-item'));
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  let currentIndex = 0;

  function updateCarousel() {
    const itemWidth = items[0].getBoundingClientRect().width + 16;
    slideContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  if (prevBtn && nextBtn && items.length > 0) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    });
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    });
    updateCarousel();
  }

  // --- 3) CONTAGEM REGRESSIVA ---
  const targets = [
    new Date(2025, 11, 28, 20, 0, 0),
    new Date(2025, 6, 10, 18, 30, 0),
    new Date(2025, 8, 5, 19, 0, 0),
  ];

  targets.forEach((date, idx) => {
    const el = document.getElementById(`countdown${idx + 1}`);
    if (!el) return;
    function update() {
      const diff = date - new Date();
      if (diff <= 0) {
        el.textContent = 'já começou!';
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      el.textContent = `${d}d ${h}h ${m}m`;
    }
    update();
    setInterval(update, 60 * 1000);
  });
});
