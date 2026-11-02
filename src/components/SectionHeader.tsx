import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, defaultTransition, useScrollAnimation } from '../utils/animations';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  align = 'center',
}) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="section-header"
      style={align === 'left' ? { textAlign: 'left', margin: '0 0 var(--space-3xl)' } : undefined}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      transition={defaultTransition}
    >
      {label && <span className="label">{label}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
};

export default SectionHeader;
