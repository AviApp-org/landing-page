import { CardFeedback } from "@/components/Cards/Feedback";
import { reviews } from "@/components/Cards/Feedback/types";
import { SectionHeader } from "@/components/SectionHeader";

export const SectionFeedback = () => {
  return (
    <section className="w-full h-full flex items-center justify-center py-12">
      <div className="w-full h-full max-w-7xl flex flex-col items-center justify-center gap-20 max-sm:gap-2">
        <SectionHeader title="O que nossos clientes dizem" />

        <div className="w-full overflow-hidden flex items-start justify-center max-sm:flex-col max-sm:p-10 max-sm:gap-6">
          <div className="w-full flex carrousel-content md:animate-swipe gap-4">
            {reviews.map((review, key) => {
              return <CardFeedback review={review} key={key} className="items-stretch h-max" />
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
