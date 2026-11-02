import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, ArrowRight, Video } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { fadeInUp, staggerContainer, defaultTransition } from '../utils/animations';
import './BookMeeting.css';

const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];

const BookMeeting: React.FC = () => {
  const { isAuthenticated, plan, user, bookMeeting, rescheduleMeeting } = useAuth();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const isReschedule = plan?.meetingBooked || false;

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!plan) return <Navigate to="/choose-plan" replace />;

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    if (isReschedule) { rescheduleMeeting(selectedDate, selectedTime); }
    else { bookMeeting(selectedDate, selectedTime); }
    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <main className="booking-page">
        <div className="booking-page__bg"><div className="booking-page__gradient" /></div>
        <div className="container booking-success">
          <motion.div className="booking-success__card glass-card" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="booking-success__icon"><CheckCircle size={56} /></div>
            <h2>{isReschedule ? 'Meeting Rescheduled!' : 'Meeting Booked Successfully!'}</h2>
            <p>Your consultation is confirmed for <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>.</p>
            <div className="booking-success__details glass-card">
              <div className="booking-success__detail"><Calendar size={18} /><span>{selectedDate}</span></div>
              <div className="booking-success__detail"><Clock size={18} /><span>{selectedTime}</span></div>
              <div className="booking-success__detail"><Video size={18} /><span>Video Conference</span></div>
            </div>
            <p className="booking-success__plan">Plan: <strong>{plan.planName}</strong></p>
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/dashboard')}>Go to Dashboard <ArrowRight size={18} /></button>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="booking-page">
      <div className="booking-page__bg"><div className="booking-page__gradient" /><div className="booking-page__orb booking-page__orb--1" /><div className="booking-page__orb booking-page__orb--2" /></div>
      <div className="container booking-page__container">
        <motion.div className="booking-page__header" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.span className="label" variants={fadeInUp} transition={defaultTransition}>{isReschedule ? 'Reschedule Meeting' : 'Book Meeting'}</motion.span>
          <motion.h1 variants={fadeInUp} transition={defaultTransition}>{isReschedule ? 'Reschedule Your' : 'Schedule Your'} <span className="gradient-text">Consultation</span></motion.h1>
          <motion.p variants={fadeInUp} transition={defaultTransition}>
            {isReschedule
              ? `Your current meeting: ${plan.meetingDate} at ${plan.meetingTime}. Choose a new time below.`
              : `Welcome ${user?.fullName}! Book a meeting to activate your ${plan.planName} plan.`}
          </motion.p>
        </motion.div>
        <motion.form className="booking-form glass-card" onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="booking-form__group">
            <label><Calendar size={18} /> Select Date</label>
            <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} min={minDateStr} required className="form-input" />
          </div>
          <div className="booking-form__group">
            <label><Clock size={18} /> Select Time</label>
            <div className="booking-time-grid">
              {timeSlots.map((t) => (
                <button key={t} type="button" className={`booking-time-slot ${selectedTime === t ? 'booking-time-slot--active' : ''}`} onClick={() => setSelectedTime(t)}>{t}</button>
              ))}
            </div>
          </div>
          <div className="booking-form__summary glass-card">
            <h4>Meeting Summary</h4>
            <div className="booking-summary__row"><span>Plan:</span><strong>{plan.planName}</strong></div>
            <div className="booking-summary__row"><span>Date:</span><strong>{selectedDate || 'Not selected'}</strong></div>
            <div className="booking-summary__row"><span>Time:</span><strong>{selectedTime || 'Not selected'}</strong></div>
            <div className="booking-summary__row"><span>Type:</span><strong>Video Conference</strong></div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg booking-form__submit" disabled={!selectedDate || !selectedTime}>
            {isReschedule ? 'Reschedule Meeting' : 'Confirm Meeting'} <ArrowRight size={18} />
          </button>
        </motion.form>
      </div>
    </main>
  );
};

export default BookMeeting;
