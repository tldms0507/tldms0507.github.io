import plugin from "tailwindcss/plugin";

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {},
    },
    plugins: [
      plugin(function ({ addUtilities }) {
        addUtilities({
          ".btn": {
            border: "none",
            display: "block",
            textAlign: "center",
            cursor: "pointer",
            textTransform: "uppercase",
            outline: "none",
            overflow: "hidden",
            position: "relative",
            color: "#fff",
            fontWeight: "700",
            fontSize: "15px",
            backgroundColor: "#6C73C0",
            padding: "17px 60px",
            margin: "0 auto",
            boxShadow: "0 5px 15px rgba(0,0,0,0.20)",

            "& span": {
              position: "relative",
              zIndex: "1",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              left: "0",
              top: "0",
              height: "490%",
              width: "140%",
              color: "#fff",
              background: "#4168E5",
              transition: "all .5s ease-in-out",
              transform:
                "translateX(-98%) translateY(-25%) rotate(45deg)",
            },
            "&:hover::after": {
              transform:
                "translateX(-9%) translateY(-25%) rotate(45deg)",
            },
          },
        });
      }),
    ],
  }