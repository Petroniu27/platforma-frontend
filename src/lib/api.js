const API = "/api"; // proxy -> 4000

async function safeFetch(url, options) {
  const r = await fetch(url, options);
  const text = await r.text(); // citim ca text, ca să putem diagnostica
  let data;
  try { data = text ? JSON.parse(text) : null; } catch { /* nu e JSON */ }

  if (!r.ok) {
    // dacă serverul a trimis JSON cu "error", îl ridicăm; altfel text brut
    const msg = data?.error || text || `HTTP ${r.status}`;
    throw new Error(msg);
  }
  // întoarce JSON dacă e JSON, altfel întoarce textul (ex. pt. health poți folosi JSON)
  return data ?? text;
}

export async function listLessons() {
  return safeFetch(`${API}/lessons`);
}

export async function loginApi(email, password) {
  return safeFetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
}

export async function createLesson(token, data) {
  return safeFetch(`${API}/lessons`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
}

export async function upsertNote(token, data) {
  return safeFetch(`${API}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
}

export async function listVideosByLesson(lessonId) {
  return safeFetch(`${API}/videos/${lessonId}`);
}

export async function addVideo(token, data) {
  return safeFetch(`${API}/videos`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
}
