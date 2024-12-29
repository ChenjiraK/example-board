/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      borderRadius: {
        'none': '0',
        '32px': '32px',
      },
      colors: {
        'gray-939494': '#939494',
        'gray-F3F3F3': '#F3F3F3',
        'gray-4A4A4A': '#4A4A4A',
        'gray-121212': '#121212',
        'gray-707070': '#707070',
        'gray-BBC2C0': '#BBC2C0',

        'primary': "#243831",
        'success': "#49A569",
        'green-2B5F44': "#2B5F44"
      },
      width: {
        '200px': '200px',
        '235px': '235px',
        '288px': '288px',
        '362px': '362px',
        '602px': '602px',
        '1220px': '1220px',
      },
      height: {
        '50dvh': '50dvh',
        '60px': '60px',
        '72px': '72px',
        '178px': '178px',
        '390px': '390px',
        '602px': '602px',
      },
      minWidth: {
        '820px': '820px',
      },
      spacing: {
        '1px': '1px',
        '10px': '10px',
        '30px': '30px',
        '100px': '100px',
        '130px': '130px',
        '246px': '246px',
        '294px': '294px',
        '366px': '366px',
        '610px': '610px',
      },
      boxShadow: {
        'main': '0px 2px 10px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        main: ["main"],
    },
    fontSize: {
        10: ["0.625rem", "1.2"],
        12: ["0.75rem", "1.2"],
        14: ["0.875rem", "1.2"],
        16: ["1rem", "1.2"],
        18: ["1.125rem", "1.2"],
        20: ["1.25rem", "1.2"],
        22: ["1.375rem", "1.2"],
        24: ["1.5rem", "1.2"],
        26: ["1.625rem", "1.2"],
        28: ["1.75rem", "1.2"],
        30: ["1.875rem", "1.2"],
        32: ["2rem", "1.2"],
        34: ["2.125rem", "1.2"],
        36: ["2.25rem", "1.2"],
        38: ["2.375rem", "1.2"],
        40: ["2.5rem", "1.2"],
        42: ["2.625rem", "1.2"],
        44: ["2.75rem", "1.2"],
        46: ["2.875rem", "1.2"],
        48: ["3rem", "1.2"],
        50: ["3.125rem", "1.2"],
        52: ["3.25rem", "1.2"],
        54: ["3.375rem", "1.2"],
        56: ["3.5rem", "1.2"],
        58: ["3.625rem", "1.2"],
        60: ["3.75rem", "1.2"],
        62: ["3.875rem", "1.2"],
        64: ["4rem", "1.2"],
        "35px": "35px",
    },
    },
  },
  plugins: [],
}

