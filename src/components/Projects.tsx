import { ExternalLink } from 'lucide-react';
import Section from './Section';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { assetPath } from '../utils/assetPath';

const projects = {
  en: [
    {
      title: "AdventureX",
      description: "China's First Youth Hackathon",
      image: "images/projects/project1.jpg",
      link: "/project-one",
      alt: "AdventureX Hackathon event photo"
    },
    {
      title: "AI Education",
      description: "Empowering Everyone's Learning Journey with AI",
      image: "images/projects/project2.jpg",
      link: "/project-two",
      alt: "AI Education platform interface"
    },
    {
      title: "MeiMeiCe",
      description: "AI-Powered Personal Skincare Assistant",
      image: "images/projects/project3.jpg",
      link: "/project-three",
      alt: "MeiMeiCe skincare assistant interface"
    },
    {
      title: "SafeEat",
      description: "AI-Driven Food Safety Solution",
      image: "images/projects/project4.jpg",
      link: "/project-four",
      alt: "SafeEat food safety solution interface"
    }
  ],
  zh: [
    {
      title: "AdventureX",
      description: "中国年轻人第一场黑客松",
      image: "images/projects/project1.jpg",
      link: "/project-one",
      alt: "AdventureX 黑客松活动照片"
    },
    {
      title: "AI教育",
      description: "使用AI来赋能每个人的学习过程",
      image: "images/projects/project2.jpg",
      link: "/project-two",
      alt: "AI 教育平台界面"
    },
    {
      title: "美美测",
      description: "AI赋能的个人护肤",
      image: "images/projects/project3.jpg",
      link: "/project-three",
      alt: "美美测护肤助手界面"
    },
    {
      title: "SafeEat——放心吃吧",
      description: "用AI让你吃的放心",
      image: "images/projects/project4.jpg",
      link: "/project-four",
      alt: "SafeEat 食品安全解决方案界面"
    }
  ]
};

const Projects = () => {
  const { language } = useLanguage();

  return (
    <Section 
      title={language === 'en' ? 'Previous Experience' : '过往项目'} 
      id="projects"
      className="bg-black"
      titleClassName="text-4xl font-bold mb-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects[language as keyof typeof projects].map((project, index) => {
          const projectImage = assetPath(project.image);
          const projectWebpImage = projectImage.replace('.jpg', '.webp');

          return (
            <Link
              key={project.title}
              to={project.link}
              className="group relative block overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-labelledby={`project-title-${index}`}
            >
              <div className="relative aspect-video">
                <picture>
                  <source
                    srcSet={projectWebpImage}
                    type="image/webp"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <img
                    src={projectImage}
                    alt={project.alt}
                    loading={index <= 1 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                    className="w-full h-full object-cover rounded-xl"
                    width="640"
                    height="360"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3
                  id={`project-title-${index}`}
                  className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors"
                >
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
                <span className="inline-flex items-center text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors mt-4">
                  {language === 'en' ? 'View Project' : '查看项目'} <ExternalLink size={16} className="ml-2" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
