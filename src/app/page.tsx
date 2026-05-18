"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="glass-elevated"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Gear",
          id: "categories",
        },
        {
          name: "Mission",
          id: "about",
        },
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "Help",
          id: "faq",
        },
      ]}
      brandName="Elite Fur"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="ELITE FUR"
      description="Premium Care for Your Pets. Zero Harm to the Planet."
      buttons={[
        {
          text: "Shop the Collection",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/still-life-domestic-animal-food-composition_23-2148982408.jpg"
      imageAlt="Elite Fur luxury sustainable pet products"
    />
  </div>

  <div id="categories" data-section="categories">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Elite Pet Gear",
          description: "Handcrafted, high-durability essentials designed for your companion's comfort and your style.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/top-view-pet-accessories_23-2150930411.jpg",
            imageAlt: "Elite Gear",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-red-sweater-lovely-hold-her-adorable-labrador-park-pretty-blonde-woman-having-good-time-outdoor-autumn-with-dog_197531-11931.jpg",
            imageAlt: "Pet Gear",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-domestic-animal-food-composition_23-2148982408.jpg",
          imageAlt: "eco friendly dog leash recycled material",
        },
        {
          title: "Organic Nutrition",
          description: "Pure, ethically sourced nourishment curated for peak health and vitality.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/beautiful-dog-with-nutritious-food_23-2150742754.jpg",
            imageAlt: "Nutrition",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/beautiful-dog-with-nutritious-food_23-2150742780.jpg",
            imageAlt: "Supplements",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/fluffy-toy-texture-close-up_23-2149686862.jpg",
          imageAlt: "eco friendly dog leash recycled material",
        },
        {
          title: "Eco-Friendly Essentials",
          description: "Sustainable everyday goods that make luxury living easy for you and your pets.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-white-mock-up-bottle-with-dispenser-natural-soap-avocado-organic-cosmetics-beauty-concept_169016-9974.jpg",
            imageAlt: "Eco Bedding",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-man-teaching-dog-commands-talking-cute-black-pug-standing-white-background_1258-155290.jpg",
            imageAlt: "Grooming",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-sitting-cafe-outdoors-holding-black-french-bulldog-her-lap-girl-wearing-black-sunglasses-shorts-grey-jacket_1157-50450.jpg",
          imageAlt: "eco friendly dog leash recycled material",
        },
      ]}
      showStepNumbers={false}
      title="Shop Our Curated Collections"
      description="Excellence in sustainability and care."
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Our Sustainability Mission"
      description={[
        "At Elite Fur, we believe that true luxury is responsible. Our dedication to non-toxic materials, carbon-neutral shipping, and reducing your carbon 'paw-print' ensures a healthier planet for generations of pets to come.",
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Organic Salmon Treats",
          price: "$24.99",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-pepernoten-dessert-arrangement_23-2149766598.jpg",
        },
        {
          id: "p2",
          name: "Hemp Luxury Leash",
          price: "$45.00",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-dog-accessories_23-2150959984.jpg",
        },
        {
          id: "p3",
          name: "Vitality Pro Blend",
          price: "$55.00",
          imageSrc: "http://img.b2bpic.net/free-photo/one-big-blank-sealed-package-with-product-presented-top-plastic-box-with-other-packages_346278-585.jpg",
        },
        {
          id: "p4",
          name: "Recycled Luxe Bed",
          price: "$120.00",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-bed-with-gift-cat_23-2147622962.jpg",
        },
        {
          id: "p5",
          name: "Botanical Grooming Kit",
          price: "$38.00",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-bath-concept-with-copy-space_23-2148459863.jpg",
        },
        {
          id: "p6",
          name: "Bamboo Travel Bowl",
          price: "$19.00",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-carrying-dog-bag_52683-123641.jpg",
        },
      ]}
      title="Best Sellers"
      description="Hand-picked essentials loved by owners and pets alike."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "100%",
          description: "Non-Toxic Materials",
        },
        {
          id: "m2",
          value: "0",
          description: "Carbon Footprint",
        },
        {
          id: "m3",
          value: "50k+",
          description: "Happy Pets Served",
        },
      ]}
      title="Our Impact"
      description="Making a difference in the pet world every day."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          date: "Oct 2024",
          title: "Dog Parent",
          quote: "Finally, a brand that marries luxury with actual sustainability. My dog loves the products!",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/handsome-young-man-teaching-dog-commands-talking-cute-black-pug-standing-white-background_1258-155290.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-domestic-animal-food-composition_23-2148982408.jpg",
          imageAlt: "happy pet owner lifestyle portrait",
        },
        {
          id: "2",
          name: "Mark D.",
          date: "Nov 2024",
          title: "Eco Advocate",
          quote: "The quality of the hemp leash is unmatched. Elite Fur changed my perspective on pet goods.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-woman-sitting-cafe-outdoors-holding-black-french-bulldog-her-lap-girl-wearing-black-sunglasses-shorts-grey-jacket_1157-50450.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-dog-with-nutritious-food_23-2150742754.jpg",
          imageAlt: "happy pet owner lifestyle portrait",
        },
        {
          id: "3",
          name: "Elena R.",
          date: "Jan 2025",
          title: "Cat Lover",
          quote: "My cat's coat looks better than ever since switching to their nutrition line.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/woman-showcasing-their-home_23-2151624943.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-pet-accessories_23-2150930411.jpg",
          imageAlt: "happy pet owner lifestyle portrait",
        },
        {
          id: "4",
          name: "David W.",
          date: "Feb 2025",
          title: "Sustainability Buff",
          quote: "Zero-harm products delivered carbon-neutral. It's the standard I wanted for my home.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-old-couple-with-cute-dog_23-2149614017.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-dog-with-nutritious-food_23-2150742780.jpg",
          imageAlt: "happy pet owner lifestyle portrait",
        },
        {
          id: "5",
          name: "Julia H.",
          date: "Mar 2025",
          title: "Premium Pet Owner",
          quote: "Beautifully crafted and genuinely helpful. Couldn't recommend them more.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-with-cute-greyhound-dog_23-2150231835.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/fluffy-toy-texture-close-up_23-2149686862.jpg",
          imageAlt: "happy pet owner lifestyle portrait",
        },
      ]}
      title="Loved by the Elite Family"
      description="See why pet parents choose us for premium, sustainable care."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "Are your materials safe for pets?",
          content: "Absolutely. Every product undergoes strict non-toxic safety testing.",
        },
        {
          id: "f2",
          title: "How is shipping carbon-neutral?",
          content: "We offset all emissions from our logistics through certified green projects.",
        },
        {
          id: "f3",
          title: "Do you offer returns?",
          content: "Yes, we offer hassle-free 30-day returns on all non-perishable goods.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-boy-drawing-with-charcoal-with-dog_23-2148002428.jpg"
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Everything you need to know about Elite Fur products and shipping."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Gear",
              href: "#categories",
            },
            {
              label: "Nutrition",
              href: "#products",
            },
            {
              label: "Essentials",
              href: "#products",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Our Mission",
              href: "#about",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Shipping Policy",
              href: "#",
            },
            {
              label: "Return Policy",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="ELITE FUR"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
