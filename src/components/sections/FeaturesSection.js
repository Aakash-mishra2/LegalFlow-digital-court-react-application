import React, { useState } from 'react';
import {
  MdStoreMallDirectory,
  MdInventory,
  MdLocalShipping,
  MdOutlineReceiptLong,
  MdOutlineReplay,
  MdOutlineScale,
  MdOutlineGavel,
} from 'react-icons/md';
import { AiOutlineThunderbolt, AiOutlineSync, AiOutlineDollarCircle } from 'react-icons/ai';
import { FaBoxes, FaHandHoldingUsd } from 'react-icons/fa';
import orderManagementImg from '../../assets/front/images/features/ecommerceImg.png';
import automationImg from '../../assets/front/images/features/automationLarge.png';
import shippingImg from '../../assets/front/images/features/Freeshipping-amico.png';
import reconciliationImg from '../../assets/front/images/features/reconcilation.png';
import './featuresSection.styles.css';

const featuresTabs = [
  {
    label: 'Case Management',
    image: orderManagementImg,
    title: 'Comprehensive case tracking across all jurisdictions',
    desc: 'Streamline your legal case management with a unified digital platform.',
    pointers: [
      {
        icon: <MdStoreMallDirectory size={32} color="#FFB940" />,
        title: 'Multi-court integration',
        desc: 'Connect with multiple court systems and jurisdictions from a single dashboard',
      },
      {
        icon: <FaBoxes size={32} color="#FFB940" />,
        title: 'Bulk case processing',
        desc: 'Handle multiple cases efficiently with automated workflows and batch operations',
      },
      {
        icon: <MdInventory size={32} color="#FFB940" />,
        title: 'Document management',
        desc: 'Organize and track all case documents, evidence, and legal filings in real-time',
      },
    ],
  },
  {
    label: 'Automation',
    image: automationImg,
    title: 'Automate your legal workflow processes',
    desc: 'Speed up court operations by automating routine legal tasks effortlessly',
    pointers: [
      {
        icon: <MdLocalShipping size={32} color="#FFB940" />,
        title: 'Smart case assignment',
        desc: 'Automatically assign cases to appropriate judges and courts based on jurisdiction and availability',
      },
      {
        icon: <MdOutlineReceiptLong size={32} color="#FFB940" />,
        title: 'Auto-document generation',
        desc: 'Generate court notices, summons, and legal documents automatically in seconds',
      },
      {
        icon: <AiOutlineSync size={32} color="#FFB940" />,
        title: 'Real-time case updates',
        desc: 'Keep all parties informed with automatic notifications of case status changes',
      },
    ],
  },
  {
    label: 'Hearings',
    image: shippingImg,
    title: 'Efficient & organized hearing management',
    desc: 'Experience streamlined hearing scheduling with our comprehensive solutions',
    pointers: [
      {
        icon: <AiOutlineDollarCircle size={32} color="#FFB940" />,
        title: 'Digital hearing rooms',
        desc: 'Conduct virtual hearings with integrated video conferencing and digital evidence presentation',
      },
      {
        icon: <MdOutlineReplay size={32} color="#FFB940" />,
        title: 'Flexible rescheduling',
        desc: 'Handle hearing postponements and rescheduling with automated calendar management',
      },
      {
        icon: <AiOutlineThunderbolt size={32} color="#FFB940" />,
        title: 'Quick hearing summaries',
        desc: 'Generate detailed hearing reports and minutes automatically for accurate record-keeping',
      },
    ],
  },
  {
    label: 'Analytics',
    image: reconciliationImg,
    title: 'Comprehensive legal analytics and reporting',
    desc: 'Keep your court operations data-driven with detailed analytics and insights',
    pointers: [
      {
        icon: <MdOutlineScale size={32} color="#FFB940" />,
        title: 'Case outcome analysis',
        desc: 'Track case resolutions, judgments, and legal precedents for informed decision-making',
      },
      {
        icon: <FaHandHoldingUsd size={32} color="#FFB940" />,
        title: 'Court efficiency metrics',
        desc: 'Monitor court performance, hearing backlogs, and processing times for optimization',
      },
      {
        icon: <MdOutlineGavel size={32} color="#FFB940" />,
        title: 'Legal compliance tracking',
        desc: 'Ensure adherence to legal procedures and deadlines with automated compliance monitoring',
      },
    ],
  },
];

const FeaturesSection = () => {
  const [tab, setTab] = useState(0);
  return (
    <section className="features-section">
      <div className="features-section-title">
        Transforming Legal{' '}
        <span className="features-section-highlight">Justice</span>
        {' '}for{' '}
        <span className="features-section-strong">Digital Excellence</span>
      </div>
      <div className="features-tabs">
        {featuresTabs.map((t, i) => (
          <div
            key={t.label}
            className={`features-tab${tab === i ? ' selected' : ''}`}
            onClick={() => setTab(i)}
            style={{ cursor: 'pointer' }}
          >
            {t.label}
          </div>
        ))}
      </div>
      <div className="features-content-row">
        <img
          className="features-image"
          src={featuresTabs[tab].image}
          alt={featuresTabs[tab].label}
        />
        <div className="features-content">
          <div className="features-content-title">{featuresTabs[tab].title}</div>
          <div className="features-content-desc">{featuresTabs[tab].desc}</div>
          <div className="features-pointers">
            {featuresTabs[tab].pointers.map((p, idx) => (
              <div className="features-pointer" key={idx}>
                <div className="features-pointer-icon">
                  {React.cloneElement(p.icon, { color: '#222' })}
                </div>
                <div className="features-pointer-title">{p.title}</div>
                <div className="features-pointer-desc">{p.desc}</div>
              </div>
            ))}
          </div>
          <button
            className="features-btn"
            onClick={() => window.location.href = '/contact-us'}
          >
            Try Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
