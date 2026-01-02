import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, TrendingUp, Download, Calendar, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navigation } from '@/components/Navigation';
import { Countdown } from '@/components/Countdown';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  const whyAttendItems = [
    {
      icon: Users,
      title: t('whyAttend1'),
      description: 'Connect with influential leaders from across the Middle East and Africa'
    },
    {
      icon: Globe,
      title: t('whyAttend2'),
      description: 'Build partnerships and ventures that transcend geographical boundaries'
    },
    {
      icon: TrendingUp,
      title: t('whyAttend3'),
      description: 'Influence the future direction of leadership and innovation in MEA'
    }
  ];

  const pillars = [
    {
      title: t('reconnect'),
      description: 'Rebuild relationships and strengthen networks across the region',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: t('reimagine'),
      description: 'Envision new possibilities for collaboration and growth',
      color: 'from-green-500 to-green-600'
    },
    {
      title: t('rebuild'),
      description: 'Construct sustainable solutions for regional challenges',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: t('reignite'),
      description: 'Spark innovation and entrepreneurial spirit',
      color: 'from-red-500 to-red-600'
    }
  ];

  const testimonials = [
    {
      quote: "The AA-MEA Conference transformed my perspective on regional collaboration. The connections I made continue to drive my work today.",
      author: "Dr. Amina Hassan",
      position: "CEO, Innovation Hub Cairo",
      country: "Egypt",
      image: "https://images.unsplash.com/photo-1573164574511-73c773193279?w=400&auto=format&fit=crop&q=80"
    },
    {
      quote: "An unparalleled gathering of minds. The insights shared here shaped our company's expansion strategy across Africa.",
      author: "Omar Al-Rashid",
      position: "Founder, TechBridge MENA",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1636293235717-7895bf07abc8?w=400&auto=format&fit=crop&q=80"
    },
    {
      quote: "The perfect blend of networking, learning, and inspiration. Kigali provided the ideal backdrop for meaningful conversations.",
      author: "Sarah Mbeki",
      position: "Director, African Development Bank",
      country: "South Africa",
      image: "https://images.unsplash.com/photo-1732067290146-d770fd1df2d7?w=400&auto=format&fit=crop&q=80"
    }
  ];

  const partners = [
    { name: 'African Development Bank', logo: '/api/placeholder/120/60' },
    { name: 'World Economic Forum', logo: '/api/placeholder/120/60' },
    { name: 'MENA Innovation Hub', logo: '/api/placeholder/120/60' },
    { name: 'Kigali Convention Centre', logo: '/api/placeholder/120/60' },
    { name: 'Rwanda Development Board', logo: '/api/placeholder/120/60' },
    { name: 'Emirates Foundation', logo: '/api/placeholder/120/60' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="home" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1687986261123-b17f08f2796c?w=1920&auto=format&fit=crop&q=80')`,
          }}
        >
          <div className="absolute inset-0 gradient-hero"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-hero mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-4 opacity-90">
              {t('heroSubtitle')}
            </p>
            <div className="flex items-center justify-center gap-2 text-lg md:text-xl mb-12 opacity-80">
              <MapPin className="h-5 w-5" />
              <span>{t('heroDate')}</span>
            </div>
            
            {/* Countdown */}
            <div className="mb-12">
              <Countdown />
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="gradient-gold text-black font-semibold px-8 py-4 text-lg shadow-gold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://drive.google.com/drive/folders/14s_m5TG3fzvND3rKxStENt5FhfP5SHIs?usp=drive_link', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                {t('downloadBooklet')}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="mr-2 h-5 w-5" />
                {t('registerNow')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">{t('whyAttendTitle')}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyAttendItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center p-8 shadow-elegant hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 mx-auto mb-6 gradient-gold rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-card-title mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conference Pillars */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">{t('pillarsTitle')}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                <div className={`h-2 bg-gradient-to-r ${pillar.color}`}></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-yellow-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">{t('testimonialsTitle')}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-elegant hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <div className="text-4xl text-yellow-500 mb-4">"</div>
                    <p className="text-muted-foreground italic leading-relaxed mb-6">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      <div className="text-sm text-yellow-600">{testimonial.country}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Our Partners</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Proud to collaborate with leading institutions across the Middle East and Africa
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="gradient-gold text-black border-yellow-500 hover:bg-yellow-600 px-8 py-4 font-semibold"
            >
              {t('becomePartner')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-display font-bold mb-4">
                AAMEA <span className="text-yellow-400">2026</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Reconnect. Reimagine. Rebuild. Reignite. Join us in Kigali for the most impactful AIESEC alumni conference in the MEA region.
              </p>
              <div className="flex gap-4">
                <Button size="sm" variant="ghost" className="text-white hover:text-yellow-400 hover:bg-white/10" onClick={() => window.open('https://www.linkedin.com/company/110659044', '_blank')}>
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-yellow-400 hover:bg-white/10" onClick={() => window.open('https://www.instagram.com/aameaconference', '_blank')}>
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-yellow-400 hover:bg-white/10" onClick={() => window.open('https://web.facebook.com/profile.php?id=61585790395595', '_blank')}>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-300 hover:text-yellow-400 transition-colors">{t('home')}</Link>
                <Link to="/partners" className="block text-gray-300 hover:text-yellow-400 transition-colors">{t('partners')}</Link>
                <Link to="/contact" className="block text-gray-300 hover:text-yellow-400 transition-colors">{t('contact')}</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>aameaconference@gmail.com</p>
                <p>+256 758 522789</p>
                <p>+250 786 576 440</p>
                <p>Kigali, Rwanda</p>
                <p>Mon–Fri, 9:00–17:00 GMT</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>{t('allRightsReserved')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;