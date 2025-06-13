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




export default function TherachatPage() {
    return (
      <div className="">
        <ImageFullBleedHero
            imageUrl="/images/therachat-heroImage.png">
        </ImageFullBleedHero>
        <ProjectIntro 
                    title="Therachat"
                    period="2014 - 2015"
                    focus="Product Design and Strategy"
                    summary="At Therachat, I guided our team through 6 months of design sprints, helped us find a new product direction, and lead the design of our mobile and webapps from the ground up."
                    imageUrl="/images/therachat-cover.png"
                    href="#"
                    >
        
        </ProjectIntro>
        
        

        
        
        
        <TextAndImageAndTitle
            title="From a data aggregator to a mental health app"
            text="When I joined the Therachat team, they had released a successful health data aggregator that was having a tough time finding a business model. I was brought on to help lead 6 months of design sprints that resulted in a new product direction. This process included weekly research, rapid prototyping, and the development of evaluation criteria to help us decide which concepts to push forward."
            imageUrl='/images/therachat-pivot.png'
            >
        </TextAndImageAndTitle>
        <TextBlock
            text="Over the course of 6 months we ran 14 ethnographic studies and built 27 prototypes that helped us explore 12 different problem spaces."
            >
        </TextBlock>
        <LargeImage
            imageUrl="/images/therachat-prototypes.png">
        </LargeImage>
        <TextAndTitle
            title="A reframe of therapy"
            text="Therachat is built around 1 insight: Therapy isn’t about the sessions but rather the behavior change that they can support. This reframe allowed us to develop a homework tool that would help people going to therapy internalize what they're learning in therapy sessions."
            >

        </TextAndTitle>
        <LargeImage
            imageUrl="/images/therachat-whatIf.png">
        </LargeImage>
        <TextAndTitle
            title="Development of a 2-sided application"
            text="Therachat works by allowing therapists to assign their client homework, helping clients complete those assignments on their mobile devices, and providing clients' and their therapists a shared view of those results."
            >

        </TextAndTitle>
        <LargeImage
            imageUrl="/images/therchat-conceptModel.png">
        </LargeImage>
        <ImageFullBleed
            imageUrl="/images/therchat-flowDiagram.png">
        </ImageFullBleed>
        
        <TextAndTitle
            title="A place for therapists to assign activities and track their clients' progress"
            text="We knew that therapists had small chunks of planning time throughout the week that they would use to prepare for therapy sessions. We wanted to make sure therapists had a safe and secure way to use this time to assign their clients homework and reflect on their progress."
            >

        </TextAndTitle>
        <LargeImage
            imageUrl="/images/therachat-web-10.png">
        </LargeImage>
        <TextAndTitle
            title="A framework for customizable homework"
            text="We looked at the most common homework assignments that therapists assign their clients' and created four activities that therapists could adjust to their needs."
            >

        </TextAndTitle>
        <LargeImage
            imageUrl="/images/therachat-mobile.png">
        </LargeImage>
        <ImagesSideBySide
            imageUrl1="/images/therachat-web-10.png"
            imageUrl2="/images/therachat-web-20.png"
            >
        </ImagesSideBySide>



        
        
    </div>

    );
  }