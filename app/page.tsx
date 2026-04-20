"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <main className="min-h-screen bg-[#111111] text-[#eee] font-sans selection:bg-yellow-500/30 overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-[#2a2a2a] bg-[#111111]/90 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-widest text-[#F5C400]"
        >
          JH | DEV
        </motion.div>
        <div className="hidden md:flex gap-8 text-[12px] uppercase tracking-widest text-[#aaa] font-bold">
          <a href="#skills" className="hover:text-[#F5C400] transition-colors">Skills</a>
          <a href="#experience" className="hover:text-[#F5C400] transition-colors">Experience</a>
          <a href="#portfolio" className="hover:text-[#F5C400] transition-colors">Portfolio</a>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#F5C400] text-[#111111] px-6 py-2 rounded font-bold text-[12px] uppercase hover:bg-[#E0B000] transition-all"
        >
          Hire me
        </motion.button>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3a3000] bg-[#1f1a00] text-[#F5C400] text-[12px] font-bold mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F5C400] animate-pulse"></span> Available for work
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] mb-6">
            Jerome <br /> <span className="text-[#F5C400] italic font-normal">Honrado</span>
          </h1>
          <p className="text-[#888] text-lg tracking-[0.1em] mb-8 uppercase font-medium">Full Stack Developer</p>
          <p className="text-[#aaa] text-[15px] leading-relaxed max-w-lg mb-12">
            WordPress & Shopify developer and GoHighLevel expert specializing in high-performing websites that merge sleek aesthetics with seamless functionality.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#F5C400] text-[#111111] px-8 py-4 rounded font-bold text-[13px] uppercase hover:scale-105 transition-all">View portfolio</button>
            <button className="border border-[#333] text-white px-8 py-4 rounded font-bold text-[13px] uppercase hover:bg-white/5 transition-all">Download CV</button>
          </div>
        </motion.div>

        {/* PROFILE BENTO CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-3xl p-10 shadow-2xl"
        >
          {/* PROFILE IMAGE INTEGRATION */}
          <div className="w-24 h-24 rounded-full border-4 border-[#F5C400] overflow-hidden mb-8 shadow-[0_0_20px_rgba(245,196,0,0.2)]">
            <Image 
              src="/512x512.jpg"  
              alt="Jerome Honrado"
              width={512}
              height={512}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">Jerome Honrado</h3>
          <p className="text-[#F5C400] text-[13px] mb-8 uppercase tracking-[0.2em] font-bold">Web Designer & Developer</p>
          
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { num: "10+", label: "Years Exp" },
              { num: "4", label: "Agencies" },
              { num: "8+", label: "Projects" }
            ].map((stat, i) => (
              <div key={`hero-stat-${i}`} className="bg-[#232323] p-5 rounded-2xl text-center border border-white/5">
                <div className="text-3xl font-bold text-[#F5C400]">{stat.num}</div>
                <div className="text-[11px] text-[#666] uppercase font-bold mt-1 tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {['WordPress', 'Shopify', 'GHL', 'Elementor', 'UI/UX', 'PHP', 'Laravel'].map((tag, i) => (
              <span key={`hero-tag-${i}`} className="px-4 py-1.5 rounded-lg bg-[#1f1a00] border border-[#3a2f00] text-[#F5C400] text-[11px] font-bold uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#1e1e1e]">
        <motion.div {...fadeInUp} className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[3px] bg-[#F5C400]"></div>
          <h2 className="text-[13px] uppercase tracking-[.3em] text-[#F5C400] font-black">Skills & Tools</h2>
        </motion.div>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            { name: "WordPress", level: "95%", sub: "Custom Design & Architecture" },
            { name: "Shopify", level: "90%", sub: "Theme & E-commerce Dev" },
            { name: "GoHighLevel", level: "88%", sub: "CRM Workflows & Funnels" },
            { name: "UI/UX Design", level: "85%", sub: "Figma / Adobe / Canva" },
            { name: "Fullstack PHP", level: "80%", sub: "Laravel / CodeIgniter / MySQL" },
            { name: "Site Optimization", level: "92%", sub: "Speed (GTMetrix) & SEO" }
          ].map((skill, i) => (
            <motion.div 
              variants={fadeInUp}
              key={`skill-card-${i}`} 
              className="bg-[#1A1A1A] border border-[#2a2a2a] p-8 rounded-2xl hover:border-[#F5C400] transition-all group"
            >
              <p className="text-[15px] font-bold text-white mb-1 group-hover:text-[#F5C400] transition-colors">{skill.name}</p>
              <p className="text-[12px] text-[#666] mb-6">{skill.sub}</p>
              <div className="h-1.5 bg-[#2a2a2a] rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="h-full bg-[#F5C400]" 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* WORK EXPERIENCE SECTION */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#1e1e1e]">
        <motion.div {...fadeInUp} className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[3px] bg-[#F5C400]"></div>
          <h2 className="text-[13px] uppercase tracking-[.3em] text-[#F5C400] font-black">Professional Journey</h2>
        </motion.div>
        <div className="space-y-6">
          {[
            { comp: "Peaks Digital Marketing", period: "Sep 2025 – Feb 2026", role: "WordPress Developer & Designer", desc: "Overseeing website design, mobile optimization, and graphic design with a focus on real estate websites. Lead generation integrations and funnel management." },
            { comp: "QRx Digital", period: "Feb 2020 – Sep 2025", role: "Senior Web Developer / Project Manager", desc: "Team management, website integrations, mobile-responsive design, load speed optimization, user testing, and website security oversight." },
            { comp: "War Horse Agency", period: "Jan 2019 – Jan 2020", role: "WordPress Developer & Designer", desc: "PSD to WordPress transitions, Amazon S3, ClickFunnels, CRM platforms, mobile optimization and GTMetrix performance standards." },
            { comp: "Civil Service Commission", period: "Aug 2015 – May 2018", role: "Fullstack Developer & Designer", desc: "Coding, testing, and implementing system features using PHP frameworks — CodeIgniter, Laravel, and WordPress — with Visual Studio and MySQL." }
          ].map((exp, i) => (
            <motion.div 
              {...fadeInUp}
              key={`experience-item-${i}`} 
              className="bg-[#1A1A1A] border-l-4 border-[#F5C400] p-8 rounded-r-2xl hover:bg-[#1f1f1f] transition-all"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-[#F5C400]">{exp.comp}</h4>
                  <p className="text-[14px] text-white font-medium mt-1">{exp.role}</p>
                </div>
                <span className="text-[11px] font-black text-[#555] bg-black px-3 py-1.5 rounded-lg border border-white/5 uppercase tracking-widest">{exp.period}</span>
              </div>
              <p className="text-[14px] text-[#666] leading-relaxed max-w-4xl">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#1e1e1e]">
        <motion.div {...fadeInUp} className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[3px] bg-[#F5C400]"></div>
          <h2 className="text-[13px] uppercase tracking-[.3em] text-[#F5C400] font-black">Featured Works</h2>
        </motion.div>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { name: "AllStuff420", url: "allstuff420.com", desc: "WooCommerce store with Grade A Pagespeed scores. Crafted with Elementor and precision optimization.", tags: ["WooCommerce", "Elementor"] },
            { name: "420 Cannabis News", url: "420cannews.com", desc: "News platform for US dispensaries. Featuring RankMath SEO, NitroPack, and WPEngine hosting.", tags: ["WPEngine", "RankMath"] },
            { name: "MTLOA Investments", url: "mtloainvestments.com", desc: "Real estate platform with investor listings, Gravity Forms, and Sucuri site protection.", tags: ["Real Estate", "Sucuri"] },
            { name: "Electric2Fun", url: "electric2fun.com", desc: "Electric scooter store in Florida. PCI Compliant with optimized WooCommerce shopping experience.", tags: ["E-commerce", "PCI"] },
            { name: "QueenBee Women's Health", url: "queenbeewomenshealth.com.au", desc: "Medical practice site with appointment booking, company fees, and patient info collection.", tags: ["Healthcare", "Booking"] },
            { name: "Navigating Health", url: "navigatinghealth.com.au", desc: "Healthcare platform for ADHD/Autism. Responsive design with streamlined patient intake.", tags: ["Medical", "Responsive"] }
          ].map((item, i) => (
            <motion.div 
              variants={fadeInUp}
              key={`portfolio-card-${i}`} 
              whileHover={{ y: -10 }}
              className="bg-[#1A1A1A] border border-[#222] rounded-3xl overflow-hidden hover:border-[#F5C400] transition-all group flex flex-col"
            >
              <div className="h-40 bg-[#232323] flex flex-col items-center justify-center relative border-b border-white/5">
                <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-[#F5C400] shadow-[0_0_8px_#F5C400]"></div>
                <p className="text-[12px] text-[#555] font-mono tracking-tighter uppercase">{item.url}</p>
              </div>
              <div className="p-8 flex-grow">
                <h5 className="text-lg font-bold text-white mb-3 group-hover:text-[#F5C400] transition-colors">{item.name}</h5>
                <p className="text-[13px] text-[#666] leading-relaxed mb-6">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t, idx) => (
                    <span key={`port-tag-${i}-${idx}`} className="text-[10px] font-bold text-[#888] bg-black/40 border border-[#2a2a2a] px-3 py-1 rounded-md uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-[#1e1e1e]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1A1A1A] p-8 rounded-3xl text-center border border-white/5">
            <div className="text-[11px] text-[#555] uppercase font-bold tracking-[0.2em] mb-4">Direct Phone</div>
            <div className="text-lg text-[#F5C400] font-bold">+63 905-798-7803</div>
          </div>
          <div className="bg-[#1A1A1A] p-8 rounded-3xl text-center border border-white/5">
            <div className="text-[11px] text-[#555] uppercase font-bold tracking-[0.2em] mb-4">Official Email</div>
            <div className="text-lg text-[#F5C400] font-bold">dev.jeromehonrado@gmail.com</div>
          </div>
          <div className="bg-[#1A1A1A] p-8 rounded-3xl text-center border border-white/5">
            <div className="text-[11px] text-[#555] uppercase font-bold tracking-[0.2em] mb-4">Location</div>
            <div className="text-lg text-[#F5C400] font-bold">Asingan, Pangasinan PH</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-[#1f1f1f] text-center">
        <p className="text-[11px] text-[#444] font-bold tracking-[0.4em] uppercase uppercase">
          Senior Architecture &amp; Engineering by <span className="text-[#F5C400]">Jerome Honrado</span> · 2026
        </p>
      </footer>
    </main>
  );
}