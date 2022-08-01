export const ContactButtton: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <a
        href="https://api.whatsapp.com/send?phone=554298749986&text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          name="Botão Entre em Contato - WhatsApp"
          className=" bg-main bg-opacity-30 hover:bg-opacity-50 duration-200 rounded-lg text-main px-8 py-2"
        >
          Entre em Contato
        </button>
      </a>
    </div>
  );
};
