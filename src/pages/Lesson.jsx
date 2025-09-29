import React, { useEffect, useState, useRef } from "react";
import Player from "@vimeo/player"; // npm install @vimeo/player
import { api } from "../api"; // ✅ axios configurat

export default function Lesson({ slug = "bio-b1-celula-01" }) {
  const [video, setVideo] = useState(null);
  const [progress, setProgress] = useState({ lastPositionSec: 0, completed: false });
  const [extraVideos, setExtraVideos] = useState([]);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  // 🔎 Fetch lecția și restul clipurilor din modul
  useEffect(() => {
    (async () => {
      try {
        const v = await api.get(`/videos/${slug}`).then((r) => r.data);
        setVideo(v);

        if (v?.moduleId) {
          const list = await api.get(`/videos/lesson/${v.moduleId}`).then((r) => r.data);
          setExtraVideos(list.filter((x) => x.slug !== slug));
        }

        const p = await api
          .get(`/videos/${slug}/progress`)
          .then((r) => r.data)
          .catch(() => ({ lastPositionSec: 0, completed: false }));
        setProgress(p);
      } catch (err) {
        console.error("Eroare la încărcarea lecției:", err);
      }
    })();
  }, [slug]);

  // ▶️ Inițializează Vimeo Player și salvează progresul
  useEffect(() => {
    if (iframeRef.current && !playerRef.current) {
      const player = new Player(iframeRef.current);
      playerRef.current = player;

      player.on("timeupdate", async (data) => {
        if (Math.floor(data.seconds) % 5 === 0) {
          const newPos = Math.floor(data.seconds);
          setProgress((p) => ({ ...p, lastPositionSec: newPos }));
          try {
            await api.patch(`/videos/${slug}/progress`, {
              lastPositionSec: newPos,
            });
          } catch (err) {
            console.error("Eroare la salvarea progresului:", err);
          }
        }
      });
    }
  }, [slug]);

  if (!video) return <div className="p-6">Se încarcă...</div>;

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">{video.title}</h1>

      {progress?.lastPositionSec > 10 && (
        <button
          className="px-3 py-2 rounded-lg bg-black text-white"
          onClick={() =>
            playerRef.current?.setCurrentTime(progress.lastPositionSec)
          }
        >
          Continuă de la {Math.floor(progress.lastPositionSec)}s
        </button>
      )}

      {/* Video principal */}
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title={video.title}
        ></iframe>
      </div>

      {/* Restul clipurilor din modul */}
      {extraVideos.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Alte clipuri</h2>
          {extraVideos.map((ev) => (
            <div
              key={ev.slug}
              style={{ padding: "56.25% 0 0 0", position: "relative" }}
            >
              <iframe
                src={`https://player.vimeo.com/video/${ev.vimeoId}?badge=0&autopause=0`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title={ev.title}
              ></iframe>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
