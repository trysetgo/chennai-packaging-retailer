"use client";

import React from 'react';
import PropTypes from 'prop-types';
import { ShieldCheck, Star, Award, CheckCircle, TrendingUp, Users, Briefcase, Zap, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  ShieldCheck,
  Star,
  Award,
  CheckCircle,
  TrendingUp,
  Users,
  Briefcase,
  Zap,
  Layers
};

export const trustCredibilityV1DefaultProps = {
  variant: 'iconRow', // iconRow, cardGrid, minimal, testimonial, stats
  theme: {
    mode: 'light',
    primary: '#2563EB',
    secondary: '#111827',
    accent: '#7C3AED',
    background: '#ffffff',
    surface: '#F9FAFB'
  },
  title: "Trusted by industry leaders",
  subtitle: "Join thousands of satisfied customers who trust us with their business.",
  items: [
    {
      id: "1",
      title: "Secure & Reliable",
      description: "Bank-grade security protocols to keep your data safe.",
      icon: "ShieldCheck",
      value: "99.9%",
      label: "Uptime",
      rating: 5,
      verified: true
    },
    {
      id: "2",
      title: "Award Winning",
      description: "Recognized for excellence in customer service.",
      icon: "Award",
      value: "50+",
      label: "Awards",
      rating: 5,
      verified: true
    },
    {
      id: "3",
      title: "Top Rated",
      description: "Consistently rated 5 stars by our user community.",
      icon: "Star",
      value: "10k+",
      label: "Reviews",
      rating: 5,
      verified: true
    },
    {
      id: "4",
      title: "Fast Growth",
      description: "Join the fastest growing platform in the industry.",
      icon: "TrendingUp",
      value: "200%",
      label: "Growth",
      rating: 5,
      verified: true
    }
  ],
  containerMaxWidth: "max-w-7xl",
  padding: "py-16 px-4 sm:px-6 lg:px-8",
  enableAnimations: true
};

const TrustCredibilityV1 = (props) => {
  const p = { ...trustCredibilityV1DefaultProps, ...props };
  const { variant, theme, title, subtitle, items, containerMaxWidth, padding, enableAnimations } = p;
  const isPreviewing = props.isPreviewing !== false;

  const MotionDiv = enableAnimations && !isPreviewing ? motion.div : "div";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const renderIcon = (iconName, className) => {
    const Icon = iconMap[iconName] || CheckCircle;
    return <Icon className={className} />;
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < Math.floor(rating) ? 'fill-current' : 'text-gray-300'}`} />
        ))}
      </div>
    );
  };

  const renderContent = () => {
    switch (variant) {
      case 'iconRow':
        return (
          <MotionDiv variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap justify-center gap-8 md:gap-16">
            {items.map((item, idx) => (
              <motion.div key={item.id || idx} variants={itemVariants} className="flex flex-col items-center text-center gap-3">
                <div className="p-4 rounded-full" style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}>
                  {renderIcon(item.icon, "w-8 h-8")}
                </div>
                <div>
                  <h4 className="font-semibold text-lg" style={{ color: theme.secondary }}>{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </MotionDiv>
        );

      case 'cardGrid':
        return (
          <MotionDiv variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, idx) => (
              <motion.div key={item.id || idx} variants={itemVariants} className="p-6 rounded-2xl border transition-all hover:shadow-lg" style={{ backgroundColor: theme.surface, borderColor: `${theme.secondary}10` }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: theme.primary, color: '#fff' }}>
                  {renderIcon(item.icon, "w-6 h-6")}
                </div>
                <h4 className="text-xl font-bold mb-2" style={{ color: theme.secondary }}>{item.title}</h4>
                <p className="text-sm" style={{ color: `${theme.secondary}80` }}>{item.description}</p>
              </motion.div>
            ))}
          </MotionDiv>
        );

      case 'minimal':
        return (
          <MotionDiv variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap justify-center gap-12">
            {items.map((item, idx) => (
              <motion.div key={item.id || idx} variants={itemVariants} className="flex items-center gap-3">
                {renderIcon(item.icon, "w-6 h-6")}
                <span className="text-lg font-medium" style={{ color: theme.secondary }}>{item.title}</span>
              </motion.div>
            ))}
          </MotionDiv>
        );

      case 'testimonial':
        return (
          <MotionDiv variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, idx) => (
              <motion.div key={item.id || idx} variants={itemVariants} className="p-8 rounded-2xl shadow-sm" style={{ backgroundColor: theme.surface }}>
                {renderStars(item.rating || 5)}
                <p className="mt-4 mb-6 text-lg italic" style={{ color: theme.secondary }}>"{item.description}"</p>
                <div className="flex items-center gap-4">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-12 h-12 rounded-full object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: theme.primary }}>
                      {item.title?.charAt(0) || 'U'}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold" style={{ color: theme.secondary }}>{item.title}</h4>
                    {item.verified && <span className="text-xs font-medium uppercase tracking-wider" style={{ color: theme.accent }}>Verified Customer</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </MotionDiv>
        );

      case 'stats':
        return (
          <MotionDiv variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x" style={{ borderColor: `${theme.secondary}15` }}>
            {items.map((item, idx) => (
              <motion.div key={item.id || idx} variants={itemVariants} className="px-4">
                <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: theme.primary }}>{item.value}</div>
                <div className="text-sm font-semibold uppercase tracking-widest" style={{ color: `${theme.secondary}80` }}>{item.label}</div>
              </motion.div>
            ))}
          </MotionDiv>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: theme.background }} className="w-full">
      <div className={`mx-auto ${containerMaxWidth} ${padding}`}>
        {(title || subtitle) && (
          <div className="text-center mb-12 max-w-3xl mx-auto">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.secondary }}>{title}</h2>}
            {subtitle && <p className="text-lg" style={{ color: `${theme.secondary}80` }}>{subtitle}</p>}
          </div>
        )}
        {renderContent()}
      </div>
    </div>
  );
};

TrustCredibilityV1.propTypes = {
  variant: PropTypes.oneOf(['iconRow', 'cardGrid', 'minimal', 'testimonial', 'stats']),
  theme: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  items: PropTypes.array,
  containerMaxWidth: PropTypes.string,
  padding: PropTypes.string,
  enableAnimations: PropTypes.bool,
  isPreviewing: PropTypes.bool
};

export default TrustCredibilityV1;
