/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <a href='https://stupidsby.blogspot.com/' target='blank'>StupidSby</a>,
    imageUrl: 'img/stupidsby.svg',
    description: (
      <p>
        Sebuah blog pribadi milik Achmada Fiqri yang dijalankan dan dihostingkan
        menggunakan{' '}
        <code>
          <a href="http://blogspot.com/">Blogspot</a>
        </code>{' '}
        sejak 2014.
      </p>
    ),
  },
  {
    title: <a href='https://atapponik.000webhostapp.com/landingpage/' target='blank'>Atapponik</a>,
    href: 'fb.com',
    imageUrl: 'img/atapponik.svg',
    description: (
      <p>
        Sebuah proyek freelance dari
        <code>
          <a href="https://www.instagram.com/atapponik.id/">
            Atapponik Indonesia
          </a>
        </code>
        yang dikerjakan menggunakan Wordpress dihosting dengan menggunakan<code><a href="https://id.000webhost.com/">000Webhost</a>
        </code>
        .
      </p>
    ),
  },
  {
    title: <a href='https://fiqriachmada.github.io/' target='blank'>Personal Site</a>,
    imageUrl: 'img/fiqriachmada.svg',
    description: (
      <p>
        Sebuah personal site Achmada Fiqri yang dibuat menggunakan{' '}
        <code>
          <a href="https://tailwindcss.com/">Tailwind CSS</a>
        </code>{' '}
        yang dideploy menggunakan{' '}
        <code>
          <a href="https://github.io/">GitHub Pages</a>
        </code>
        .
      </p>
    ),
  },
];


function Feature({imageUrl, title, description, href}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              About Me
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
