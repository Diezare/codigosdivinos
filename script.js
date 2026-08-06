// ===== Efeito de Rolagem do Header (Muda o cabeçalho ao descer a página) =====
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    // Quando o scroll passar de 30 pixels, adiciona a classe branca
    if (window.scrollY > 30) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// ===== FAQ Accordion (Abre e fecha as perguntas) =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Fecha os outros itens abertos
        faqItems.forEach(otherItem => {
            if(otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Abre ou fecha o item atual
        item.classList.toggle('active');
    });
});

// ===== BOTÃO VOLTAR AO TOPO =====
const btnTopo = document.getElementById("btn-topo");

// Mostra o botão quando o usuário rolar a página para baixo
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

// Quando clicar no botão, volta ao topo com animação suave
btnTopo.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ===== MODAIS (Política de Privacidade e Termos) =====
// Fechar modais ao clicar no 'X'
document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', function() {
        this.closest('.modal-overlay').style.display = 'none';
        document.body.style.overflow = '';
    });
});

// Abrir Política de Privacidade
document.querySelectorAll('.open-modal-politica').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('modal-politica').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

// Abrir Termos de Uso
document.querySelectorAll('.open-modal-termos').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('modal-termos').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

// Fechar modal ao clicar fora da caixa branca
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.style.display = 'none';
        document.body.style.overflow = '';
    }
});
