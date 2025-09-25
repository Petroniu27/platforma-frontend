import React, { useEffect } from "react";
import CreditsCard from "../components/ascultari/CreditsCard";
import UpcomingSessions from "../components/ascultari/UpcomingSessions";
import BookingForm from "../components/ascultari/BookingForm";
import { useAuth } from "../context/AuthContext";

export default function Ascultari() {
  const { refreshUser } = useAuth();

  useEffect(() => {
    // când userul se întoarce din Stripe cu ?status=success
    if (window.location.search.includes("status=success")) {
      refreshUser(); // 🔄 reîncarcă userul curent din backend
      alert("✅ Credit adăugat cu succes!");
      // curăță URL-ul (fără parametrii ?status=success)
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [refreshUser]);

  return (
    <div className="container asc-page">
      <h1>Ascultări (student)</h1>
      <div className="asc-grid">
        <div>
          <CreditsCard />
          <BookingForm />
        </div>
        <div>
          <UpcomingSessions />
        </div>
      </div>
    </div>
  );
}
