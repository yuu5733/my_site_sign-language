import React from 'react';
import Styes from './SignLanguageCard.module.css';

interface DynamicHeadingProps {
  level: number;
  children: string;
}

interface SignLanguageCardProps {
  title: string;
  description: string;
}

const DynamicHeading: React.FC<DynamicHeadingProps> = ({ level, children }) => {
  const HeadingTag = `h${level}`;
  return React.createElement(HeadingTag, {className: 'dynamic-heading',}, children);
};

const SignLanguageCard: React.FC<SignLanguageCardProps> = ({ title, description }) => {
  return (
    <div>
      <DynamicHeading level={3} children={title}></DynamicHeading>
      <p>{description}</p>
    </div>
  );
};

export default SignLanguageCard;