import React from "react";
import Hero from "../Components/Home/Hero";
import TimelineSection from "../Components/Home/TimelineSection";
import InternshipPromoSection from "../Components/Home/InternshipPromoSection";
import ScrollingMarquee from "../Components/Home/ScrollingMarquee";
import CaseStudySection from "../Components/Home/CaseStudySection";
import AwardsSection from "../Components/Home/AwardsSection";
import TestimonialSection from "../Components/Home/TestimonialSection";
import TeamSection from "../Components/Home/TeamSection";
import RecentNewsSection from "../Components/Home/RecentNewsSection";
import EmailSubscription from "../Components/Home/EmailSubscription";
import ContactForm from "../Components/Home/ContactForm";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <TimelineSection></TimelineSection>
      <InternshipPromoSection></InternshipPromoSection>
      <ScrollingMarquee></ScrollingMarquee>
      <TestimonialSection></TestimonialSection>
      <CaseStudySection></CaseStudySection>
      <TeamSection></TeamSection>
      <AwardsSection></AwardsSection>
      <ContactForm></ContactForm>
      <RecentNewsSection></RecentNewsSection>
      <EmailSubscription></EmailSubscription>
    </div>
  );
};

export default Home;
