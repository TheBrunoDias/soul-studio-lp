import Image from 'next/image';

type Props = {
  title: string;
  text: string;
  image: string;
};

export const Card: React.FC<Props> = ({ image, text, title }) => {
  return (
    <>
      <div
        className={`bg-gradient-to-b from-[rgb(230,114,33,0)] to-[rgb(230,114,33,0.5)] relative rounded-lg w-full min-h-[600px] group`}
      >
        <Image src={image} alt={title} layout="fill" className="z-[-1] group-hover:scale-110 duration-700 rounded-lg" />
        <div className="absolute rounded-lg backdrop-brightness-75  hover:backdrop-brightness-50 hover:backdrop-blur-sm h-full w-full duration-200 text-white p-3 pt-10 flex justify-center items-start flex-col">
          <h3 className="font-gotu absolute bottom-5 right-5 group-hover:static text-2xl group-hover:mb-6 duration-200">
            {title}
          </h3>
          <p className="opacity-0 translate-y-[10px] group-hover:translate-y-0 group-hover:opacity-100 duration-200 text-xl">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};
