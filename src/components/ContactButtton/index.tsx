export const ContactButtton: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <a href="https://api.whatsapp.com/send?phone=554298749986" target="_blank" rel="noopener noreferrer">
        <button className=" bg-main bg-opacity-30 hover:bg-opacity-50 duration-200 rounded-lg text-main px-8 py-2">
          Entre em Contato
        </button>
      </a>
    </div>
  );
};
