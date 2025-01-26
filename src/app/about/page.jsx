import Button from "@/components/Button/Button"
import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-[#E7FAFE] to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/assets/headerImage.png"
              alt="Our Kitchen"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, our passion for food and cooking has driven us to create a platform where food
              enthusiasts can come together to share recipes, learn new techniques, and celebrate the joy of cooking.
            </p>
            <p className="text-gray-600 mb-6">
              We believe that good food has the power to bring people together and create lasting memories. Our mission
              is to inspire home cooks of all skill levels to explore new flavors, try new recipes, and enjoy the
              process of creating delicious meals.
            </p>
            <Button className={'text-white'} bg={'bg-black'}>
              Join Our Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

