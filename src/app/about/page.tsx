"use client";

import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { TeamMemberModal } from "@/app/_components/team-member-modal";
import Image from "next/image";
import { useState } from "react";


const teamMembers = [
  {
    name: "Oleg",
    image: "/assets/blog/authors/Oleg.png",
    shortDescription: "Oleg spent 16 years building products, processes, and teams across industries, from mega-projects to intimate apps. Since starting cadence he has been living his dream working on a personally meaningful and beautiful product with people he respects completely, both personally and professionally.",
    extendedDescription: "..."
  },
  {
    name: "Andrea",
    image: "/assets/blog/authors/Andrea.png",
    shortDescription: "Andrea brings human-centered design and film storytelling to the team, translating complex ideas into visual narratives that resonate. With a Master's in Digital Humanities and an MFA in Film, she bridges the technical and the human, making our vision accessible and compelling.",
    extendedDescription: "..."  },
  {
    name: "Bruno",
    image: "/assets/blog/authors/Bruno.png",
      shortDescription: "Bruno combines machine learning expertise with hands-on technical leadership, moving fluidly between software engineering and AI development. He takes research insights and turns them into working systems, ensuring our product is as solid as our ideas.",
    extendedDescription: "..."  
  },
];

export default function About() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (member: typeof teamMembers[0]) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };
  return (
    <main>
      <Container>
        <Intro />
        <article className="mb-2.5 md:mb-32">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-md md:text-lg tracking-wider leading-tight mb-12 text-left uppercase font-normal">
              {/* ABOUT */}
            </h1>
            
            <div className="text-lg leading-relaxed">
              
              <p className="mb-6">
             Cadence is built by three people who know what it's like to step away from traditional work and face the question: how do you structure time when no one else is doing it for you?

Together, we span our 20s, 30s, and 40s, bringing different perspectives on how people actually live and work. In CADENCE we are building a space where people can understand their own rhythms, honor their needs, and build lives that reflect their values rather than someone else's structure.       </p>       
              {/* Authors Section */}
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {teamMembers.map((member) => (
                  <div key={member.name} className="text-left">
                    <div 
                      className="aspect-square mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openModal(member)}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={400}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-normal tracking-wider uppercase mb-2">{member.name}</h3>
                    <p className="text-sm leading-relaxed text-white">
                      {member.shortDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Container>
      
      <TeamMemberModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        member={selectedMember}
      />
    </main>
  );
}