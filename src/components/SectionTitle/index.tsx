type Props = {
  children: React.ReactNode;
};

export const SectionTitle: React.FC<Props> = ({ children }) => {
  return <h2 className="font-gotu text-3xl text-main mb-8 text-center lg:text-left">{children}</h2>;
};
