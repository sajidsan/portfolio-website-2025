import { useState } from 'react'
import '@/index.css'
import TextRotate from '@/fancy/components/text/text-rotate'
import VerticalCutReveal from '@/fancy/components/text/vertical-cut-reveal'
import { motion, LayoutGroup } from 'framer-motion'
import ProjectIntro from '@/components/ProjectIntro'
import LargeImage from '@/components/LargeImage'
import ImagesSideBySide from '@/components/ImagesSideBySide'
import ImageFullBleed from '@/components/ImageFullBleed'
import ImageFullBleedHero from '@/components/ImageFullBleedHero'
import TextAndTitle from '@/components/TextAndTitle'
import TextAndImageAndTitle from '@/components/TextAndImageAndTitle'
import TextBlock from '@/components/TextBlock'
import FooterPanels from '@/components/FooterPanels'
const customFooterPanels = [
  {
    title: 'Tool Building',
    imageUrl: '/images/footer-relay.png',
    link: '/relay',
  },
  {
    title: 'Product Design',
    imageUrl: '/images/footer-therachat.png',
    link: '/therachat',
  },
//   {
//     title: 'Research',
//     imageUrl: '/images/footer-yResearch.png',
//     link: '/yahooResearch',
//   },
{
    title: 'Designing for AI',
    imageUrl: '/images/footer-coCreation.png',
    link: '/cocreation',
  },
]




export default function YahooResearchPage() {
    return (
      <div className="">
        <ImageFullBleedHero
            imageUrl="/images/yahooResearch-hero.png">
        </ImageFullBleedHero>
        <ProjectIntro 
                    title="Yahoo!"
                    period="2014 - 2015"
                    focus="Ethnography, Usability, and Design Strategy"
                    summary="In 2012, I joined Yahoo during a summer internship as design strategist which evolved into a fulltime position as a design researcher.

Working as a design researcher at Yahoo allowed me to refine my skills in understanding people, bringing teams together, and evaluating ideas with prototyping and usability testing."

                    href="#"
                    >
        
        </ProjectIntro>
        <LargeImage
            imageUrl="/images/yahooResearch-workshop.png">
        </LargeImage>
        
        
        <TextAndImageAndTitle
            title="Developing User Empathy"
            text="At Yahoo! I had the space to practice ethnography with both users that reality tested our assumptions and inspired us to explore new areas.
While it was easy to walk away from field studies inspired, the more difficult job was building frameworks that could help teams make sense of it all. An understanding of user experience mapping and research analysis helped me do that."
            imageUrl='/images/yahooResearch-frameworks.png'
            >
        </TextAndImageAndTitle>
        <TextAndImageAndTitle
            title="Creating Shared Understanding"
            text="I still believe the most important factor for determing whether a team to deliver the best product they're capable of producing is the ability to develop a group mind. With each project and workshop I ran, I evolved my ability to balance the needs of creating a shared understanding for each team with the intent of generating concepts that had the potential for a strong product market fit."
            imageUrl='/images/yahooResearch-balance.png'
            >
        </TextAndImageAndTitle>
        <ImageFullBleed
            imageUrl="/images/yahooResearch-whiteboard.png">
        </ImageFullBleed>
        
        <TextAndTitle
            title="Evaluating Concepts"
            text="I also was able to work with world-class usability and HCI professionals that have helped me hone my own usability methodology."
            >

        </TextAndTitle>
        <LargeImage
            imageUrl="/images/yahooResearch-usability.png">
        </LargeImage>
        <TextBlock
            text="I developed a workshop that could be adjusted to match the needs of individual project teams."
            >
        </TextBlock>
        <LargeImage
            imageUrl="/images/yahooResearch-i2.png">
        </LargeImage>
        <LargeImage
            imageUrl="/images/yahooResearch-flexible.png">
        </LargeImage>
        <FooterPanels panels={customFooterPanels} />




        
        
    </div>

    );
  }
