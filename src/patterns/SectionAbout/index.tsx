import { SectionHeader } from "@/components/SectionHeader";

export const SectionAbout = () => {
  return (
    <section className="w-full h-full flex items-center justify-center py-12">
      <div className="w-full h-full max-w-7xl flex flex-col items-center justify-center gap-12 max-sm:gap-2">
        <SectionHeader title="Quem somos?" />

        <div className="w-full flex items-center justify-center gap-20 max-w-4xl max-sm:flex-col max-sm:p-10 max-sm:gap-6">
          <p className="font-sans text-gray-500 text-left max-w-3xl max-sm:max-w-full max-sm:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
            purus suscipit ligula congue venenatis rutrum quis metus.
            Suspendisse potenti. Aliquam volutpat nibh sed aliquet efficitur.
            Pellentesque feugiat vitae neque nec facilisis. Integer iaculis
            hendrerit sollicitudin. Pellentesque non tincidunt lectus. Praesent
            pulvinar viverra interdum. In lobortis aliquam maximus. Pellentesque
            ut mi varius mi sodales molestie.
          </p>
          <img
            src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="h-80 object-cover rounded-md shadow-lg transition hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};
