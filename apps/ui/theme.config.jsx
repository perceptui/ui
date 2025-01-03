import Footer from "./components/footer";
export default {
  logo: (
    <div className="flex items-center justify-center gap-2">
      <span className="my-0 font-bold text-2xl">Percept UI</span>
    </div>
  ),
  docsRepositoryBase: "https://github.com/perceptui/docs/tree/main",
  project: {
    link: "https://github.com/perceptui/ui",
  },
  head: () => {
    return (
      <>
        <link rel="shortcut icon" href="./assets/favicon.ico" />
        <title>Percept UI - Build UIs Faster</title>
      </>
    );
  },
  toc: {
    backToTop: true,
  },
  footer: {
    content: <Footer />,
  },
  darkMode: {
    default: true,
  },
  themeSwitch: {
    useOptions() {
      return {
        light: "Light",
        dark: "Dark",
        system: "System",
      };
    },
  },
  navigation: true,
};
