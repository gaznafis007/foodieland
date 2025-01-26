import Button from "@/components/Button/Button"
import Image from "next/image"
import { FaLeaf, FaHeart, FaUsers } from "react-icons/fa"

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-primary to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-center mb-16 relative">
          About Us
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary"></span>
        </h1>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative">
            <Image
              src="/assets/headerImage.png"
              alt="Our Kitchen"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-black">10+</p>
              <p className="text-gray-600">Years of Experience</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Culinary Journey</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2010, our passion for food and cooking has driven us to create a platform where food
              enthusiasts can come together to share recipes, learn new techniques, and celebrate the joy of cooking.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe that good food has the power to bring people together and create lasting memories. Our mission
              is to inspire home cooks of all skill levels to explore new flavors, try new recipes, and enjoy the
              process of creating delicious meals.
            </p>
            <Button bg={'bg-black'} className={'text-white'}>
              Join Our Culinary Community
            </Button>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaLeaf,
                title: "Sustainability",
                description: "We promote eco-friendly cooking practices and sustainable ingredient sourcing.",
              },
              {
                icon: FaHeart,
                title: "Passion",
                description: "Our love for food drives everything we do, from recipe creation to community engagement.",
              },
              {
                icon: FaUsers,
                title: "Community",
                description:
                  "We foster a supportive community where food lovers can connect and share their experiences.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <value.icon className="text-4xl text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Jane Doe", role: "Founder & Head Chef" },
              { name: "John Smith", role: "Nutritionist" },
              { name: "Emily Brown", role: "Food Photographer" },
              { name: "Michael Lee", role: "Community Manager" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={`/assets/avatar.png`}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

