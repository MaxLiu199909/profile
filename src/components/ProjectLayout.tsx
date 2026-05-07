import React from 'react';
import ProjectNavBar from './ProjectNavBar';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../utils/assetPath';

interface ProjectLayoutProps {
  children: React.ReactNode;
  title: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  projectNumber: number;
  backgroundImage?: string;
}

const ProjectLayout = ({ children, title, description, projectNumber, backgroundImage }: ProjectLayoutProps) => {
  const { language } = useLanguage();
  const defaultBackgroundImage = CSS.supports('(background-image: -webkit-image-set(url("") 1x))')
    ? assetPath(`images/projects/project${projectNumber}.webp`)
    : assetPath(`images/projects/project${projectNumber}.jpg`);
  const resolvedBackgroundImage = backgroundImage ? assetPath(backgroundImage) : defaultBackgroundImage;

  return (
    <div className="min-h-screen bg-white">
      <ProjectNavBar />
      
      {/* Hero Section */}
      <div 
        className="relative min-h-[80vh] flex items-center"
        style={{
          backgroundImage: `url(${resolvedBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {language === 'en' ? title.en : title.zh}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              {language === 'en' ? description.en : description.zh}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="relative z-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {children}
        </div>
      </section>
    </div>
  );
};

export default ProjectLayout;
