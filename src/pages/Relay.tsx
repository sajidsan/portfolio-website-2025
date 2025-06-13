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




export default function RelayPage() {
    return (
      <div>
        <ImageFullBleedHero
            imageUrl="/images/relay-illustrations-flexibleUI.gif"
            bgHex="#EEF0FF"
            >
            
        </ImageFullBleedHero>
        <ProjectIntro 
                    title="Relay"
                    period="2014 - 2015"
                    focus="Product Design and Strategy"
                    summary="At Therachat, I guided our team through 6 months of design sprints, helped us find a new product direction, and lead the design of our mobile and webapps from the ground up."
                    imageUrl="/images/relay-illustration-workflow.png"
                    href="#"
                    >
        
        </ProjectIntro>
        <TextAndTitle
            title="Approach"
            text="The existing product was a collection of UI development tools designed to help resolve the handoff headaches between designers and developers. Unfortunately, the product itself had an unclear value proposition, which led to unclear workflows.
            Articulating these challenges helped us articulate our approach."
            >

        </TextAndTitle>

        <ImagesSideBySideBySide
            imageUrl1="/images/relay-approach-1.png"
            imageUrl2="/images/relay-approach-2.png"
            imageUrl3="/images/relay-approach-3.png"
            >
        </ImagesSideBySideBySide>
        <ImagesSideBySideBySide
            imageUrl1="/images/relay-RR-principles-01.png"
            imageUrl2="/images/relay-RR-principles-02.png"
            imageUrl3="/images/relay-RR-principles-03.png"
            >
        </ImagesSideBySideBySide>
        <ImagesSideBySideBySide
            imageUrl1="/images/relay-RR-principles-04.png"
            imageUrl2="/images/relay-RR-principles-05.png"
            imageUrl3="/images/relay-RR-principles-06.png"
            >
        </ImagesSideBySideBySide>
        <TextAndTitle
            title="Story First, Systems Second"
            text="Relay was confusing for users. Until we nailed the metaphor. I helped frame it not as a tool, but a design-to-code bridge. That shift gave teams a shared language and gave the product a reason to exist."
            >

        </TextAndTitle>

        <ImagesSideBySideBySide
            imageUrl1="/images/relay-illustrations-flexibleUI.gif"
            imageUrl2="/images/relay-illustration-designToCode.gif"
            imageUrl3="/images/relay-illustration-data.gif"
            >
        </ImagesSideBySideBySide>

        <LargeImage
            imageUrl="/images/relay-video-animations-optimize.gif"
            variant="rounded"
            >
        </LargeImage>

        <TextAndTitle
            title="Drawing the Box, Then Filling It"
            text="We had to make something real out of a fuzzy prototype. I scoped v1 by carving out a narrow but clear slice—just enough to test, just enough to teach. Constraints became our canvas."
            >

        </TextAndTitle>
        
        <LargeImage
            imageUrl="/images/relay-UI-designTab.png"
            variant="rounded"
            >
        </LargeImage>

        <LargeImage
            imageUrl="/images/relay-UI-evaluateTab.png"
            variant="rounded"
            >
        </LargeImage>
        <LargeVideo
            videoUrl="/videos/coCreation-workshop-blurred.mp4"
            variant="rounded"
            overlayText="The original footage has been blurred to protect the privacy of research participants."
        >
            
        </LargeVideo>
        
    </div>

    );
  }