import React, { useEffect, useRef } from "react";
import Player from "@vimeo/player";

/**
 * Props:
 *  - video: {
 *      vimeoId?: string,
 *      mock?: { enabled?: boolean, mp4Url?: string },
 *      captions?: [{ lang: "ro", label: "Română" }]
 *    }
 *  - onTime?: (seconds: number) => void        // callback progres timp
 *  - onReady?: (api: { type: "vimeo"|"html5", player?: any, el?: HTMLVideoElement }) => void
 */
export default function LessonPlayer({ video, onTime, onReady }) {
  const vimeoHostRef = useRef(null);
  const vimeoRef = useRef(null);
  const html5Ref = useRef(null);

  // --- fallback logic: preferă mock video doar dacă are mp4Url valid.
  const useMockHtml5 = !!(video?.mock?.enabled && video?.mock?.mp4Url);

  // === HTML5 <video> (mock mode)
  if (useMockHtml5 || !video?.vimeoId) {
    return (
      <div className="rounded-xl overflow-hidden">
        <video
          ref={html5Ref}
          src={video?.mock?.mp4Url || ""}
          controls
          className="w-full h-auto"
          onLoadedMetadata={() => {
            if (html5Ref.current) onReady?.({ type: "html5", el: html5Ref.current });
          }}
          onTimeUpdate={(e) => onTime?.(e.currentTarget.currentTime)}
        />
      </div>
    );
  }

  // === Vimeo embed (controlat)
  useEffect(() => {
    if (!vimeoHostRef.current || !video?.vimeoId) return;

    const player = new Player(vimeoHostRef.current, {
      id: video.vimeoId,
      responsive: true,
      dnt: true,
      controls: true,
      byline: false,
      title: false,
      portrait: false,
    });
    vimeoRef.current = player;

    const handleLoaded = () => onReady?.({ type: "vimeo", player });
    const handleTime = ({ seconds }) => onTime?.(seconds);

    player.on("loaded", handleLoaded);
    player.on("timeupdate", handleTime);

    // suport: „Continuă de unde ai rămas” (seek global)
    const seekListener = (e) => {
      const sec = Number(e.detail);
      if (Number.isFinite(sec)) player.setCurrentTime(sec).catch(() => {});
    };
    window.addEventListener("lesson:seek", seekListener);

    return () => {
      window.removeEventListener("lesson:seek", seekListener);
      player.off("loaded", handleLoaded);
      player.off("timeupdate", handleTime);
      player.unload().catch(() => {});
    };
  }, [video?.vimeoId]);

  return <div ref={vimeoHostRef} className="rounded-xl overflow-hidden" />;
}
