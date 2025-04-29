// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       extend: {
//         backgroundImage: {
//           'parallyx': 'url("../real-estate-client/src/assets/forparallyx.jpg")',
//           // 'parallyx' : 'url("../real-estate-client/src/assets/writing.avif")',
//           // 'parallyx' : 'url("../real-estate-client/src/assets/img2.jpg")',
//         },
//       },
//     },
//   },
//   plugins: [require("daisyui")],
// };



/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'parallyx': "url('/src/assets/forparallyx.jpg')", // Assuming your image is in src/assets
        // 'parallyx' : 'url("/src/assets/writing.avif")',
        // 'parallyx' : 'url("/src/assets/img2.jpg")',
      },
    },
  },
  plugins: [require("daisyui")],
};