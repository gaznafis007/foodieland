// import { fetchData } from "@/utils/fetchData"
// import Image from "next/image"



// export default async function Recipes() {
//     const recipes = fetchData('/allrecipes')
//   return (
//     <div className="bg-gradient-to-b from-[#E7FAFE] to-white min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <h1 className="text-4xl font-bold text-center mb-8">Our Recipes</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {recipes.map((recipe) => (
//             <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <Image
//                 src={`https://source.unsplash.com/400x300/?food,${recipe.title}`}
//                 alt={recipe.title}
//                 width={400}
//                 height={300}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
//                 <div className="flex justify-between text-sm text-gray-600">
//                   <span>{recipe.time}</span>
//                   <span>{recipe.category}</span>
//                 </div>
//                 <button className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-black to-gray-800 text-white rounded-full hover:from-gray-800 hover:to-black transition-all duration-300">
//                   View Recipe
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

