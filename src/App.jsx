import "./style.css";
import React, { useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom"; // 🆕
import { useAuth } from "./context/AuthContext"; // 🆕

// layout / nav
import Navbar from "./components/Navbar";
import PreviousPageButton from "./components/PreviousPageButton";

// protecție rute
import RequireAuth from "./components/RequireAuth";

// pagini principale
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/DashboardElev";
import DashboardProfesor from "./pages/DashboardProfesor";
import Contact from "./pages/Contact";

// pagini lecții și conținut
import BacBiologie from "./pages/BacBiologie";
import AdmitereMedicina from "./pages/AdmitereMedicina";
import BiologieAdmitere from "./pages/BiologieAdmitere";
import ChimieAdmitere from "./pages/ChimieAdmitere";
import BacB1 from "./pages/BacB1";
import Lesson from "./pages/Lesson";

// fișe
import Bio901Diversitate from "./pages/bio9-01-diversitate.jsx";
import Bio902Celula from "./pages/bio9-02-celula.jsx";
import Bio903Diviziune from "./pages/bio9-03-diviziune.jsx";
import Bio904Ereditate from "./pages/bio9-04-ereditate.jsx";
import Bio905Mendel from "./pages/bio9-05-mendel.jsx";
import Bio1001TesuturiVegetale from "./pages/bio10-01-tesuturi-vegetale.jsx";
import Bio1002TesuturiAnimale from "./pages/bio10-02-tesuturi-animale.jsx";
import Bio1003Nutritie from "./pages/bio10-03-nutritie.jsx";
import Bio1004Respiratia from "./pages/bio10-04-respiratia.jsx";

// altele
import Abonament from "./pages/Abonament";
import Evaluation from "./pages/Evaluation";
import Ascultari from "./pages/Ascultari";
import AscultariProfesor from "./pages/AscultariProfesor";

// pagini noi
import MedicinaAdmitereInfo from "./pages/MedicinaAdmitereInfo";
import BacInfo from "./pages/BacInfo";
import AdmitereLectii from "./pages/AdmitereLectii"; // 🆕 hub lecții

function App() {
  const [searchParams] = useSearchParams(); // 🆕
  const { refreshUser } = useAuth();        // 🆕

  useEffect(() => {
    if (searchParams.get("status") === "success") {
      refreshUser(); // 🧠 actualizează userul după plată
    }
  }, [searchParams]);

  return (
    <>
      <Navbar />
      <PreviousPageButton />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/bac/biologie" element={<BacBiologie />} />
        <Route path="/admitere" element={<AdmitereLectii />} />
        <Route path="/admitere/biologie" element={<BiologieAdmitere />} />
        <Route path="/admitere/chimie" element={<ChimieAdmitere />} />
        <Route path="/bac/b1" element={<BacB1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dashboard elev */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Dashboard profesor */}
        <Route
          path="/dashboard-profesor"
          element={
            <RequireAuth allowedRoles={["prof", "admin"]}>
              <DashboardProfesor />
            </RequireAuth>
          }
        />

        {/* Lecții video */}
        <Route path="/lectie/:slug" element={<Lesson />} />

        {/* Fișe */}
        <Route path="/bio9-01-diversitate" element={<Bio901Diversitate />} />
        <Route path="/bio9-02-celula" element={<Bio902Celula />} />
        <Route path="/bio9-03-diviziune" element={<Bio903Diviziune />} />
        <Route path="/bio9-04-ereditate" element={<Bio904Ereditate />} />
        <Route path="/bio9-05-mendel" element={<Bio905Mendel />} />
        <Route path="/bio10-01-tesuturi-vegetale" element={<Bio1001TesuturiVegetale />} />
        <Route path="/bio10-02-tesuturi-animale" element={<Bio1002TesuturiAnimale />} />
        <Route path="/bio10-03-nutritie" element={<Bio1003Nutritie />} />
        <Route path="/bio10-04-respiratia" element={<Bio1004Respiratia />} />

        {/* Diverse */}
        <Route path="/abonamente" element={<Abonament />} />
        <Route path="/evaluari" element={<Evaluation />} />

        {/* Ascultări */}
        <Route
          path="/ascultari"
          element={
            <RequireAuth>
              <Ascultari />
            </RequireAuth>
          }
        />
        <Route
          path="/ascultari-profesor"
          element={
            <RequireAuth allowedRoles={["prof", "admin"]}>
              <AscultariProfesor />
            </RequireAuth>
          }
        />

        {/* Pagini noi */}
        <Route path="/medicina-admitere-info" element={<MedicinaAdmitereInfo />} />
        <Route path="/bac-info" element={<BacInfo />} />
      </Routes>
    </>
  );
}

export default App;
