import Image from 'next/image';
import { ContactButtton } from '../ContactButtton';
import { InView } from '../InView';
import { SectionTitle } from '../SectionTitle';

export const About: React.FC = () => {
  return (
    <section className="bg-main bg-opacity-10 py-10 px-4 my-20" id="sobre">
      <div className="container mx-auto max-w-6xl flex justify-center items-stretch flex-col lg:flex-row gap-10">
        <InView from="left">
          <Image
            src="/images/su.jpg"
            alt="Suellen Sousa Dias"
            width="500"
            height="500"
            objectFit="cover"
            className="rounded-lg"
          />
        </InView>
        <InView from="right">
          <div className="flex justify-between items-start flex-col">
            <SectionTitle>Sobre</SectionTitle>
            {content.paragraphs.map((p) => (
              <p key={p} className="max-w-md sm:my-3">
                {p}
              </p>
            ))}
            <ContactButtton />
          </div>
        </InView>
      </div>
    </section>
  );
};

const content = {
  paragraphs: [
    'Oie, meu nome é Suellen, sou natural de Foz do Iguaçu, sou formada em FISIOTERAPIA desde 2017, pela Universidade Dom Bosco, em Curitiba-Paraná.',
    'Proprietária e Instrutora de Pilates no Soul Studio em Telêmaco Borba- Paraná.',
    'Tenho curso de Pilates, Microfisioterapia, RPG e Terapias Manuais.',
    'O Pilates no Soul Studio, é voltado ao cuidado além do corpo, acreditamos que além de cuidar da sua saúde física, cuidamos do seu bem estar, para que você possa aproveitar o que você tem de mais importante: A VIDA!',
  ],
};
