export default {
  content: [
    "./pages/**/*"
  ],
  theme: {
    extend: {
      colors: {
        app_text: "var(--app_text)",
        app_text_dark: "var(--app_text_dark)",

        app_border: "var(--app_border)",

        app_bg: "var(--app_bg)",
        app_bg_light: "var(--app_bg_light)",
        app_bg_grayed: "var(--app_bg_grayed)",

        app_blue: "var(--app_blue)",
        app_dark: "var(--app_dark)",
        app_white: "var(--app_white)",
      }
    },
  },
  plugins: [],
}

/* 
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* Extensions 
  --app_text: #000;
  --app_text_dark: #000;

  --app_border: #59575757;

  --app_bg: #f9f9f9;
  --app_bg_light: #d9d9d9;
  --app_bg_grayed: #a6a5a5;

  --app_blue: #367aff;
  --app_dark: #000;
  --app_white: #ffffff;
}
*/