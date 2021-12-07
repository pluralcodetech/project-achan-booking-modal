import { Config } from '@stencil/core';
import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import cssnano from "cssnano";
import purgecss from "@fullhuman/postcss-purgecss";
import replace from "postcss-replace"



//purge function to keep only the classes used in EACH component
const purge = purgecss({
  content: ["./src/**/*.tsx", "./src/index.html"],
  safelist: [':host'],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
  namespace: 'achan-booking-modal',
  // globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],

  // bundles: [
  //   { components: ['home-page', 'page-pickup-point', 'page-arrival-to-final-destination', 'page-roundtrip-pickup'] }
  // ],
  // collections: [{ name: '@stencil/router' }],


  //add postcss as a plugin
  plugins: [
    postcss({
      // add postcss plugins
      plugins: [
        // add tailwind css. Config file was added using `npx tailwindcss init`
        tailwindcss("./tailwind.config.js"),
        autoprefixer(),
        // shadow dom does not respect 'html' and 'body' styling, so we replace it with ':host' instead 
        replace({ pattern: 'html', data: { replaceAll: ':host' } }),
        // purge and cssnano if production build
        ...(!process.argv.includes("--dev")
          ? [ purge, cssnano() ]
          : [])
      ]
    })
  ]
};
