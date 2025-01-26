import Image from "next/image"
import Button from "../Button/Button"

const HeroSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-20 my-8 sm:my-10 md:my-20">
        <div className="bg-primary relative rounded-2xl pt-10 md:pt-20 pb-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-center">
        Deliciousness to your inbox
      </h1>
      <p className="text-sm sm:text-base md:text-lg mt-3 md:mt-6 text-center text-gray-500 w-[90%] sm:w-[70%] md:w-1/2 mx-auto">
        We offer a wide variety of healthy and delicious meals that are perfect for any occasion. Our meals are made
        with fresh, high-quality ingredients and are prepared by our team of experienced chefs.
      </p>
      <div className="mt-8 md:mt-16 bg-white p-2 sm:p-3 rounded-xl w-[90%] sm:w-[80%] md:w-[480px] mx-auto flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between">
        <input
          className="ml-2 sm:ml-6 w-full sm:w-auto focus:outline-none"
          type="text"
          name="text"
          placeholder="Your email address here"
        />
        <Button bg={"bg-black"} className={"text-white w-full sm:w-auto"}>
          Subscribe
        </Button>
      </div>
      <div className="hidden lg:block lg:w-[280px] xl:w-[410px] absolute left-0 bottom-0 rounded-bl-2xl">
        <Image alt="vegetable" className="w-full" src={"/assets/inbox-veg.png"} width={400} height={400} />
      </div>
      <div className="hidden lg:block w-[280px] xl:w-[410px] absolute right-0 bottom-0 ">
        <Image alt="vegetable" className="w-full rounded-2xl" src={"/assets/inbox-noodles.png"} width={400} height={400} />
      </div>
        </div>
      
    </section>
  )
}

export default HeroSection

