import React, { useEffect, useState } from "react";

export default function ApiTest() {
  const [status, setStatus] = useState("Se încarcă...");
  return (
  <div style={{ border: "3px solid red", padding: 8 }}>
    <strong>COMPONENTA API TEST E MONTATĂ</strong>
  </div>
);


  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then((d) => setStatus(JSON.stringify(d)))
      .catch((e) => setStatus("Eroare: " + e.message));
  }, []);

  return (
    <div style={{ marginTop: 16, padding: 12, border: "2px solid #999" }}>
      <h2>Test conexiune API</h2>
      <p>{status}</p>
    </div>
  );
}



