import React, { useEffect } from 'react'
import FAQ from '../components/FAQ';
import { ShieldCheck, Users, Heart, Award, Check, Activity, Leaf, Zap } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
import about from '../assets/imagess/2.webp';
import about2 from '../assets/imagess/3.webp';

const About = ({ currentLang, translations }) => {
  useEffect(() => { AOS.init({ duration: 1000, once: true }) }, []);

  const stats = [
    { number: '8K+', label: 'Transformed Lives' },
    { number: '100%', label: 'Natural Ingredients' },
    { number: '10+', label: 'Years of Wellness' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: 'Holistic Wellness',
      description: 'We focus on full-body health and balance'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your sobriety and wellness are our priority'
    },
    {
      icon: Heart,
      title: 'Herbal Integrity',
      description: 'Pure, safe botanicals from trusted sources'
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Backed by experts and real results'
    }
  ];

  const productBenefits = [
    {
      icon: Activity,
      title: 'Craving Control',
      description: 'Reduces urges naturally through neurotransmitter support'
    },
    {
      icon: Leaf,
      title: 'Natural Formula',
      description: 'Herbal ingredients with no artificial additives'
    },
    {
      icon: Zap,
      title: 'Quick Action',
      description: 'Feel the difference in energy and mental clarity'
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Reliable',
      description: 'Designed for daily use without side effects'
    }
  ];

  const achievements = [
    'GMP & ISO Certified',
    'Ayurveda Experts On Team',
    'Advanced Herbal R&D',
    'Trusted by Wellness Coaches'
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <Helmet>
        <title>About Dr. Alcofree | Natural Support for Alcohol-free Living</title>
        <meta
          name="description"
          content="Learn how Dr. Alcofree combines herbal wisdom and modern wellness to support sobriety, liver health, and mental clarity."
        />
        <meta
          name="keywords"
          content="alcohol recovery, sobriety supplement, natural detox, herbal wellness, Dr. Alcofree"
        />
      </Helmet>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-green-800">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200">
              {translations[currentLang].about.title}
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Empowering your journey to sobriety and mental clarity through herbal science
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative" data-aos="fade-right">
            <img
              src={about2}
              alt="Our mission"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-8" data-aos="fade-left">
            <div className="inline-block rounded-lg bg-green-50 px-3 py-1 text-sm text-green-600 font-medium">
              Our Mission
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Empowering Sobriety Through <span className="text-green-600">Natural Wellness</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {translations[currentLang].about.content1}
            </p>
            <div className="space-y-4">
              {achievements.map((a, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 flex items-center justify-center rounded-full">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      {/* <div className="bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white py-24">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-center relative">
          {stats.map((s, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="w-16 h-16 mx-auto bg-green-900/50 rounded-xl flex items-center justify-center mb-4">
                <p className="text-4xl font-bold">{s.number}</p>
              </div>
              <p className="text-green-200 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <div className="inline-block rounded-lg bg-green-50 px-3 py-1 text-sm text-green-600 font-medium">
              Why Choose Dr. Alcofree
            </div>
            <h2 className="text-4xl font-bold leading-tight text-gray-900">
              Herbal Support for <span className="text-green-600">Alcohol Recovery</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our expertly formulated herbal supplement supports detox, craving reduction, and emotional stability naturally.
            </p>
            <div className="space-y-6">
              {productBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <b.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{b.title}</h3>
                    <p className="text-gray-600">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <img
              src={about}
              alt="Herbal ingredients"
              className="rounded-2xl shadow-2xl w-full relative"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-gray-600">Principles that uphold your wellbeing</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl">
              <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                <v.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{v.title}</h3>
              <p className="text-gray-600">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-16 shadow-xl relative overflow-hidden">
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Your Journey to a Clearer, Healthier You
            </h2>
            <p className="text-green-100 text-lg mb-8">
              Join thousands who have embraced natural wellness and sobriety with Dr. Alcofree
            </p>
            <div className="flex justify-center gap-4">
              <a href="/product">
                <button className="px-8 py-3 bg-white text-green-800 rounded-full font-semibold hover:bg-green-50">
                  Explore Products
                </button>
              </a>
              <a href="/contact">
                <button className="px-8 py-3 border border-white text-white rounded-full font-semibold hover:bg-white/10">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
