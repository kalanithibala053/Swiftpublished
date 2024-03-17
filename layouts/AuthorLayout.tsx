import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 mb-8">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2 ">
            I am a Mobile App Developer (Senior iOS Developer) Enthuaist with expertise in iOS, Swift, SwiftUI, Combine, RxSwift and RxCocoa, CI/CD, Unit and UI Testing.
            <br />
            Participant/Speaker in Conferences and local meetups and Active volunteer in organising events.
            <br />
            {children}


          </div>

        </div>

      </div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          Conferences & Talks
        </h1>
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 pt-5">
          TCA: Path towards Building Better SwiftUI Apps
        </h1>

        <div className="prose max-w-none pb-5 pt-2 dark:prose-invert xl:col-span-2 text-justify">
          Murali pitched about TCA architecture on Pragma Conference 2023 (the first international conference in Italy entirely dedicated to iOS, macOS, watchOS and tvOS Development) lsat October, along with a prestigious lineup of speakers from the community.


        </div>
        <a href="https://www.youtube.com/watch?v=KAF4s4o10p0&ab_channel=%23pragmamark" target="_blank" rel="noopener noreferrer">
          <Image
            src="/pragma.png"
            alt="Swift Team"
            layout="responsive"
            width={400}
            height={400} style={{ borderRadius: '3%' }}
          />
        </a>

        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 pt-5">
          It’s time for Pull Request 2.0
        </h1>
        <div className="prose max-w-none pb-8 pt-2 dark:prose-invert xl:col-span-2 text-justify">

          Murali talking about the best practices, challenges & importance of a good Pull Request in APPDEVCON 2023. Also giving some tips on how to review one, touching upon few automations that can be done to keep us in check.
        </div>
        <a href="https://vimeo.com/850037435" target="_blank" rel="noopener noreferrer">
          <Image
            src="/pull.png"
            alt="Swift Team"
            layout="responsive"
            width={400}
            height={400} style={{ borderRadius: '3%' }}
          />
        </a><div className="prose max-w-none pb-8 pt-2 dark:prose-invert xl:col-span-2 text-justify">
          The same is presented at NSLondon Meetup:
        </div>
        <a href="https://youtu.be/nYbTJersudk" target="_blank" rel="noopener noreferrer">
          <Image
            src="/nslondan.png"
            alt="Swift Team"
            layout="responsive"
            width={400}
            height={400} style={{ borderRadius: '3%' }}
          />
        </a>

        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 pt-5">
          Orgnizing team of SwiftLeeds conference
        </h1>
        <div className="prose max-w-none pb-8 pt-2 dark:prose-invert xl:col-span-2 text-justify">

          Murali is part of the SwiftLeeds conference organising team, one of the best Swift conferences in Europe. He is also one of the few app contributors for its iOS App.
        </div>
        <Image
          src="https://swiftpublished.com/images/about/swifttleedsteam.jpg"
          alt="Swift Team"
          layout="responsive"
          width={400}
          height={400} style={{ borderRadius: '3%' }}
        />
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 pt-5">
          iOS Interview Tips
        </h1>
        <div className="prose max-w-none pb-8 pt-2 dark:prose-invert xl:col-span-2 text-justify">



          Murali along with his ex-teammate <a href="https://twitter.com/__aainajain">@Aaina join</a> <a href="https://twitter.com/__aainajain" target='_blank'>@Alex</a> & <a href="https://twitter.com/sandeepCool77">@Sandeep</a> from <a href="https://insideiosdev.com/">Inside iOS Dev</a> to discuss about how to crack that next iOS Developer Interview in this turbulent market </div>
        <a href="https://podcasts.apple.com/jo/podcast/ios-interview-tips-from-engineering-manager-and/id1231805301?i=1000607267837" target="_blank" rel="noopener noreferrer">
          <Image className='rounded-s'
            src="/ios.png"
            alt="Swift Team"
            layout="responsive"
            width={400}
            height={400} 
          />
        </a>

        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 pt-5">
        Topmate
        </h1>
        <div className="prose max-w-none pb-8 pt-0 dark:prose-invert xl:col-span-2 text-justify">

        Murali helps coach students and professionals on various topics as a topmate mentor, you can book a session to chat with him <a href="https://topmate.io/murali_k">here</a></div>
      
        
      
      </div>
      <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-700">
        <div></div>
<div>
  <h1 className="text-lg font-medium leading-9 tracking-tight text-gray-900 dark:text-gray-100 pt-4 pb-2 text-center">
  The only reason we have come this far, is our community.
        </h1><div><h1 className="text-sl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 pt-1 pb-3 pr-20 text-right">
  ‒ Murali Kathir
        </h1></div></div>
  <div></div>
</div>

    </>
  )
}