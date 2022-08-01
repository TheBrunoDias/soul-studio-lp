import Image from 'next/image';
import { InView } from '../InView';
import { SectionTitle } from '../SectionTitle';

export const Contact: React.FC = () => {
  return (
    <section
      id="contato"
      className="relative container mx-auto max-w-5xl my-20 flex justify-center items-center gap-5  py-10 px-4 min-h-[600px] flex-col-reverse lg:flex-row"
    >
      <Image
        src="/images/logo.png"
        alt="Soul Studio"
        layout="fill"
        className="z-[-10] opacity-10"
        objectFit="contain"
      />
      <div className="z-10">
        <InView from="down">
          <iframe
            title="Manoel Ribas, 193, Centro, Telêmaco Borba-PR"
            src={content.map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="lg:rounded-lg w-screen lg:w-[500px] h-[500px]"
          ></iframe>
        </InView>
      </div>
      <InView from="top">
        <div className="flex justify-center items-center flex-col z-10 flex-1">
          <SectionTitle>Contato</SectionTitle>
          <p className="text-2xl leading-10 mb-10 font-thin">{content.text}</p>
          <div className="w-full flex justify-center items-center flex-col gap-10">
            {content.links.map((link) => (
              <a
                key={link.label}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-main flex justify-center items-center gap-2"
              >
                <Image src={link.icon} alt={link.label} width={25} height={25} objectFit="contain" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </InView>
    </section>
  );
};

const content = {
  text: 'Conheça nossas redes sociais',
  map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.6673382315394!2d-50.62060838452182!3d-24.32323608431017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e983153dfa2219%3A0xef2b0106b486e2b!2sR.%20Manoel%20Ribas%2C%20193%20-%20Centro%2C%20Tel%C3%AAmaco%20Borba%20-%20PR%2C%2084261-080!5e0!3m2!1spt-BR!2sbr!4v1659309037250!5m2!1spt-BR!2sbr',
  address: 'Manoel Ribas, 193, Centro, Telêmaco Borba-PR',
  links: [
    {
      icon: '/images/socials/insta.png',
      label: '@soulstudio.pilates',
      link: 'https://www.instagram.com/soulstudio.pilates/',
    },
    {
      icon: '/images/socials/face.png',
      label: '/soulstudio.pilates',
      link: 'https://www.facebook.com/soulstudio.pilates',
    },
    {
      icon: '/images/socials/whats.png',
      label: '+55 42 9874-9986',
      link: 'https://api.whatsapp.com/send?phone=554298749986',
    },
  ],
};
