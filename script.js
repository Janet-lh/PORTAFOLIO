// Actualizar año del footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú Móvil
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const links = document.querySelectorAll('.mobile-link');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Ventanas modales de los proyectos
function setupModal(cardId, modalId) {
    const card = document.getElementById(cardId);
    const modal = document.getElementById(modalId);
    const closeBtn = modal.querySelector('.project-modal__close');

    function openModal() {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    }
    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        card.focus();
    }

    card.addEventListener('click', openModal);
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal();
        }
    });
    closeBtn.addEventListener('click', closeModal);
    modal.querySelector('.project-modal__backdrop').addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
}

setupModal('scada-card', 'scada-modal');
setupModal('ot-card', 'ot-modal');

// Tema oscuro/claro y efecto de tipeo (Typed text)
(function(){
  var root=document.documentElement,btn=document.getElementById('theme-toggle');
  function apply(d){root.classList.toggle('dark',d);if(btn)btn.innerHTML=d?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>';}
  var saved=null;try{saved=localStorage.getItem('theme');}catch(e){}
  apply(saved?saved==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches);
  if(btn)btn.addEventListener('click',function(){var d=!root.classList.contains('dark');apply(d);try{localStorage.setItem('theme',d?'dark':'light');}catch(e){}});
  var words=['Ingeniera en Ciberseguridad OT','Especialista en Redes Industriales','Auditora SCADA / ICS'];
  var el=document.getElementById('typed-text'),w=0,c=0,del=false;
  function tick(){if(!el)return;var t=words[w];c+=del?-1:1;el.textContent=t.slice(0,c);
    var wait=del?40:90;if(!del&&c===t.length){del=true;wait=1600;}else if(del&&c===0){del=false;w=(w+1)%words.length;wait=400;}
    setTimeout(tick,wait);}
  tick();
})();
