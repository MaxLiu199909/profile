import Section from './Section';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../utils/assetPath';

const About = () => {
  const { language } = useLanguage();

  return (
    <Section 
      title={language === 'en' ? 'About Me' : '关于我'} 
      id="about" 
      className="bg-gray-50"
      titleClassName="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-gray-900"
    >
      <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-start">
        {/* Profile Image Container */}
        <div className="relative aspect-[3/4] md:sticky md:top-24">
          <picture>
            <source
              srcSet={assetPath('images/profile.webp')}
              type="image/webp"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <img 
              src={assetPath('images/profile.jpg')}
              alt={language === 'en' ? 'Profile' : '个人照片'}
              className="rounded-xl shadow-lg w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-300"
              style={{ objectPosition: '50% 15%' }}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="800"
              height="1067"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
        </div>

        {/* Text Content */}
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {language === 'en' 
              ? "Born in 2000, I was pursuing my Bachelor's degree in Accounting and Business at the University of Auckland, New Zealand. During my summer break in October 2023, I made a pivotal decision that would reshape my journey."
              : "我出生于2000年，曾在新西兰奥克兰大学主修会计与商业。2023年10月的暑假期间（新西兰位于南半球），我做出了一个改变人生轨迹的决定。"}
          </p>

          <div className="h-px bg-gray-200 w-full my-4 sm:my-6"></div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {language === 'en'
              ? "After deciding to transition into AI in 2023, I moved through multiple roles across the startup ecosystem: Research Team at MiraclePlus, Community Operations at Founder Park, COO at an AI education company (¥5M angel round), Operations at Sapient, Product Operations at Bonjour, and CMO at ListenHub."
              : "在 2023 年决定转向 AI 后，我在创业生态中先后担任多个角色：奇绩创坛行研组、Founder Park 社区运营、AI 教育公司 COO（¥5M 天使轮）、Sapient 运营、Bonjour 产品运营，以及 ListenHub CMO。"}
          </p>

          <div className="h-px bg-gray-200 w-full my-4 sm:my-6"></div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {language === 'en'
              ? "Beyond my professional roles, I've built a thriving community of over 3,000 AI professionals. As a content creator on Xiaohongshu, I've grown to 10,000 followers with my tech-focused content reaching over 20 million views. I'm also proud to have organized AdventureX, China's first pure youth hackathon, and co-founded HackathonWeekly, a non-profit tech community in Beijing and Shenzhen."
              : "除了专业角色外，我还建立了一个拥有3000多名AI专业人士的活跃社区。作为小红书创作者，我的技术内容已吸引了1万名粉丝，总浏览量超过2000万。我还很荣幸组织了中国首个纯青年黑客松AdventureX，并共同创立了北京和深圳的非营利技术社区HackathonWeekly。"}
          </p>

          <div className="h-px bg-gray-200 w-full my-4 sm:my-6"></div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {language === 'en'
              ? "Selected wins include leading an overseas cold start with a $20K budget, generating around 300K impressions, converting 5,000 users on day one, and securing several term sheets (TS). I also scaled products from tens of thousands to hundreds of thousands of users, led brand marketing that earned overseas exhibition opportunities, and grew ARR from tens of thousands USD to multiple millions USD under strict attribution."
              : "代表性战绩包括：主导某产品海外冷启动，以 2 万美元预算拿到约 30 万曝光、当天转化 5000 用户，并获得数个 TS；另一个产品从几万用户运营到几十万用户规模，带领品牌 MKT 拿到海外参展机会，并在最严格算法口径下将 ARR 从数万美金增长到数百万美金。"}
          </p>

          <div className="h-px bg-gray-200 w-full my-4 sm:my-6"></div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {language === 'en'
              ? "These experiences gave me a cross-functional perspective across research, community, operations, product, and growth. I enjoy building from 0 to 1 and turning complex strategy into repeatable execution with teams."
              : "这些经历让我形成了从行研、社区、运营到产品与增长的跨职能视角。我喜欢做从 0 到 1 的搭建，也擅长把复杂战略转化为团队可持续执行的动作。"}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
