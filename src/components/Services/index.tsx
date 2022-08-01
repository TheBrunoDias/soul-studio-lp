import { ContactButtton } from '../ContactButtton';
import { InView } from '../InView';
import { SectionTitle } from '../SectionTitle';
import { Card } from './Card';

export const Services: React.FC = () => {
  return (
    <section className="container mx-auto max-w-5xl my-20 px-4" id="servicos">
      <SectionTitle>Serviços</SectionTitle>

      <div className="w-full flex justify-center items-center gap-5 flex-col lg:flex-row">
        {content.map((card, index) => (
          <InView key={card.title} delay={(index + 1) * 150}>
            <Card {...card} />
          </InView>
        ))}
      </div>

      <ContactButtton />
    </section>
  );
};

const content = [
  {
    title: 'Pilates',
    text: `Pilates é um método de exercícios desenvolvido por Joseph Pilates na década de 1920 que visa trabalhar a conexão entre mente e corpo, como uma unidade, de modo a melhorar a consciência corporal e dessa forma promover outros benefícios.`,
    image: '/images/pilates/pilates_1.jpg',
  },
  {
    title: 'Fisioterapia Pélvica',
    text: `A Fisioterapia Pélvica é uma especialidade que atua na reabilitação das disfunções do assoalho pélvico, que é o conjunto de músculos e ligamentos que sustentam órgãos como bexiga, útero, intestino e tudo que fica na região baixa do abdômen.`,
    image: '/images/pilates/pilates_2.jpg',
  },
  {
    title: 'Microfisioterapia',
    text: `É uma técnica de terapia manual desenvolvida na França que consiste em identificar a causa primária da doença ou sintoma, para que o corpo reconheça o agressor e possa, após o estímulo da palpação, iniciar o processo de eliminação e autocura do organismo`,
    image: '/images/pilates/pilates_3.jpg',
  },
];
