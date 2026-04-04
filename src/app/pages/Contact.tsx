import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Link2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      t(
        'شكرًا لتواصلك معنا! سنرد عليك قريبًا.',
        'Thank you for contacting us! We will respond soon.'
      )
    );
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1>{t('تواصل معنا', 'Contact Us')}</h1>
          <p>{t('نحن هنا للإجابة على استفساراتكم', 'We are here to answer your inquiries')}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Form Card */}
          <div className="contact-form-card">
            <h2>{t('أرسل لنا رسالة', 'Send Us a Message')}</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t('الاسم الكامل', 'Full Name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('أدخل اسمك الكامل', 'Enter your full name')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('البريد الإلكتروني', 'Email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t('أدخل بريدك الإلكتروني', 'Enter your email')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t('رقم الهاتف', 'Phone Number')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder={t('أدخل رقم هاتفك', 'Enter your phone number')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('الموضوع', 'Subject')}</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t('اختر الموضوع', 'Select Subject')}</option>
                  <option value="general">{t('استفسار عام', 'General Inquiry')}</option>
                  <option value="products">{t('استفسار عن المنتجات', 'Product Inquiry')}</option>
                  <option value="partnership">{t('فرص الشراكة', 'Partnership Opportunities')}</option>
                  <option value="complaint">{t('شكوى', 'Complaint')}</option>
                  <option value="other">{t('أخرى', 'Other')}</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('رسالتك', 'Your Message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={t('اكتب رسالتك هنا...', 'Write your message here...')}
                />
              </div>

              <button type="submit" className="submit-button">
                {t('إرسال الرسالة', 'Send Message')}
              </button>
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="contact-info-card">
            <h2>{t('معلومات التواصل', 'Contact Information')}</h2>

            <div className="info-item">
              <div className="info-icon modern-icon-large icon-primary"><MapPin /></div>
              <div className="info-content">
                <h4>{t('العنوان', 'Address')}</h4>
                <p>{t('طريق الملك فهد، حي الملقا، الرياض، المملكة العربية السعودية', 'King Fahd Road, Al Malqa, Riyadh, Saudi Arabia')}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon modern-icon-large icon-success"><Phone /></div>
              <div className="info-content">
                <h4>{t('الهاتف', 'Phone')}</h4>
                <p>+966 11 XXX XXXX</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon modern-icon-large icon-accent"><Mail /></div>
              <div className="info-content">
                <h4>{t('البريد الإلكتروني', 'Email')}</h4>
                <p>info@shaila.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon modern-icon-large icon-secondary"><Clock /></div>
              <div className="info-content">
                <h4>{t('ساعات العمل', 'Working Hours')}</h4>
                <p>{t('السبت - الخميس: 8:00 ص - 5:00 م', 'Saturday - Thursday: 8:00 AM - 5:00 PM')}</p>
              </div>
            </div>

            <div className="social-links">
              <h4>{t('تابعنا', 'Follow Us')}</h4>
              <div className="social-icons">
                <a href="#" className="social-icon modern-icon-large" aria-label="Facebook"><Facebook /></a>
                <a href="#" className="social-icon modern-icon-large" aria-label="Instagram"><Instagram /></a>
                <a href="#" className="social-icon modern-icon-large" aria-label="Twitter"><Twitter /></a>
                <a href="#" className="social-icon modern-icon-large" aria-label="LinkedIn"><Link2 /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};