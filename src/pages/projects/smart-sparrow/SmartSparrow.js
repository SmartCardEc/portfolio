import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageSprComponentsDarkLarge from 'assets/spr-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from 'assets/spr-components-dark.png';
import imageSprComponentsLightLarge from 'assets/spr-components-light-large.png';
import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from 'assets/spr-components-light.png';
import imageSprDesignSystemDarkLarge from 'assets/spr-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from 'assets/spr-design-system-dark.png';
import imageSprDesignSystemLightLarge from 'assets/spr-design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from 'assets/spr-design-system-light.png';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge from 'assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion from 'assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from 'assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from 'assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from 'assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from 'assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from 'assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from 'assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from 'assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from 'assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from 'assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from 'assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from 'assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from 'assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from 'assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from 'assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from 'assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from 'assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from 'assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from 'assets/spr-storyboarder-light.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'Dashboard Building and Data Analytics: The Definitive Guide';
const description =
  'In the information age, data is more valuable than ever. Companies around the world are investing in dashboard building and data analytics to gain valuable insights into their operations, customers, and competitors. In this article, we will discuss how to build an effective dashboard and how data analytics can help companies make informed decisions.';
const roles = [
  'We transform your data into valuable information for your business.',
  'Customized data analysis solutions for every need.',
  'Get valuable information for informed decision making.',
  'Data analytics experts with proven experience.',
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          // url="https://www.smartsparrow.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="We transform data into strategic decisions"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>What is a Dashboard?</ProjectSectionHeading>
            <ProjectSectionText>
            In simple terms, a dashboard is a tool that allows users to visualize and analyze data 
            in an easy and accessible way. An effective dashboard should provide a complete view of 
            enterprise data in real time, with the ability to drill down into specific details as needed.
            Building an effective dashboard begins with careful planning. Before beginning, it is important to 
            identify the goals and needs of the business. What information is most important to the business? 
            What key metrics should be tracked? These questions should be answered before starting to build a dashboard.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            {/* <Image
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprComponentsDark, imageSprComponentsDarkLarge]
                  : [imageSprComponentsLight, imageSprComponentsLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt={`A set of ${themeId} themed components for the aero design system`}
              sizes="100vw"
            /> */}
            <ProjectTextRow>
              {/* <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl> */}
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>How to build an effective dashboard:</ProjectSectionHeading>
              <ProjectSectionText>
              Once the business objectives and needs have been identified, it's time to start building the dashboard. 
              There are several key considerations to keep in mind when building an effective dashboard, as detailed below:              
              </ProjectSectionText>
              <ProjectSectionText>
              1. Tool selection: There are many tools for building dashboards, such as Tableau, PowerBI and Google Data Studio. It is important to choose the right tool for the company's needs. Each tool has its advantages and disadvantages, so it is important to compare several options before making a decision.             
              </ProjectSectionText>
              <ProjectSectionText>
              2. Selection of data sources: Dashboards are only as good as the data that feeds them. It is important to select the right data sources to ensure that the data is accurate and relevant. Data sources can include databases, spreadsheets, text files and more.
              </ProjectSectionText>
              <ProjectSectionText>
              3. Visual design: The visual design of a dashboard is essential to its effectiveness. Visual elements should be easy to understand and appealing to the eye. It is important to choose colors, fonts and layouts that best suit the company's brand.
              </ProjectSectionText>
              <ProjectSectionText>
              4. Selecting key metrics: Key metrics are the indicators that help the company measure progress toward its goals. It is important to select the right metrics for the dashboard and make sure they are easy to understand.
              </ProjectSectionText>
              <ProjectSectionText>
              5. Continuous updating: A dashboard must be continuously updated to maintain the accuracy and relevance of the data. It is important to establish a regular update process to ensure that the data is always up to date.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprDesignSystemDark, imageSprDesignSystemDarkLarge]
                  : [imageSprDesignSystemLight, imageSprDesignSystemLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt="Visualize your data in a new and powerful way."
              sizes="100vw"
            />
            {/* <ProjectTextRow>
              <ProjectSectionHeading>Design system docs</ProjectSectionHeading>
              <ProjectSectionText>
                A design system is useless if no one knows how to use it, so we put
                together a comprehensive documentation website to cover principles, ux,
                accessibility, and component guidelines for designers and engineers
                working with the system.
              </ProjectSectionText>
            </ProjectTextRow> */}
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={[imageSprBackgroundVolcanism, imageSprBackgroundVolcanismLarge]}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="Get meaningful insights from your data with ease."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Data Analytics and its role in the construction of Dashboards:</ProjectSectionHeading>
                  <ProjectSectionText>
                  Data analytics is the process of examining and analyzing large data sets to gain valuable insights. Data analytics 
                  is essential for building effective dashboards, 
                  as it helps companies better understand data and make informed decisions.
                  </ProjectSectionText>
                  <ProjectSectionText>
                  Data analytics can also be useful in identifying trends and patterns in data, allowing companies to anticipate and respond to changes
                  in the marketplace. Some of the most common data analytics techniques include trend analysis, correlation analysis, regression analysis
                  and cluster analysis.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={[
                  { src: videoSprMotion, width: 1280 },
                  { src: videoSprMotionLarge, width: 2560 },
                ]}
                placeholder={videoSprMotionPlaceholder}
                alt="Smart data analysis, clear answers."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>              
              <ProjectSectionText>
              Trend analysis involves identifying patterns in data over time. This can help companies identify changes in market demand, buying trends and customer behaviors.
              </ProjectSectionText>
              <ProjectSectionText>
              Correlation analysis involves identifying relationships between two or more variables. This can help companies understand how changes in one variable can affect other variables.
              </ProjectSectionText>          
              <ProjectSectionText>
              Regression analysis involves identifying the relationship between a dependent variable and one or more independent variables. This can help companies predict how changes in one variable may affect the dependent variable. 
              </ProjectSectionText>
              <ProjectSectionText>
              Cluster analysis involves identifying groups of similar data. This can help companies segment their customers into groups based on buying patterns or preferences.
              </ProjectSectionText>
              <ProjectSectionText>
              By using data analysis techniques such as these, companies can gain a deeper understanding of their data and make better data-driven business decisions.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprStoryboarderDark, imageSprStoryboarderDarkLarge]
                  : [imageSprStoryboarderLight, imageSprStoryboarderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprStoryboarderDarkPlaceholder
                  : imageSprStoryboarderLightPlaceholder
              }
              alt="Unlock the hidden potential of your data."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        
        <ThemeProvider themeId="dark" data-invert>
          <Earth
            className={styles.earth}
            hideMeshes={useMemo(
              () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
              []
            )}
            position={useMemo(() => [0, 0, 0], [])}
            labels={useMemo(
              () => [
                {
                  position: [0.54, 0.19, 0.18],
                  text: 'Pacific ring of fire',
                  hidden: true,
                },
                {
                  position: [0.47, -0.38, 0.04],
                  text: 'Ruapehu',
                  hidden: true,
                },
                {
                  position: [0.22, 0.44, -0.35],
                  text: 'St. Helens',
                  hidden: true,
                },
                {
                  position: [0.16, -0.06, 0.58],
                  text: 'Krakatoa',
                  hidden: true,
                },
                {
                  position: [0.11, 0.2, -0.56],
                  text: 'Parícutin',
                  hidden: true,
                },
                {
                  position: [0.52, 0.2, -0.23],
                  text: 'Kīlauea',
                  hidden: true,
                },
                {
                  position: [-0.24, 0.75, 0.24],
                  text: 'Insights',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.55, 0.24],
                  text: 'Data cleansing and analysis',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.35, 0.24],
                  text: 'Raw Data',
                  delay: 800,
                  hidden: true,
                },
              ],
              []
            )}
            scale={0.6}
          >
            <EarthSection
              scrim
              animations={['0:loop']}
              camera={[0, 0, 1.5]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent>
                  <ProjectTextRow center>
                    <ProjectSectionHeading>
                    The globalization of data and the importance of visualizing it to empower business.
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                    In today's digital era, the volume of data generated by companies and individuals is growing exponentially. Data globalization is
                    a phenomenon that has revolutionized the business world, allowing companies to collect, process and analyze information 
                    from various sources around the world. In this part, we will discuss the importance of 
                    visualizing data to empower business and why our company is the best choice to help 
                    companies make the most of their data.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[0, 0, 2.4]}
              meshes={['Atmosphere', 'EarthFull']}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[1.14, -1.39, 0.94]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                    The importance of data visualization
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                    Data visualization is a process that involves graphically representing data in a way
                    that is easy to understand. By visualizing data, companies can identify patterns, 
                    trends and opportunities that might otherwise go unnoticed. Data visualization also 
                    helps companies communicate their information clearly and effectively, which can be crucial 
                    for making informed business decisions.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.17, 0.69, -1.47]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="start" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                    The importance of data globalization
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                    Data globalization allows companies to collect information from a variety of sources 
                    around the world. This can include sales data, social media data, inventory data, 
                    shipping data and many other types of data. By using data analytics techniques, 
                    companies can identify patterns and trends in this data, enabling them to make informed business decisions.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.81, 0.51, 0.43]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['EarthPartial', 'Chunk']}
              labels={['Insights', 'Data cleansing and analysis', 'Raw Data']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                    Why our company is the best choice
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                    At our company, we focus on helping companies get the most out of their data. We use advanced data analytics and data 
                    visualization techniques to help companies identify patterns and trends in their data. Our expertise in data globalization 
                    enables us to work with companies around the world and help them expand their reach and seize opportunities in new markets.
                    </ProjectSectionText>
                    <ProjectSectionText>
                    In addition, we pride ourselves on our commitment to data security and privacy. We work closely with our clients to 
                    ensure that their data is protected and used ethically and responsibly.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              scrimReverse
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['Atmosphere', 'EarthFull']}
            />
          </Earth>
        </ThemeProvider>
        
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
