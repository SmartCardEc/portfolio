import volkiharBackgroundLarge from 'assets/volkihar-background-large.jpg';
import volkiharBackgroundPlaceholder from 'assets/volkihar-background-placeholder.jpg';
import volkiharBackground from 'assets/volkihar-background.jpg';
import volkiharBannerLarge from 'assets/volkihar-banner-large.jpg';
import volkiharBannerPlaceholder from 'assets/volkihar-banner-placeholder.jpg';
import volkiharBanner from 'assets/volkihar-banner.jpg';
import volkiharBookLarge from 'assets/volkihar-book-large.png';
import volkiharBookPlaceholder from 'assets/volkihar-book-placeholder.png';
import volkiharBook from 'assets/volkihar-book.png';
import volkiharEnderalLarge from 'assets/volkihar-enderal-large.jpg';
import volkiharEnderalLogoLarge from 'assets/volkihar-enderal-logo-large.png';
import volkiharEnderalLogoPlaceholder from 'assets/volkihar-enderal-logo-placeholder.png';
import volkiharEnderalLogo from 'assets/volkihar-enderal-logo.png';
import volkiharEnderalPlaceholder from 'assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderal from 'assets/volkihar-enderal.jpg';
import VolkiharKnightLogo from 'assets/volkihar-logo.svg';
import volkiharSlide1Large from 'assets/volkihar-slide-1-large.jpg';
import volkiharSlide1 from 'assets/volkihar-slide-1.jpg';
import volkiharSlide2Large from 'assets/volkihar-slide-2-large.jpg';
import volkiharSlide2 from 'assets/volkihar-slide-2.jpg';
import volkiharSlide3Large from 'assets/volkihar-slide-3-large.jpg';
import volkiharSlide3 from 'assets/volkihar-slide-3.jpg';
import volkiharSlidePlaceholder from 'assets/volkihar-slide-placeholder.jpg';
import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
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
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './VolkiharKnight.module.css';

const Carousel = dynamic(() => import('components/Carousel').then(mod => mod.Carousel));
const Armor = dynamic(() => import('./Armor').then(mod => mod.Armor));

const title = 'Universality and customization in a single tool';
const description =
  "Data analytics has become a fundamental tool for companies that want to make informed decisions and improve their performance. However, creating reports and dashboards can be a complicated process and requires technical and programming skills. That's why our platform is the ideal choice for those who want to create dashboards and data analysis in a simple and customized way. With its focus on universality and customization, our platform offers a unique user experience tailored to customers' needs";
const roles = [
  'Simplified data analysis',
  'Customization and ease of use',
  'Universality on any device',
];

export function VolkiharKnight() {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 240 211 150;
              --rgbAccent: 240 211 150;
            }
            [data-theme='light'] {
              --rgbPrimary: 134 99 23;
              --rgbAccent: 134 99 23;
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={[volkiharBackground, volkiharBackgroundLarge]}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          // linkLabel="Get the mod"
          // url="https://www.nexusmods.com/skyrimspecialedition/mods/4806/"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[volkiharBanner, volkiharBannerLarge]}
              placeholder={volkiharBannerPlaceholder}
              alt="A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            {/* <div className={styles.logoContainer}>
              <VolkiharKnightLogo
                role="img"
                aria-label="Unlock hidden patterns in data."
              />
            </div> */}
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Solutions</ProjectSectionHeading>
              <ProjectSectionText>
                Our site is the ideal choice for creating dashboards and data analysis
                because we offer a unique user experience tailored to the needs of our
                clients. One of the most outstanding features of our platform is its
                universality.Reports and dashboards created on our platform can be viewed
                on any mobile device, including smartphones and tablets. This allows users
                to access important data anytime, anywhere, regardless of the device they
                are using.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Carousel
              placeholder={volkiharSlidePlaceholder}
              images={[
                {
                  srcSet: [volkiharSlide1, volkiharSlide1Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Make better decisions with data',
                },
                {
                  srcSet: [volkiharSlide2, volkiharSlide2Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Get insights that matter',
                },
                {
                  srcSet: [volkiharSlide3, volkiharSlide3Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Discover the story behind the numbers',
                },
              ]}
              width={1920}
              height={1080}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={[volkiharEnderal, volkiharEnderalLarge]}
              placeholder={volkiharEnderalPlaceholder}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <Image
                srcSet={[volkiharEnderalLogo, volkiharEnderalLogoLarge]}
                placeholder={volkiharEnderalLogoPlaceholder}
                alt="The Enderal game logo"
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              />

              <ProjectSectionText>
                In addition, our platform features a wide variety of customizable tools
                and widgets that can be used to create dashboards and analyze data
                effectively. We offer a wealth of visualization options, including charts,
                graphs, maps and other types of visualizations that can be customized and
                tailored to users' specific needs.
              </ProjectSectionText>
              <ProjectSectionText>
                Our platform is also easy to use and allows users to create dashboards
                quickly and easily, even if they have no programming or data analysis
                experience. Users can create graphs and charts by dragging and dropping
                elements into the control panel, making it easy to create customized
                reports and dashboards.
              </ProjectSectionText>
              <ProjectSectionText>
                In short, our platform is the best choice for creating dashboards and data
                analysis because it offers a unique user experience that is adaptable to
                customers' needs. With its universality, users can view reports on any
                mobile device, while customizable viewing options and ease of use make
                creating dashboards and data analysis quick and easy.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
