const texts = {
  "Quem somos?": "Somos uma organização dedicada à instigar o trabalho mutuo na vida um dos outros. Vemos que o partilhar e compadecer é um grande fator para o nosso crescimento psicológico e pensando nisso criamos esse projeto, no bem geral de todos.",
  "Suporte": "Precisa de ajuda? Estamos aqui para você! Nossa equipe de suporte está disponível para resolver dúvidas técnicas, orientá-lo sobre nossos serviços ou guiá-lo em sua jornada adiante. Entre em contato por meio do chat ou envie-nos uma mensagem na página de suporte.",
  "Planos": "Nós temos planos mensal, trimestral, semestral e anual para melhor atender você. Nossos planos contam com consultas de perto a qualquer momento do seu dia e acesso exclusivo à nossa area vip.",
  "Caminho gratuito": "Quer começar agora mesmo? Nosso caminho gratuito é ideal para quem deseja explorarnossos conteúdos sem compromisso. Tenha acesso a materiais introdutórios, atividades interativas e suporte básico para dar seus primeiros passos na sua jornada de aprendizado.",
  "Fórum": "Nosso forum é gratuito e cheio de experiências e ajuda de todo tipo para você. Talvez você seja quem alguem precisa ouvir e você nem sabe ainda. De forma totalmente anonima (opcional) você pode se abrir para pessoas dispostas a ajudar e ajudar quem precisa.",
  "Profissionais": "Contamos com uma grande e renomada equipe de profissionais que acessando algum de nossos planos você vai poder conhece-los mais de perto e alcançar o que parecia impossivel.",
  "Feedback": "Sua opinião importa! Ajude-nos a melhorar cada vez mais. Deixe seu feedback sobre a plataforma, os conteúdos e os serviços. Estamos sempre abertos a sugestões para criar uma experiência ainda melhor para você."
}

let activeOption = "Quem somos?"

const mainContentCard = document.querySelector('.card')
const mainContentCardTitle = document.querySelector('.card-title')
const sectionOptions = document.getElementsByTagName('li')

mainContentCard.innerHTML = texts[activeOption]

for (let option of sectionOptions) {
  const optionKey = option.dataset.title
  option.innerHTML = optionKey
  option.addEventListener('click', () => selectOption(optionKey))
}

function selectOption(key) {
  const content = texts[key]

  mainContentCard.innerHTML = content
  mainContentCardTitle.innerHTML = key

  for (let option of sectionOptions) {
    const optionKey = option.dataset.title

    if (optionKey === key) {
      option.classList.add('selected')

      continue
    }

    option.classList.remove('selected')
  }

  if (menu.classList.contains('show')) {
    menu.classList.remove('show')
    overlay.classList.remove('show');
  }
}