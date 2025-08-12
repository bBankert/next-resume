// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

import autoprefixer from "autoprefixer"

export const config = {
    plugins: {
        "@tailwindcss/postcss": {},
        autoprefixer: {}
    }
}

export default config;