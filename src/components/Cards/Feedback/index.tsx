import { CardFeedbackProps } from "./types"

export const CardFeedback = ({ review }: CardFeedbackProps) => {
  return (
    <div className="max-w-[400px] md:min-w-[400px] mb-8 border border-gray-200 rounded-lg shadow-md md:mb-12 md:grid-cols-2 bg-white overflow-visible">
      <figure className="w-full flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
          <h3 className="text-lg font-semibold text-gray-900">{review.title}</h3>
          <p className="my-4">{review.description}</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
          <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
            <div>{review.name}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}