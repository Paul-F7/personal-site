"use client";

import ProjectList from "../components/ProjectList";
import FlavorFlickLogo from "../../../assets/flavorflick.png";
import FlavorFlickScreenshot from "../../../assets/flavorflick-screenshot.png";
import FeelifyLogo from "../../../assets/feelify.webp";
import FeelifyScreenshot from "../../../assets/feelify-screenshot.png";
import HandInHandLogo from "../../../assets/handinhand.png";
import HandInHandScreenshot from "../../../assets/handinhand-screenshot.png";
import SudokuScreenshot from "../../../assets/sudokusolver-screenshot.png";
import KinKitchenScreenshot from "../../../assets/kinkitchen-screenshot.png";

export default function Projects() {
  const projects = [
    {
      title: "FlavorFlick",
      href: "https://flavorflick.ca",
      description:
        "An AI \"Tinder-Style\" Recipe Mobile App with Personalized Taste Learning",
      technologies: ["React Native", "Fast API", "PostgreSQL"],
      github: "https://github.com/Paul-F7/recipe-app",
      demo: "https://flavorflick.ca",
      icon: FlavorFlickLogo,
      image: FlavorFlickScreenshot,
      imageSize: "h-44",
      video: "/flavorflick-demo.mov",
    },
    {
      title: "Feelify",
      href: "https://feelify.paulfom.ca",
      description:
        "A Machine Learning web app that gets the mood of a song from its MP3.",
      technologies: ["Librosa", "Sci-kit Learn"],
      github: "https://github.com/Paul-F7/song-MoodDetector",
      demo: "https://feelify.paulfom.ca",
      icon: FeelifyLogo,
      image: FeelifyScreenshot,
    },
    {
      title: "Hand in Hand",
      href: "https://handinhand.paulfom.ca",
      description:
        "Douling for ASL App that lets you practice ASL movements with smart feedback",
      technologies: ["Media Pipe", "Gemini API"],
      github: "https://github.com/Paul-F7/hand-in-hand",
      demo: "https://handinhand.paulfom.ca",
      icon: HandInHandLogo,
      image: HandInHandScreenshot,
      youtubeUrl: "https://www.youtube.com/embed/c20ZzmhjI_M",
    },
    {
      title: "CV Sudoku Solver",
      href: "https://github.com/Paul-F7/cv-sudokusolver",
      description:
        "A computer vision pipeline that detects Sudoku puzzles in photos and solves them.",
      technologies: ["Python", "OpenCV", "YOLO"],
      github: "https://github.com/Paul-F7/cv-sudokusolver",
      image: SudokuScreenshot,
    },
    {
      title: "KinKitchen",
      href: "https://github.com/Paul-F7/kin-kitchen",
      description:
        "Take a photo of your ingredients, get recommended recipes, then simulate instructions in 3d generated environment.",
      technologies: ["Cloudinary", "Three.js", "React"],
      github: "https://github.com/Paul-F7/kin-kitchen",
      image: KinKitchenScreenshot,
      imageSize: "h-28",
      youtubeUrl: "https://www.youtube.com/embed/1M8MoqCxQCI",
    },
  ];

  return <ProjectList projects={projects} />;
}
