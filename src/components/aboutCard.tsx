type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

export function AboutCard({ icon, title, text }: Props) {
  return (
    <div
      className="
            bg-clr2/20
            rounded-3xl
            p-6
            shadow-sm
            transition
            duration-500
            hover:-translate-y-2
            hover:shadow-xl"
    >
      <div
        className="
                mb-8
                flex
                items-center
                justify-center
                rounded-2xl
                bg-clr2/50
                p-10"
      >
        {icon}
      </div>

      <h3 className="text-2xl font-bold px-2 text-clr2">{title}</h3>

      <p className="mt-5 leading-8 text-clr2/80 px-2">{text}</p>
    </div>
  );
}
