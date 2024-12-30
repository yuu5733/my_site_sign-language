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

const DynamicHeading: React.FC<DynamicHeadingProps> = ({ level, children }) => {
  const HeadingTag = `h${level}`;
  return React.createElement(HeadingTag, {className: 'dynamic-heading',}, children);
};

const SignLanguageCard: React.FC<SignLanguageCardProps> = ({ title, description }) => {
  return (
    <li>
      <img src="" alt="" width="50" height="50"/>
      <DynamicHeading level={3} children={title}></DynamicHeading>
      <p>{description}</p>
    </li>
  );
};

const SignLanguageCardList: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
  return (
    <ul className={Styles.SignLanguageCardList}>
      {children}
    </ul>
  );
};

export { SignLanguageCard, SignLanguageCardList };