export default {
  content: [
    "./src/**/*"
  ],
  theme: {
    extend: {
      colors: {
        app_text: "var(--app_text)",
        app_text_dark: "var(--app_text_dark)",
        app_text_blue: "var(--app_text_blue)",

        app_border: "var(--app_border)",

        app_bg: "var(--app_bg)",
        app_bg_light: "var(--app_bg_light)",
        app_bg_grayed: "var(--app_bg_grayed)",

        app_blue: "var(--app_blue)",
        app_dark: "var(--app_dark)",
        app_white: "var(--app_white)",
        vue_green: "var(--vue_green)"
      }
    },
  },
  plugins: [],
}
