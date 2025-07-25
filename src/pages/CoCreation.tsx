import { useState } from 'react'
import '@/index.css'
import TextRotate from '@/fancy/components/text/text-rotate'
import VerticalCutReveal from '@/fancy/components/text/vertical-cut-reveal'
import { motion, LayoutGroup } from 'framer-motion'
import ProjectIntro from '@/components/ProjectIntro'
import LargeImage from '@/components/LargeImage'
import ImagesSideBySide from '@/components/ImagesSideBySide'
import ImagesSideBySideBySide from '@/components/ImagesSideBySideBySide'
import ImageFullBleed from '@/components/ImageFullBleed'
import ImageFullBleedHero from '@/components/ImageFullBleedHero'
import TextAndTitle from '@/components/TextAndTitle'
import TextAndImageAndTitle from '@/components/TextAndImageAndTitle'
import TextBlock from '@/components/TextBlock'
import LargeVideo from '@/components/LargeVideo'
import FooterPanels from '@/components/FooterPanels'
const customFooterPanels = [
  {
    title: 'Design to Code',
    imageUrl: '/images/footer-relay.png',
    link: '/relay',
  },
  {
    title: 'Product',
    imageUrl: '/images/footer-therachat.png',
    link: '/therachat',
  },
  {
    title: 'Research',
    imageUrl: '/images/footer-yResearch.png',
    link: '/yahooResearch',
  },
]




export default function CoCreationPage() {
    return (
      <div>
        <ImageFullBleedHero
            imageUrl="/images/coCreation-mocks-1.png"
            bgHex="#EEF0FF"
            >
            
        </ImageFullBleedHero>
        <ProjectIntro 
                    title="InsightUX"
                    period="2023"
                    focus="Product Design and Strategy"
                    summary="In the spring 2023, InsightUX, a storied strategic design lab, had to adapt to organizational changes that left us a much smaller team. To remain impactful, we retooled to work with fast-moving product teams, proving our ability to accelerate value delivery to end users."
                    imageUrl="/images/logo-insightUX.png"
                    href="#"
                    >
        
        </ProjectIntro>
        <TextAndTitle
            title="Approach"
            text="The existing product was a collection of UI development tools designed to help resolve the handoff headaches between designers and developers. Unfortunately, the product itself had an unclear value proposition, which led to unclear workflows.
            Articulating these challenges helped us articulate our approach."
            >

        </TextAndTitle>

        <LargeImage
            imageUrl="/images/coCreation-bardAndGemini.png"
            variant="rounded"
            >
        </LargeImage>
        <LargeImage
            imageUrl="/images/coCreation-resourcePlanning.png"
            variant="rounded"
            >
        </LargeImage>
        <LargeImage
            imageUrl="/images/coCreation-timeline.png"
            variant="rounded"
            >
        </LargeImage>

        <LargeVideo
            videoUrl="/videos/coCreation-workshop-blurred.mp4"
            variant="rounded"
            overlayText="The original footage has been blurred to protect the privacy of research participants."
        >
            
        </LargeVideo>
        <LargeImage
            imageUrl="/images/coCreation-mocks-1.png"
            variant="rounded"
            >
        </LargeImage>
        <LargeImage
            imageUrl="/images/coCreation-mocks-2.png"
            variant="rounded"
            >
        </LargeImage>
        <LargeImage
            imageUrl="/images/coCreation-organizingConcepts.png"
            variant="rounded"
            >
        </LargeImage>
        <FooterPanels panels={customFooterPanels} />

        
    </div>

    );
  }