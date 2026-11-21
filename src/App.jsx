import { BrowserRouter, Routes, Route } from "react-router-dom"
import Hero from "./sections/Hero"
import EventsPreview from "./sections/EventsPreview"
import EventsPage from "./sections/EventsPage"
import NavBar from "./sections/NavBar"
import TeamsPage from "./sections/TeamsPage"
import "./App.css"
import TeamPreview from "./sections/TeamPreview"
import "./sections/TeamPreview.jsx"

function HomePage() {
  return <>

    <Hero />
    <EventsPreview />
    <TeamPreview />
  </>;
}
export default function App() {
  return (<BrowserRouter>

    <NavBar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/teams" element={<TeamsPage />} />
    </Routes>

  </BrowserRouter>)
    ;
}
