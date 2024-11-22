const texts = {
  "Quem somos?": "Somos uma plataforma dedicada a oferecer conhecimento de qualidade para todos. Nosso objetivo é conectar estudantes, profissionais e entusiastas da tecnologia com conteúdos e ferramentas que os ajudem a crescer e alcançar seus objetivos. Nosso time é composto porespecialistas apaixonados pelo ensino e pela inovação.",
  "Suporte": "Precisa de ajuda? Estamos aqui para você! Nossa equipe de suporte está disponível para resolver dúvidas técnicas, orientá-lo sobre nossos serviços ou guiá-lo em sua jornada deaprendizado. Entre em contato por meio do chat ou envie-nos uma mensagem na página desuporte.",
  "Planos": "Oferecemos opções flexíveis para se adaptar às suas necessidades. Desde planos gratuitos com acesso a conteúdos essenciais até opções premium, que desbloqueiam cursos avançados, certificados exclusivos e suporte dedicado. Escolha o plano que melhorcombina com seus objetivos!",
  "Caminho gratuito": "Quer começar agora mesmo? Nosso caminho gratuito é ideal para quem deseja explorarnossos conteúdos sem compromisso. Tenha acesso a materiais introdutórios, atividades interativas e suporte básico para dar seus primeiros passos na sua jornada de aprendizado.",
  "Fórum": "Nossos alunos são nossa maior motivação. Descubra histórias inspiradoras e depoimentos reais de pessoas que transformaram suas vidas com a nossa plataforma. Participe do fórum e compartilhe também a sua experiência conosco!",
  "Profissionais": "Contamos com uma equipe de especialistas reconhecidos em diversas áreas da tecnologia. Cada profissional é dedicado a trazer conteúdos relevantes, atualizados e alinhados às demandas do mercado, garantindo uma experiência de aprendizado única.",
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