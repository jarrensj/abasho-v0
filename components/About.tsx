import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div id='about-container'>
      <h2 className='text-4xl'>ABASHO MEANS HUG</h2>
      <p>
        Abasho is a collective of web3 enthusiasts whose main goal is to assist
        upcoming artists in sharing their talents with the world.
      </p>
      <p>
        Built on a foundation of love and positivity, the word "Abasho" comes
        from the word Abrazo (hug in Spanish). Sometimes children struggle with
        the letters R and Z while learning Spanish so they say “abasho” when
        they want a hug.
      </p>
      <p>
        The project was originally created by artist & developer @cvasqxz as a
        gift to supporters of a previous project. Since then it has snowballed
        into a true movement; A movement to spread positivity and joy through
        unique, curated collections from upcoming artists, to the NFT space and
        beyond.
      </p>
      <p>
        Abasho itself is a charming 250 piece cc0 collection with 0% royalties.
        All curated collections from our featured artists will be less than or
        equal to this same size. Each Abasho holder is able to vote on which
        artists are featured, and claim one or more items in each new limited
        collection. Abasho is also home to Alphabasho, an elite alpha group that
        works collaboratively to deliver value to the project through NFT
        research.
      </p>
      <Link href='https://opensea.io/collection/the-lost-astronauts-abasho'>
        <Image
          src='/astro2.png'
          alt='“Lost Astronaut #143” by Abasho Collective artist Ken Kelleher'
          width={500}
          height={500}
        />
      </Link>
    </div>
  );
}
