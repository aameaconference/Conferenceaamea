import React from 'react';
import { ArrowRight, Download, CheckCircle, Users, Building, Award, Globe, Star, Mail, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';

const Partners = () => {
  const { t } = useLanguage();

  const partnershipLevels = [
    {
      name: 'Platinum',
      price: '$50,000',
      color: 'from-gray-400 to-gray-600',
      benefits: [
        'Premium booth space (6x6m)',
        'Opening ceremony speaking slot (10 min)',
        'Logo on all conference materials',
        'Full-page ad in delegate booklet',
        '10 complimentary delegate passes',
        'VIP networking dinner invitation',
        'Post-event attendee contact list',
        'Social media promotion (50+ posts)'
      ]
    },
    {
      name: 'Gold',
      price: '$30,000',
      color: 'from-yellow-400 to-yellow-600',
      benefits: [
        'Standard booth space (4x4m)',
        'Panel discussion participation',
        'Logo on conference materials',
        'Half-page ad in delegate booklet',
        '6 complimentary delegate passes',
        'Welcome reception invitation',
        'Digital attendee directory access',
        'Social media promotion (25+ posts)'
      ]
    },
    {
      name: 'Silver',
      price: '$15,000',
      color: 'from-gray-300 to-gray-500',
      benefits: [
        'Shared exhibition space',
        'Workshop hosting opportunity',
        'Logo on website and signage',
        'Quarter-page ad in delegate booklet',
        '3 complimentary delegate passes',
        'Networking lunch invitation',
        'Conference proceedings access',
        'Social media promotion (10+ posts)'
      ]
    },
    {
      name: 'Community',
      price: '$5,000',
      color: 'from-green-400 to-green-600',
      benefits: [
        'Logo on website',
        'Promotional materials distribution',
        '1 complimentary delegate pass',
        'Digital conference materials',
        'Networking opportunities',
        'Certificate of partnership'
      ]
    }
  ];

  const selectionSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete our partnership application form with your organization details and preferred partnership level.'
    },
    {
      step: 2,
      title: 'Team Review',
      description: 'Our partnership team reviews your application and contacts you within 5 business days.'
    },
    {
      step: 3,
      title: 'Contract Signature',
      description: 'Upon approval, we finalize the partnership agreement and payment terms.'
    },
    {
      step: 4,
      title: 'Conference Preparation',
      description: 'We work together to maximize your presence and impact at the conference.'
    }
  ];

  const partnerTestimonials = [
    {
      quote: "Partnering with AA-MEA 2024 was transformational for our regional expansion. The quality of connections and business opportunities exceeded our expectations.",
      author: "Jennifer Okafor",
      position: "Regional Director",
      company: "African Innovation Fund",
      image: "https://images.unsplash.com/photo-1573164574511-73c773193279?w=400&auto=format&fit=crop&q=80"
    },
    {
      quote: "The partnership provided unparalleled access to decision-makers across the MEA region. Our investment in the conference delivered measurable ROI within months.",
      author: "Ahmed Al-Mahmoud",
      position: "CEO",
      company: "MENA Tech Ventures",
      image: "https://images.unsplash.com/photo-1636293235717-7895bf07abc8?w=400&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="partners" />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1573164574511-73c773193279?w=1920&auto=format&fit=crop&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-hero mb-6">
              {t('partnersTitle')}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-12 max-w-4xl mx-auto opacity-90">
              {t('partnershipIntro')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="gradient-gold text-black font-semibold px-8 py-4 text-lg shadow-gold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://drive.google.com/drive/folders/14pInzd1LZMAd8WIW8XRHYWFnDIB-iInw?usp=sharing', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                {t('downloadProposal')}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                {t('applyPartner')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">{t('whyPartnerTitle')}</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('whyPartnerDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-elegant hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-6 gradient-gold rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-card-title mb-4">500+ Influential Alumni</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect with AIESEC alumni who are now CEOs, entrepreneurs, and leaders across 30+ countries in the MEA region.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 shadow-elegant hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-6 gradient-gold rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-card-title mb-4">Regional Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gain visibility across the fastest-growing economic region, with direct access to emerging markets and opportunities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 shadow-elegant hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-6 gradient-gold rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-card-title mb-4">Measurable ROI</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Previous partners report 300% increase in regional partnerships and 150% growth in brand recognition within 12 months.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="gradient-gold text-black font-semibold px-8 py-4 text-lg shadow-gold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t('becomePartnerCTA')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Levels */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Partnership Levels</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the partnership level that best aligns with your organization's goals and budget
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipLevels.map((level, index) => (
              <Card key={index} className="relative overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`h-2 bg-gradient-to-r ${level.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-display">{level.name}</CardTitle>
                  <div className="text-3xl font-bold text-yellow-600 mt-2">{level.price}</div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 gradient-gold text-black font-semibold hover:shadow-lg transition-all duration-300"
                    size="sm"
                  >
                    Select {level.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Partnership Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process ensures a smooth partnership experience from application to conference day
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {selectionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 gradient-gold rounded-full flex items-center justify-center text-black font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-display font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">What Our Partners Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from organizations that have experienced the value of partnering with AA-MEA
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partnerTestimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 shadow-elegant hover:shadow-xl transition-all duration-300">
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
                      <div className="text-sm text-yellow-600">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-section-title mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl mb-12 opacity-90">
            Join leading organizations in shaping the future of the Middle East and Africa region
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-gold text-black font-semibold px-8 py-4 text-lg shadow-gold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              {t('downloadProposal')}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t('applyPartner')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-display font-bold mb-4">
                AAMEA <span className="text-yellow-400">2026</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Reconnect. Reimagine. Rebuild. Reignite. Join us in Kigali for the most impactful AIESEC alumni conference in the MEA region.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/" className="block text-gray-300 hover:text-yellow-400 transition-colors">{t('home')}</a>
                <a href="/partners" className="block text-gray-300 hover:text-yellow-400 transition-colors">{t('partners')}</a>
                <a href="/contact" className="block text-gray-300 hover:text-yellow-400 transition-colors">{t('contact')}</a>
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

export default Partners;