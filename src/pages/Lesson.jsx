import React, { useEffect, useState, useRef } from "react";
import Player from "@vimeo/player"; // npm install @vimeo/player

export default function Lesson({ slug = "bio-b1-celula-01" }) {
  const [video, setVideo] = useState(null);
  const [progress, setProgress] = useState({ lastPositionSec: 0, completed: false });
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  // Fetch lecția și progresul
  useEffect(() => {
    (async () => {
      try {
        const v = await fetch(`/api/videos/${slug}`).then((r) => {
          if (!r.ok) throw new Error("Video not found");
          return r.json();
        });
        setVideo(v);

        const p = await fetch(`/api/videos/${slug}/progress`).then((r) => {
          if (!r.ok) return { lastPositionSec: 0, completed: false };
          return r.json();
        });
        setProgress(p);
      } catch (err) {
        console.error("Eroare la încărcarea lecției:", err);
      }
    })();
  }, [slug]);

  // Inițializează Vimeo Player și salvează progresul
  useEffect(() => {
    if (iframeRef.current && !playerRef.current) {
      const player = new Player(iframeRef.current);
      playerRef.current = player;

      player.on("timeupdate", async (data) => {
        if (Math.floor(data.seconds) % 5 === 0) {
          const newPos = Math.floor(data.seconds);
          setProgress((p) => ({ ...p, lastPositionSec: newPos }));
          try {
            await fetch(`/api/videos/${slug}/progress`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ lastPositionSec: newPos }),
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
    <div className="p-6 space-y-4">
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
    </div>
  );
}
