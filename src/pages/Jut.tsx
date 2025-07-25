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
import NextStep from '@/components/NextStep'
import FooterPanels from '@/components/FooterPanels'
const customFooterPanels = [
  {
    title: 'Designing for AI',
    imageUrl: '/images/footer-cocreation.png',
    link: '/coCreation',
  },
  {
    title: 'Product',
    imageUrl: '/images/footer-therachat.png',
    link: '/therachat',
  },
  {
    title: 'Design to Code',
    imageUrl: '/images/footer-relay.png',
    link: '/relay',
  },
]




export default function JutPage() {
    return (
      <div className="">
        <ImageFullBleedHero
            imageUrl="/images/jut-hero-1.png">
        </ImageFullBleedHero>
      <ProjectIntro 
                  title="Jut"
                  period="2014 - 2015"
                  focus="Product Design"
                  summary="In 2013, Jut was founded to help organizations make use of their data by providing them with an environment where they could ingest any source, modify and combine these different sources with a coding language, and make sense of this data through visualizations, notifications, and insights.

"
                  imageUrl="/images/jut-view-editor-cleaned.png"
                  href="#"
                  >
      
        </ProjectIntro>
        <TextAndTitle
            title="The power of a language, the accessibility of a low-code interface"
            text="After getting initial feedback from users on the proof of concept, the team knew one of the challenges would be convincing users to invest in making the switch to a new way of working that had a programming language at its core.

Through conversations with our customers, we saw what our users’ workflow looked like and where the largest breakdowns were."
            >

        </TextAndTitle>
        

        
        <TextAndImageAndTitle
            title=""
            text="One of our key insights was, while traditional GUI's allowed users to become quickly engaged, they often were limited as time goes on. The Jut language would allow for incredible amounts of flexibility but was incredibly difficult for users to become comfortable."
            imageUrl='/images/jut-learningCurve-before.png'
            hideTitle={true}
            >
        </TextAndImageAndTitle>
        <TextBlock
            text="Our approach was to bridge the gap between the limitations of a GUI interface and the flexibility of a language."
            >
        </TextBlock>
        
        <LargeImage
            imageUrl="/images/jut-learningCurve-after.png">
        </LargeImage>
        <TextAndImageAndTitle
            title="Creating an App Ecosystem"
            text="We decided to bridge this gap by filling out Jut’s app ecosystem with two additional apps while connecting the overarching user experience."
            imageUrl='/images/jut-conceptModel.svg'
            
            >
        </TextAndImageAndTitle>
        <ImageFullBleed
                    imageUrl="/images/jut-photo-collab.jpg">
        </ImageFullBleed>
        <TextAndImageAndTitle
            title="Developing a Design System"
            text="We took this opportunity to take a systemic approach to Jut’s apps. By breaking down UI elements into reusable units (and borrowing concepts from Atomic Design), we built out our new apps and reworking our old ones in a way that allowed for our product to have a consistent feel, our code base to remain minimal, and our team to be free to work on the important stuff."
            imageUrl='/images/jut-interactionModel-system.png'
            
            >
        </TextAndImageAndTitle>
        <LargeImage
            imageUrl="/images/jut-interactionModel-implementation.svg">
        
        </LargeImage>
        <TextAndTitle
            title="Building a Culture of Iteration and Evaluation"
            text="A key aspect of introducing users to Jut was making sure that product was inviting and that switching to a new workflow would mean for ten times as much pleasure as pain. What this required was for us to build out an onboarding flow that could introduce our users to jut in an approachable way."
            >

        </TextAndTitle>
        <LargeImage
            imageUrl="/images/jut-onboarding-mocks-1.png">
        
        </LargeImage>
        <LargeImage
            imageUrl="/images/jut-onboarding-mocks-2.png">
        
        </LargeImage>
        <TextAndTitle
            title=""
            text="When it came time to lead to developing out our user interface, I handled the development of our editor and dashboard apps while work on the explorer was handled by the brilliant Tim Sheiner."
            hideTitle={true}
            >

        </TextAndTitle>
        <TextAndTitle
            title=""
            text="Through iteration with our squads and usability testing, we were able to arrive at a solution that helped us move our key kpi’s and, more importantly, expose the team to the benefits of working with an approach that puts our users at the center."
            hideTitle={true}
            >

        </TextAndTitle>
        <LargeImage
            imageUrl="/images/jut-onboarding.png">
        
        </LargeImage>
        <LargeImage
            imageUrl="/images/jut-view-editor.png">
        
        </LargeImage>
        <TextAndTitle
            title="The Jut Data Monster"
            text="I also worked to humanize the product and bring in meaningful instance of delight while working on the more immediate, kpi driven problems. The most successful instance of this was the Creature Graph, a Jut mascot that could give you a quick indication of the health of your incoming data."
            >
        </TextAndTitle>
        <ImagesSideBySideBySide
            imageUrl1="/images/jut-monster-data.gif"
            imageUrl2="/images/jut-monster-error.gif"
            imageUrl3="/images/jut-monster-wait.gif"
            >
        </ImagesSideBySideBySide>

        <FooterPanels panels={customFooterPanels} />
        



        
        
    </div>

    );
  }