import Link from 'next/link';

export default function About() {
    return (
      <div>
          <Link href="/" className='hover:bg-purple-900 mb-2 inline-block'>&lt; Voltar</Link>
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-200 sm:text-[5rem]">
            Sobre o projeto
          </h1>
          <p>Este é CyberStories - Estudos de caso em cibersegurança, um catálogo com estudos sobre episódios famosos da história recente.</p>
          <p>O objetivo deste projeto é dar uma visão holística sobre cibersegurança, através de seus estudos de caso, abordar os aspectos tecnológicos, sociais, políticos e humanos. Seu público alvo principal são:</p>
          <ul className="list-disc my-6">
            <li>Estudantes, profissionais e acadêmicos da área de tecnologia;</li>
            <li>Gestores de empresas, sejam elas de tecnologia ou não;</li>
            <li>Jornalistas e historiadores;</li>
            <li>Administradores públicos, políticos e seus assessores;</li>
          </ul>
          <p>Um dos grandes motivadores deste projeto foi trazer, com exemplos reais, uma trilha de estudos para os conceitos importantes da cibersegurança, bem como material adicional e referências para que o aluno possa se aprofundar.</p>
          <p>CyberStories foi criado como projeto final para a disciplina de Computação e Sociedade do curso de Ciência da Computação da Universidade Ferderal do Espírito Santo em Novembro de 2023. Todas as informações contidas nos casos foram obtidas de outras fontes. Criado por Gabriel Ferrari Wagnitz, licença <Link href="https://creativecommons.org/publicdomain/zero/1.0/" className='hover:bg-purple-900'>CC0 1.0 DEED</Link></p>
        </div>
    );
  }
  