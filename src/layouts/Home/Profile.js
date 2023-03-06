import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="About us" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      We are a team of skilled professionals who are passionate about transforming data
      into valuable insights. Our team includes Mateo Heras and Juan Orellana, two
      experienced economists who excel in the field of data analysis. Our combined
      expertise in data analytics and visualization allows us to turn raw data into
      actionable insights that can help our clients make informed decisions. On his{' '}
      <Link href="https://www.linkedin.com/in/mateoheras/">LinkedIn</Link> profile, Mateo
      showcases his skills and experience in data analysis, and his portfolio website,
      available at <Link href="https://mateoheras77.github.io/WEB/">here</Link>,
      demonstrates his ability to present complex data in an easy-to-understand format.
      Juan's{' '}
      <Link href="https://www.linkedin.com/in/juan-orellana-622689207/">LinkedIn</Link>{' '}
      profile provides a glimpse into his skills and expertise in the field of economics
      and data analysis.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Together, we form a dynamic team that excels in the field of data analytics. Our
      ability to turn data into valuable insights has been instrumental in the success of
      our clients, and we are proud to have helped many organizations make informed
      decisions based on our work.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="mailto:wmateohv@gmail.com"
                icon="send"
              >
                Send us a email: wmateohv@gmail.com
              </Button>
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="https://wa.me/+593979164305/?text=mas%20informacion%20aca"
                icon="send"
              >
                Send us a message via whatsapp
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
