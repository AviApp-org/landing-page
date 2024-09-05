export const SectionAbout = () => {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full max-w-7xl flex flex-col items-center justify-center gap-10 py-16">
        <h2 className="text-5xl font-bold text-center text-slate-800">
          Quem somos?
        </h2>

        <div className="w-full flex items-center justify-center gap-20 max-w-4xl">
          <p className="text-lg text-slate-600 font-sans">
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

        <p className="text-lg text-slate-600 font-sans max-w-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
          tellus condimentum ante laoreet, ut laoreet lacus consectetur. In hac
          habitasse platea dictumst. Suspendisse efficitur dui nisi, eget
          vestibulum est facilisis scelerisque. Proin eget orci a nibh
          condimentum blandit eget a massa. Aenean at leo ac lectus eleifend
          tempor. Donec eu diam vestibulum, hendrerit augue nec, tempus nisl.
          Donec non molestie mi, in euismod diam. Quisque nec vestibulum purus.
          Duis eu sem tortor. Nam quis luctus est. Curabitur accumsan sem sed
          felis egestas, ac tincidunt lacus venenatis. Curabitur ultricies
          aliquet nisl at tincidunt. Mauris dapibus a nulla sit amet porttitor.
          Aliquam libero orci, vehicula quis semper non, mollis sed lorem. Nunc
          congue arcu vitae dolor varius convallis. Vivamus vitae semper nisi.
          Nulla facilisi. Sed lacinia ullamcorper enim non elementum. Vivamus
          finibus tellus eu enim feugiat, sit amet consequat dui porta. Proin
          ullamcorper magna ut egestas dapibus. Aliquam tempus facilisis sem ut
          fermentum. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
      </div>
    </section>
  );
};
