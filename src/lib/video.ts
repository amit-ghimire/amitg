import { Project } from "@/data/projects";

export interface ProjectVideo {
  url: string;
  thumbnail: string;
}

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/
  );
  return match ? match[1] : null;
}

function getGoogleDriveId(url: string): string | null {
  const match = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  return match ? match[1] : null;
}

function getThumbnailForUrl(url: string): string | null {
  const youTubeId = getYouTubeId(url);
  if (youTubeId) return `https://img.youtube.com/vi/${youTubeId}/hqdefault.jpg`;

  const driveId = getGoogleDriveId(url);
  if (driveId) return `https://drive.google.com/thumbnail?id=${driveId}&sz=w1000`;

  return null;
}

export function getProjectVideo(project: Project): ProjectVideo | null {
  for (const link of project.links ?? []) {
    const thumbnail = getThumbnailForUrl(link.url);
    if (thumbnail) return { url: link.url, thumbnail };
  }
  return null;
}
