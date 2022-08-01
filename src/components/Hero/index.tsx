import Image from 'next/image';
import { ContactButtton } from '../ContactButtton';
import { InView } from '../InView';

export const Hero: React.FC = () => {
  return (
    <section className="container mx-auto max-w-5xl my-28 lg:my-52 flex justify-between items-center flex-col lg:flex-row gap-10 text-text px-4">
      <div className="max-w-md w-full text-center lg:text-left">
        <InView>
          <h1 className="font-gotu text-6xl text-main mb-10 leading-[80px]">{content.hero}</h1>
        </InView>
        <ul>
          {content.services.map((service, index) => (
            <li key={service}>
              <InView delay={(index + 1) * 500}>
                <div className="flex justify-center lg:justify-start items-center gap-2 my-4">
                  <CheckIcon />
                  <span className="text-3xl">{service}</span>
                </div>
              </InView>
            </li>
          ))}
        </ul>
        <InView delay={1600}>
          <ContactButtton />
        </InView>
      </div>
      <div className="hidden lg:flex justify-center items-center gap-5 mt-20">
        <InView from="down">
          <div className="relative w-[250px] h-[480px] translate-y-[20%] rounded-lg shadow shadow-main">
            <Image
              src={content.image_down}
              alt="Soul Studio"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
            />
          </div>
        </InView>
        <InView from="top">
          <div className="relative w-[250px] h-[480px] -translate-y-[20%] rounded-lg shadow shadow-main">
            <Image
              src={content.image_top}
              alt="Soul Studio"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
            />
          </div>
        </InView>
      </div>
    </section>
  );
};

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const content = {
  hero: 'Cuidado além do corpo!',
  services: ['Pilates', 'Fisioterapia Pélvica', 'Microfisioterapia'],
  whatsapp_link: 'https://api.whatsapp.com/send?phone=554298749986',
  image_down: '/images/pilates/pilates_3.jpg',
  image_top: '/images/pilates/pilates_2.jpg',
};
