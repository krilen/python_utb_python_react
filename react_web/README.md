## React Front-end

---

### Using Vite (v4.4.11) to create the React boilerplate

The video uses CRA but at this current date (2023 oct) CRA is seen as deprecated and Vite is the recommended way to go.
Vite boilderplate also saves over 200MB of diskspace.
Will skip the "semantic" stuff the main interested is on how to get the connection between the front-end (React)
and back-end (Python).

Steps

- Make sure that the back-end is running (python_api)
- Start react 'npm run dev'
- React is connecting to the backend using "http://localhost:5000" (static variable in App.jsx)
- With a browser connect to React (usually "http://localhost:5173/")
  A VERY simple page with a input text, select and a buttton will appear
  When adding a movie is shoul show up under the "Add Movie" button, check Console for any errors

All of the intelligence are in the App.jsx file and then pushed out to the different components.
Sometimes this is a bad idea like clearing the input text and select but you can fix this also
with an additional step.

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
