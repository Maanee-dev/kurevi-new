import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar as CalendarIcon, Clock as ClockIcon, Send, X, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomCalendar = ({ selectedDate, onSelect }: { selectedDate: string; onSelect: (date: string) => void }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const totalDays = daysInMonth(year, month);
  const startDay = firstDayOfMonth(year, month);

  const days = [];
  for (let i = 0; i < startDay; i++) days.push(null);
  for (let i = 1; i <= totalDays; i++) days.push(i);

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const handlePrev = () => setCurrentMonth(new Date(year, month - 1));
  const handleNext = () => setCurrentMonth(new Date(year, month + 1));

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    const d = new Date(selectedDate);
    return d.getDate() === day && d.getMonth() === month && d.getFullYear() === year;
  };

  const isToday = (day: number) => {
    const today = new Date();
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  };

  return (
    <div className="bg-zinc-900 border border-white/10 p-4 w-full">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-light uppercase tracking-widest">{monthNames[month]} {year}</h4>
        <div className="flex gap-2">
          <button onClick={handlePrev} className="p-1 hover:bg-white/5 transition-colors"><ChevronLeft size={16} /></button>
          <button onClick={handleNext} className="p-1 hover:bg-white/5 transition-colors"><ChevronRight size={16} /></button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map(d => (
          <div key={d} className="text-[10px] text-muted-foreground font-medium">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => (
          <div key={i} className="aspect-square flex items-center justify-center">
            {day && (
              <button
                onClick={() => onSelect(`${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`)}
                className={`w-full h-full text-xs transition-all ${
                  isSelected(day) 
                    ? "bg-white text-black" 
                    : isToday(day)
                      ? "border border-white/20 text-white"
                      : "hover:bg-white/5 text-white/60"
                }`}
              >
                {day}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CustomTimePicker = ({ selectedTime, onSelect }: { selectedTime: string; onSelect: (time: string) => void }) => {
  const times = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00"
  ];

  return (
    <div className="bg-zinc-900 border border-white/10 p-4 w-full h-full overflow-y-auto max-h-[280px] no-scrollbar">
      <h4 className="text-sm font-light uppercase tracking-widest mb-4">Available Slots</h4>
      <div className="grid grid-cols-2 gap-2">
        {times.map(t => (
          <button
            key={t}
            onClick={() => onSelect(t)}
            className={`py-2 px-4 text-xs border transition-all ${
              selectedTime === t
                ? "bg-white border-white text-black"
                : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function RequestMeeting() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    date: "",
    time: "",
    message: ""
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.date || !formData.time) return;
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setIsOpen(false);
        setFormData({ name: "", email: "", company: "", date: "", time: "", message: "" });
      }, 3000);
    }, 1000);
  };

  return (
    <section id="request-meeting" className="py-32 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-display font-light mb-8">Ready to Scale?</h2>
          <p className="text-xl text-muted-foreground font-light mb-12">
            Schedule a 15-minute strategy call with our experts to discuss your digital growth in the Maldives.
          </p>
          <Button 
            onClick={() => setIsOpen(true)}
            size="lg" 
            className="rounded-none px-12 h-16 text-[12px] uppercase tracking-[0.3em] bg-white text-black hover:bg-white/90"
          >
            Request a Meeting
          </Button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setIsOpen(false);
                  setShowCalendar(false);
                  setShowTimePicker(false);
                }}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 p-8 md:p-12 overflow-hidden"
              >
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    setShowCalendar(false);
                    setShowTimePicker(false);
                  }}
                  className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                >
                  <X size={24} strokeWidth={1} />
                </button>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="flex justify-center mb-6">
                      <CheckCircle2 size={64} className="text-white" strokeWidth={1} />
                    </div>
                    <h3 className="text-3xl font-light mb-4">Meeting Requested</h3>
                    <p className="text-muted-foreground font-light">
                      We've received your request. Our team will contact you shortly to confirm the details.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-10">
                      <h3 className="text-3xl font-light mb-2">Strategy Session</h3>
                      <p className="text-muted-foreground font-light">Fill in your details and preferred time.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Full Name</label>
                          <input 
                            required
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/10"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Email Address</label>
                          <input 
                            required
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/10"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2 relative">
                          <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Preferred Date</label>
                          <button
                            type="button"
                            onClick={() => {
                              setShowCalendar(!showCalendar);
                              setShowTimePicker(false);
                            }}
                            className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-3 text-white text-left focus:outline-none focus:border-white/30 transition-colors flex items-center"
                          >
                            <CalendarIcon className="absolute left-4 text-white/20" size={16} />
                            <span className={formData.date ? "text-white" : "text-white/20"}>
                              {formData.date || "Select Date"}
                            </span>
                          </button>
                          
                          <AnimatePresence>
                            {showCalendar && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full left-0 right-0 z-50 mt-2"
                              >
                                <CustomCalendar 
                                  selectedDate={formData.date} 
                                  onSelect={(date) => {
                                    setFormData({...formData, date});
                                    setShowCalendar(false);
                                  }} 
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="space-y-2 relative">
                          <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Preferred Time</label>
                          <button
                            type="button"
                            onClick={() => {
                              setShowTimePicker(!showTimePicker);
                              setShowCalendar(false);
                            }}
                            className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-3 text-white text-left focus:outline-none focus:border-white/30 transition-colors flex items-center"
                          >
                            <ClockIcon className="absolute left-4 text-white/20" size={16} />
                            <span className={formData.time ? "text-white" : "text-white/20"}>
                              {formData.time || "Select Time"}
                            </span>
                          </button>

                          <AnimatePresence>
                            {showTimePicker && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full left-0 right-0 z-50 mt-2"
                              >
                                <CustomTimePicker 
                                  selectedTime={formData.time} 
                                  onSelect={(time) => {
                                    setFormData({...formData, time});
                                    setShowTimePicker(false);
                                  }} 
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Brief Message</label>
                        <textarea 
                          rows={3}
                          placeholder="Tell us about your project..."
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none placeholder:text-white/10"
                        />
                      </div>

                      <Button 
                        type="submit"
                        disabled={!formData.date || !formData.time}
                        className="w-full rounded-none h-14 text-[11px] uppercase tracking-[0.3em] bg-white text-black hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Confirm Request
                        <Send className="ml-3 w-4 h-4" />
                      </Button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
