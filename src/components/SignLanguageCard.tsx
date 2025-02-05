import React from 'react';
import Styles from './SignLanguageCard.module.css';

interface DynamicHeadingProps {
  level: number;
  children: string;
}

interface SignLanguageCardProps {
  title: string;
  description: string;
  key?: string;
}

interface SignLanguageCardListProps {
  children: React.ReactNode[];
}

const DynamicHeading: React.FC<DynamicHeadingProps> = ({ level, children }) => {
  const HeadingTag = `h${level}`;
  return React.createElement(HeadingTag, {className: 'dynamic-heading',}, children);
};

const SignLanguageCard: React.FC<SignLanguageCardProps> = ({ title, description }) => {
  return (
    <li className={Styles.SignLanguageCard}>
      <a href="" className={Styles.SignLanguageCard__link}>
        <div className={Styles.thumbnail}><img className={Styles.SignLanguageCard__img} src="../src/assets/images/カードの画像.png" alt="" width="240" height="160"/></div>
        <div className={Styles.SignLanguageCard__content}>
          <DynamicHeading level={3} children={title}></DynamicHeading>
          <p>{description}</p>
        </div>
      </a>
    </li>
  );
};

const SignLanguageCardList: React.FC<React.PropsWithChildren<SignLanguageCardListProps>> = ({ children }) => {
  return (
    <ul className={Styles.SignLanguageCardList}>
      {children}
    </ul>
  );
};

export { SignLanguageCard, SignLanguageCardList };