import { LucideIcon, Palette, PenTool, Image, FilmIcon, Camera, Video } from 'lucide-react';

export interface Tool {
  name: string;
  icon: LucideIcon;
  color: string;
  category: string;
  proficiency: number;
}

export const toolsData: Tool[] = [
  {
    name: "Photoshop",
    icon: Image,
    color: "blue-500",
    category: "Photo Editing",
    proficiency: 90
  },
  {
    name: "Illustrator",
    icon: PenTool,
    color: "orange-500",
    category: "Vector Graphics",
    proficiency: 85
  },
  {
    name: "InDesign",
    icon: Palette,
    color: "pink-500",
    category: "Layout Design",
    proficiency: 75
  },
  {
    name: "Premiere Pro",
    icon: Video,
    color: "purple-500",
    category: "Video Editing",
    proficiency: 70
  },
  {
    name: "After Effects",
    icon: FilmIcon,
    color: "indigo-500",
    category: "Motion Graphics",
    proficiency: 65
  },
  {
    name: "Lightroom",
    icon: Camera,
    color: "sky-500",
    category: "Photo Processing",
    proficiency: 80
  },
  {
    name: "Figma",
    icon: Palette,
    color: "green-500",
    category: "UI/UX Design",
    proficiency: 60
  },
  {
    name: "XD",
    icon: Palette,
    color: "fuchsia-500",
    category: "Prototyping",
    proficiency: 60
  }
];